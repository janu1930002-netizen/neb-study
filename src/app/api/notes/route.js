
import { NextResponse } from "next/server";
import db from "@/lib/db";
import { subjectTables } from "@/lib/subjectTables";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const className = searchParams.get("className");
    const subjectName = searchParams.get("subjectName");

    if (!className || !subjectName) {
      return NextResponse.json(
        {
          success: false,
          error: "Class and subject are required",
        },
        { status: 400 }
      );
    }

    // Get the actual SQLite table
    const tableName = subjectTables[className]?.[subjectName];

    if (!tableName) {
      return NextResponse.json(
        {
          success: false,
          error: "Subject not found",
        },
        { status: 404 }
      );
    }

    // Read chapter names
    const notes = db.prepare(
      `SELECT id, name FROM "${tableName}" ORDER BY id`
    ).all();

    return NextResponse.json({
      success: true,
      className,
      subjectName,
      total: notes.length,
      notes,
    });

  } catch (error) {
    console.error("Notes API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
