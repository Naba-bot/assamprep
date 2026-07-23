const result = {
  id: crypto.randomUUID(),

  testId,
  date: new Date().toLocaleString(),

  score,
  correct,
  wrong,
  skipped,

  totalQuestions,

  percentage,
  accuracy,

  timeTaken,
};