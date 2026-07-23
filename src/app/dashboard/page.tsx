"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { TestHistoryItem } from "@/types/history";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardChart from "@/components/dashboard/DashboardChart";

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

  const averageAccuracy = useMemo(() => {
    if (!history.length) return 0;

    const total = history.reduce(
      (sum, item) => sum + item.accuracy,
      0
    );

    return Math.round(total / history.length);
  }, [history]);

  const totalStudyTime = useMemo(() => {
    const totalSeconds = history.reduce(
      (sum, item) => sum + item.timeTaken,
      0
    );

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  }, [history]);

  const totalQuestionsAttempted = useMemo(() => {
    return history.reduce(
      (sum, item) => sum + item.correct + item.wrong,
      0
    );
  }, [history]);

  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <DashboardHeader />

        {/* Statistics */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          <StatsCard
            title="Average Accuracy"
            value={`${averageAccuracy}%`}
            bgColor="bg-purple-100"
          />

          <StatsCard
            title="Study Time"
            value={totalStudyTime}
            bgColor="bg-red-100"
          />

          <StatsCard
            title="Questions Solved"
            value={totalQuestionsAttempted}
            bgColor="bg-cyan-100"
          />
        </div>

        {/* Empty State */}
        {history.length === 0 ? (
          <div className="rounded-xl border bg-white p-10 text-center shadow">
            <h2 className="mb-2 text-2xl font-semibold">
              No Test Data Yet
            </h2>

            <p className="text-gray-500">
              Complete your first mock test to unlock detailed
              performance analytics.
            </p>

            <Link
              href="/exams"
              className="mt-6 inline-flex rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
            >
              Take Your First Mock Test
            </Link>
          </div>
        ) : (
          <>
            {/* Charts */}
            <div className="space-y-8">
              <DashboardChart
                history={history}
                type="performance"
              />

              <DashboardChart
                history={history}
                type="accuracy"
              />

              <DashboardChart
                history={history}
                type="time"
              />
            </div>

            {/* Quick Action */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/exams"
                className="rounded-lg bg-green-700 px-8 py-3 font-medium text-white transition hover:bg-green-800"
              >
                🚀 Take Another Mock Test
              </Link>
            </div>
          </>
        )}
      </main>
    </ProtectedRoute>
  );
}