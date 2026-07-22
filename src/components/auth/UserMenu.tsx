"use client";

import Image from "next/image";
import { logout } from "@/lib/auth";
import useAuth from "@/hooks/useAuth";

export default function UserMenu() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-3">
      {user.photoURL && (
        <Image
          src={user.photoURL}
          alt={user.displayName ?? "Profile"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}

      <div className="hidden sm:block">
        <p className="font-semibold">{user.displayName}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>

      <button
        onClick={logout}
        className="rounded-md bg-red-600 px-3 py-2 text-white hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}