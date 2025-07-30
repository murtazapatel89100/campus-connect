// api/image-sign/route.ts
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

    // Ensure we have the parameters that need to be signed
    if (!paramsToSign) {
      return Response.json({ error: "Missing paramsToSign" }, { status: 400 });
    }

    // Generate signature using the exact parameters sent by the client
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_SECRET!
    );

    return Response.json({
      signature,
    });
  } catch (error) {
    console.error("Error generating signature:", error);
    return Response.json(
      { error: "Failed to generate signature" },
      { status: 500 }
    );
  }
}
