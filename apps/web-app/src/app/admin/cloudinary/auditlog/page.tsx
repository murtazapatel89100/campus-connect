"use client";

import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch("/api/audit-logs");
      const data = await res.json();
      setLogs(data.logs || []);
      setFilteredLogs(data.logs || []);
    };
    fetchLogs();
  }, []);

  const handleClearLogs = async () => {
    const confirmed = confirm("Are you sure you want to clear all logs?");
    if (!confirmed) return;
    const res = await fetch("/api/audit-logs", { method: "DELETE" });
    if (res.ok) {
      setLogs([]);
      setFilteredLogs([]);
    }
  };

  return (
    <div className="px-8 py-24 font-poppins bg-[#99908B] min-h-screen">
      <div className="flex justify-end mb-6">
        {/* Clear Logs */}
        <button
          onClick={handleClearLogs}
          className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2"
        >
          <BiTrash /> Clear All Logs
        </button>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-2xl p-4 shadow-lg overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#C2BEBE] text-black">
            <tr>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Entity ID</th>
              <th className="px-4 py-3">Browser</th>
              <th className="px-4 py-3">Environment</th>
              <th className="px-4 py-3">Timestamp</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">View</th>
              <th className="px-4 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-600">
                  No logs matched.
                </td>
              </tr>
            ) : (
              filteredLogs.map((log, idx) => (
                <tr
                  key={idx}
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
                    <FaEye className="text-xl cursor-pointer" title="View log" />
                  </td>
                  <td className="px-4 py-3">
                    <BiTrash className="text-xl cursor-pointer" title="Delete log" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
