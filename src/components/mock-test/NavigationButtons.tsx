interface NavigationButtonsProps {
    isFirstQuestion: boolean;
    isLastQuestion: boolean;
    onPrevious: () => void;
    onNext: () => void;
    onClear: () => void;
    onMarkReview: () => void;
    onSubmit: () => void;
  }
  
  export default function NavigationButtons({
    isFirstQuestion,
    isLastQuestion,
    onPrevious,
    onNext,
    onClear,
    onMarkReview,
    onSubmit,
  }: NavigationButtonsProps) {
    return (
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className="rounded-lg border px-5 py-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
  
        <button
          onClick={onClear}
          className="rounded-lg border border-red-500 px-5 py-2 text-red-600 hover:bg-red-50"
        >
          Clear Response
        </button>
  
        <button
          onClick={onMarkReview}
          className="rounded-lg bg-yellow-500 px-5 py-2 text-white hover:bg-yellow-600"
        >
          Mark for Review
        </button>
  
        <button
          onClick={onNext}
          disabled={isLastQuestion}
          className="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Save & Next
        </button>
  
        <button
          onClick={onSubmit}
          className="ml-auto rounded-lg bg-blue-700 px-6 py-2 text-white hover:bg-blue-800"
        >
          Submit Test
        </button>
      </div>
    );
  }