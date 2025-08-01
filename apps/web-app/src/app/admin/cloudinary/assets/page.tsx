"use client";

import { useEffect, useState } from "react";
import { getBrowserAndOS } from "@/lib/cloudinary/getBrowserOS";
export default function ViewAssets() {
  const [assets, setAssets] = useState<any[]>([]);
  

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await fetch("/api/cloudinary-assets");
        const data = await res.json();
        setAssets(data.assets || []);
      } catch (error) {
        console.error("Failed to fetch assets:", error);
      }
    };
    fetchAssets();
  }, []);

  const handleDelete = async (publicId: string, resourceType: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this asset?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch("/api/delete-asset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          public_id: publicId,
          resource_type: resourceType,
        }),
      });

      if (res.ok) {
        alert("Asset deleted successfully");

        const payload = {
          username:"dummy_user",
          entityId: publicId,
          environment: process.env.NODE_ENV || "development",
          browser: getBrowserAndOS(navigator.userAgent),
          timestamp: new Date().toISOString(),
          action: "delete",
        };

        const logRes = await fetch("/api/audit-log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const logData = await logRes.json();
        console.log("Audit log response:", logData);

        if (!logRes.ok) {
          alert("Audit log failed");
        }

        // Update UI
        setAssets((prev) => prev.filter((a) => a.public_id !== publicId));
      } else {
        alert("Failed to delete asset");
      }
    } catch (error) {
      console.error("Error deleting asset:", error);
    }
  };

  return (
    <div className="min-h-screen px-8 pt-[100px]">
      <div className="mx-auto max-w-[1323px] bg-[#99908B]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.length === 0 ? (
            <p className="text-center text-xl col-span-full">
              No assets found.
            </p>
          ) : (
            assets.map((asset, idx) => (
              <div
                key={idx}
                className="w-[261px] h-[356px] border border-white rounded-[20px] bg-white/10 p-3 relative"
              >
                {asset.resource_type === "image" ? (
                  <img
                    src={asset.secure_url}
                    alt={asset.public_id}
                    className="w-full h-[220px] object-cover rounded-[10px]"
                  />
                ) : (
                  <video
                    controls
                    src={asset.secure_url}
                    className="w-full h-[220px] object-cover rounded-[10px]"
                  />
                )}
                <div className="bg-white text-black rounded-[12px] mt-3 p-2 text-[16px]">
                  Public ID: <br />
                  <span className="text-sm break-all">{asset.public_id}</span>
                </div>
                <div className="bg-white text-black rounded-full mt-2 px-4 py-1 text-[16px]">
                  Type: {asset.resource_type}
                </div>

                {/* 🗑 Delete Button */}
                <button
                  onClick={() =>
                    handleDelete(asset.public_id, asset.resource_type)
                  }
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-3 py-1 text-sm shadow-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
