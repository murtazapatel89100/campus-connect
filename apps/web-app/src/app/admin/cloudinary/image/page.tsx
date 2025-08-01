"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useSession } from "next-auth/react";
import { getBrowserAndOS } from "@/lib/cloudinary/getBrowserOS";
const Page = () => {
  const { data: session } = useSession();

  const handleAuditLog = async (result: any) => {
    const publicId = result?.info?.public_id;
    if (!publicId) return;

    const payload = {
      username: session?.user?.name || "dummy_user", // ✅ hardcoded fallback
      entityId: publicId,
      environment: process.env.NODE_ENV || "development",
      browser: getBrowserAndOS(navigator.userAgent),
      timestamp: new Date().toISOString(),
      action: "upload",
    };

    console.log("Sending audit log:", payload);

    await fetch("/api/audit-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div className="flex flex-col items-center font-itim justify-center min-h-screen gap-4">
      <CldUploadWidget
        signatureEndpoint="/api/image-upload"
        uploadPreset="signed_preset"
        options={{
          resourceType: "image",
          sources: ["local", "url", "camera"],
          multiple: false,
          clientAllowedFormats: ["jpg", "jpeg", "png", "webp", "avif", "gif"],
          maxFileSize: 2 * 1024 * 1024,
        }}
        onSuccess={(result) => {
          console.log("Upload successful!", result);
          alert("Upload successful!");
          handleAuditLog(result);
        }}
      >
        {({ open }) => (
          <button
            className="cursor-pointer backdrop-blur-xl bg-[#555555]/40 text-white p-8 rounded-2xl shadow-xl border border-white/20 ring-1 ring-white/10"
            onClick={() => open?.()}
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default Page;
