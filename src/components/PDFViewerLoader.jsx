
"use client";

import dynamic from "next/dynamic";

const CommonPDFViewer = dynamic(
  () => import("./CommonPDFViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-blue-600">
          Initializing PDF viewer...
        </p>
      </div>
    ),
  }
);

export default function PDFViewerLoader(props) {
  return <CommonPDFViewer {...props} />;
}
