"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { TestHistoryItem } from "@/types/history";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  const [history, setHistory] = useState<TestHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("testHistory");

    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const totalTests = history.length;

  const bestScore = useMemo(() => {
    if (!history.length) return 0;
    return Math.max(...history.map((h) => h.percentage));
  }, [history]);

  const averageScore = useMemo(() => {
    if (!history.length) return 0;

    const total = history.reduce(
      (sum, item) => sum + item.percentage,
      0
    );

    return Math.round(total / history.length);
  }, [history]);

  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <DashboardHeader />

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <StatsCard
            title="Total Tests"
            value={totalTests}
            bgColor="bg-blue-100"
          />

          <StatsCard
            title="Best Score"
            value={`${bestScore}%`}
            bgColor="bg-green-100"
          />

          <StatsCard
            title="Average Score"
            value={`${averageScore}%`}
            bgColor="bg-yellow-100"
          />
        </div>

        <div className="rounded-xl border bg-white shadow">
          <div className="border-b p-5">
            <h2 className="text-2xl font-semibold">
              Recent Attempts
            </h2>
          </div>

          {history.length === 0 ? (
            <p className="p-6 text-gray-500">
              No attempts yet. Start your first mock test!
            </p>
          ) : (
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Test</th>
                  <th className="px-4 py-3 text-center">Score</th>
                  <th className="px-4 py-3 text-center">Percentage</th>
                </tr>
              </thead>

              <tbody>
                {history
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        {item.date}
                      </td>

                      <td className="px-4 py-3">
                        {item.testId}
                      </td>

                      <td className="px-4 py-3 text-center">
                        {item.score}/{item.totalQuestions}
                      </td>

                      <td className="px-4 py-3 text-center">
                        {item.percentage}%
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-10">
          <Link
            href="/exams"
            className="inline-flex rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
          >
            Take Mock Test
          </Link>
        </div>
      </main>
    </ProtectedRoute>
  );
}