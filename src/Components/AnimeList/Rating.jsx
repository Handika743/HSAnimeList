import React from "react";
import { StarOff, Star } from "lucide-react";

const Rating = ({ rating, setRating }) => {
  const maxRating = 5;
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  const handleClick = (value) => {
    if (rating === value) {
      setRating(0); // klik dua kali = reset rating
    } else {
      setRating(value); // set rating baru
    }
  };
  return (
    <div className="flex gap-1 mb-2">
      {stars.map((value) => {
        const Icon = value <= rating ? Star : StarOff;
        return (
          <Icon
            key={value}
            size={30}
            onClick={() => handleClick(value)}
            className={`cursor-pointer transition-transform hover:scale-110 ${
              value <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Rating;
