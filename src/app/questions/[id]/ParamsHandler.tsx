import LogicHandler from "./LogicHandler";

const questions = [
  "あなたはどんな価値観で育てられましたか？自分の今の思考体系は、それらの価値観を反映しているものですか、それとも育てられた価値観とは違う視点で世界を見ていますか？",
  "幼い頃や思春期におけるもっとも重要な出来事及び経験は何ですか？それらが自分の世界観にどう影響を与えましたか？",
  "職場や私生活で、どんな人たちを一番尊敬していて、その人たちのどんなところを尊敬していますか？",
  "一番尊敬していないのはどんな人で、なぜそんな風に思いますか？",
  "これまでで最高（最悪）の上司（先輩）は誰ですか？そう思うのは、その上司が何をしたからですか？",
  "自分の子供を育てたり、他人を指導するにあたり、一番伝えたいのはどんな行動で、一番伝えたくないのはどんな行動ですか？",
];

export default async function ParamsHandler({ params } : {params: Promise<{ id : string}>}) {
    const id = (await params).id
  const currentIndex = parseInt(id, 10);

  // 質問インデックスの検証
  if (isNaN(currentIndex) || currentIndex < 0 || currentIndex >= questions.length) {
    return <p>質問が見つかりませんでした。</p>;
  }

  // 次のコンポーネントにデータを渡す
  return <LogicHandler currentIndex={currentIndex} question={questions[currentIndex]} />;
}
