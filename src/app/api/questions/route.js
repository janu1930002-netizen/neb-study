
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const questions = db
      .prepare(`
        SELECT id, name, Class
        FROM QestionBank
        ORDER BY id DESC
      `)
      .all();

    return NextResponse.json({
      success: true,
      total: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Questions API Error:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
