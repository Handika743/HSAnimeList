"use client";
import Link from "next/link";
import Hamburger from "./hamburger";
import { useRef, useEffect } from "react";
import { Info, LayoutDashboard, Tags } from "lucide-react";
import { useUser } from "@/context/userContext";

const NavMenu = () => {
  const navMenu = useRef(null);
  const hamburgerRef = useRef(null);
  const user = useUser();
  // Fungsi Toggle Menu
  const toggleMenu = () => {
    if (hamburgerRef.current && navMenu.current) {
      hamburgerRef.current.classList.toggle("hamburger-active");
      navMenu.current.classList.toggle("NavbarToggle");
    }
  };

  // Fungsi untuk Menutup Menu
  const closeMenu = () => {
    if (hamburgerRef.current && navMenu.current) {
      hamburgerRef.current.classList.remove("hamburger-active");
      navMenu.current.classList.remove("NavbarToggle");
    }
  };

  // Detect klik di luar menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navMenu.current &&
        !navMenu.current.contains(event.target) && // Pastikan klik di luar navMenu
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) // Pastikan klik bukan pada tombol hamburger
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Tombol Hamburger */}
      <Hamburger toggleMenu={toggleMenu} ref={hamburgerRef} />

      {/* Menu Navigasi */}
      <div
        ref={navMenu}
        className="absolute left-0 top-full h-screen w-auto p-5 transition-transform duration-300 ease-in-out -translate-x-full bg-secondary/95"
      >
        <ul>
          <div className={` ${user ? "block" : "hidden"}`}>
            <Link
              href={"/users/dashboard"}
              onClick={closeMenu}
              className="flex p-3 gap-3"
            >
              <LayoutDashboard />
              <li>Dashboard</li>
            </Link>
          </div>
          <div>
            <Link
              href={"/About"}
              onClick={closeMenu}
              className="flex p-3 gap-3"
            >
              <Info />
              <li className="">About</li>
            </Link>
          </div>
          <div>
            <Link
              href={"/Genre"}
              onClick={closeMenu}
              className="flex p-3 gap-3"
            >
              <Tags />
              <li className="">Genre</li>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
