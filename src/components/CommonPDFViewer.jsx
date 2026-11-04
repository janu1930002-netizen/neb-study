
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function CommonPDFViewer({ type, id, query = {} }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [filename, setFilename] = useState("Loading document...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  const [numPages, setNumPages] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewerRef = useRef(null);
  const contentRef = useRef(null);

  // Load PDF from API
  useEffect(() => {
    let cancelled = false;
    let objectUrl = null;

    async function loadPDF() {
      try {
        setLoading(true);
        setError("");
        setNumPages(0);
        setPdfUrl("");
        setFilename("Loading document...");

        let apiUrl = "";

        switch (type) {
          case "notes": {
            const params = new URLSearchParams({
              id: String(id),
              className: String(query.className || ""),
              subjectName: String(query.subjectName || ""),
            });

            apiUrl = `/api/notes/pdf?${params.toString()}`;
            break;
          }

          case "questions":
            apiUrl = `/api/questions/pdf?id=${encodeURIComponent(id)}`;
            break;

          case "books":
            apiUrl = `/api/books/pdf?id=${encodeURIComponent(id)}`;
            break;

          case "syllabus":
            apiUrl = "/api/syllabus";
            break;

          default:
            throw new Error("Invalid document type.");
        }

        const response = await fetch(apiUrl, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          let message = `PDF request failed (${response.status}).`;

          try {
            const data = await response.json();
            message = data.message || data.error || message;
          } catch {}

          throw new Error(message);
        }

        const blob = await response.blob();

        if (!blob.size) {
          throw new Error("PDF file is empty.");
        }

        // Verify PDF signature
        const signature = await blob.slice(0, 5).text();

        if (signature !== "%PDF-") {
          throw new Error("The server did not return a valid PDF.");
        }

        let name = `${type}-${id}.pdf`;

        const disposition = response.headers.get("Content-Disposition");

        if (disposition) {
          const match = disposition.match(/filename="?([^";]+)"?/i);

          if (match) {
            name = match[1];
          }
        }

        if (!name.toLowerCase().endsWith(".pdf")) {
          name += ".pdf";
        }

        objectUrl = URL.createObjectURL(blob);

        if (cancelled) {
          URL.revokeObjectURL(objectUrl);
          return;
        }

        setFilename(name);
        setPdfUrl(objectUrl);
      } catch (err) {
        if (!cancelled) {
          console.error("PDF loading error:", err);
          setError(err.message || "Unable to load PDF.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPDF();

    return () => {
      cancelled = true;

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [type, id, query.className, query.subjectName, retryCount]);

  // Measure available viewer width
  useEffect(() => {
    const element = contentRef.current;

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;

      if (width) {
        setContainerWidth(width);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // PDF loading success
  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setError("");
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    console.error("PDF.js rendering error:", err);
    setError("Unable to render this PDF. Please try again.");
  }, []);

  // Zoom controls
  const zoomIn = () => {
    setZoom((value) => Math.min(value + 10, 200));
  };

  const zoomOut = () => {
    setZoom((value) => Math.max(value - 10, 50));
  };

  const resetZoom = () => {
    setZoom(100);
  };

  // Fullscreen
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await viewerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const pageWidth = containerWidth
    ? Math.max(250, Math.floor((containerWidth - 24) * zoom / 100))
    : undefined;

  return (
    <div
      ref={viewerRef}
      className={`flex flex-col bg-gray-100 dark:bg-gray-950 ${
        isFullscreen ? "h-screen w-screen" : "min-h-screen"
      }`}
    >
      {/* Toolbar */}
      <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-gray-300 bg-white px-3 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:px-5">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold text-gray-800 dark:text-white">
            {filename}
          </h2>

          {numPages > 0 && (
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {numPages} PDF pages
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 50 || loading || !!error}
            className="h-10 w-10 rounded-lg border border-gray-300 bg-gray-100 text-xl font-bold dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            aria-label="Zoom out"
          >
            −
          </button>

          <button
            type="button"
            onClick={resetZoom}
            disabled={loading || !!error}
            className="min-w-16 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm font-semibold dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            title="Reset zoom"
          >
            {zoom}%
          </button>

          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 200 || loading || !!error}
            className="h-10 w-10 rounded-lg border border-gray-300 bg-gray-100 text-xl font-bold dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            aria-label="Zoom in"
          >
            +
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="h-10 rounded-lg bg-blue-700 px-3 text-white hover:bg-blue-800"
            title="Toggle fullscreen"
          >
            ⛶
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <main
        ref={contentRef}
        className="flex-1 overflow-auto bg-gray-200 px-2 py-4 dark:bg-gray-800 sm:px-5"
      >
        {loading && (
          <div className="flex min-h-[70vh] flex-col items-center justify-center">
            <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Loading PDF...
            </p>
          </div>
        )}

        {error && (
          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <p className="mb-4 text-red-600">{error}</p>

            <button
              type="button"
              onClick={() => setRetryCount((value) => value + 1)}
              className="rounded-lg bg-blue-700 px-6 py-3 text-white"
            >
              Retry
            </button>
          </div>
        )}

        {pdfUrl && !error && (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-gray-600 dark:text-white">
                  Rendering PDF pages...
                </p>
              </div>
            }
            className="flex flex-col items-center gap-5"
          >
            {Array.from({ length: numPages }, (_, index) => (
              <div
                key={`page-${index + 1}`}
                className="max-w-full overflow-hidden rounded-sm bg-white shadow-lg"
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  loading={
                    <div className="flex min-h-96 items-center justify-center">
                      Loading page {index + 1}...
                    </div>
                  }
                />
              </div>
            ))}
          </Document>
        )}
      </main>
    </div>
  );
}
