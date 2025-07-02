


// import React, { useRef } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import ProductCard from '../Products/ProductCard'; // adjust the path

// const CompleteLook = () => {
//   const scrollRef = useRef(null);

//   const completeLookProducts = [
//     {
//       _id: 1,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp1.jpg", altText: "Stylish Jacket" },
//         { url: "comp2.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 2,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp3.jpg", altText: "Stylish Jacket" },
//         { url: "comp4.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 3,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp5.jpg", altText: "Stylish Jacket" },
//         { url: "comp1.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 4,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp2.jpg", altText: "Stylish Jacket" },
//         { url: "comp5.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//   ];

//   const handleScroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 220;
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="flex mb-12">
//       {/* Left Side Image */}
//       <div className="w-1/2 h-[120vh]">
//         <img
//           className="object-cover w-full h-full"
//           src="compltelook.avif"
//           alt="Complete Look"
//         />
//       </div>

//       {/* Right Side Scrollable Cards */}
//       <div className="hidden md:flex md:flex-col md:w-1/2 h-[120vh]">
//         <div className="flex w-full px-4 mt-14   mb-8 items-center justify-between">
//           <h2 className="uppercase font-bold">Complete The Look</h2>
//           <div className="flex gap-4">
//             <button onClick={() => handleScroll('left')}>
//               <FaChevronLeft />
//             </button>
//             <button onClick={() => handleScroll('right')}>
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         <div
//           ref={scrollRef}
//           className="flex gap-4  px-24  overflow-x-auto scrollbar-hide pb-6"
//         >
//           {completeLookProducts.map((item) => (
//             <ProductCard
//               key={item._id}
//               product={item}
//               cardClassName="min-w-[220px] flex-shrink-0 h-auto"
//               imageHeight="h-[280px]" // adjust if needed
//             />
//           ))}
          
//         </div>
//          <div className='flex items-center justify-center w-8 h-1'>

// {/*mini scrollbar*/}
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default CompleteLook;



// import React, { useRef, useEffect, useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import ProductCard from '../Products/ProductCard';

// const CompleteLook = () => {
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isScrollable, setIsScrollable] = useState(false);

//   const completeLookProducts = [
//     {
//       _id: 1,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp1.jpg", altText: "Stylish Jacket" },
//         { url: "comp2.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 2,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp3.jpg", altText: "Stylish Jacket" },
//         { url: "comp4.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 3,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp5.jpg", altText: "Stylish Jacket" },
//         { url: "comp1.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 4,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp2.jpg", altText: "Stylish Jacket" },
//         { url: "comp5.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//     {
//       _id: 5,
//       name: "Stylish Jacket",
//       price: 120,
//       images: [
//         { url: "comp2.jpg", altText: "Stylish Jacket" },
//         { url: "comp5.jpg", altText: "Stylish Jacket" },
//       ],
//     },
//   ];

//   const handleScroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 220;
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const updateScrollIndicator = () => {
//     const el = scrollRef.current;
//     if (el) {
//       const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
//       setScrollPosition(progress);
//     }
//   };

//   const checkScrollable = () => {
//     const el = scrollRef.current;
//     if (el) {
//       setIsScrollable(el.scrollWidth > el.clientWidth);
//     }
//   };

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (el) {
//       checkScrollable();
//       el.addEventListener('scroll', updateScrollIndicator);
//       window.addEventListener('resize', checkScrollable);

//       return () => {
//         el.removeEventListener('scroll', updateScrollIndicator);
//         window.removeEventListener('resize', checkScrollable);
//       };
//     }
//   }, []);

//   return (
//     <div className="flex mb-12">
//       {/* Left Side Image */}
//       <div className="w-1/2 h-[120vh]">
//         <img
//           className="object-cover w-full h-full"
//           src="compltelook.avif"
//           alt="Complete Look"
//         />
//       </div>

//       {/* Right Side Scrollable Cards */}
//       <div className="hidden md:flex md:flex-col md:w-1/2 h-[120vh]">
//         <div className="flex w-full px-4 mt-14 mb-8 items-center justify-between">
//           <h2 className="uppercase font-bold">Complete The Look</h2>
//           <div className="flex gap-4">
//             <button onClick={() => handleScroll('left')}>
//               <FaChevronLeft />
//             </button>
//             <button onClick={() => handleScroll('right')}>
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* Scrollable Row */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 px-24 overflow-x-auto scrollbar-hide pb-4"
//         >
//           {completeLookProducts.map((item) => (
//             <ProductCard
//               key={item._id}
//               product={item}
//               cardClassName="min-w-[220px] flex-shrink-0"
//               imageHeight="h-[280px]"
//             />
//           ))}
//         </div>

//         {/* Only show scrollbar if needed */}
//         {isScrollable && (
//           <div className="flex justify-center mt-2">
//             <div className="relative w-[120px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="absolute top-0 left-0 h-full bg-black transition-all duration-300 rounded-full"
//                 style={{ width: '25%', transform: `translateX(${scrollPosition * 75}%)` }}
//               ></div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompleteLook;



import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../Products/ProductCard'; // Adjust path if needed

const CompleteLook = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  const completeLookProducts = [
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 120,
      images: [
        { url: "comp1.jpg", altText: "Stylish Jacket" },
        { url: "comp2.jpg", altText: "Stylish Jacket" },
      ],
    },
    {
      _id: 2,
      name: "Stylish Jacket",
      price: 120,
      images: [
        { url: "comp3.jpg", altText: "Stylish Jacket" },
        { url: "comp4.jpg", altText: "Stylish Jacket" },
      ],
    },
    {
      _id: 3,
      name: "Stylish Jacket",
      price: 120,
      images: [
        { url: "comp5.jpg", altText: "Stylish Jacket" },
        { url: "comp1.jpg", altText: "Stylish Jacket" },
      ],
    },
    {
      _id: 4,
      name: "Stylish Jacket",
      price: 120,
      images: [
        { url: "comp2.jpg", altText: "Stylish Jacket" },
        { url: "comp5.jpg", altText: "Stylish Jacket" },
      ],
    },
    {
      _id: 5,
      name: "Stylish Jacket",
      price: 120,
      images: [
        { url: "comp2.jpg", altText: "Stylish Jacket" },
        { url: "comp5.jpg", altText: "Stylish Jacket" },
      ],
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const updateScrollIndicator = () => {
    const el = scrollRef.current;
    if (el) {
      const totalScrollableWidth = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / totalScrollableWidth;
      setScrollPosition(progress);

      const barWidth = (el.clientWidth / el.scrollWidth) * 100;
      setScrollbarWidth(barWidth);
    }
  };

  const checkScrollable = () => {
    const el = scrollRef.current;
    if (el) {
      setIsScrollable(el.scrollWidth > el.clientWidth);

      const barWidth = (el.clientWidth / el.scrollWidth) * 100;
      setScrollbarWidth(barWidth);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScrollable();
      el.addEventListener('scroll', updateScrollIndicator);
      window.addEventListener('resize', checkScrollable);

      return () => {
        el.removeEventListener('scroll', updateScrollIndicator);
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, []);

  return (
    <div className="flex mb-12">
      {/* Left Side Image */}
      <div className="md:w-1/2 md:h-[120vh] sm:w-full sm:h-[60vh]">
        <img
          className="object-cover w-full h-full"
          src="compltelook.avif"
          alt="Complete Look"
        />
      </div>

      {/* Right Side Scrollable Cards */}
      <div className="hidden md:flex md:flex-col md:w-1/2 h-[120vh]">
        {/* Header */}
        <div className="flex w-full px-4 mt-14 mb-8 items-center justify-between">
          <h2 className="uppercase font-bold">Complete The Look</h2>
          <div className="flex gap-4">
            <button onClick={() => handleScroll('left')}>
              <FaChevronLeft />
            </button>
            <button onClick={() => handleScroll('right')}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scrollable Product Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-24 overflow-x-auto scrollbar-hide pb-4"
        >
          {completeLookProducts.map((item) => (
            <ProductCard
              key={item._id}
              product={item}
              cardClassName="min-w-[220px] flex-shrink-0"
              imageHeight="h-[280px]"
            />
          ))}
        </div>

        {/* Mini Scrollbar */}
        {isScrollable && (
          <div className="flex justify-center mt-2">
            <div className="relative w-[120px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-black transition-all duration-300 rounded-full"
                style={{
                  width: `${scrollbarWidth}%`,
                  transform: `translateX(${scrollPosition * (100 - scrollbarWidth)}%)`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompleteLook;
