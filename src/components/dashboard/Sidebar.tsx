"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

const links = [
  {
    href: "/dashboard",
    label: "📊 Dashboard",
  },
  {
    href: "/exams",
    label: "📝 Mock Tests",
  },
  {
    href: "/history",
    label: "📜 History",
  },
  {
    href: "#",
    label: "🏆 Leaderboard",
    disabled: true,
  },
  {
    href: "#",
    label: "👤 Profile",
    disabled: true,
  },
  {
    href: "#",
    label: "⚙️ Settings",
    disabled: true,
  },
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
    <aside className="flex min-h-screen w-64 flex-col bg-green-700 text-white shadow-lg">
      {/* Logo */}
      <div className="border-b border-green-600 p-6">
        <h1 className="text-3xl font-bold">
          AssamPrep
        </h1>

        <p className="mt-1 text-sm text-green-100">
          Learn. Practice. Succeed.
        </p>

        <div className="mt-6 rounded-lg bg-green-600/50 p-3">
          <p className="font-semibold">
            {user?.displayName || "Student"}
          </p>

          <p className="mt-1 break-all text-sm text-green-100">
            {user?.email}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          if (link.disabled) {
            return (
              <button
                key={link.label}
                disabled
                className="flex w-full cursor-not-allowed items-center justify-between rounded-lg px-4 py-3 text-left text-green-200 opacity-70"
              >
                <span>{link.label}</span>

                <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-semibold text-black">
                  Soon
                </span>
              </button>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-4 py-3 transition ${
                pathname === link.href
                  ? "bg-white font-semibold text-green-700 shadow"
                  : "hover:bg-green-600"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-green-600 p-4">
        <button
          onClick={handleLogout}
          className="w-full rounded-lg bg-red-500 px-4 py-3 font-medium transition hover:bg-red-600"
        >
          🚪 Logout
        </button>

        <p className="mt-4 text-center text-xs text-green-200">
          AssamPrep v1.0
        </p>
      </div>
    </aside>
  );
}