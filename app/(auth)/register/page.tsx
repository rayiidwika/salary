"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State role tetap ada jika API membutuhkannya (bisa diisi string kosong atau default)
  const [role, setRole] = useState(""); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role, // Mengirimkan role (bisa kosong sesuai permintaan)
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registrasi gagal");
      }

      router.push("/sign-in"); 
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 ">
      <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow dark:bg-zinc-900">
        <h1 className="mb-6 text-center text-2xl font-semibold">Daftar Akun</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Input Nama */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black outline-none dark:bg-zinc-800 dark:border-zinc-700"
              required
            />
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="email@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black outline-none dark:bg-zinc-800 dark:border-zinc-700"
              required
            />
          </div>

          {/* Input Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-black outline-none dark:bg-zinc-800 dark:border-zinc-700"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500 bg-red-50 p-2 rounded">{error}</p>}

          <button
            disabled={loading}
            className="w-full rounded-lg bg-black py-2 text-white font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Memproses..." : "Daftar Sekarang"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600">
          Sudah punya akun?{" "}
          <Link href="/sign-in" className="font-semibold text-white hover:underline">
            Login di sini
          </Link>
        </p>
      </main>
    </div>
  );
}