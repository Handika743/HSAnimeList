import prisma from "@/libs/prisma";
import React from "react";
import { Star } from "lucide-react";

const CommentBox = async ({ anime_mal_id }) => {
  const comment = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="mx-3">
      {comment.map((comment) => {
        const ratingValue = comment.rating;
        const stars = [];
        for (let i = 0; i < ratingValue; i++) {
          stars.push(
            <Star key={i} className="fill-accent text-accent" size={15} />
          );
        }
        return (
          <div key={comment.id} className="border-b border-gray-600">
            <div className="flex items-center gap-5">
              <p className="text-gray-500 text-sm">{comment.username}</p>
              <div className="flex">{stars}</div>
            </div>
            <p className="text-xs pl-3 p-2">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
