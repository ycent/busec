import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { driveUrl } = await request.json();
    if (!driveUrl) {
      return NextResponse.json({ error: "Missing Google Drive URL" }, { status: 400 });
    }

    // Extract folder ID
    let folderId = "";
    const folderMatch = driveUrl.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    const idMatch = driveUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    
    if (folderMatch) {
      folderId = folderMatch[1];
    } else if (idMatch) {
      folderId = idMatch[1];
    } else {
      // Check if user input is just the ID directly
      if (driveUrl.length >= 25 && driveUrl.length <= 45 && /^[a-zA-Z0-9_-]+$/.test(driveUrl)) {
        folderId = driveUrl;
      } else {
        return NextResponse.json({ error: "Invalid Google Drive URL format" }, { status: 400 });
      }
    }

    console.log("Syncing Drive folder ID:", folderId);

    // Fetch the public sharing page of the folder
    const url = `https://drive.google.com/drive/folders/${folderId}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
      },
    });

    if (!response.ok) {
      return NextResponse.json({ 
        error: `Failed to fetch Google Drive folder. Status: ${response.status}. Please make sure the folder is public and shared with 'Anyone with the link can view'.` 
      }, { status: 400 });
    }

    const html = await response.text();
    
    // Double-safe file ID extraction:
    // 1. Try matching items with data-id (representing visible table/grid items in Drive)
    const dataIdRegex = /data-id="([a-zA-Z0-9_-]{28,40})"/g;
    let fileIds: string[] = [];
    let match;
    while ((match = dataIdRegex.exec(html)) !== null) {
      fileIds.push(match[1]);
    }

    // 2. Fallback to generic regex matching if no data-id elements are found
    if (fileIds.length === 0) {
      const genericRegex = /"1[a-zA-Z0-9_-]{28,40}"/g;
      const genericMatches = html.match(genericRegex);
      if (genericMatches) {
        fileIds = genericMatches.map(m => m.replace(/"/g, ""));
      }
    }
    
    if (fileIds.length === 0) {
      return NextResponse.json({ 
        error: "No files detected in the folder. Please verify the folder is public and contains image files." 
      }, { status: 400 });
    }

    // Deduplicate and filter out the parent folder ID itself
    const uniqueIds = Array.from(new Set(fileIds))
      .filter(id => id !== folderId);

    if (uniqueIds.length === 0) {
      return NextResponse.json({ 
        error: "No images found or folder is restricted. Make sure it contains public files." 
      }, { status: 400 });
    }

    // Generate hotlink-friendly Google User Content URLs (bypasses local CORS/auth restrictions)
    const imageUrls = uniqueIds.map(id => `https://lh3.googleusercontent.com/d/${id}`);

    return NextResponse.json({ 
      success: true, 
      folderId, 
      imageCount: imageUrls.length, 
      images: imageUrls 
    });
  } catch (err: any) {
    console.error("API error during sync:", err);
    return NextResponse.json({ error: err.message || "An unexpected error occurred" }, { status: 500 });
  }
}
