import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Exclusive = () => {
  const scrollRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const exclusiveProducts = [
    {
      id: 1,
      price: 215,
      name: "paras mongogram spray shirt",
      images: [
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
      ],
    },
    {
      id: 2,
      price: 215,
      name: "paras mongogram spray shirt",
      images: [
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
      ],
    },
    {
      id: 3,
      price: 215,
      name: "paras mongogram spray shirt",
      images: [
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
      ],
    },
    {
      id: 4,
      price: 215,
      name: "paras mongogram spray shirt",
      images: [
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
      ],
    },
    {
      id: 5,
      price: 215,
      name: "paras mongogram spray shirt",
      images: [
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
      ],
    },
    {
      id: 6,
      price: 215,
      name: "paras mongogram spray shirt",
      images: [
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
        {
          url: "/card1.jpg",
          altText: "Card 1",
        },
        {
          url: "/card2.jpg",
          altText: "Card 2",
        },
      ],
    },
  ];

 
  const [imgIndexes, setImgIndexes] = useState(
    exclusiveProducts.map(() => 0)
  );

  const handlePrev = (idx) => {
    setImgIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[idx] =
        newIndexes[idx] === 0
          ? exclusiveProducts[idx].images.length - 1
          : newIndexes[idx] - 1;
      return newIndexes;
    });
  };

  const handleNext = (idx) => {
    setImgIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[idx] =
        newIndexes[idx] === exclusiveProducts[idx].images.length - 1
          ? 0
          : newIndexes[idx] + 1;
      return newIndexes;
    });
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseUp = () => setDragging(false);
  const handleMouseLeave = () => setDragging(false);
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollWidth > container.clientWidth + container.scrollLeft
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }
    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButton);
      }
    };
  }, []);

  return (
    <section className="py-16 mb-4 px-4 lg:px-0">
      <div className="container mx-auto relative text-center mb-10">
        <div className="right-0 absolute flex bottom-[-30px] space-x-3">
          <button
            onClick={() => scroll("left")}
            className=""
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className=""
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="container  relative overflow-x-scroll flex space-x-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {exclusiveProducts.map((product, idx) => (
          <div
            className="flex flex-col min-w-[100%] sm:min-w-[50%] lg:min-w-[30%]"
            key={product.id}
            onMouseEnter={() => {
              if (product.images.length > 1) {
                setImgIndexes((prev) => {
                  const newIndexes = [...prev];
                  newIndexes[idx] = 1;
                  return newIndexes;
                });
              }
            }}
            onMouseLeave={() => {
              setImgIndexes((prev) => {
                const newIndexes = [...prev];
                newIndexes[idx] = 0;
                return newIndexes;
              });
            }}
          >
            <div className="relative flex items-center justify-center">
              <img
                src={product.images[imgIndexes[idx]].url}
                alt={product.images[imgIndexes[idx]].altText || product.name}
                className="w-full h-full object-cover rounded-t-lg"
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
                    className="absolute left-2 top-1/2 -translate-y-1/2  p-1  transition-colors"
                    onClick={() => handlePrev(idx)}
                  >
                    <FiChevronLeft size={22} />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 transition-colors"
                    onClick={() => handleNext(idx)}
                  >
                    <FiChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between px-4 py-3">
              <Link to={`/product/${product.id}`}>
                <h3 className="uppercase font-semibold text-base tracking-tight mb-2">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-end gap-2">
                <span className="font-bold text-lg">£{product.price}</span>
              </div>
            </div>
          </div>
        ))}
        
      </div>
       <div className="mx-4 ">
      <p className="uppercase text-gray-400 text-sm ">Exclusive</p>
      </div>
     
    </section>
  );
};

export default Exclusive;
