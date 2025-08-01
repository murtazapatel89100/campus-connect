"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="min-h-screen px-8 pt-[100px]">
      <div className="mx-auto max-w-[1323px] bg-[#99908B]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.length === 0 ? (
            <p className="text-center text-xl col-span-full">No assets found.</p>
          ) : (
            assets.map((asset, idx) => (
              <div
                key={idx}
                className="w-[261px] h-[356px] border border-white rounded-[20px] bg-white/10 p-3"
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
                  <span className="text-sm">{asset.public_id}</span>
                </div>
                <div className="bg-white text-black rounded-full mt-2 px-4 py-1 text-[16px]">
                  Type: {asset.resource_type}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
