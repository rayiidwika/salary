"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Briefcase, 
  Users, 
  UserSquare2, 
  Settings2, 
  CalendarCheck, 
  CalendarOff, 
  Wallet,
  CircleDot
} from "lucide-react";

export default function Sidebar() {
  const [isMasterOpen, setIsMasterOpen] = useState(true);

  return (
    <div className="flex h-screen w-64 flex-col bg-[#004d73] text-white fixed">
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00acc1] font-bold text-white shadow-lg">
          S
        </div>
        <span className="text-2xl font-bold tracking-tight">
          Salary<span className="text-[#00acc1]">App</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2 px-4">
        
        {/* Dashboard */}
        <a href="/dashboard" className="flex items-center gap-4 rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20">
          <LayoutDashboard size={22} className="text-[#00acc1]" />
          <span className="font-medium">Dashboard</span>
        </a>

        {/* Master Menu (Dropdown) */}
        <div>
          <button 
            onClick={() => setIsMasterOpen(!isMasterOpen)}
            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all ${
              isMasterOpen ? "border-2 border-white bg-white/10" : "hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-4">
              <Database size={22} />
              <span className="font-medium">Master</span>
            </div>
            {isMasterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {/* Submenu Items */}
          {isMasterOpen && (
            <div className="mt-2 ml-4 border-l border-white/20 pl-4 space-y-1">
              <SubMenuItem href="/divisi" icon={<Building2 size={18} />} label="Divisi"  />
              <SubMenuItem href="/jabatan" icon={<Briefcase size={18} />} label="Jabatan" />
              <SubMenuItem href="/karyawan" icon={<Users size={18} />} label="Karyawan" />
              <SubMenuItem href="/user" icon={<UserSquare2 size={18} />} label="User" />
              <SubMenuItem href="/konfigurasi" icon={<Settings2 size={18} />} label="Konfigurasi" />
            </div>
          )}
        </div>

        {/* Other Menus */}
        <div className="pt-2 space-y-2">
          <NavItem icon={<CalendarCheck size={22} />} label="Presensi" />
          <NavItem icon={<CalendarOff size={22} />} label="Cuti" />
          <NavItem icon={<Wallet size={22} />} label="Gaji" />
        </div>

      </nav>
    </div>
  );
}

// Komponen Pembantu untuk Navigasi Utama
function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" className="flex items-center gap-4 rounded-xl px-4 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}

// Komponen Pembantu untuk Sub-Menu
function SubMenuItem({ href, icon, label }: { href?: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href ?? "#"} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
      {icon}
      <span>{label}</span>
    </a>
  );
}