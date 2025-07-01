import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Reusable ProductCard component with image carousel
const ProductCard = ({ product }) => {
  const [imgIdx, setImgIdx] = useState(0);

  // Show second image on hover, revert on mouse leave
  const handleMouseEnter = () => {
    if (product.images.length > 1) setImgIdx(1);
  };
  const handleMouseLeave = () => {
    setImgIdx(0);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setImgIdx((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setImgIdx((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="bg-white flex flex-col overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-80 flex items-center justify-center bg-gray-400">
        <img
          src={product.images[imgIdx].url}
          alt={product.images[imgIdx].altText || product.name}
          className="object-contain max-h-full max-w-full mx-auto"
          draggable="false"
        />
        {/* Heart Icon */}
        <button className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors">
          <CiHeart size={26} />
        </button>
        {/* Left/Right Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-1 hover:bg-black/10 transition-colors"
              onClick={handlePrev}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-1 hover:bg-black/10 transition-colors"
              onClick={handleNext}
            >
              <FiChevronRight size={22} />
            </button>
          </>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between px-6 py-5">
        <Link to={`/product/${product._id}`}>
          <h3 className="uppercase font-semibold text-base tracking-tight mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-end gap-2">
          <span className="font-bold text-lg">£{product.price}</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product._id || product.id || index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
