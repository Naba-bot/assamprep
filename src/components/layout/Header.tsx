"use client";

import Link from "next/link";

import Logo from "@/components/shared/Logo";
import NavLinks from "@/components/shared/NavLinks";
import UserMenu from "@/components/auth/UserMenu";

import useAuth from "@/hooks/useAuth";

export default function Header() {
  const { user, loading } = useAuth();

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <NavLinks />

        {loading ? null : user ? (
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-md border border-green-700 px-4 py-2 text-green-700 transition hover:bg-green-50"
            >
              Dashboard
            </Link>

            <UserMenu />
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-md border border-green-700 px-4 py-2 text-green-700 transition hover:bg-green-50"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}