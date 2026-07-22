interface SubmitDialogProps {
    isOpen: boolean;
    totalQuestions: number;
    answeredQuestions: number;
    reviewQuestions: number;
    onCancel: () => void;
    onConfirm: () => void;
  }
  
  export default function SubmitDialog({
    isOpen,
    totalQuestions,
    answeredQuestions,
    reviewQuestions,
    onCancel,
    onConfirm,
  }: SubmitDialogProps) {
    if (!isOpen) return null;
  
    const unansweredQuestions = totalQuestions - answeredQuestions;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <h2 className="text-2xl font-bold">
            Submit Test
          </h2>
  
          <p className="mt-3 text-gray-600">
            Are you sure you want to submit your test?
          </p>
  
          <div className="mt-6 space-y-3 rounded-lg bg-gray-50 p-4">
            <div className="flex justify-between">
              <span>Total Questions</span>
              <span className="font-semibold">
                {totalQuestions}
              </span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-green-700">
                Answered
              </span>
              <span className="font-semibold text-green-700">
                {answeredQuestions}
              </span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-red-700">
                Unanswered
              </span>
              <span className="font-semibold text-red-700">
                {unansweredQuestions}
              </span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-yellow-700">
                Marked for Review
              </span>
              <span className="font-semibold text-yellow-700">
                {reviewQuestions}
              </span>
            </div>
          </div>
  
          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="rounded-lg border px-5 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
  
            <button
              onClick={onConfirm}
              className="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800"
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>
    );
  }