import { questionSets } from "./questionSets";

export function loadTest(testId: string) {
  const test = questionSets[testId as keyof typeof questionSets];

  if (!test) {
    throw new Error(`Question set "${testId}" not found.`);
  }

  return test;
}