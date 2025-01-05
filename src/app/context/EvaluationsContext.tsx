"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type EvaluationsContextType = {
  evaluations: Record<string, string>;
  setEvaluation: (item: string, value: string) => void;
};

const EvaluationsContext = createContext<EvaluationsContextType | undefined>(undefined);

export function EvaluationsProvider({ children }: { children: ReactNode }) {
  const [evaluations, setEvaluations] = useState<Record<string, string>>({});

  const setEvaluation = (item: string, value: string) => {
    setEvaluations((prev) => ({
      ...prev,
      [item]: value,
    }));
  };

  return (
    <EvaluationsContext.Provider value={{ evaluations, setEvaluation }}>
      {children}
    </EvaluationsContext.Provider>
  );
}

export function useEvaluations() {
  const context = useContext(EvaluationsContext);
  if (!context) {
    throw new Error("useEvaluations must be used within an EvaluationsProvider");
  }
  return context;
}
