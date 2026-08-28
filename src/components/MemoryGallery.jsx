"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/personal/both1.jpeg",
  "/images/personal/both2.jpeg",
  "/images/personal/both3.jpeg",
  "/images/personal/both4.jpeg",
  "/images/personal/family1.jpeg",
  "/images/personal/family2.jpeg",
  "/images/personal/family3.jpeg",
  "/images/personal/pic1.jpeg",
  "/images/personal/pic2.jpeg",
  "/images/personal/pic3.jpeg",
  "/images/personal/pic4.jpeg",
];

export default function MemoryGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change photo every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        if (current === images.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-500">
            Beautiful Memories
          </p>

          <h2 className="font-serif text-5xl font-semibold text-gray-900">
            Moments
          </h2>

          <h2 className="font-serif text-5xl font-semibold text-pink-500">
            To Remember
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            A collection of beautiful memories and special moments.
          </p>
        </div>

        {/* Main Photo */}

        <div className="overflow-hidden rounded-3xl border border-pink-100 bg-pink-50 shadow-xl">
          <img
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`Memory ${activeIndex + 1}`}
            className="h-[400px] w-full object-cover md:h-[600px]"
          />
        </div>

        {/* Thumbnails */}

        <div className="mt-6 flex gap-3 overflow-x-auto pb-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 ${
                activeIndex === index
                  ? "border-pink-500"
                  : "border-pink-100"
              }`}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Counter */}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            {activeIndex + 1} / {images.length}
          </p>

          <p className="mt-4 font-serif text-lg italic text-pink-500">
            Every picture has a story. ❤️
          </p>
        </div>

      </div>
    </section>
  );
}

