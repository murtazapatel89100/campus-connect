'use client';

import React from 'react';
import { FaHome, FaChartBar, FaCalendarAlt, FaPenFancy, FaBook, FaUsers, FaBell, FaPlus } from 'react-icons/fa';

export default function Sidebar() {
  const navItems = [
    { label: 'Dashboard', icon: <FaHome /> },
    { label: 'Activity', icon: <FaChartBar /> },
    { label: 'Schedule', icon: <FaCalendarAlt /> },
    { label: 'Blogs', icon: <FaPenFancy /> },
    { label: 'Assignments', icon: <FaBook /> },
    { label: 'Clubs', icon: <FaUsers /> },
    { label: 'Notification', icon: <FaBell /> },
  ];

  return (
    <aside
      className="hidden md:flex flex-col w-[256px] min-h-screen p-6
      rounded-[28px]
      text-[#242220]
      font-albert
      overflow-hidden
      relative
      border border-[rgba(245,239,235,0.4)]
      shadow-[0px_64px_64px_-32px_rgba(102,37,0,0.56)]
      backdrop-blur-[80px]"
      style={{ backgroundColor: 'rgba(255, 237, 224, 0.56)' }}
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/icons/cc-logo.svg" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-[28px] text-[#E65F2B] font-semibold leading-tight">
          Campus Connect
        </h1>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#432C2C]/10 mb-4" />

      {/* Main Navigation */}
      <div className="mb-4">
        <p className="text-[11px] uppercase font-semibold text-[#242220]/40 tracking-wide mb-2">
          Main
        </p>
        <ul className="space-y-2">
          {navItems.map(({ label, icon }, index) => (
            <li
              key={label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
                ${index === 0
                  ? 'bg-white/30 border border-[#F5EFEB]/50 shadow-inner backdrop-blur-sm text-[#242220] font-medium'
                  : 'hover:bg-[#242220]/10 hover:border-[#F5EFEB]/40 border border-transparent text-[#242220]/70'}`}
            >
              <div className="w-5 h-5 flex items-center justify-center text-[#242220]">
                {icon}
              </div>
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#432C2C]/10 my-4" />

      {/* Messages Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 px-2">
          <p className="text-[11px] uppercase text-[#242220]/40 font-semibold">Messages</p>
          <div className="w-6 h-6 border border-[#242220]/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#242220]/10">
            <FaPlus className="text-[10px] text-[#242220]/50" />
          </div>
        </div>
        <ul className="space-y-2">
          {[
            { name: 'Erik Gunsel', color: '#F2BABA', dot: '#61AD5A' },
            { name: 'Emily Smith', color: '#F2D5BA', dot: '#D39D8A', border: true },
            { name: 'Arthur Adelk', color: '#F2BAE2', dot: '#61AD5A' },
          ].map((msg) => (
            <li
              key={msg.name}
              className="relative flex items-center gap-3 px-4 py-3 rounded-xl border border-transparent hover:bg-[#242220]/5 transition"
            >
              <div
                className={`absolute left-[38px] top-[18px] w-[6px] h-[6px] rounded-full ${
                  msg.border ? 'border border-[#666260]' : ''
                }`}
                style={{ backgroundColor: msg.dot }}
              />
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: msg.color }}
              />
              <span className="text-sm text-[#242220]/70">{msg.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Block */}
      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 rounded-[28px] border border-[#F5EFEB]/20 backdrop-blur-[40px]">
        <h3 className="text-base font-semibold text-[#242220] mb-1">Let’s start!</h3>
        <p className="text-sm text-[#242220]/60 mb-3">
          Creating or adding new tasks couldn’t be easier
        </p>
        <button className="w-full bg-[#E68025] text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-[#d76f1b] transition">
          ➕ Add New Task
        </button>
      </div>
    </aside>
  );
}
