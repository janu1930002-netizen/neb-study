
import { NextResponse } from "next/server";
import db from "@/lib/db";
import { classTables } from "@/lib/subjectTables";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const className = searchParams.get("className");

    const tableName = classTables[className];

    if (!tableName) {
      return NextResponse.json(
        { success: false, error: "Invalid class" },
        { status: 400 }
      );
    }

    const subjects = db.prepare(
      `SELECT id, name FROM "${tableName}" ORDER BY id`
    ).all();

    return NextResponse.json({
      success: true,
      subjects,
    });

  } catch (error) {
    console.error("Subjects API Error:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
