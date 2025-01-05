"use client";

import { useEffect, useState } from "react";

export default function TopTenResultsPage() {
  const [topTenItems, setTopTenItems] = useState<string[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("topTenItems");
    if (storedItems) {
      setTopTenItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-3">1～10位の結果</h1>
      <p className="text-center">お疲れさまでした！</p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        {topTenItems.map((item, index) => (
          <div
            key={item}
            className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-start items-center mb-2"
          >
            <span className="text-xl font-bold mr-4">{index + 1}</span>
            <p className="text-lg font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
