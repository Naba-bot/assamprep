"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MockTestHeader from "@/components/mock-test/MockTestHeader";
import QuestionCard from "@/components/mock-test/QuestionCard";
import NavigationButtons from "@/components/mock-test/NavigationButtons";
import QuestionPalette from "@/components/mock-test/QuestionPalette";
import SubmitDialog from "@/components/mock-test/SubmitDialog";

import { aeFull1Questions } from "@/data/questions/ae-full-1";
import { calculateResult } from "@/lib/result";

export default function MockTestPage() {
  const { testId } = useParams();
  const router = useRouter();

  const questions = aeFull1Questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [reviewQuestions, setReviewQuestions] = useState<number[]>([]);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const question = questions[currentQuestion];

  const answeredCount = useMemo(
    () => Object.keys(answers).length,
    [answers]
  );

  const handleAnswerSelect = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: optionIndex,
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSubmitDialog(true);
    }
  };

  const handleClear = () => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[question.id];
      return updated;
    });
  };

  const handleMarkReview = () => {
    setReviewQuestions((prev) => {
      if (prev.includes(question.id)) {
        return prev.filter((id) => id !== question.id);
      }

      return [...prev, question.id];
    });
  };

  const handleSubmit = () => {
    const result = calculateResult(
      questions,
      answers,
      testId as string,
      7200
    );

    localStorage.setItem(
      "latestResult",
      JSON.stringify(result)
    );

    router.push(`/mock-test/${testId}/result`);
  };

  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <MockTestHeader
          title={`Mock Test: ${testId}`}
          candidateName="Candidate"
          totalQuestions={questions.length}
          duration={120}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <QuestionCard
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              question={question.question}
              options={question.options}
              selectedAnswer={answers[question.id]}
              onAnswerSelect={handleAnswerSelect}
            />

            <NavigationButtons
              isFirstQuestion={currentQuestion === 0}
              isLastQuestion={currentQuestion === questions.length - 1}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onClear={handleClear}
              onMarkReview={handleMarkReview}
              onSubmit={() => setShowSubmitDialog(true)}
            />
          </div>

          <div>
            <QuestionPalette
              totalQuestions={questions.length}
              currentQuestion={currentQuestion}
              answers={answers}
              reviewQuestions={reviewQuestions}
              onQuestionClick={setCurrentQuestion}
            />
          </div>
        </div>

        <SubmitDialog
          isOpen={showSubmitDialog}
          totalQuestions={questions.length}
          answeredQuestions={answeredCount}
          reviewQuestions={reviewQuestions.length}
          onCancel={() => setShowSubmitDialog(false)}
          onConfirm={handleSubmit}
        />
      </main>
    </ProtectedRoute>
  );
}