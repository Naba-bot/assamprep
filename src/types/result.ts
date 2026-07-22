export interface TestResult {
    testId: string;
    totalQuestions: number;
    correct: number;
    wrong: number;
    unanswered: number;
    score: number;
    percentage: number;
    accuracy: number;
    timeTaken: number; // seconds
  }