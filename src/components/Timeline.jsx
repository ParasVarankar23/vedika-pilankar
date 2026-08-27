"use client";

import { useEffect, useState } from "react";

/*
|--------------------------------------------------------------------------
| TIMELINE DATA
|--------------------------------------------------------------------------
| Each item stays active for 5 seconds.
|
| Add/remove years here if your actual timeline has more/fewer items.
*/

const timelineItems = [
  {
    year: "2004",
    title: "First Meeting",
    text: "They first met in 2004. A simple meeting became the beginning of a beautiful journey together.",
  },
  {
    year: "2008",
    title: "Married",
    text: "In 2008, they began their married life together, starting a new chapter filled with love, responsibility and hope.",
  },
  {
    year: "2009",
    title: "Sarthu Was Born",
    text: "In 2009, their happiness grew with the arrival of Sarthu, bringing a beautiful new meaning to their lives.",
  },
  {
    year: "2009",
    title: "A New Beginning",
    text: "From 2009, they also started taking private tuition classes and worked hard to build a stable life.",
  },
  {
    year: "2021",
    title: "A Permanent Position",
    text: "After years of hard work and patience, she became permanent at Shri Mohanlal Soni Vidyalay in 2021.",
  },
  {
    year: "2022",
    title: "Another Milestone",
    text: "In 2022, he became permanent at Adgaon Marathi High School. Their years of perseverance finally brought greater stability.",
  },
  {
    year: "Today",
    title: "Happy & Stable",
    text: "Today, they are happy and stable, proud of everything they have built together through hard work, patience and mutual support.",
  },
];

/*
|--------------------------------------------------------------------------
| EACH ITEM = 5 SECONDS
|--------------------------------------------------------------------------
*/

const ITEM_DURATION = 5000;

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | AUTOMATICALLY MOVE TO NEXT YEAR
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setProgress(0);

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const percentage = Math.min(
        elapsed / ITEM_DURATION,
        1
      );

      setProgress(percentage * 100);

      if (percentage < 1) {
        animationFrame =
          window.requestAnimationFrame(animate);
      }
    };

    animationFrame =
      window.requestAnimationFrame(animate);

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => {
        if (current >= timelineItems.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, ITEM_DURATION);

    return () => {
      window.clearTimeout(timer);

      if (animationFrame) {
        window.cancelAnimationFrame(
          animationFrame
        );
      }
    };
  }, [activeIndex]);

  /*
  |--------------------------------------------------------------------------
  | MANUAL YEAR SELECTION
  |--------------------------------------------------------------------------
  */

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#fff9fc]
        px-4
        py-16
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-100/40
          blur-[100px]
          sm:h-[550px]
          sm:w-[550px]
        "
      />

      {/* Main content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-8rem)]
          w-full
          max-w-6xl
          flex-col
          justify-center
        "
      >
        {/* Header */}

        <div
          className="
            mb-8
            text-center
            sm:mb-10
          "
        >
          <p
            className="
              mb-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#ec2f83]
              sm:text-xs
            "
          >
            Their Journey
          </p>

          <h2
            className="
              font-serif
              text-3xl
              font-semibold
              text-[#24151d]
              sm:text-4xl
              md:text-5xl
            "
          >
            A Beautiful Story
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-[#6d5962]
              sm:text-base
            "
          >
            Years of love, hard work, patience
            and togetherness.
          </p>
        </div>

        {/* ==================================================
            DESKTOP TIMELINE
        ================================================== */}

        <div
          className="
            hidden
            md:block
          "
        >
          {/* Year navigation */}

          <div
            className="
              relative
              mx-auto
              mb-12
              flex
              max-w-5xl
              items-center
              justify-between
            "
          >
            {/* Connecting line */}

            <div
              className="
                absolute
                left-0
                right-0
                top-1/2
                h-px
                -translate-y-1/2
                bg-pink-200
              "
            />

            {timelineItems.map(
              (item, index) => {
                const isActive =
                  index === activeIndex;

                const isPast =
                  index < activeIndex;

                return (
                  <button
                    key={`${item.year}-${index}`}
                    type="button"
                    onClick={() =>
                      handleSelect(index)
                    }
                    className="
                      group
                      relative
                      z-10
                      flex
                      flex-col
                      items-center
                      outline-none
                    "
                  >
                    {/* Circle */}

                    <span
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-[10px]
                        font-semibold
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? `
                              scale-110
                              border-[#ec2f83]
                              bg-[#ec2f83]
                              text-white
                              shadow-lg
                              shadow-pink-200
                            `
                            : isPast
                            ? `
                              border-pink-300
                              bg-pink-50
                              text-[#ec2f83]
                            `
                            : `
                              border-pink-200
                              bg-white
                              text-[#8f7a83]
                            `
                        }
                      `}
                    >
                      {item.year}
                    </span>

                    {/* Progress ring indicator */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          -inset-1
                          rounded-full
                          border
                          border-[#ec2f83]/20
                        "
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>

          {/* Active desktop card */}

          <div
            className="
              mx-auto
              grid
              max-w-5xl
              grid-cols-[180px_1fr]
              overflow-hidden
              rounded-[2rem]
              border
              border-pink-100
              bg-white/80
              shadow-xl
              shadow-pink-100/30
              backdrop-blur-xl
            "
          >
            {/* Year */}

            <div
              className="
                flex
                min-h-[280px]
                items-center
                justify-center
                bg-pink-50/70
                p-8
              "
            >
              <div className="text-center">
                <p
                  className="
                    text-4xl
                    font-bold
                    tracking-tight
                    text-[#ec2f83]
                  "
                >
                  {timelineItems[
                    activeIndex
                  ].year}
                </p>

                <div
                  className="
                    mx-auto
                    mt-4
                    h-1
                    w-10
                    rounded-full
                    bg-[#ec2f83]/30
                  "
                />
              </div>
            </div>

            {/* Story */}

            <div
              className="
                flex
                min-h-[280px]
                flex-col
                justify-center
                p-8
                lg:p-12
              "
            >
              <p
                className="
                  mb-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#ec2f83]
                "
              >
                Chapter{" "}
                {activeIndex + 1}
              </p>

              <h3
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  text-[#24151d]
                  lg:text-3xl
                "
              >
                {
                  timelineItems[
                    activeIndex
                  ].title
                }
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-8
                  text-[#6d5962]
                "
              >
                {
                  timelineItems[
                    activeIndex
                  ].text
                }
              </p>

              {/* 5 second progress */}

              <div
                className="
                  mt-8
                  h-1
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-pink-100
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-[#ec2f83]
                    transition-[width]
                    duration-100
                    ease-linear
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <p
                className="
                  mt-2
                  text-right
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#a28d96]
                "
              >
                Reading...
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            MOBILE TIMELINE
        ================================================== */}

        <div
          className="
            block
            md:hidden
          "
        >
          {/* Mobile year selector */}

          <div
            className="
              mb-6
              flex
              gap-2
              overflow-x-auto
              pb-3
              scrollbar-none
            "
          >
            {timelineItems.map(
              (item, index) => {
                const isActive =
                  index === activeIndex;

                return (
                  <button
                    key={`${item.year}-mobile-${index}`}
                    type="button"
                    onClick={() =>
                      handleSelect(index)
                    }
                    className={`
                      shrink-0
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            border-[#ec2f83]
                            bg-[#ec2f83]
                            text-white
                            shadow-md
                            shadow-pink-200
                          `
                          : `
                            border-pink-200
                            bg-white
                            text-[#8f7a83]
                          `
                      }
                    `}
                  >
                    {item.year}
                  </button>
                );
              }
            )}
          </div>

          {/* Mobile card */}

          <div
            className="
              overflow-hidden
              rounded-[1.75rem]
              border
              border-pink-100
              bg-white/85
              shadow-xl
              shadow-pink-100/30
              backdrop-blur-xl
            "
          >
            {/* Year */}

            <div
              className="
                flex
                items-center
                justify-between
                bg-pink-50/70
                px-6
                py-5
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#ec2f83]
                  "
                >
                  Year
                </p>

                <p
                  className="
                    mt-1
                    text-3xl
                    font-bold
                    text-[#ec2f83]
                  "
                >
                  {
                    timelineItems[
                      activeIndex
                    ].year
                  }
                </p>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-xs
                  font-semibold
                  text-[#ec2f83]
                  shadow-sm
                "
              >
                {activeIndex + 1}/
                {timelineItems.length}
              </div>
            </div>

            {/* Story content */}

            <div
              className="
                p-6
                sm:p-8
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#ec2f83]
                "
              >
                A special chapter
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  text-[#24151d]
                "
              >
                {
                  timelineItems[
                    activeIndex
                  ].title
                }
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#6d5962]
                  sm:text-base
                  sm:leading-8
                "
              >
                {
                  timelineItems[
                    activeIndex
                  ].text
                }
              </p>

              {/* 5 second progress */}

              <div
                className="
                  mt-7
                  h-1
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-pink-100
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-[#ec2f83]
                    transition-[width]
                    duration-100
                    ease-linear
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-between
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#a28d96]
                "
              >
                <span>
                  5 seconds
                </span>

                <span>
                  Reading...
                </span>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() =>
                setActiveIndex(
                  (current) =>
                    Math.max(
                      current - 1,
                      0
                    )
                )
              }
              className="
                rounded-full
                border
                border-pink-200
                bg-white
                px-4
                py-2
                text-xs
                font-semibold
                text-[#d91b68]
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              ← Previous
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (current) =>
                    Math.min(
                      current + 1,
                      timelineItems.length -
                        1
                    )
                )
              }
              disabled={
                activeIndex ===
                timelineItems.length - 1
              }
              className="
                rounded-full
                border
                border-pink-200
                bg-white
                px-4
                py-2
                text-xs
                font-semibold
                text-[#d91b68]
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              Next →
            </button>
          </div>
        </div>

        {/* ==================================================
            BOTTOM MESSAGE
        ================================================== */}

        <p
          className="
            mt-8
            text-center
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[#b49da7]
            sm:mt-10
          "
        >
          Every chapter made them stronger together
        </p>
      </div>
    </section>
  );
}