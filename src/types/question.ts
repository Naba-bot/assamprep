export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;

  // Future features (optional)
  explanation?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  subject?: string;
}