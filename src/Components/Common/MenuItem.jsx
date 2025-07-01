import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center py-4 justify-between w-full border-b border-gray-400 cursor-pointer"
        onClick={() => item.sub && setOpen((prev) => !prev)}
      >
        <p className="uppercase font-semibold text-sm">{item.label}</p>
        {item.sub ? <FaChevronRight /> : null}
      </div>
      {item.sub && open && (
        <div
          className="fixed inset-0 bg-black/20 z-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 w-full bg-white shadow-lg z-20"
            style={{ minHeight: "100vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {item.sub.map((subItem, idx) => (
              <div
                key={idx}
                className="py-4 px-6 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                {subItem.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;