"use client"; // Pastikan file ini client component

import { useUser } from "@/context/userContext"; // Import hook yang benar
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const UserDashboard = () => {
  // const sesssion = await authUserSession();
  const user = useUser(); // Ambil user dari context
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/not-found");
    }
  }, [user]);
  if (!user) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-2xl">Selamat datang, {user.name}</h1>
        <div className="w-[250px] h-[250px] relative rounded-full  overflow-hidden">
          <Image src={user.image} alt="..." fill className="object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={"/users/dashboard/collection"}
            className="bg-accent p-2 text-secondary font-bold text-md rounded-lg border border-secondary"
          >
            My Collection
          </Link>
          <Link
            href={"/users/dashboard/comment"}
            className="bg-accent p-2 text-secondary font-bold text-md rounded-lg border border-secondary"
          >
            My Comment
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
