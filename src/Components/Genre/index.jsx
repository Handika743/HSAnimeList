import Loading from "@/app/loading";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus } from "lucide-react";
import GenreBottom from "./bottom";

const GenreList = ({ api }) => {
  if (!api || !api.data) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const uniqueAnime = api.data.filter(
    (anime, index, self) =>
      index === self.findIndex((a) => a.mal_id === anime.mal_id)
  );

  const ScrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {uniqueAnime?.map((anime) => (
        <div key={anime.mal_id} className="border border-primary rounded-md ">
          <div className="flex min-h-20 items-center justify-center font-bold">
            <Link
              href={`/Detail/${anime.mal_id}`}
              className="p-6 text-center"
              onClick={ScrollTop}
            >
              {anime.title}
            </Link>
          </div>
          <div className="flex items-center gap-3 justify-center text-xs bg-gray-900 opacity-90 py-2">
            <div>
              <p>
                {anime.type}, {anime.aired?.prop?.from?.year ?? "?"}
              </p>
            </div>
            <div className="border-x border-gray-400 px-2">
              <p>{anime.status}</p>
            </div>
            <div>
              <p>
                {anime.episodes ? anime.episodes : "?"} Eps,{" "}
                {anime.duraion === "Unknown" ? anime.duration : "0 Min"}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-3 text-xs p-2">
            {anime.genres?.map((genre) => {
              return (
                <Link
                  key={genre.mal_id}
                  href={`/Genre/${genre.mal_id}/${genre.name}`}
                  className="p-1 border border-primary rounded-md text-center"
                >
                  {genre.name}
                </Link>
              );
            })}
          </div>
          <div className="flex h-[300px] px-2 items-center">
            <div className="min-w-[150px] h-[250px] relative overflow-hidden rounded-md">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                fill
                className="object-cover"
              ></Image>
            </div>

            <div className="w-0.5 h-[250px] bg-gray-700 block m-2"></div>
            <div className="overflow-y-scroll text-justify pr-2 text-sm scroll-hidden h-[250px]">
              {anime.synopsis}
            </div>
          </div>
          <div>
            <GenreBottom
              rating={anime.score ? anime.score : "N/A"}
              members={anime.members}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
