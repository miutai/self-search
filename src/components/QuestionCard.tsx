"use client"

import React, { useState } from "react";

type QuestionCardProps = {
  question: string;
  onSubmit: (answer: string) => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answer);
    setAnswer(""); // フォームをクリア
  };

  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white">
      {/* 質問部分 */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">{question}</h2>
      </div>

      {/* 回答部分 */}
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ここに回答を入力してください..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            回答を送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionCard;
