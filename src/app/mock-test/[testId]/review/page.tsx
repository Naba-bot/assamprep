"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { aeFull1Questions } from "@/data/questions/apsc-ae-electrical/ae-full-1";

export default function ReviewPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    const stored = localStorage.getItem("latestAnswers");

    if (stored) {
      setAnswers(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Review Answers
      </h1>

      <div className="space-y-8">
        {aeFull1Questions.map((question, index) => {
          const selected = answers[question.id];
          const correct = question.answer;

          return (
            <div
              key={question.id}
              className="rounded-xl border bg-white p-6 shadow"
            >
              <h2 className="font-semibold text-lg">
                Q{index + 1}. {question.question}
              </h2>

              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => {
                  let classes = "rounded-lg border p-3";

                  if (optionIndex === correct) {
                    classes +=
                      " border-green-600 bg-green-100";
                  }

                  if (
                    selected === optionIndex &&
                    selected !== correct
                  ) {
                    classes +=
                      " border-red-600 bg-red-100";
                  }

                  return (
                    <div
                      key={optionIndex}
                      className={classes}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 text-sm space-y-2">
                <p>
                  Your Answer:{" "}
                  <strong>
                    {selected !== undefined
                      ? question.options[selected]
                      : "Not Answered"}
                  </strong>
                </p>

                <p>
                  Correct Answer:{" "}
                  <strong className="text-green-700">
                    {question.options[correct]}
                  </strong>
                </p>

                {question.subject && (
                  <p>
                    Subject:{" "}
                    <strong>{question.subject}</strong>
                  </p>
                )}

                {question.difficulty && (
                  <p>
                    Difficulty:{" "}
                    <strong>{question.difficulty}</strong>
                  </p>
                )}

                {question.explanation && (
                  <div className="mt-4 rounded-lg bg-blue-50 p-4">
                    <p className="font-semibold text-blue-700">
                      Explanation
                    </p>

                    <p className="mt-2">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button
          onClick={() => router.back()}
          className="rounded-lg bg-gray-700 px-6 py-3 text-white transition hover:bg-gray-800"
        >
          ← Back to Result
        </button>

        <Link
          href="/exams"
          className="rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800"
        >
          📚 More Mock Tests
        </Link>
      </div>
    </main>
  );
}