"use client";

import React from "react";
import {
  Users,
  Building2,
  Briefcase,
  Wallet,
  Search,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  // Dummy data for the dashboard cards and table
  const stats = [
    { id: 1, label: "Karyawan", value: 128, icon: <Users size={20} className="text-teal-500" /> },
    { id: 2, label: "Divisi", value: 8, icon: <Building2 size={20} className="text-amber-500" /> },
    { id: 3, label: "Posisi", value: 14, icon: <Briefcase size={20} className="text-violet-500" /> },
    { id: 4, label: "Penggajian (Bulan)", value: "Rp 421.000.000", icon: <Wallet size={20} className="text-emerald-500" /> },
  ];

  const recent = [
    { id: 1, name: "Asep Setiawan", jabatan: "Staff Administrasi", divisi: "Keuangan", mulai: "2025-11-02" },
    { id: 2, name: "Siti Aminah", jabatan: "Software Engineer", divisi: "Teknologi Informasi", mulai: "2024-06-12" },
    { id: 3, name: "Budi Santoso", jabatan: "Manager", divisi: "Penjualan", mulai: "2023-02-20" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Ringkasan singkat keadaan perusahaan Anda</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Cari karyawan, divisi..."
              className="w-64 rounded-xl border border-gray-200 bg-white px-4 py-2 pr-10 text-sm shadow-sm outline-none focus:border-teal-400"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
            <Plus size={16} /> Tambah
          </button>
        </div>
      </header>

      {/* Stat cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-6">
        {stats.map((s) => (
          <div key={s.id} className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gray-50 p-2">{s.icon}</div>
                <div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                  <div className="text-lg font-bold text-gray-800">{s.value}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Recent employees table */}
        <div className="md:col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Karyawan Terbaru</h2>
            <button className="text-sm text-teal-600 hover:underline">Lihat semua</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-sm uppercase tracking-wider">
                  <th className="px-4 py-3">Nama</th>
                  <th className="px-4 py-3">Jabatan</th>
                  <th className="px-4 py-3">Divisi</th>
                  <th className="px-4 py-3">Mulai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {recent.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{r.name}</td>
                    <td className="px-4 py-3">{r.jabatan}</td>
                    <td className="px-4 py-3">{r.divisi}</td>
                    <td className="px-4 py-3">{r.mulai}</td>
                  </tr>
                ))}
                {recent.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-gray-400">Belum ada karyawan terbaru.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick links / actions */}
        <aside className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Tindakan Cepat</h3>
          <ul className="space-y-2">
            <li>
              <a href="/divisi" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50">
                <Building2 size={16} className="text-amber-500" /> Divisi
              </a>
            </li>
            <li>
              <a href="/jabatan" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50">
                <Briefcase size={16} className="text-violet-500" /> Jabatan
              </a>
            </li>
            <li>
              <a href="/karyawan" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50">
                <Users size={16} className="text-teal-500" /> Karyawan
              </a>
            </li>
            <li>
              <a href="/konfigurasi" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50">
                <Wallet size={16} className="text-emerald-500" /> Konfigurasi
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}