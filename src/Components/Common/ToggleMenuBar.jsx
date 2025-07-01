import React from "react";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { menuData } from "../../utils/menuBarData";

const ToggleMenuBar = () => (
  <div className="mx-4">
    {menuData.map((item, idx) => (
      <MenuItem key={idx} item={item} />
    ))}
    <div className="flex flex-col items-start py-8 mb-4 w-full border-b border-gray-400">
      <div className="flex gap-2">
        <GoPerson size={24} />
        <p>Log In</p>
      </div>
      <div className="flex gap-2 mt-4">
        <CiHeart size={24} />
        <p>Wishlist</p>
      </div>
    </div>
    <div className="flex gap-2 mt-8 mb-10">
      <GrLocation size={24} />
      <p>Find In Store</p>
    </div>
  </div>
);

export default ToggleMenuBar;
