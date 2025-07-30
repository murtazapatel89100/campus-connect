"use client";

import React from "react";
import {
  FaClock,
  FaFileAlt,
  FaChartLine,
  FaCalendarAlt,
  FaUserFriends,
  FaGraduationCap,
} from "react-icons/fa";

export default function DashboardGrid() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Attendance */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[240px] p-6 flex flex-col justify-between shadow transition-transform hover:scale-[1.02]">
          <div className="w-11 h-11 bg-[#70A1E6] rounded-full flex items-center justify-center text-white text-lg">
            <FaClock />
          </div>
          <div>
            <p className="text-[14px] text-[#797979] border-b border-[#797979]/40 mb-1">
              Attendance this month
            </p>
            <h3 className="text-[28px] font-medium text-[#060606]">
              100 / 115 lectures
            </h3>
          </div>
          <p className="text-[15px] text-[#060606]">
            <span className="text-green-600">↑</span> 8% increase from last
            month
          </p>
        </div>

        {/* Assignments */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[240px] p-6 flex flex-col justify-between shadow transition-transform hover:scale-[1.02]">
          <div className="w-11 h-11 bg-[#F0C274] rounded-full flex items-center justify-center text-white text-lg">
            <FaFileAlt />
          </div>
          <div>
            <p className="text-[14px] text-[#797979] border-b border-[#797979]/40 mb-1">
              Assignments this month
            </p>
            <h3 className="text-[28px] font-medium text-[#060606]">8 / 10</h3>
          </div>
          <p className="text-[15px] text-[#060606]">
            <span className="text-red-600">↓</span> 2 assignments remaining
          </p>
        </div>

        {/* Grades */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[240px] p-6 flex flex-col justify-between shadow transition-transform hover:scale-[1.02]">
          <div className="w-11 h-11 bg-[#A3D9A5] rounded-full flex items-center justify-center text-white text-lg">
            <FaChartLine />
          </div>
          <div className="text-4xl font-semibold text-[#060606]">GPA: 8.7</div>
          <div className="text-xs text-gray-500">Last updated: 2 days ago</div>
        </div>

        {/* Schedule */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[240px] p-6 flex flex-col justify-between shadow transition-transform hover:scale-[1.02]">
          <div className="w-11 h-11 bg-[#E6A4EC] rounded-full flex items-center justify-center text-white text-lg">
            <FaCalendarAlt />
          </div>
          <div className="text-[15px] text-gray-800">
            <p className="mb-1">Next Class:</p>
            <p className="text-xl font-bold">AI - 9:00 AM</p>
            <p className="text-xs text-gray-500">Room 305 - Thursday</p>
          </div>
        </div>
      </div>

      {/* Row 2: Grades, Social, Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Grades Chart */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[300px] p-6 shadow transition-transform hover:scale-[1.02]">
          <p className="text-lg font-semibold text-[#060606] mb-2">Grades</p>
          <div className="h-full flex items-center justify-center text-sm text-gray-500">
            GPA Graph / Chart Placeholder
          </div>
        </div>

        {/* Social */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[300px] p-6 shadow transition-transform hover:scale-[1.02]">
          <p className="text-lg font-semibold text-[#060606] mb-2">Social</p>
          <div className="text-sm text-gray-500 mt-4">
            Follow college club accounts and view updates here.
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] h-[300px] p-6 shadow transition-transform hover:scale-[1.02]">
          <p className="text-lg font-semibold text-[#060606] mb-2">Schedule</p>
          <ul className="text-sm text-gray-600 mt-2 list-disc pl-4 space-y-1">
            <li>AI Lecture - 9:00 AM</li>
            <li>DBMS - 11:15 AM</li>
            <li>Math - 2:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Row 3: Events + Club Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events */}

        <div className="lg:col-span-2 bg-white/40 backdrop-blur-md rounded-[14px] p-6 shadow transition-transform hover:scale-[1.02]">
          {/* Title */}
          <h2 className="text-xl font-semibold text-[#060606] mb-4">Events</h2>

          {/* Category Tabs */}
          <div className="flex items-center gap-6 text-m font-medium mb-4 border-b border-gray-200 pb-2">
            <button className="relative text-[#060606]">
              All
              <span className="ml-1 bg-[#E5EDFF] text-[#3563E9] text-[10px] px-2 py-0.5 rounded-full">
                10
              </span>
              <span className="absolute -bottom-[9px] left-0 w-full h-[2px] bg-[#3563E9] rounded"></span>
            </button>
            <button className="text-[#5F5F5F] hover:text-[#060606] transition">
              Cultural
              <span className="ml-1 bg-[#E5EDFF] text-[#3563E9] text-[10px] px-2 py-0.5 rounded-full">
                10
              </span>
            </button>
            <button className="text-[#5F5F5F] hover:text-[#060606] transition">
              Dev
              <span className="ml-1 bg-[#E5EDFF] text-[#3563E9] text-[10px] px-2 py-0.5 rounded-full">
                05
              </span>
            </button>
            <button className="text-[#5F5F5F] hover:text-[#060606] transition">
              Sports
              <span className="ml-1 bg-[#E5EDFF] text-[#3563E9] text-[10px] px-2 py-0.5 rounded-full">
                10
              </span>
            </button>
          </div>

          {/* Events List */}
          <div className="space-y-4 text-base">
            {/* Item 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                <span className="text-[#000000] font-medium text-xl">xxx</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-0.5 rounded-full">
                Approved
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                <span className="text-[#060606] font-medium text-xl">
                  xx xx
                </span>
              </div>
              <span className="bg-red-100 text-red-600 text-xs px-3 py-0.5 rounded-full">
                In review
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                <span className="text-[#060606] font-medium text-xl">
                  x competition
                </span>
              </div>
              <span className="bg-red-100 text-red-600 text-xs px-3 py-0.5 rounded-full">
                In review
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
                <span className="text-[#060606] font-medium text-xl">
                  random xxxx event
                </span>
              </div>
              <span className="bg-orange-100 text-orange-600 text-xs px-3 py-0.5 rounded-full">
                On going
              </span>
            </div>

            {/* Item 5 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                <span className="text-[#060606] font-medium text-xl">xx</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-0.5 rounded-full">
                Approved
              </span>
            </div>
          </div>
        </div>

        {/* Club Activities */}
        <div className="bg-white/40 backdrop-blur-md rounded-[14px] p-6 shadow flex flex-col justify-between h-[350px] transition-transform hover:scale-[1.02]">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold text-[#060606]">
              Club Activities
            </p>

            {/* Filter Dropdown */}
            <div className="flex items-center text-xs px-3 py-1 bg-white rounded-full shadow gap-2 cursor-pointer hover:bg-gray-100 transition">
              <span>Last 3 months</span>
              <img
                src="/icons/dashboard/drop-arrow.svg"
                alt="Dropdown"
                className="w-3 h-3"
              />
            </div>
          </div>

          {/* Body Content */}
          <div className="text-sm text-gray-500 mt-2">
            Activities overview or bar chart can go here.
          </div>
        </div>
      </div>
    </div>
  );
}
