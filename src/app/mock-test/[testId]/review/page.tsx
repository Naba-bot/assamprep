"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { aeFull1Questions } from "@/data/questions/apsc-ae-electrical/ae-full-1";

export default function ReviewPage() {
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
              <h2 className="font-semibold">
                Q{index + 1}. {question.question}
              </h2>

              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => {
                  let classes =
                    "rounded-lg border p-3";

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

              <div className="mt-4 text-sm">
                <p>
                  Your Answer:{" "}
                  <strong>
                    {selected !== undefined
                      ? question.options[selected]
                      : "Not Answered"}
                  </strong>
                </p>

                <p className="mt-1">
                  Correct Answer:{" "}
                  <strong className="text-green-700">
                    {question.options[correct]}
                  </strong>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <Link
          href="/mock-test"
          className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
        >
          Back to Mock Tests
        </Link>
      </div>
    </main>
  );
}