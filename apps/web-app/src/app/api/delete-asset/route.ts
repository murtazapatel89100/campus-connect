import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Cloudinary config (uses env vars)
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function POST(req: Request) {
  try {
    const { public_id, resource_type } = await req.json();

    if (!public_id || !resource_type) {
      return NextResponse.json({ success: false, error: "Missing data" }, { status: 400 });
    }

    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type: resource_type === "video" ? "video" : "image",
    });

    if (result.result === "ok" || result.result === "not_found") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: result.result }, { status: 500 });
  } catch (err) {
    console.error("Cloudinary delete error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
