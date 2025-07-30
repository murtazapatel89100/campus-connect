"use client";

import { CldUploadWidget } from "next-cloudinary";

const Page = () => {
  return (
    <div className="flex items-center font-itim justify-center min-h-screen">
      <CldUploadWidget
        signatureEndpoint="/api/image-upload"
        uploadPreset="signed_preset"
        options={{
          resourceType: "image",
          sources: ["local", "url", "camera"],
          multiple: false,
          clientAllowedFormats: ["jpg", "jpeg", "png", "webp", "avif", "gif"],
        }}
        onSuccess={(result) => {
          console.log("Upload successful!", result);
          alert("Upload successful!");
        }}
      >
        {({ open }) => (
          <button
            className="cursor-pointer backdrop-blur-xl bg-[#555555]/40 text-white p-8 rounded-2xl shadow-xl border border-white/20 ring-1 ring-white/10"
            onClick={() => open()}
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default Page;
