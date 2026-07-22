import { Question } from "@/types/question";

export const aeFull1Questions: Question[] = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index + 1,
    question: `Sample Electrical Engineering Question ${index + 1}?`,
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D",
    ],
    answer: index % 4,
  })
);