interface QuestionPageProps {
    question: string;
    answer: string;
    onAnswerChange: (value: string) => void;
    onNext: () => void;
    onPrevious: () => void;
    disablePrevious: boolean;
  }
  
  export default function QuestionPage({
    question,
    answer,
    onAnswerChange,
    onNext,
    onPrevious,
    disablePrevious,
  }: QuestionPageProps) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">質問</h2>
          <p className="mb-6">{question}</p>
          <textarea
            className="w-full h-32 border rounded-lg p-2 mb-4"
            placeholder="答えを入力してください..."
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              onClick={onPrevious}
              disabled={disablePrevious}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-50"
            >
              戻る
            </button>
            <button
              onClick={onNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              次へ
            </button>
          </div>
        </div>
      </div>
    );
  }
  