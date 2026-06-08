import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { stories } = await request.json();
    if (!Array.isArray(stories)) {
      return NextResponse.json({ error: "Invalid stories array" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "src", "lib", "builderStories.json");
    fs.writeFileSync(filePath, JSON.stringify(stories, null, 2), "utf-8");

    console.log("Successfully saved stories to", filePath);
    return NextResponse.json({ success: true, count: stories.length });
  } catch (err: any) {
    console.error("API error during stories save:", err);
    return NextResponse.json({ error: err.message || "An unexpected error occurred" }, { status: 500 });
  }
}
