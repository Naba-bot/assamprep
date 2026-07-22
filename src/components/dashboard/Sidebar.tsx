"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

const links = [
  { href: "/dashboard", label: "📊 Dashboard" },
  { href: "/exams", label: "📝 Mock Tests" },
  { href: "/history", label: "📜 History" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-green-700 text-white">
      <div className="border-b border-green-600 p-6">
        <h1 className="text-3xl font-bold">AssamPrep</h1>

        <div className="mt-6">
          <p className="font-semibold">
            {user?.displayName || "Student"}
          </p>

          <p className="break-all text-sm text-green-100">
            {user?.email}
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block rounded-lg px-4 py-3 transition ${
              pathname === link.href
                ? "bg-white font-semibold text-green-700"
                : "hover:bg-green-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-green-600 p-4">
        <button
          onClick={handleLogout}
          className="w-full rounded-lg bg-red-500 px-4 py-3 font-medium transition hover:bg-red-600"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}