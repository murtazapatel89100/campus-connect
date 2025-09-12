import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

type AuditPayload = {
  username: string;
  entityId: string;
  environment: string;
  browser: string;
  action: "upload" | "delete";
};

export async function uploadMedia(
  file: string,
  folder: string,
  audit: AuditPayload,
) {
  const result = await cloudinary.uploader.upload(file, { folder });

  await fetch("/api/audit-log", {
    method: "POST",
    body: JSON.stringify({
      ...audit,
      timestamp: new Date().toISOString(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  return result;
}

export async function deleteMedia(publicId: string, audit: AuditPayload) {
  const result = await cloudinary.uploader.destroy(publicId);

  await fetch("/api/audit-log", {
    method: "POST",
    body: JSON.stringify({
      ...audit,
      timestamp: new Date().toISOString(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  return result;
}
