"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Trash2, Eye, Search, ArrowUpDown } from "lucide-react";

import { TestHistoryItem } from "@/types/history";
import { useRouter } from "next/navigation";

export default function HistoryPage() {
  const [history, setHistory] = useState<TestHistoryItem[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const router = useRouter();
  useEffect(() => {
    const stored = localStorage.getItem("testHistory");

    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const deleteAttempt = (id: string) => {
    if (!confirm("Delete this attempt?")) return;

    const updated = history.filter(
        (item) => item.id !== id
    );

    setHistory(updated);

    localStorage.setItem(
        "testHistory",
        JSON.stringify(updated)
    );
  };

  const filteredHistory = useMemo(() => {
    let data = [...history];

    if (search.trim()) {
      data = data.filter((item) =>
        item.testId
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case "oldest":
        data.reverse();
        break;

      case "highest":
        data.sort(
          (a, b) => b.percentage - a.percentage
        );
        break;

      case "lowest":
        data.sort(
          (a, b) => a.percentage - b.percentage
        );
        break;

      default:
        break;
    }

    return data;
  }, [history, search, sortBy]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);

    if (hrs === 0) return `${mins} min`;

    return `${hrs}h ${mins}m`;
  };

  const badgeColor = (percentage: number) => {
    if (percentage >= 90)
      return "bg-green-100 text-green-700";

    if (percentage >= 75)
      return "bg-blue-100 text-blue-700";

    if (percentage >= 60)
      return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-700";
  };

  const badgeText = (percentage: number) => {
    if (percentage >= 90) return "Excellent";

    if (percentage >= 75) return "Good";

    if (percentage >= 60) return "Average";

    return "Needs Practice";
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            📜 Test History
          </h1>

          <p className="mt-2 text-gray-600">
            You've attempted{" "}
            <span className="font-semibold">
              {history.length}
            </span>{" "}
            mock tests.
          </p>
        </div>

        <Link
          href="/exams"
          className="rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
        >
          ➕ Take Mock Test
        </Link>

      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-xl border bg-white p-5 shadow md:flex-row">

        <div className="relative flex-1">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search by test name..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-lg border py-2 pl-10 pr-4 focus:border-green-600 focus:outline-none"
          />

        </div>

        <div className="flex items-center gap-2">

          <ArrowUpDown size={18} />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-lg border px-3 py-2"
          >
            <option value="newest">
              Newest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="highest">
              Highest Score
            </option>

            <option value="lowest">
              Lowest Score
            </option>

          </select>

        </div>

      </div>

      {filteredHistory.length === 0 ? (

        <div className="rounded-xl border bg-white p-12 text-center shadow">

          <h2 className="text-2xl font-semibold">
            No Tests Found
          </h2>

          <p className="mt-3 text-gray-500">
            Start your first mock test to build your
            history.
          </p>

          <Link
            href="/exams"
            className="mt-6 inline-flex rounded-lg bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800"
          >
            Start Now
          </Link>

        </div>

      ) : (

        <div className="space-y-6">
        {filteredHistory.map((item, index) => (
          <div
          key={item.id ?? `${item.testId}-${item.date}-${index}`}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Left Section */}
              <div className="space-y-4">

                <div>
                  <h2 className="text-2xl font-semibold">
                    {item.testId}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.date}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">

                  <span
                    className={`rounded-full px-4 py-1 text-sm font-semibold ${badgeColor(
                      item.percentage
                    )}`}
                  >
                    {badgeText(item.percentage)}
                  </span>

                  <span className="rounded-full bg-gray-100 px-4 py-1 text-sm">
                    🎯 {item.accuracy}% Accuracy
                  </span>

                  <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-700">
                    ⏱ {formatTime(item.timeTaken)}
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-sm text-gray-500">
                      Score
                    </p>

                    <p className="mt-1 text-2xl font-bold text-blue-700">
                      {item.score}
                      <span className="text-base text-gray-500">
                        /{item.totalQuestions}
                      </span>
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-50 p-4">
                    <p className="text-sm text-gray-500">
                      Percentage
                    </p>

                    <p className="mt-1 text-2xl font-bold text-green-700">
                      {item.percentage}%
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-4">
                    <p className="text-sm text-gray-500">
                      Correct
                    </p>

                    <p className="mt-1 text-2xl font-bold text-purple-700">
                      {item.correct}
                    </p>
                  </div>

                  <div className="rounded-xl bg-red-50 p-4">
                    <p className="text-sm text-gray-500">
                      Wrong
                    </p>

                    <p className="mt-1 text-2xl font-bold text-red-700">
                      {item.wrong}
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Section */}
              <div className="flex flex-col gap-3">

                <button
                  className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
                  onClick={() =>
                    router.push(`/history/${item.id}`)
                  }
            
                >
                  <Eye size={18} />
                  Review
                </button>

                <button
                  className="flex items-center justify-center gap-2 rounded-lg border border-red-200 px-6 py-3 text-red-600 transition hover:bg-red-50"
                  onClick={() => deleteAttempt(item.id)}
                >
                  <Trash2 size={18} />
                  Delete
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    )}

  </main>
);
}