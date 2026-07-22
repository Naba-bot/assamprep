"use client";

import Timer from "./Timer";

interface MockTestHeaderProps {
  title: string;
  candidateName: string;
  totalQuestions: number;
  duration: number;
}

export default function MockTestHeader({
  title,
  candidateName,
  totalQuestions,
  duration,
}: MockTestHeaderProps) {
  return (
    <header className="mb-8 rounded-xl border bg-white p-6 shadow">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-green-700">
            AssamPrep
          </h1>

          <p className="mt-2 text-xl font-semibold">
            {title}
          </p>

          <p className="mt-1 text-gray-600">
            Candidate:{" "}
            <span className="font-medium">
              {candidateName}
            </span>
          </p>
        </div>

        {/* Right */}
        <div className="text-right">
          <p className="text-sm text-gray-500">
            Total Questions
          </p>

          <p className="text-2xl font-bold">
            {totalQuestions}
          </p>

          <div className="mt-4">
            <Timer minutes={duration} />
          </div>
        </div>
      </div>
    </header>
  );
}