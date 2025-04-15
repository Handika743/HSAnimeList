import HeaderMenu from "@/Components/Utilities/HeaderMenu";
import { getAnimeResponse } from "@/libs/api-libs";
import React from "react";
import Link from "next/link";

const GenrePage = async () => {
  const genreList = await getAnimeResponse("genres/anime");

  return (
    <section>
      <HeaderMenu title="Genre List" />
      <div className="grid grid-cols-3 gap-2 mx-10 md:grid-cols-4 lg:grid-cols-5">
        {genreList.data.map((genre) => {
          return (
            <Link
              key={genre.mal_id}
              href={`/Genre/${genre.mal_id}/${genre.name}`}
              className="bg-primary text-secondary rounded-md p-2"
            >
              <h5 className="flex justify-center items-center text-center text-xs">
                {genre.name}
              </h5>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default GenrePage;
