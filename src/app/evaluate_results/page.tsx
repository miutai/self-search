"use client";

import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEvaluations } from "../context/EvaluationsContext";

export default function ResultsPage() {
  const { evaluations } = useEvaluations();
  const router = useRouter();

  // スター付き項目を抽出
  const initialStarredItems: string[] = Object.entries(evaluations)
    .filter(([, value]) => value === "★")
    .map(([item]) => item);

  const [starredItems, setStarredItems] = useState<string[]>(initialStarredItems);

  // ドラッグ終了時の処理
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setStarredItems((items) => {
        const oldIndex = items.indexOf(active.id.toString());
        const newIndex = items.indexOf(over!.id.toString());
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // 次のページに移動
  const handleNextPage = () => {
    const topTenItems = starredItems.slice(0, 10);
    localStorage.setItem("topTenItems", JSON.stringify(topTenItems));
    router.push("/top_ten_results");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">評価結果</h1>
      <p className="text-center">これで最後です！<br/>
      あなたが★を選んだ項目を表示しています。<br/>
      これらを入れ替えてあなたが大事にしている価値観のtop10を決めてください。</p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={starredItems}
            strategy={verticalListSortingStrategy}
          >
            {starredItems.map((item, index) => (
              <SortableItem key={item} id={item} rank={index < 10 ? index + 1 : null} />
            ))}
          </SortableContext>
        </DndContext>
        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleNextPage}
        >
          1～10位を見る
        </button>
      </div>
    </div>
  );
}

// 個々の項目をドラッグ可能にするコンポーネント
function SortableItem({ id, rank }: { id: string; rank: number | null }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-start items-center mb-2"
    >
      {rank !== null ? <span className="text-xl font-bold mr-4">{rank}</span> : <span />}
      <p className="text-lg font-medium">{id}</p>
    </div>
  );
}
