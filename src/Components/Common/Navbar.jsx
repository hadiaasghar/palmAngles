import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Search from "./Search";
import ToggleMenuBar from "./ToggleMenuBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative"> {/* Make parent relative for absolute positioning */}
      <div className="flex items-center justify-between mb-4 mx-4">
        <div>
          <h2
            className="text-3xl font-medium"
            style={{ fontFamily: "'UnifrakturCook', cursive" }}
          >
            Palm Angels
          </h2>
        </div>
        <div className="flex items-center gap-4">
          {/* Wishlist Icon */}
          <div className="relative group hidden md:flex flex-col items-center">
            <CiHeart className="cursor-pointer" size={24} />
            <span className="absolute top-7 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Wishlist
            </span>
          </div>
          {/* Profile Icon */}
          <div className="relative group flex flex-col items-center">
            <IoPersonOutline className="cursor-pointer" size={24} />
            <span className="absolute top-7 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              login
            </span>
          </div>
          <BsHandbag className="cursor-pointer" size={24} />
          {/* Toggle Menu Icon */}
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RxCross1 size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>
      </div>
      <Search className="" />
      {menuOpen && <ToggleMenuBar />}
     

    </div>
  );
};

export default Navbar;



