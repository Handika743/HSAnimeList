import AnimeList from "@/Components/AnimeList";
import Header from "@/Components/AnimeList/header";
import { getAnimeResponse } from "@/libs/api-libs";

const SearchPage = async ({ params }) => {
  const { keyword } = await params;
  const decodeKeyword = decodeURIComponent(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  return (
    <div>
      <section>
        <Header title={`Hasil Pencarian ${decodeKeyword}`} />
        <div className="grid grid-cols-2 gap-4  sm:grid-cols-3 md:grid-cols-4 mx-5 text-color-primary">
          <AnimeList api={searchAnime} />
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
