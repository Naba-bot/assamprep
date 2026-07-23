"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function InstructionsPage() {
  const { testId } = useParams();
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-xl border bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Mock Test Instructions
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>
            📝 Total Questions: <strong>20</strong>
          </p>

          <p>
            ⏱ Duration: <strong>10 Minutes</strong>
          </p>

          <p>
            ✅ Correct Answer: <strong>+1 Mark</strong>
          </p>

          <p>
            ✅ Negative Marking: <strong>-0.25 Mark</strong>
          </p>

          <p>
            Do not refresh the browser while taking the test.
          </p>

          <p>
            Click "Submit Test" before leaving.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <input
            id="agree"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4"
          />

          <label htmlFor="agree" className="text-gray-700">
            I have read and understood the instructions.
          </label>
        </div>

        
          <button
          onClick={() => {
            if (!agreed) return;
        
            router.replace(`/mock-test/${testId}`);
          }}
          disabled={!agreed}
          className={`mt-8 rounded-lg px-6 py-3 text-white transition ${
            agreed
              ? "bg-green-700 hover:bg-green-800"
              : "cursor-not-allowed bg-gray-400"
          }`}
        >
          Start Test
        </button>
        
      </div>
    </main>
  );
}