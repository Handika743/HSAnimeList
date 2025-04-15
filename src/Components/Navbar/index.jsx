import Logo from "./Logo";
import SearchInput from "./search";
import UserActionButton from "./UserActionButton";

import NavMenu from "./NavMenu";
// import { useRef } from "react";
import { useUser } from "@/context/userContext";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 h-20 bg-secondary /95">
        <div className=" flex  justify-between h-20  gap-2 relative">
          <div className="flex items-center w-[30%] ">
            <div className="">
              <NavMenu user={useUser} />
            </div>
            <div className="">
              <Logo />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-5 md:gap-5 w-full justify-end ">
            <div className="w-[80%]">
              <SearchInput />
            </div>
            <div className="w-20 flex items-center justify-center mr-3  ">
              <UserActionButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
