"use client";
import { Search, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SearchInput = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchInput = useRef(null);
  const router = useRouter();
  const buttonHandle = useRef(null);
  const searchIcon = useRef(null);
  const closeIcon = useRef(null);

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      const keyword = searchInput.current.value;
      if (!keyword.trim()) return;

      setIsLoading(true); // 🔄 Aktifkan loading

      setTimeout(() => {
        router.push(`/Search/${keyword}`); // 🚀 Navigasi ke halaman pencarian

        setIsLoading(false); // Matikan loading (opsional, karena pindah halaman)

        if (onClose) {
          onClose(); // Tutup navbar jika ada
        }
      }); // ⏳ Delay 1.5 detik sebelum navigasi
    }
  };

  const handleInput = () => {
    if (buttonHandle.current) {
      searchInput.current.classList.toggle("buttonHandle");
      buttonHandle.current.classList.toggle("searchActive");
      searchIcon.current.classList.toggle("searchIcon");
      closeIcon.current.classList.toggle("closeIcon");
    }
  };
  return (
    <>
      <div className="flex  relative items-center  w-full ">
        <input
          type="text"
          // className=" text-black p-2 rounded-full h-8 outline-none transition-all duration-300 ease-in-out  scale-x-0  origin-top-right bg-transparent opacity-0 lg:h-10 lg:w-0 md:h-10 md:w-0 lg:origin-top-right"
          // className="transition-all  right-4 duration-200 ease-in-out text-black h-8 p-2 bg-primary origin-top-right outline-none
          // w-full scale-x-0 opacity-0 rounded-full
          // md:h-10
          // lg:h-10
          // "
          className=" h-10 rounded-full text-secondary outline-none p-2  w-[90%] absolute right-5 transition-all duration-300 ease-in-out   origin-top-right  bg-primary scale-x-0 opacity-0"
          placeholder="Cari..."
          ref={searchInput}
          onKeyDown={handleSearch}
        />

        <button
          ref={buttonHandle}
          // className="flex items-center  justify-center right-0 bg-gray-500 w-8 h-8 rounded-[50px] border transition-all duration-200 ease-in-out lg:h-10 lg:w-10 md:h-10 md:w-10"
          className="flex items-center  justify-center right-0 bg-gray-700 w-10 h-10 rounded-[50px] border transition-all duration-200 ease-in-out absolute"
          onClick={handleInput}
        >
          <Search
            ref={searchIcon}
            className="absolute scale-100 transition-all duration-300 ease-in-out"
          />
          <Plus
            ref={closeIcon}
            className="absolute scale-0 duration-300 ease-in-out"
          />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
