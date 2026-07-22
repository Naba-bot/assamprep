import { TestResult } from "./result";

export interface TestHistoryItem extends TestResult {
  date: string;
}