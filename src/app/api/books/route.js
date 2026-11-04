
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const books = db
      .prepare("SELECT id, sname, Class FROM Book ORDER BY id DESC")
      .all();

    return NextResponse.json({
      success: true,
      total: books.length,
      books,
    });
  } catch (error) {
    console.error("BOOK API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
