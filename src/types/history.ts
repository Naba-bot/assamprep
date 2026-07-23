import { Question } from "./question";

export interface TestHistoryItem {
  id: string;

  testId: string;
  date: string;

  score: number;
  correct: number;
  wrong: number;
  unanswered: number;

  totalQuestions: number;

  percentage: number;
  accuracy: number;

  timeTaken: number;

  answers: Record<number, number>;
  questions: Question[];
}