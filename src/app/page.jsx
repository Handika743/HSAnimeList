import Image from "next/image";
import AnimeList from "../Components/AnimeList";
import Header from "../Components/AnimeList/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Home = async () => {
  const api = await getAnimeResponse("top/anime", "limit=8");
  let rekomenddasiAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  const test = reproduce(rekomenddasiAnime, 12);
  console.log(test);

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="Lihat Semua" linkHref="/Top" />
        <div className="w-full overflow-auto flex gap-3 text-color-primary pl-3">
          <AnimeList api={api} />
        </div>
      </section>
      <section>
        <Header title="Rekomendasi" />
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 text-color-primary">
          <AnimeList api={test} />
        </div>
      </section>
      {/* <section>
        <Header title="Top Anime" linkTitle="Lihat Semua" linkHref="/populer" />
        <div className="w-full overflow-auto flex gap-3 text-color-primary">
          <AnimeList api={api} />
        </div>
      </section> */}
    </>
  );
};
export default Home;
