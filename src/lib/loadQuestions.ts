import { questionSets } from "./questionSets";

export function loadQuestions(testId: string) {
  const questions = questionSets[testId as keyof typeof questionSets];

  if (!questions) {
    throw new Error(`Question set "${testId}" not found.`);
  }

  return questions;
}