import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Outlet } from 'react-router-dom';

export function GlassLayout() {
  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      {/* Decorative animated gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob pointer-events-none" />
      <div className="absolute top-[20%] right-[-20%] w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000 pointer-events-none" />

      <Sidebar />
      <div className="flex-1 flex flex-col z-10 relative">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
