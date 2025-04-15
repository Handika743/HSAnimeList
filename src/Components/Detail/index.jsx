import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import CollectionButton from "@/Components/AnimeList/CollectionButton";
import VideoPlayer from "@/Components/Utilities/VideoPlayer";
import CommentInput from "@/Components/AnimeList/CommentInput";
import CommentBox from "@/Components/AnimeList/CommentBox";

const AnimeDetailClient = ({ detailAnime, user, id, collection }) => {
  return (
    <section>
      <div className="p-5">
        <h1 className="flex justify-center text-2xl font-bold text-center">
          {detailAnime.title}
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center gap-3">
          <div className="relative w-[150px] h-[200px] lg:w-[250px] lg:h-[300px] md:w-[250px] md:h-[300px] border-2 border-primary rounded-xl overflow-hidden">
            {user && (
              <CollectionButton
                anime_mal_id={id}
                user_email={user.email}
                anime_image={detailAnime.images.webp.image_url}
                anime_title={detailAnime.title}
                anime_alt_image={detailAnime.images.jpg.image_url}
                initialCollectionStatus={!!collection}
              />
            )}
            <Image
              src={detailAnime.images.webp.image_url}
              alt={detailAnime.title}
              fill
              className="object-cover hover:scale-110 transition-all duration-300"
            />
          </div>
          <VideoPlayer youtubeId={detailAnime.trailer.youtube_id} />
        </div>
      </div>

      {/* info dan genre */}
      <div className="p-2.5 flex flex-wrap justify-center items-center gap-2 text-sm text-primary">
        {/* Info angka */}
        <div className="flex gap-2 overflow-x-auto">
          {[
            { title: "PERINGKAT", value: detailAnime.rank },
            { title: "SKOR", value: detailAnime.score },
            { title: "FAVORITE", value: detailAnime.favorites },
            { title: "EPISODE", value: detailAnime.episodes },
          ].map((item) => (
            <div
              key={item.title}
              className="w-36 flex flex-col items-center rounded border border-color-accent p-2"
            >
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Genre */}
        <div className="flex flex-col items-center rounded border border-color-accent p-2">
          <h3 className="font-bold">GENRE</h3>
          <div className="flex flex-wrap justify-center gap-1">
            {detailAnime.genres.map((genre, idx) => (
              <Link
                key={genre.mal_id}
                href={`/Genre/${genre.mal_id}/${encodeURIComponent(
                  genre.name
                )}`}
              >
                {genre.name}
                {idx < detailAnime.genres.length - 1 && <span>,&nbsp;</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Durasi + Skor */}
        <div className="flex flex-col items-center rounded border border-color-accent p-2">
          <h3 className="font-bold">DURASI</h3>
          <p>{detailAnime.duration}</p>
        </div>
        <div className="flex flex-col items-center rounded border border-color-accent p-2">
          <h3 className="font-bold">SKOR</h3>
          <div className="flex items-center gap-1">
            <Star size={19} className="text-accent fill-accent" />
            <p>{detailAnime.score}</p>
          </div>
        </div>
      </div>

      {/* Sinopsis */}
      <div className="pt-4 px-4">
        <p className="text-justify text-sm lg:text-lg md:text-md text-color-primary">
          {detailAnime.synopsis}
        </p>
      </div>

      {/* Komentar */}
      <div className="pt-4 px-4 border border-primary m-2 max-h-[350px]">
        <h5 className="font-bold text-lg">Komentar :</h5>
        <CommentBox anime_mal_id={id} />
      </div>

      {user && (
        <div className="px-4 py-2">
          <CommentInput
            anime_mal_id={id}
            user_email={user.email}
            username={user.name}
            anime_title={detailAnime.title}
            anime_image={detailAnime.images.webp.image_url}
            anime_alt_image={detailAnime.images.jpg.image_url}
          />
        </div>
      )}
    </section>
  );
};

export default AnimeDetailClient;
