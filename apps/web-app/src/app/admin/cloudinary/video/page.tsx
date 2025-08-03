"use client";

import { CldUploadWidget } from "next-cloudinary";
import { getBrowserAndOS } from "@/lib/cloudinary/getBrowserOS";
const Page = () => {
  const handleAuditLog = async (result: any) => {
    const publicId = result?.info?.public_id;
    if (!publicId) return;

    const payload = {
      username: "dummy_user",
      entityId: publicId,
      environment: process.env.NODE_ENV || "development",
      browser: getBrowserAndOS(navigator.userAgent),
      timestamp: new Date().toISOString(),
      action: "upload",
    };

    console.log("Video audit log payload:", payload);

    await fetch("/api/audit-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div className="flex flex-col items-center font-itim justify-center min-h-screen gap-4">
      <CldUploadWidget
        signatureEndpoint="/api/video-upload"
        uploadPreset="signed_preset"
        options={{
          resourceType: "video",
          sources: ["local", "url", "camera"],
          multiple: false,
          maxFiles: 1,
          clientAllowedFormats: ["mp4", "webm", "mov"],
          maxFileSize: 10 * 1024 * 1024,
        }}
        onSuccess={(result) => {
          console.log("Video upload successful!", result);
          alert("Video uploaded successfully!");
          handleAuditLog(result);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            className="cursor-pointer backdrop-blur-xl bg-[#555555]/40 text-white p-8 rounded-2xl shadow-xl border border-white/20 ring-1 ring-white/10"
            onClick={() => open?.()}
          >
            Upload a Video
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default Page;
