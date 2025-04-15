import React from "react";
import { Star, User } from "lucide-react";

const GenreBottom = ({ rating, members }) => {
  return (
    <div className="flex justify-between p-2">
      <div>
        <p className="flex gap-1">
          <span>
            <Star className="fill-accent text-accent" />
          </span>{" "}
          {rating}
        </p>
      </div>
      <div>
        <p className="flex gap-1">
          <span>
            <User className="fill-gray-500 text-gray-500" />
          </span>
          {members}
        </p>
      </div>
    </div>
  );
};

export default GenreBottom;
