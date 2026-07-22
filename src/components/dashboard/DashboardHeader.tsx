"use client";

import { auth } from "@/lib/firebase";

export default function DashboardHeader() {
  const user = auth.currentUser;

  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow">
      <h1 className="text-3xl font-bold">
        Welcome back, {user?.displayName || "Student"} 👋
      </h1>

      <p className="mt-2 text-gray-600">
        Ready for today's practice?
      </p>
    </div>
  );
}