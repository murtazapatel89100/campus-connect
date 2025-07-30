'use client';

import React from 'react';
import Sidebar from '@/Pages/Dashboard/Sidebar';
import DashboardCard from '@/Pages/Dashboard/DashboardCard';
import DashboardGrid from '@/Pages/Dashboard/DashboardGrid';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#F3E7DD] overflow-hidden">
      {/* Sidebar (fixed width) */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-auto p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-6">
          <DashboardCard />
          <DashboardGrid />

          {/* Placeholder for other rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(140px,_auto)]">
            <div className="bg-white/40 rounded-[14px] h-[180px]"></div>
            <div className="bg-white/40 rounded-[14px] h-[180px]"></div>
            <div className="bg-white/40 rounded-[14px] h-[180px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
