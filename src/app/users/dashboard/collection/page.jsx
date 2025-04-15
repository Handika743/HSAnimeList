import Link from "next/link";
import Image from "next/image";
import DashboardHeader from "@/Components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const collectionPage = async () => {
  const user = await authUserSession();

  // 1. Ambil koleksi user dari database
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  }

  return (
    <>
      <section className="mt-4 px-4 w-full ">
        <DashboardHeader title={"My Collection"} />
        <div className="flex items-center w-full justify-center ">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 ">
            {collection.map((collect, index) => (
              <Link
                href={`/Detail/${collect.anime_mal_id}`}
                className="w-[150px] h-[200px] relative overflow-hidden rounded-xl lg:w-[250px] lg:h-[300px] md:w-[200px] md:h-[250px] border-2 border-accent"
                key={index}
              >
                <Image
                  src={collect.anime_image}
                  alt={collect.anime_alt_image}
                  fill
                  className="object-cover hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-full bg-accent h-12 z-10">
                  <h5 className="text-sm text-center text-secondary md:text-base">
                    {truncateString(collect.anime_title, 35)}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default collectionPage;
