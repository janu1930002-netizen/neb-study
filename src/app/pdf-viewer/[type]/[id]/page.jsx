
import { Suspense } from "react";
import PDFViewerLoader from "@/components/PDFViewerLoader";

const ALLOWED_TYPES = ["notes", "questions", "books", "syllabus"];

async function PDFViewerContent({ params, searchParams }) {
  const { type, id } = await params;
  const query = (await searchParams) || {};

  // Validate document type
  if (!ALLOWED_TYPES.includes(type)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6 dark:bg-gray-950">
        <div className="rounded-xl bg-white p-8 text-center shadow-lg dark:bg-gray-900">
          <h1 className="text-xl font-bold text-red-600">
            Invalid Document Type
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            The requested PDF document type is not supported.
          </p>
        </div>
      </main>
    );
  }

  // Validate document ID
  if (!id || !/^\d+$/.test(id)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6 dark:bg-gray-950">
        <div className="rounded-xl bg-white p-8 text-center shadow-lg dark:bg-gray-900">
          <h1 className="text-xl font-bold text-red-600">
            Invalid Document ID
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Please select a valid PDF document.
          </p>
        </div>
      </main>
    );
  }

  return (
    <PDFViewerLoader
      type={type}
      id={id}
      query={{
        className: query.className || "",
        subjectName: query.subjectName || "",
      }}
    />
  );
}

export default function PDFViewerPage({ params, searchParams }) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
          <div className="text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

            <p className="text-gray-700 dark:text-gray-300">
              Loading NEB STUDY PDF Viewer...
            </p>
          </div>
        </main>
      }
    >
      <PDFViewerContent
        params={params}
        searchParams={searchParams}
      />
    </Suspense>
  );
}
