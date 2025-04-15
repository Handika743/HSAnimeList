import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import React from "react";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import { Star } from "lucide-react";

const commentPage = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 py-4 gap-4">
        {comments.map((comment) => {
          const ratingValue = comment.rating;
          const stars = [];
          for (let i = 0; i < ratingValue; i++) {
            stars.push(
              <Star key={i} className="fill-accent text-accent" size={15} />
            );
          }
          return (
            <Link
              href={`/Detail/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4 flex gap-2 items-center border-b border-gray-600"
            >
              <div className="w-[50px] h-[50px] relative rounded-md overflow-hidden">
                <Image
                  src={comment.anime_image}
                  alt={comment.anime_alt_image}
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <div className="w-full">
                <p className="text-sm">{comment.anime_title}</p>
                <div className="flex justify-between items-center">
                  <p className="italic">{comment.comment}</p>
                  <div className="flex">{stars}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default commentPage;
