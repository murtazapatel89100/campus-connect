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

    // ✅ Check if the resource_type is image
    if (paramsToSign.resource_type && paramsToSign.resource_type !== "image") {
      return Response.json(
        { error: "Only image uploads are allowed on this endpoint." },
        { status: 403 }
      );
    }

    // ✅ Generate signature
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_SECRET!
    );

    return Response.json({ signature });
  } catch (error) {
    console.error("Error generating signature:", error);
    return Response.json(
      { error: "Failed to generate signature" },
      { status: 500 }
    );
  }
}
