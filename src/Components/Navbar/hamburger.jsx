// "use client";
// import { useRef } from "react";

const Hamburger = ({ toggleMenu, ref }) => {
  // const hamburger = useRef(null);

  return (
    <div className="flex items-center px-4">
      <button ref={ref} className="block right-4 z-[999]" onClick={toggleMenu}>
        <span className="hamburger origin-top-left transition-all duration-300 ease-in-out"></span>
        <span className="hamburger origin-center transition-all duration-300 ease-in-out"></span>
        <span className="hamburger origin-bottom-left transition-all duration-300 ease-in-out"></span>
      </button>
    </div>
  );
};

export default Hamburger;
