"use client";

import { CldUploadWidget } from "next-cloudinary";

const Page = () => {
  return (
    <div className="flex items-center font-itim justify-center min-h-screen">
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
