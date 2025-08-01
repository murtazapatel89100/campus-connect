"use client";

import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<any[]>([]);
  const [selectedLog, setSelectedLog] = useState<any | null>(null);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch("/api/audit-log");
      const data = await res.json();
      setLogs(data.logs || []);
      setFilteredLogs(data.logs || []);
    };
    fetchLogs();
  }, []);

  const handleClearLogs = async () => {
    const confirmed = confirm("Are you sure you want to clear all logs?");
    if (!confirmed) return;

    const res = await fetch("/api/log-delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ deleteAll: true }),
    });

    if (res.ok) {
      setLogs([]);
      setFilteredLogs([]);
    } else {
      alert("Failed to clear all logs");
    }
  };

  const handleDeleteLog = async (logId: string) => {
    const confirmed = confirm("Delete this specific log?");
    if (!confirmed) return;

    const res = await fetch("/api/log-delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: logId }),
    });

    if (res.ok) {
      setLogs((prev) => prev.filter((log) => log._id !== logId));
      setFilteredLogs((prev) => prev.filter((log) => log._id !== logId));
    } else {
      alert("Failed to delete log");
    }
  };

  const getMediaPreview = (log: any) => {
    const ext = log.entityId.split(".").pop()?.toLowerCase();
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const isVideo = ["mp4", "webm", "mov"].includes(ext || "");

    const url = `https://res.cloudinary.com/${cloudName}/${
      isVideo ? "video" : "image"
    }/upload/${log.entityId}`;

    return isVideo ? (
      <video src={url} controls className="w-full rounded-lg" />
    ) : (
      <img src={url} alt="Uploaded asset" className="w-full rounded-lg" />
    );
  };

  return (
    <div className="px-8 py-24 font-poppins bg-[#99908B] min-h-screen">
      <div className="flex justify-end mb-6">
        {/* Clear Logs */}
        <button
          onClick={handleClearLogs}
          className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2 font-itim"
        >
          <BiTrash /> Clear All Logs
        </button>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-2xl p-4 shadow-lg overflow-x-auto">
        <table className="min-w-full text-left font-itim">
          <thead className="bg-[#C2BEBE] text-black">
            <tr>
              <th className="px-4 py-3 rounded-tl-xl">Username</th>
              <th className="px-4 py-3">Entity ID</th>
              <th className="px-4 py-3">Browser</th>
              <th className="px-4 py-3">Environment</th>
              <th className="px-4 py-3">Timestamp</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">View</th>
              <th className="px-4 py-3 rounded-tr-xl">Delete </th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-600">
                  Currently there are no logs available.
                </td>
              </tr>
            ) : (
              filteredLogs.map((log, idx) => (
                <tr
                  key={log._id || idx}
                  className="border-b bg-[#DAD2C8] hover:bg-[#c8c0b6]"
                >
                  <td className="px-4 py-3">{log.username}</td>
                  <td className="px-4 py-3">{log.entityId}</td>
                  <td className="px-4 py-3">{log.browser}</td>
                  <td className="px-4 py-3">{log.environment}</td>
                  <td className="px-4 py-3">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 font-bold">{log.action}</td>
                  <td className="px-4 py-3">
                    <FaEye
                      className="text-xl cursor-pointer"
                      title="View log"
                      onClick={() => setSelectedLog(log)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <BiTrash
                      className="text-xl cursor-pointer"
                      title="Delete log"
                      onClick={() => handleDeleteLog(log._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {selectedLog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-2xl">
              <button
                onClick={() => setSelectedLog(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold mb-4 text-black">
                Log Details
              </h2>

              <div className="space-y-2 text-sm text-black font-itim font-extrabold">
                <p>Username: {selectedLog.username}</p>
                <p>Entity ID: {selectedLog.entityId}</p>
                <p>Browser: {selectedLog.browser}</p>
                <p>Environment: {selectedLog.environment}</p>
                <p>
                  Timestamp: {new Date(selectedLog.timestamp).toLocaleString()}
                </p>
                <p>Action: {selectedLog.action}</p>
              </div>

              <div className="mt-4">{getMediaPreview(selectedLog)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
