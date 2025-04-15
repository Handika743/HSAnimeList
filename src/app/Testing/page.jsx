"use client";
import { useState } from "react";
import { Star, StarOff } from "lucide-react";

export default function RatingPage() {
  const [rating, setRating] = useState(0); // hanya menyimpan rating yang diklik

  const handleClick = (value) => {
    setRating(value);
    console.log("Rating disimpan:", value);
    // Kirim ke backend kalau perlu
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-2xl font-bold mb-4">Beri Rating</h1>

      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((value) => {
          const isFilled = value <= rating;
          const Icon = isFilled ? Star : StarOff;

          return (
            <Icon
              key={value}
              size={40}
              onClick={() => handleClick(value)}
              className={`cursor-pointer transition-all duration-200 ${
                isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
              }`}
            />
          );
        })}
      </div>
      <button onClick={() => setRating(0)}>Cancel</button>
      {rating > 0 && (
        <p className="text-gray-700">Kamu memberi rating: {rating} bintang</p>
      )}
    </div>
  );
}
