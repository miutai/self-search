"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AnswersContextType = {
  answers: Record<number, string>;
  setAnswer: (index: number, answer: string) => void;
};

const AnswersContext = createContext<AnswersContextType | undefined>(
  undefined
);

export function AnswersProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const setAnswer = (index: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));
  };

  return (
    <AnswersContext.Provider value={{ answers, setAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
}

export function useAnswers() {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error("useAnswers must be used within an AnswersProvider");
  }
  return context;
}
