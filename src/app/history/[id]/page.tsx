"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { TestHistoryItem } from "@/types/history";

export default function HistoryReviewPage() {
  const params = useParams();

  const [attempt, setAttempt] =
    useState<TestHistoryItem | null>(null);

  useEffect(() => {
    const history = JSON.parse(
      localStorage.getItem("testHistory") || "[]"
    );

    const selected = history.find(
      (item: TestHistoryItem) =>
        item.id === params.id
    );

    if (selected) {
      setAttempt(selected);
    }
  }, [params.id]);

  if (!attempt) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold">
          Attempt Not Found
        </h1>

        <Link
          href="/history"
          className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 text-white"
        >
          Back to History
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">

      <h1 className="mb-2 text-3xl font-bold">
        Review Attempt
      </h1>

      <p className="mb-8 text-gray-600">
        {attempt.testId}
      </p>

      <div className="space-y-8">

        {attempt.questions.map((question, index) => {
          const selected =
            attempt.answers[question.id];

          const correct =
            question.answer;
            return (
                <div
                  key={question.id}
                  className="rounded-xl border bg-white p-6 shadow"
                >
                  <h2 className="font-semibold text-lg">
                    Q{index + 1}. {question.question}
                  </h2>
    
                  <div className="mt-4 space-y-3">
    
                    {question.options.map(
                      (option, optionIndex) => {
    
                        let classes =
                          "rounded-lg border p-3";
    
                        if (
                          optionIndex === correct
                        ) {
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
                      }
                    )}
    
                  </div>
    
                  <div className="mt-4 text-sm space-y-2">
    
                    <p>
                      Your Answer{" "}
                      <strong>
                        {selected !== undefined
                          ? question.options[selected]
                          : "Not Answered"}
                      </strong>
                    </p>
    
                    <p>
                      Correct Answer{" "}
                      <strong className="text-green-700">
                        {
                          question.options[
                            correct
                          ]
                        }
                      </strong>
                    </p>
    
                    {question.subject && (
                      <p>
                        Subject:
                        <strong>
                          {" "}
                          {question.subject}
                        </strong>
                      </p>
                    )}
    
                    {question.difficulty && (
                      <p>
                        Difficulty:
                        <strong>
                          {" "}
                          {question.difficulty}
                        </strong>
                      </p>
                    )}
    
                    {question.explanation && (
                      <div className="mt-4 rounded-lg bg-blue-50 p-4">
    
                        <p className="font-semibold text-blue-700">
                          Explanation
                        </p>
    
                        <p className="mt-2">
                          {
                            question.explanation
                          }
                        </p>
    
                      </div>
                    )}
    
                  </div>
    
                </div>
              );
            })}
    
          </div>
    
          <div className="mt-10">
    
            <Link
              href="/history"
              className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
            >
              Back to History
            </Link>
    
          </div>
    
        </main>
      );
    }