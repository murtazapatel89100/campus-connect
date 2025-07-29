import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="backdrop-blur-xl bg-[#555555]/40 text-white p-8 rounded-2xl shadow-xl border border-white/20 ring-1 ring-white/10">
        <form action="" className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full rounded-md p-2 bg-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Name of the file</label>
            <input
              type="text"
              required
              className="w-full rounded-md p-2 bg-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#555555]/40 text-white backdrop-blur-md shadow-lg border border-white/20 hover:bg-[#555555]/60 transition duration-200"
            >
              <IoMdCloudUpload height={20} width={20} />
              <p className="text-sm font-medium">Upload File</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
