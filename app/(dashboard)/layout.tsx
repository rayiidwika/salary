import Sidebar from "@/components/sidebar"; 
import Navbar from "@/components/navbar";// Pastikan path ini benar

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* 1. Sidebar dipanggil di sini */}
      <Sidebar />
      <div className="flex-1 flex flex-col pl-64">
      <Navbar />

      {/* 2. Area Konten di sebelah kanan */}
      <main className="flex-1 overflow-y-auto bg-white p-8 shadow pt-20">
        {children}
      </main>
      </div>
    </div>
  );
}