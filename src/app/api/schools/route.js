import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const document = db
      .prepare("SELECT name, pdf_file FROM syllabus WHERE id = ?")
      .get(2);

    if (!document || !document.pdf_file) {
      return NextResponse.json(
        { success: false, message: "Syllabus PDF not found for ID 2" },
        { status: 404 }
      );
    }

    const pdf = Buffer.from(document.pdf_file);

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="syllabus.pdf"',
        "Content-Length": String(pdf.length),
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Syllabus PDF Error:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}