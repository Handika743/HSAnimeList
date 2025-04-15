"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeList = (props) => {
  const { api } = props;
  // Hapus duplikat berdasarkan mal_id
  const uniqueAnime = api.data?.filter(
    (anime, index, self) =>
      index === self.findIndex((a) => a.mal_id === anime.mal_id)
  );
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  }
  // const ScrollTop = () => {
  //   scrollTo({
  //     behavior: "smooth",
  //     top: 0,
  //   });
  // };

  return (
    <>
      {uniqueAnime?.map((anime) => {
        return (
          <div
            key={anime.mal_id}
            className="p-2 m-1 hover:text-accent  flex justify-center items-center"
          >
            <Link
              href={`/Detail/${anime.mal_id}`}
              // onClick={ScrollTop}
              className="cursor-pointer flex flex-col justify-center items-center  w-[150px] lg:w-[200px] "
            >
              <div
                className={`w-[150px] h-[200px]  relative overflow-hidden rounded-xl lg:w-[200px] lg:h-[250px] `}
              >
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  fill
                  className="object-cover  hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="h-20  w-full">
                <p className="text-base font-semibold p-2 text-center hover:text-color-accent">
                  {truncateString(anime.title, 30)}
                </p>
              </div>
              {/* <div className="flex  items-center justify-end gap-2 pr-3 w-full "></div> */}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default AnimeList;
