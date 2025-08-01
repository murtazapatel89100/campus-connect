// src/app/admin/cloudinary/audit-logs/page.tsx

'use client';
import { BiFilter } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

export default function AuditLogsPage() {
  return (
    <div className="bg-[#99908B] min-h-screen px-4 py-10 font-['Poppins'] text-black">
      {/* Filter and Search Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Filter Button */}
        <div className="flex items-center bg-white rounded-[12px] px-4 py-2 w-[435px] h-[62px]">
          <BiFilter className="text-[32px] mr-3" />
          <span className="text-[20px]">Filter</span>
        </div>

        {/* Search Box */}
        <div className="flex items-center bg-white rounded-[20px] px-4 py-2 w-[300px] h-[62px]">
          <FaSearch className="text-[20px] opacity-50 mr-3" />
          <input
            type="text"
            placeholder="Search Logs Here"
            className="bg-transparent outline-none text-[20px] opacity-80 w-full"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-[#C2BEBE] rounded-t-md grid grid-cols-6 text-center py-3 text-[20px] font-normal">
        <div>Username</div>
        <div>Entity ID</div>
        <div>Browser</div>
        <div>Environment</div>
        <div>Timestamp</div>
        <div>Action</div>
      </div>

      {/* Log Entries */}
      <div className="space-y-4">
        {/* Replace this with .map() for real logs */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="bg-[#DAD2C8] rounded-[20px] px-6 py-4 grid grid-cols-6 text-center text-[18px]"
          >
            <div>name</div>
            <div>image_123</div>
            <div>Chrome</div>
            <div>Production</div>
            <div>2025-07-31 18:40</div>
            <div className="flex justify-center gap-3">
              <button title="View">
                <img src="/icons/eye.png" className="w-6 h-6" />
              </button>
              <button title="Delete">
                <img src="/icons/delete.png" className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Clear Logs Button */}
      <div className="flex justify-end mt-10 pr-10">
        <button className="bg-white rounded-md px-6 py-2 font-bold text-[20px] shadow">
          Clear Logs
        </button>
      </div>
    </div>
  );
}
