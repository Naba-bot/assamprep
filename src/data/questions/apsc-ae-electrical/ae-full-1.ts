import { Question } from "@/types/question";

export const aeFull1Config = {
  id: "ae-full-1",

  title: "APSC AE Electrical Full Test 1",

  totalQuestions: 20,

  duration: 10, // minutes

  marksPerCorrect: 1,

  negativeMark: 0.25,
};

const subjects = [
  "Network Theory",
  "Electrical Machines",
  "Power Systems",
  "Measurements",
  "Control Systems",
];

const difficulties: ("Easy" | "Medium" | "Hard")[] = [
  "Easy",
  "Medium",
  "Hard",
];

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

    subject: subjects[index % subjects.length],

    difficulty: difficulties[index % difficulties.length],

    explanation: `This is the explanation for Question ${
      index + 1
    }. Replace this with the actual explanation when you add real questions.`,
  })
);