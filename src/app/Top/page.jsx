"use client";
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "../../Components/AnimeList";
import { useEffect, useState } from "react";
import HeaderMenu from "../../Components/Utilities/HeaderMenu";
import Pagination from "../../Components/Utilities/Pagination";

const TopAnimePage = () => {
  const [page, SetPage] = useState(1);
  const [topAnime, SetTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    SetTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <HeaderMenu title={`Anime Top #${page}`} />
        <div className="grid grid-cols-2 gap-4  lg:grid-cols-5 md:grid-cols-4  text-color-primary">
          <AnimeList api={topAnime} />
        </div>
        <Pagination
          page={page}
          SetPage={SetPage}
          lastPage={topAnime.pagination?.last_visible_page}
        />
      </section>
    </>
  );
};

export default TopAnimePage;
