import { Question } from "@/types/question";
import { TestResult } from "@/types/result";

export function calculateResult(
  questions: Question[],
  answers: Record<number, number>,
  testId: string,
  timeTaken: number
): TestResult {
  let correct = 0;
  let wrong = 0;

  questions.forEach((question) => {
    const answer = answers[question.id];

    if (answer === undefined) return;

    if (answer === question.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const unanswered = questions.length - correct - wrong;

  const percentage = Number(
    ((correct / questions.length) * 100).toFixed(2)
  );

  const accuracy =
    correct + wrong === 0
      ? 0
      : Number(
          ((correct / (correct + wrong)) * 100).toFixed(2)
        );

  return {
    testId,
    totalQuestions: questions.length,
    correct,
    wrong,
    unanswered,
    score: correct,
    percentage,
    accuracy,
    timeTaken,
  };
}