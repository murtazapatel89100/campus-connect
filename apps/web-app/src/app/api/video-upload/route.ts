import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { paramsToSign } = body;

    if (!paramsToSign) {
      return Response.json({ error: "Missing paramsToSign" }, { status: 400 });
    }

    // Ensure the upload is for video
    if (paramsToSign.resource_type !== "video") {
      return Response.json(
        { error: "Invalid resource_type. Only 'video' is allowed." },
        { status: 403 },
      );
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_SECRET!,
    );

    return Response.json({ signature });
  } catch (error) {
    console.error("Error generating video signature:", error);
    return Response.json(
      { error: "Failed to generate video signature" },
      { status: 500 },
    );
  }
}
