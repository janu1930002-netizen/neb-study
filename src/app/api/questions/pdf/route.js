
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    if (!Number.isSafeInteger(id) || id <= 0) {
      return NextResponse.json(
        { success: false, message: "Invalid question ID" },
        { status: 400 }
      );
    }

    const question = db
      .prepare("SELECT name, pdf_file FROM QestionBank WHERE id = ?")
      .get(id);

    if (!question || !question.pdf_file) {
      return NextResponse.json(
        { success: false, message: "Question PDF not found" },
        { status: 404 }
      );
    }

    const pdf = Buffer.from(question.pdf_file);

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="question.pdf"',
        "Content-Length": String(pdf.length),
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Question PDF Error:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
