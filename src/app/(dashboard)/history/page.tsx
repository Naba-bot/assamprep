"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { TestHistoryItem } from "@/types/history";

export default function HistoryPage() {
  const [history, setHistory] = useState<TestHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("testHistory");

    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Test History
      </h1>

      {history.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <p>No test history found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white shadow">
          <table className="min-w-full">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Test</th>
                <th className="px-4 py-3 text-center">Score</th>
                <th className="px-4 py-3 text-center">Percentage</th>
                <th className="px-4 py-3 text-center">Accuracy</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
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

                  <td className="px-4 py-3 text-center">
                    {item.accuracy}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8">
        <Link
          href="/exams"
          className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
        >
          Back to Mock Tests
        </Link>
      </div>
    </main>
  );
}