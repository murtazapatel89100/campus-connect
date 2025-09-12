"use client";

import { useEffect, useState } from "react";
import { getBrowserAndOS } from "@/lib/cloudinary/getBrowserOS";
import { FaTrash } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";

export default function ViewAssets() {
  const [assets, setAssets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user, isLoaded } = useUser();

  const username = user?.fullName || "";

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/cloudinary-assets");

        if (!res.ok) {
          throw new Error(`Failed to fetch assets: ${res.status}`);
        }

        const data = await res.json();
        setAssets(data.assets || []);
      } catch (error) {
        console.error("Failed to fetch assets:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch assets",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const handleDelete = async (publicId: string, resourceType: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this asset?",
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
          username: username,
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
      alert("Error deleting asset");
    }
  };

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center col-span-full py-20">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <div className="mt-4 text-white text-lg">Loading assets...</div>
      </div>
    </div>
  );

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="w-[261px] h-[356px] border border-white/30 rounded-[20px] bg-white/5 p-3 animate-pulse">
      <div className="w-full h-[220px] bg-white/20 rounded-[10px]"></div>
      <div className="bg-white/20 rounded-[12px] mt-3 p-2 h-16"></div>
      <div className="bg-white/20 rounded-full mt-2 px-4 py-1 h-8 w-24"></div>
    </div>
  );

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center font-itim justify-center min-h-screen gap-4">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 pt-[100px]">
      <div className="mx-auto max-w-[1323px] bg-[#99908B] p-6 rounded-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Asset Library
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {loading ? (
            // Show skeleton loaders while loading
            <>
              {Array.from({ length: 8 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))}
            </>
          ) : error ? (
            // Show error message
            <div className="text-center text-xl col-span-full">
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 text-red-200">
                <h3 className="text-lg font-semibold mb-2">
                  Error Loading Assets
                </h3>
                <p>{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 bg-red-600 hover:bg-red-700 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : assets.length === 0 ? (
            // Show no assets message only after loading is complete
            <div className="text-center text-xl col-span-full py-20">
              <div className="bg-white/10 rounded-lg p-8 text-white">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="text-xl font-semibold mb-2">No Assets Found</h3>
                <p className="text-white/70">
                  Upload some images or videos to get started!
                </p>
              </div>
            </div>
          ) : (
            // Show assets
            assets.map((asset, idx) => (
              <div
                key={asset.public_id || idx}
                className="w-[261px] h-[356px] border border-white rounded-[20px] bg-white/10 p-3 relative hover:bg-white/15 transition-all duration-200 hover:scale-105 overflow-hidden flex flex-col"
              >
                {/* Media Container */}
                <div className="relative flex-shrink-0">
                  {asset.resource_type === "image" ? (
                    <img
                      src={asset.secure_url}
                      alt={asset.public_id}
                      className="w-full h-[220px] object-cover rounded-[10px]"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      controls
                      src={asset.secure_url}
                      className="w-full h-[220px] object-cover rounded-[10px]"
                    />
                  )}

                  {/* Delete Button - positioned over media */}
                  <button
                    onClick={() =>
                      handleDelete(asset.public_id, asset.resource_type)
                    }
                    className="absolute top-2 right-2 bg-[#555555]/40 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-md hover:bg-red-700 transition-colors duration-200"
                    title="Delete asset"
                  >
                    <FaTrash />
                  </button>
                </div>

                {/* Content Container - takes remaining space */}
                <div className="flex-1 flex flex-col justify-between mt-3 min-h-0">
                  {/* Public ID Container */}
                  <div className="bg-white text-black rounded-[12px] p-2 text-[14px] flex-1 min-h-0">
                    <div className="font-medium">Public ID:</div>
                    <div className="text-xs break-all overflow-hidden text-ellipsis leading-tight">
                      {asset.public_id}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="bg-white text-black rounded-full mt-2 px-3 py-1 text-[14px] text-center flex-shrink-0 w-fit">
                    Type: {asset.resource_type}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Show total count when assets are loaded */}
        {!loading && !error && assets.length > 0 && (
          <div className="text-center mt-6 text-white/70">
            Total assets: {assets.length}
          </div>
        )}
      </div>
    </div>
  );
}
