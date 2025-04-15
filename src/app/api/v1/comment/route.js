import prisma from "@/libs/prisma";

export async function POST(request) {
  const {
    anime_mal_id,
    user_email,
    username,
    comment,
    anime_title,
    anime_image,
    anime_alt_image,
    rating,
  } = await request.json();
  const data = {
    anime_mal_id,
    user_email,
    username,
    comment,
    anime_title,
    anime_image,
    anime_alt_image,
    rating,
  };
  console.log(data);
  const createComment = await prisma.comment.create({ data });
  if (!createComment) {
    return Response.json({ status: 500, isCreated: false });
  } else {
    return Response.json({ status: 200, isCreated: true });
  }
}
