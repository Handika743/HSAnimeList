"use client";
import Link from "next/link";
// import { authUserSession } from "@/libs/auth-libs";
import { CircleUserRound, ChevronDown, LogOut, LogIn } from "lucide-react";
import Image from "next/image";
import { useUser } from "@/context/userContext";
import { useEffect, useRef } from "react";

const UserActionButton = () => {
  const user = useUser();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const userDrop = useRef(null);
  const dropDownMenu = useRef(null);
  const dropDown = useRef(null);

  const DropDown = () => {
    if (dropDownMenu.current && dropDown.current) {
      userDrop.current.classList.toggle("userDrop");
      dropDownMenu.current.classList.toggle("DropDownMenu");
    }
  };

  const closeMenu = () => {
    if (dropDownMenu.current && dropDown.current) {
      userDrop.current.classList.remove("userDrop");
      dropDownMenu.current.classList.remove("DropDownMenu");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDown.current &&
        !dropDown.current.contains(event.target) &&
        dropDownMenu.current &&
        !dropDownMenu.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // ✅ Dependency array kosong agar tidak terus mendaftar ulang event

  return (
    <div className="rounded-full  border border-primary  w-full  relative">
      {/* Wrapper untuk memastikan ukuran gambar full */}
      <div
        className="w-full h-10 overflow-hidden rounded-full flex items-center justify-center p-1"
        onClick={DropDown}
        ref={dropDown}
      >
        {user ? (
          <div className="flex items-center h-full w-full rounded-full">
            <Image
              src={user.image}
              alt="User Profile"
              width={35}
              height={35} // Menggunakan fill agar full di dalam div
              className="rounded-full"
              // onClick={(e) => e.stopPropagation()}
            />
          </div>
        ) : (
          <div className="flex items-center h-full  w-full rounded-full">
            <CircleUserRound size={35} strokeWidth={1} />
          </div>
        )}
        <ChevronDown
          className="transform duration-300 ease-in-out"
          size={30}
          ref={userDrop}
        />
      </div>

      <div
        className="bg-secondary border border-primary absolute w-[300px] scale-y-0 origin-top-left transform duration-300 ease-in-out mt-1 right-2 overflow-hidden rounded-lg opacity-95"
        ref={dropDownMenu}
      >
        <ul className=" text-sm md:text-md space-y-2">
          {user ? (
            <>
              <li className=" px-4 py-1 truncate">{user.name}</li>
              <li className=" px-4 py-1 break-words">{user.email}</li>
            </>
          ) : (
            <li className="px-4 py-1">Guest</li>
          )}

          <Link href={actionURL} className="flex border-t px-4 py-2 gap-4">
            <li className="">{actionLabel}</li>
            {user ? (
              <LogOut size={25} strokeWidth={1.5} />
            ) : (
              <LogIn size={25} strokeWidth={1.5} />
            )}
          </Link>
        </ul>
      </div>

      {/* <div className="hidden md:block lg:block">{actionLabel}</div> */}
    </div>
  );
};

export default UserActionButton;
