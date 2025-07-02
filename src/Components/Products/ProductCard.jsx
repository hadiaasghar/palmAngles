// import React, { useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const ProductCard = ({
//   product,
//   cardClassName = "",
//   imageHeight = "h-[400px]",
// }) => {
//   const [imgIdx, setImgIdx] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (product.images.length > 1) setImgIdx(1);
//   };
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setImgIdx(0);
//   };

//   const handlePrev = (e) => {
//     e.stopPropagation();
//     setImgIdx((prev) =>
//       prev === 0 ? product.images.length - 1 : prev - 1
//     );
//   };
//   const handleNext = (e) => {
//     e.stopPropagation();
//     setImgIdx((prev) =>
//       prev === product.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div
//       className={`bg-white flex flex-col overflow-hidden ${cardClassName}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className={`relative`}>
//         <img
//           src={product.images[imgIdx].url}
//           alt={product.images[imgIdx].altText || product.name}
//           className="object-cover w-full h-full"
//           draggable="false"
//         />
//         {/* Heart Icon */}
//         <button className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors">
//           <CiHeart size={26} />
//         </button>
//         {/* Left/Right Arrows - only show on hover */}
//         {product.images.length > 1 && isHovered && (
//           <>
//             <button
//               className="absolute left-2 top-1/2 "
//               onClick={handlePrev}
//             >
//               <FiChevronLeft size={22} />
//             </button>
//             <button
//               className="absolute right-2 top-1/2 "
//               onClick={handleNext}
//             >
//               <FiChevronRight size={22} />
//             </button>
//           </>
//         )}
//       </div>
//       <div className="flex-1 flex flex-col justify-between py-5">
//         <Link to={`/product/${product._id || product.id}`}>
//           <h3 className="uppercase font-semibold text-base tracking-tight mb-2">
//             {product.name}
//           </h3>
//         </Link>
//         <div className="flex items-end gap-2">
//           <span className="font-bold text-lg">£{product.price}</span>
//           <span className="line-through text-gray-400 text-base">£260</span>
//           <span className="text-[#C62637] text-base">(-35%)</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  cardClassName = "",
  imageHeight = "h-[450px]",
}) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) setImgIdx(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      className={`bg-white flex flex-col overflow-hidden ${cardClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 👇 Use imageHeight prop here */}
      
      <div className={`relative w-full ${imageHeight} min-h-[450px]`}>

        <img
          src={product.images[imgIdx].url}
          alt={product.images[imgIdx].altText || product.name}
          className="object-cover w-full h-full"
          draggable="false"
        />

        <button className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors">
          <CiHeart size={26} />
        </button>

        {product.images.length > 1 && isHovered && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              onClick={handlePrev}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={handleNext}
            >
              <FiChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between pt-3  px-3">
  <Link to={`/product/${product._id || product.id}`}>
    <h3 className="uppercase font-semibold text-base tracking-tight ">
      {product.name}
    </h3>
  </Link>
  <div className="flex items-end gap-2">
    <span className="font-bold text-lg">£{product.price}</span>
    <span className="line-through text-gray-400 text-base">£260</span>
    <span className="text-[#C62637] text-base">(-35%)</span>
  </div>
</div>

    </div>
  );
};

export default ProductCard;
