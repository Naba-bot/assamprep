interface QuestionCardProps {
    questionNumber: number;
    totalQuestions: number;
    question: string;
    options: string[];
    selectedAnswer?: number;
    onAnswerSelect: (index: number) => void;
  }
  
  export default function QuestionCard({
    questionNumber,
    totalQuestions,
    question,
    options,
    selectedAnswer,
    onAnswerSelect,
  }: QuestionCardProps) {
    return (
      <div className="rounded-xl border bg-white p-8 shadow">
        <h2 className="text-2xl font-bold">
          Question {questionNumber} of {totalQuestions}
        </h2>
  
        <p className="mt-6 text-lg leading-8">
          {question}
        </p>
  
        <div className="mt-8 space-y-4">
          {options.map((option, index) => {
            const selected = selectedAnswer === index;
  
            return (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`flex w-full items-center rounded-lg border p-4 text-left transition
                  ${
                    selected
                      ? "border-green-700 bg-green-100"
                      : "hover:bg-green-50"
                  }`}
              >
                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full border font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
  
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }