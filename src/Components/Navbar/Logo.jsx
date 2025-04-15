"use client";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  const ScrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <>
      <Link href={"/"} onClick={ScrollTop}>
        <div className="flex items-center gap-4 ">
          <Image
            src="/HS_LOGOV2.png"
            width={50}
            height={50}
            alt="/HS_LOGOV2.png"
          />

          <div className="hidden md:block lg:block">
            <h1 className="text-3xl font-bold ">HSanime</h1>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Logo;
