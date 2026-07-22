import { Exam } from "@/types/exam";

export const apscAEElectrical: Exam = {
  id: "apsc-ae-electrical",

  name: "APSC Assistant Engineer (Electrical)",

  mockTests: [
    {
      id: "ae-full-1",

      title: "Full Mock Test 1",

      duration: 120,

      questions: [
        {
          id: 1,

          question: "The SI unit of electric charge is",

          options: [
            "Volt",
            "Ampere",
            "Coulomb",
            "Ohm",
          ],

          correctAnswer: 2,

          explanation:
            "Electric charge is measured in Coulombs.",
        },
      ],
    },
  ],
};