export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }
  
  export interface MockTest {
    id: string;
    title: string;
    duration: number;
    questions: Question[];
  }
  
  export interface Exam {
    id: string;
    name: string;
    mockTests: MockTest[];
  }