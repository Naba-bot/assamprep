interface QuestionPaletteProps {
    totalQuestions: number;
    currentQuestion: number;
    answers: Record<number, number>;
    reviewQuestions?: number[];
    onQuestionClick: (index: number) => void;
  }
  
  export default function QuestionPalette({
    totalQuestions,
    currentQuestion,
    answers,
    reviewQuestions = [],
    onQuestionClick,
  }: QuestionPaletteProps) {
    const answeredCount = Object.keys(answers).length;
    const reviewCount = reviewQuestions.length;
    const remainingCount = totalQuestions - answeredCount;
  
    return (
      <div className="rounded-xl border bg-white p-6 shadow">
        <h2 className="mb-5 text-xl font-bold">
          Question Palette
        </h2>
  
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: totalQuestions }).map((_, index) => {
            const questionId = index + 1;
  
            const isCurrent = currentQuestion === index;
            const isAnswered = answers[questionId] !== undefined;
            const isReview = reviewQuestions.includes(questionId);
  
            let className =
              "h-10 w-10 rounded-lg font-semibold transition";
  
            if (isCurrent) {
              className +=
                " border-2 border-blue-600 bg-blue-100";
            } else if (isReview) {
              className +=
                " bg-yellow-500 text-white";
            } else if (isAnswered) {
              className +=
                " bg-green-600 text-white";
            } else {
              className +=
                " bg-gray-200 hover:bg-gray-300";
            }
  
            return (
              <button
                key={questionId}
                onClick={() => onQuestionClick(index)}
                className={className}
              >
                {questionId}
              </button>
            );
          })}
        </div>
  
        {/* Legend */}
  
        <div className="mt-8 space-y-3 border-t pt-6">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-green-600"></div>
            <span>Answered</span>
          </div>
  
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-yellow-500"></div>
            <span>Marked for Review</span>
          </div>
  
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded border-2 border-blue-600 bg-blue-100"></div>
            <span>Current Question</span>
          </div>
  
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-gray-300"></div>
            <span>Not Answered</span>
          </div>
        </div>
  
        {/* Statistics */}
  
        <div className="mt-8 rounded-lg bg-gray-50 p-4">
          <div className="flex justify-between">
            <span>Answered</span>
            <span className="font-bold text-green-700">
              {answeredCount}
            </span>
          </div>
  
          <div className="mt-2 flex justify-between">
            <span>Review</span>
            <span className="font-bold text-yellow-600">
              {reviewCount}
            </span>
          </div>
  
          <div className="mt-2 flex justify-between">
            <span>Remaining</span>
            <span className="font-bold text-gray-700">
              {remainingCount}
            </span>
          </div>
        </div>
      </div>
    );
  }