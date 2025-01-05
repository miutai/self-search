import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center">
      {/* アプリタイトル */}
      <h1 className="text-5xl font-bold text-white mb-6">自己分析アプリ</h1>

      {/* アプリの説明 */}
      <p className="text-lg text-gray-300 mb-10">
        あなたの価値観を発見するためのワークです。<br />
        是非、就職活動や転職活動をしている方は取り組んでみてください！<br />
        まずは、自分の価値観を知るための６つの質問に答えてもらいます。<br />
        その後に、価値観リストからあなたが大事にしている価値観を選んでください。<br />
        自分と向き合って考えることが重要です。<br />
        所要時間：２～３時間
      </p>

      {/* 質問ページへのリンク */}
      <Link href="/questions/0">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
          質問を開始
        </button>
      </Link>
    </div>
  );
}
