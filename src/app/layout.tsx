import type { Metadata } from "next";
import "./globals.css";
import { AnswersProvider } from "./context/AnswersContext";
import { EvaluationsProvider } from "./context/EvaluationsContext";

export const metadata: Metadata = {
  title: "自己分析アプリ｜あなたの価値観を発見する",
  description:
    "あなたの価値観を発見し、人生や目標を明確にする自己分析アプリ。簡単なワークを通じて新たな自分を見つけましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AnswersProvider>
          <EvaluationsProvider>{children}</EvaluationsProvider>
        </AnswersProvider>
      </body>
    </html>
  );
}
