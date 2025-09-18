import React, { useRef } from 'react';

export default function FilterBar({ categories, onSelect, selectedCategory }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full px-4 mb-6">
      {/* Left Fade Overlay and Button (hidden on small screens) */}
      <div className="absolute top-0 left-0 h-full w-20 flex items-center justify-start pl-4 z-10 hidden md:flex">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
       
      </div>

      {/* Scrollable categories container */}
      <div 
        ref={scrollContainerRef} 
        className="flex gap-2 sm:gap-3 overflow-x-auto grow no-scrollbar scroll-smooth pl-20 pr-20"
      >
        {/* All button */}
        <button
          onClick={() => onSelect("")}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition 
            ${
              selectedCategory === ""
                ? "bg-gray-200 text-gray-900 shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          All
        </button>

        {/* Dynamic categories */}
        {categories.map((cat, idx) => {
          const name = typeof cat === "string" ? cat : cat.name || cat.slug;

          return (
            <button
              key={name || idx}
              onClick={() => onSelect(name)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium capitalize transition 
                ${
                  selectedCategory === name
                    ? "bg-gray-200 text-gray-900 shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* Right Fade Overlay and Button (hidden on small screens) */}
      <div className="absolute top-0 right-0 h-full w-20 flex items-center justify-end pr-4 z-20 hidden md:flex">
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
      
      </div>
    </div>
  );
}