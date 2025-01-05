"use client";

import { useRouter } from "next/navigation";
import { useAnswers } from "../../context/AnswersContext";
import QuestionPage from "./QuestionPage";

export default function LogicHandler({
  currentIndex,
  question,
}: {
  currentIndex: number;
  question: string;
}) {
  const router = useRouter();
  const { answers, setAnswer } = useAnswers();

  const handleNext = () => {
    if (currentIndex < 5) {
      router.push(`/questions/${currentIndex + 1}`);
    } else {
      router.push("/questions_results");
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      router.push(`/questions/${currentIndex - 1}`);
    }
  };

  return (
    <QuestionPage
      question={question}
      answer={answers[currentIndex] || ""}
      onAnswerChange={(value) => setAnswer(currentIndex, value)}
      onNext={handleNext}
      onPrevious={handlePrevious}
      disablePrevious={currentIndex === 0}
    />
  );
}
