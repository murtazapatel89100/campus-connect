import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function GET() {
  console.log("⏳ Cloudinary config:", {
    name: process.env.CLOUDINARY_CLOUD_NAME,
    key: process.env.CLOUDINARY_API_KEY,
    secret: process.env.CLOUDINARY_API_SECRET ? "***" : undefined,
  });

  try {
    const [images, videos] = await Promise.all([
      cloudinary.search
        .expression('folder:"campus connect" AND resource_type:image')
        .sort_by("created_at", "desc")
        .max_results(100)
        .execute(),
      cloudinary.search
        .expression('folder:"campus connect" AND resource_type:video')
        .sort_by("created_at", "desc")
        .max_results(100)
        .execute(),
    ]);

    const combinedAssets = [...images.resources, ...videos.resources].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    return Response.json({ assets: combinedAssets });
  } catch (err: any) {
    console.error("❌ Cloudinary fetch error:", err.message || err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch assets", details: err.message }),
      { status: 500 }
    );
  }
}
