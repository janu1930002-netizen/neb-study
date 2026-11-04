"use client";

import { useEffect, useState, useRef } from "react";

export default function CommonPDFViewer({ type, id, query = {} }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [filename, setFilename] = useState("Loading document...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  // PDF controls
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let objectUrl = null;

    async function loadPDF() {
      try {
        setLoading(true);
        setError("");
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

        // Validate PDF signature
        const signature = await blob.slice(0, 5).text();

        if (signature !== "%PDF-") {
          throw new Error("The server did not return a valid PDF.");
        }

        // Read original filename
        let name = `${type}-${id}.pdf`;

        const disposition = response.headers.get("Content-Disposition");

        if (disposition) {
          const encoded = disposition.match(/filename\*=UTF-8''([^;]+)/i);
          const regular = disposition.match(/filename="?([^";]+)"?/i);

          try {
            if (encoded) {
              name = decodeURIComponent(encoded[1]);
            } else if (regular) {
              name = regular[1];
            }
          } catch {}
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
  }, [
    type,
    id,
    query.className,
    query.subjectName,
    retryCount,
  ]);

  // Zoom controls
  const zoomIn = () => {
    setZoom((previous) => Math.min(previous + 10, 200));
  };

  const zoomOut = () => {
    setZoom((previous) => Math.max(previous - 10, 50));
  };

  const resetZoom = () => {
    setZoom(100);
  };

  // Fullscreen control
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

  // Track fullscreen changes, including Escape key
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

  return (
    <div
      ref={viewerRef}
      className={`flex flex-col bg-gray-100 dark:bg-gray-950 ${
        isFullscreen ? "h-screen w-screen" : "min-h-screen"
      }`}
    >
      {/* PDF Header and Controls */}
      <div className="z-10 flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-gray-300 bg-white px-3 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:px-5">

        {/* PDF Filename */}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold text-gray-800 dark:text-white">
            {filename}
          </h2>
        </div>

        {/* PDF Toolbar */}
        <div className="flex shrink-0 items-center gap-2">

          {/* Zoom Out */}
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 50 || loading || !!error}
            title="Zoom Out"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 text-xl font-bold text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            −
          </button>

          {/* Zoom Percentage / Reset */}
          <button
            type="button"
            onClick={resetZoom}
            disabled={loading || !!error}
            title="Reset Zoom"
            className="min-w-[60px] rounded-lg border border-gray-300 bg-gray-50 px-2 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 disabled:opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            {zoom}%
          </button>

          {/* Zoom In */}
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 200 || loading || !!error}
            title="Zoom In"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 text-xl font-bold text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            +
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            className="flex h-9 items-center gap-2 rounded-lg bg-blue-700 px-3 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            {isFullscreen ? (
              <>
                <span>⛶</span>
                <span className="hidden sm:inline">Exit</span>
              </>
            ) : (
              <>
                <span>⛶</span>
                <span className="hidden sm:inline">Fullscreen</span>
              </>
            )}
          </button>

        </div>
      </div>

      {/* PDF Content */}
      <main className="relative flex-1 overflow-auto bg-gray-200 dark:bg-gray-800">

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[80vh] flex-col items-center justify-center text-gray-600 dark:text-gray-300">
            <div className="mb-3 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-sm font-medium">
              Loading PDF...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex min-h-[80vh] flex-col items-center justify-center p-5 text-center">
            <p className="mb-4 font-medium text-red-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
              className="rounded-lg bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
            >
              Retry
            </button>
          </div>
        )}

        {/* Native Browser PDF Viewer */}
        {pdfUrl && !loading && !error && (
          <div
            className="min-h-full w-full overflow-auto"
            style={{
              minHeight: isFullscreen ? "calc(100vh - 56px)" : "calc(100vh - 56px)",
            }}
          >
            <div
              className="origin-top-left"
              style={{
                width: `${10000 / zoom}%`,
                height: `${10000 / zoom}%`,
                transform: `scale(${zoom / 100})`,
                transformOrigin: "top left",
              }}
            >
              <iframe
                key={pdfUrl}
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title={filename}
                className="h-[calc(100vh-56px)] min-h-[600px] w-full border-0 bg-white"
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}