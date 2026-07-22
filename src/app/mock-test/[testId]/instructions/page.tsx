"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function InstructionsPage() {
  const { testId } = useParams();

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-xl border bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Mock Test Instructions
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>📝 Total Questions: <strong>100</strong></p>

          <p>⏱ Duration: <strong>120 Minutes</strong></p>

          <p>✅ Correct Answer: <strong>+1 Mark</strong></p>

          <p>❌ Negative Marking: <strong>No</strong></p>

          <p>
            Do not refresh the browser while taking the test.
          </p>

          <p>
            Click "Submit Test" before leaving.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <input id="agree" type="checkbox" />

          <label htmlFor="agree">
            I have read and understood the instructions.
          </label>
        </div>

        <Link
          href={`/mock-test/${testId}`}
          className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
        >
          Start Test
        </Link>
      </div>
    </main>
  );
}