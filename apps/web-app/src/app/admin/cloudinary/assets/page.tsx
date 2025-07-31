'use client';
import { useEffect, useState } from 'react';

export default function ViewAssets() {
  const [assets, setAssets] = useState<any[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const res = await fetch('/api/cloudinary-assets');
      const data = await res.json();
      setAssets(data.assets || []);
    };
    fetchAssets();
  }, []);

  return (
    <div className="min-h-screen bg-[#99908B] font-[Itim] text-black relative">
      {/* Top Navigation */}
      <header className="absolute top-0 left-0 w-full h-[85px] bg-[#848484] flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-6">
          <div className="w-[35.59px] h-[30.8px] bg-black" />
          <h1 className="text-[24px]">Cloudinary Manager</h1>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[22px] bg-black" />
            <span className="text-[24px]">Upload Image</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[21px] h-[26px] bg-black" />
            <span className="text-[24px]">Upload Video</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[31px] h-[28px] bg-black" />
            <span className="text-[24px]">View Assets</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="absolute left-1/2 top-[66px] -translate-x-1/2 w-[1323px] h-[958px] bg-[#99908B] pt-[40px]">
        <div className="w-[1227px] h-[816px] mx-auto rounded-[30px] bg-[rgba(85,85,85,0.3)] backdrop-blur-[2px] p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, idx) => (
            <div
              key={idx}
              className="relative w-[261px] h-[356px] border border-white rounded-[20px] bg-white/10 backdrop-blur-[0.3px] p-3 flex flex-col justify-between"
            >
              <img
                src={asset.secure_url}
                alt={asset.public_id}
                className="w-full h-[220px] object-cover rounded-[10px]"
              />

              <div className="bg-white text-black rounded-[12px] mt-3 p-2 text-[16px] leading-[19px]">
                Public ID: <br />
                <span className="text-sm break-words">{asset.public_id}</span>
              </div>

              <div className="bg-white text-black rounded-full mt-2 px-4 py-1 text-[16px] leading-[19px] w-fit">
                Type: {asset.resource_type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
