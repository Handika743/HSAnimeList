"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AnimeList from "@/Components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";
import Pagination from "@/Components/Utilities/Pagination";
import GenreList from "@/Components/Genre";
import HeaderMenu from "@/Components/Utilities/HeaderMenu";
import Loading from "@/app/loading";

const AnimeGenre = () => {
  const params = useParams();
  const id = params.id;
  const name = decodeURIComponent(params.name);
  const router = useRouter();

  const [page, SetPage] = useState(1);
  const [genreAnime, SetGenreAnime] = useState([]);
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(false);

  const statusAnime = [
    { label: "Semua", value: "all" },
    { label: "Sedang Tayang", value: "airing" },
    { label: "Tamat", value: "complete" },
    { label: "Belum Tayang", value: "upcoming" },
  ];

  const fetchdata = async () => {
    setLoading(true); // 🔥 Start loading
    const query =
      status === "all"
        ? `genres=${id}&page=${page}&order_by=start_date&sort=desc`
        : `genres=${id}&page=${page}&order_by=start_date&sort=desc&status=${status}`;

    const genreAnimesApi = await getAnimeResponse("anime", query);
    SetGenreAnime(genreAnimesApi);
    setLoading(false); // ✅ Stop loading
  };

  const handleChangeAnimeStatus = (event, statusValue) => {
    event.preventDefault();
    setStatus(statusValue);
    SetPage(1); // Reset page ke awal
  };

  useEffect(() => {
    fetchdata();
  }, [id, page, status]);

  return (
    <section className="flex flex-col justify-center w-full items-center">
      <HeaderMenu title={`Anime Genre ${name}, #${page}`} />

      <div className="flex gap-2 items-start p-2">
        {statusAnime.map((item) => (
          <button
            key={item.value}
            onClick={(event) => handleChangeAnimeStatus(event, item.value)}
            className={`p-1 rounded-md border ${
              status === item.value
                ? "bg-red-600 text-white"
                : "bg-accent text-secondary border-secondary"
            } transition duration-300 ease-in-out`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 🔄 Show Loading While Fetching */}
      {loading ? (
        <div className="w-full h-[400px] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="mx-10">
            <GenreList api={genreAnime} />
          </div>
          <Pagination
            SetPage={SetPage}
            page={page}
            lastPage={genreAnime?.pagination?.last_visible_page}
          />
        </>
      )}
    </section>
  );
};

export default AnimeGenre;
