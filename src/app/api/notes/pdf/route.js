
import { NextResponse } from "next/server";
import db from "@/lib/db";
import { subjectTables } from "@/lib/subjectTables";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const className = searchParams.get("className");
    const subjectName = searchParams.get("subjectName");
    const id = Number(searchParams.get("id"));

    if (
      !className ||
      !subjectName ||
      !Number.isSafeInteger(id) ||
      id <= 0
    ) {
      return NextResponse.json(
        { error: "Invalid PDF request" },
        { status: 400 }
      );
    }

    // Find the correct subject table
    const tableName = subjectTables[className]?.[subjectName];

    if (!tableName) {
      return NextResponse.json(
        { error: "Subject not found" },
        { status: 404 }
      );
    }

    // Get PDF BLOB from SQLite
    const document = db.prepare(
      `SELECT name, pdf_file FROM "${tableName}" WHERE id = ?`
    ).get(id);

    if (!document || !document.pdf_file) {
      return NextResponse.json(
        { error: "PDF document not found" },
        { status: 404 }
      );
    }

    // Convert SQLite BLOB to Buffer
    const pdfBuffer = Buffer.from(document.pdf_file);

    // Return PDF directly to browser
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Content-Length": String(pdfBuffer.length),
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });

  } catch (error) {
    console.error("PDF API Error:", error);

    return NextResponse.json(
      { error: "Unable to open PDF" },
      { status: 500 }
    );
  }
}
