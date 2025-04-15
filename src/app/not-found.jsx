"use client";
import { FileSearch } from "lucide-react";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center ">
      <div className="flex justify-center items-center gap-4 flex-col text-accent">
        {/* <FileSearch size={44} className="text-color-accent"></FileSearch> */}
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-4xl text-accent text-center">
          Halaman Tidak Ditemukan
        </h1>
        <button
          onClick={() => router.back()}
          className="text-primary text-primaryhover:text-accent transition-all underline "
        >
          Kembali
        </button>
      </div>
    </div>
  );
};
export default Page;
