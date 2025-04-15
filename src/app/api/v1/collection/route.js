import prisma from "@/libs/prisma";

export async function POST(request) {
  const {
    anime_mal_id,
    user_email,
    anime_image,
    anime_title,
    anime_alt_image,
  } = await request.json();
  const data = {
    anime_mal_id,
    user_email,
    anime_image,
    anime_title,
    anime_alt_image,
  };
  const createCollection = await prisma.collection.create({ data });
  if (!createCollection) {
    return Response.json({ status: 500, isCreated: false });
  } else {
    return Response.json({ status: 200, isCreated: true });
  }
}

export async function DELETE(request) {
  const { anime_mal_id, user_email } = await request.json();

  const deleteCollection = await prisma.collection.deleteMany({
    where: {
      anime_mal_id,
      user_email,
    },
  });

  if (deleteCollection.count === 0) {
    return Response.json({ status: 404, isDeleted: false });
  }

  return Response.json({ status: 200, isDeleted: true });
}
