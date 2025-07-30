'use client';

import React from 'react';


export default function DashboardCard() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Row 1: Dashboard Title + Right Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        {/* Dashboard Title */}
        <h1 className="text-4xl font-semibold text-[#000000] font-albert">
          Dashboard
        </h1>

        {/* Right Controls */}
        <div className="flex items-center gap-5 flex-wrap">
          {/* Search Bar */}
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow border border-gray-300 w-[300px] h-[55px]">
            <img
              src="/icons/dashboard/search.svg"
              alt="Search"
              className="w- h-5 mr-2"
            />
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>

          {/* Bell Icon */}
          <div className="w-13 h-13 bg-white rounded-full flex items-center justify-center shadow">
            <img src="/icons/dashboard/bell.svg" 
            alt="Bell" 
            className="w-8 h-8" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center bg-white rounded-full px-3 py-2 shadow w-[150px] h-[55px]">
            <img
              src="/icons/dashboard/profile.svg"
              alt="Avatar"
              className="w-9 h-9 rounded-full"
            />
            <div className="text-xs pl-2">
              <p className="text-black font-medium">Sapat</p>
              <p className="text-gray-500 text-[11px]">AI & DS (FY)</p>
            </div>
            <img
              src="/icons/dashboard/drop-arrow.svg"
              alt="Dropdown"
              className="w-7 h-7 ml-2"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#d2cfcf] rounded-full" />

      {/* Row 2: Overview / Welcome / Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Overview */}
        <p className="text-3xl font-medium text-[#060606] font-albert">
          Overview
        </p>

        {/* Welcome Text */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-alex text-black text-center sm:text-left">
          Welcome, Mr. User
        </p>

        {/* 30 Days Dropdown */}
        <div className="flex items-center gap-2 px-4 h-[42px] bg-white rounded-full shadow text-sm border border-gray-300 text-[#060606]">
          30 days
          <img src="/icons/dashboard/drop-arrow.svg" alt="Dropdown" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
