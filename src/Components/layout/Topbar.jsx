import React, { useEffect, useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx"; // Import the close icon

const Topbar = () => {
  const [showShipping, setShowShipping] = useState(false);
  const [fade, setFade] = useState(true);
  const [visible, setVisible] = useState(true); // State to control visibility
  const timeoutRef = useRef();

  useEffect(() => {
    function animate() {
      setFade(false); // Start fade out
      timeoutRef.current = setTimeout(() => {
        setShowShipping((prev) => !prev); // Toggle message
        setFade(true); // Fade in new message
        timeoutRef.current = setTimeout(animate, 2000); // Show new message for 2s
      }, 1000); // 1s gap (faded out)
    }

    timeoutRef.current = setTimeout(animate, 2000); // Initial message for 2s

    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!visible) return null; // Hide Topbar if not visible

  return (
    <div className="bg-[#C62637] h-10 mb-4 text-black flex items-center justify-center relative">
      <div
        className={`flex items-center gap-2 justify-center w-full max-w-6xl px-4 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {!showShipping ? (
          <>
            <FaAngleLeft size={24} />

            <p className="uppercase text-xs xs:text-sm sm:text-base text-center truncate max-w-[60vw] sm:max-w-[40vw] md:max-w-none">
              Subscribe to our newsletter, For you 50% Discount Now.
            </p>
            <FaAngleRight size={24} />
          </>
        ) : (
          <>
            <FaAngleLeft size={24} />
            <p className="uppercase">Enjoy Free shipping</p>
            <FaAngleRight size={24} />
          </>
        )}
      </div>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
        onClick={() => setVisible(false)}
        aria-label="Close Topbar"
      >
        <RxCross1 size={20} />
      </button>
    </div>
  );
};

export default Topbar;
