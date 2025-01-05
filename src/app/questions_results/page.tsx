"use client";

import Link from "next/link";
import { useAnswers } from "../context/AnswersContext";

const questions = [
  "あなたはどんな価値観で育てられましたか？自分の今の思考体系は、それらの価値観を反映しているものですか、それとも育てられた価値観とは違う視点で世界を見ていますか？",
  "幼い頃や思春期におけるもっとも重要な出来事及び経験は何ですか？それらが自分の世界観にどう影響を与えましたか？",
  "職場や私生活で、どんな人たちを一番尊敬していて、その人たちのどんなところを尊敬していますか？",
  "一番尊敬していないのはどんな人で、なぜそんな風に思いますか",
  "これまでで最高（最悪）の上司は誰ですか？そう思うのは、その上司が何をしたからですか？",
  "自分の子供を育てたり、他人を指導するにあたり、一番伝えたいのはどんな行動で、一番伝えたくないのはどんな行動ですか？",
];

export default function ResultsPage() {
  const { answers } = useAnswers();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">回答結果</h1>
      <h3 className="mb-3">解答結果を参考にして次の価値観リストに移ってください</h3>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold mb-2">{question}</p>
            <p className="text-gray-700">{answers[index] || "未回答"}</p>
          </div>
        ))}
      </div>
      <Link href="/evaluate">
        <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
          価値観リストに移る
        </button>
      </Link>
    </div>
  );
}
