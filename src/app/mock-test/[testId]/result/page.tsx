"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { TestResult } from "@/types/result";

export default function ResultPage() {
  const { testId } = useParams();

  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("latestResult");

    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) {
    return (
      <main className="mx-auto max-w-4xl p-10">
        <h1 className="text-center text-2xl font-bold">
          Loading Result...
        </h1>
      </main>
    );
  }

  const hours = Math.floor(result.timeTaken / 3600);
  const minutes = Math.floor((result.timeTaken % 3600) / 60);
  const seconds = result.timeTaken % 60;

  const performance =
    result.percentage >= 80
      ? "Excellent Performance 🎉"
      : result.percentage >= 60
      ? "Good Performance 👍"
      : result.percentage >= 40
      ? "Average Performance 🙂"
      : "Needs Improvement 📚";

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-xl border bg-white p-8 shadow">

        <h1 className="text-center text-4xl font-bold text-green-700">
          Test Completed
        </h1>

        <p className="mt-2 text-center text-gray-500">
          {performance}
        </p>

        {/* Score Card */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-green-50 p-6">

            <h2 className="text-lg font-semibold">
              Overall Score
            </h2>

            <p className="mt-3 text-5xl font-bold text-green-700">
              {result.score}/{result.totalQuestions}
            </p>

            <p className="mt-3 text-gray-600">
              Percentage: {result.percentage}%
            </p>

            <p className="text-gray-600">
              Accuracy: {result.accuracy}%
            </p>

          </div>

          <div className="rounded-xl bg-blue-50 p-6">

            <h2 className="text-lg font-semibold">
              Time Taken
            </h2>

            <p className="mt-3 text-4xl font-bold text-blue-700">
              {hours}h {minutes}m {seconds}s
            </p>

            <p className="mt-4 text-gray-600">
              Test ID
            </p>

            <p className="font-semibold">
              {result.testId}
            </p>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-lg border p-5 text-center">
            <p className="text-gray-500">Correct</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              {result.correct}
            </p>
          </div>

          <div className="rounded-lg border p-5 text-center">
            <p className="text-gray-500">Wrong</p>
            <p className="mt-2 text-3xl font-bold text-red-700">
              {result.wrong}
            </p>
          </div>

          <div className="rounded-lg border p-5 text-center">
            <p className="text-gray-500">Unanswered</p>
            <p className="mt-2 text-3xl font-bold">
              {result.unanswered}
            </p>
          </div>

          <div className="rounded-lg border p-5 text-center">
            <p className="text-gray-500">Rank</p>

            <p className="mt-2 text-2xl font-bold text-yellow-600">
              Coming Soon 🚀
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Leaderboard will be available in a future update.
            </p>
          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href={`/mock-test/${testId}/review`}
            className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
          >
            Review Answers
          </Link>

          <button
            onClick={() =>
              alert("🏆 Leaderboard is coming soon!")
            }
            className="rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Leaderboard (Coming Soon)
          </button>

          <Link
            href="/dashboard"
            className="rounded-lg border px-6 py-3 hover:bg-gray-100"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>
    </main>
  );
}