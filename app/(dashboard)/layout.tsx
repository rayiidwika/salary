import Sidebar from "@/components/sidebar"; // Pastikan path ini benar

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* 1. Sidebar dipanggil di sini */}
      <Sidebar />

      {/* 2. Area Konten di sebelah kanan */}
      <main className="flex-1 overflow-y-auto bg-red-500">
        {children}
      </main>
    </div>
  );
}