export interface TestResult {
  id?: string;

  testId: string;
  date?: string;

  totalQuestions: number;

  correct: number;
  wrong: number;
  unanswered: number;

  score: number;
  percentage: number;
  accuracy: number;

  timeTaken: number;
}