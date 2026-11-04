import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const classes = db
      .prepare("SELECT id, name FROM Class ORDER BY id")
      .all();

    return NextResponse.json({
      success: true,
      total: classes.length,
      classes,
    });
  } catch (error) {
    console.error("GET /api/classes ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}