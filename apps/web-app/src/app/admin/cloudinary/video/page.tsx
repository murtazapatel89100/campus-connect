"use client";

import { CldUploadWidget } from "next-cloudinary";
import { getBrowserAndOS } from "@/lib/cloudinary/getBrowserOS";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialogue/alert-dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
const Page = () => {
  const { user, isLoaded } = useUser();
  const [success, setSuccess] = useState(false);

  const username = user?.fullName || "";

  const handleAuditLog = async (result: any) => {
    const publicId = result?.info?.public_id;
    if (!publicId) return;

    const data = {
      username: username,
      entityId: publicId,
      environment: process.env.NODE_ENV || "development",
      browser: getBrowserAndOS(navigator.userAgent),
      timestamp: new Date().toISOString(),
      action: "upload",
    };

    console.log("Video audit log payload:", data);

    await fetch("/api/audit-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center font-itim justify-center min-h-screen gap-4">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center font-itim justify-center min-h-screen gap-4">
      <AlertDialog open={success} onOpenChange={setSuccess}>
        <AlertDialogContent className="bg-[#555555]/30 backdrop-blur-lg border absolute z-20 border-white/30 shadow-lg text-black rounded-2xl p-10 max-w-sm md:max-w-lg w-full">
          <AlertDialogHeader className="items-center font-albert-sans text-center">
            <AlertDialogTitle className="text-xl font-bold">
              Cloudinary
            </AlertDialogTitle>
            <AlertDialogDescription className="font-medium text-center mt-2">
              Upload Succesful
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-6 font-albert-sans flex justify-center gap-4">
            <AlertDialogCancel
              className="bg-white/20 backdrop-blur-lg border py-1 border-white/30 px-3 cursor-pointer hover:border-white hover:bg-black hover:text-white transition-colors transition-border duration-300 ease-in-out rounded-md"
              onClick={() => setSuccess(false)}
            >
              Okay
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
          setSuccess(true);
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
