import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import AnimeDetailClient from "@/Components/Detail";

const DetailPage = async ({ params }) => {
  const { id } = params;
  const response = await getAnimeResponse(`anime/${id}`);
  const detailAnime = response.data;

  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <AnimeDetailClient
      id={id}
      user={user}
      detailAnime={detailAnime}
      collection={collection}
    />
  );
};

export default DetailPage;
