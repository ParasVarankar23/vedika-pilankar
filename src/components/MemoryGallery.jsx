"use client";

import { useEffect, useRef, useState } from "react";

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

const IMAGE_DURATION = 3000;

export default function MemoryGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const thumbnailContainerRef = useRef(null);

  /* ==========================================================
     AUTOMATIC IMAGE CHANGE
     EACH IMAGE = 3 SECONDS
  ========================================================== */

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const percentage = Math.min(
        elapsed / IMAGE_DURATION,
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
        /*
         * Stop on image 11.
         * Do NOT return to image 1.
         */
        if (current >= images.length - 1) {
          return current;
        }

        return current + 1;
      });
    }, IMAGE_DURATION);

    return () => {
      window.clearTimeout(timer);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [activeIndex]);

  /* ==========================================================
     RESET PROGRESS WHEN LAST IMAGE IS REACHED
  ========================================================== */

  useEffect(() => {
    if (activeIndex === images.length - 1) {
      setProgress(100);
    }
  }, [activeIndex]);

  /* ==========================================================
     SCROLL ACTIVE THUMBNAIL INTO VIEW
  ========================================================== */

  useEffect(() => {
    const container = thumbnailContainerRef.current;

    if (!container) return;

    const activeThumbnail =
      container.children[activeIndex];

    if (!activeThumbnail) return;

    activeThumbnail.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  /* ==========================================================
     THUMBNAIL CLICK
  ========================================================== */

  const selectImage = (index) => {
    setActiveIndex(index);

    /*
     * Start the 3-second timer again
     * for the selected image.
     */
    setProgress(0);
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16

        sm:px-6
        sm:py-20

        md:px-10
        md:py-24
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Main glow */}

        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-pink-100/40
            blur-[100px]

            sm:h-[420px]
            sm:w-[420px]

            md:h-[550px]
            md:w-[550px]
          "
        />

        {/* Left circle */}

        <div
          className="
            absolute
            -left-32
            top-[25%]
            h-64
            w-64
            rounded-full
            border
            border-pink-100/70

            sm:h-80
            sm:w-80
          "
        />

        {/* Right circle */}

        <div
          className="
            absolute
            -right-32
            bottom-[20%]
            h-64
            w-64
            rounded-full
            border
            border-pink-100/70

            sm:h-80
            sm:w-80
          "
        />

        {/* Hearts */}

        <span
          className="
            absolute
            left-[8%]
            top-[18%]
            font-serif
            text-3xl
            text-[#ec2f83]/10

            sm:text-5xl
          "
        >
          ♡
        </span>

        <span
          className="
            absolute
            right-[8%]
            top-[40%]
            font-serif
            text-3xl
            text-[#ec2f83]/10

            sm:text-5xl
          "
        >
          ♡
        </span>

        <span
          className="
            absolute
            bottom-[15%]
            left-[15%]
            text-xl
            text-[#ec2f83]/10
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            bottom-[20%]
            right-[15%]
            text-xl
            text-[#ec2f83]/10
          "
        >
          ✧
        </span>
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
            "
          >
            <span
              className="
                h-px
                w-7
                bg-[#ec2f83]/30

                sm:w-12
              "
            />

            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#ec2f83]

                sm:text-[10px]
                sm:tracking-[0.4em]
              "
            >
              Beautiful Memories
            </p>

            <span
              className="
                h-px
                w-7
                bg-[#ec2f83]/30

                sm:w-12
              "
            />
          </div>

          <h2
            className="
              mt-5
              font-serif
              text-[40px]
              font-semibold
              leading-[1.05]
              tracking-tight
              text-[#24151d]

              sm:mt-7
              sm:text-6xl

              md:text-7xl
            "
          >
            Moments
            <br />

            <span className="text-[#ec2f83]">
              To Remember
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[12px]
              leading-6
              text-[#765f69]

              sm:mt-6
              sm:text-sm
              sm:leading-7

              md:text-base
            "
          >
            A collection of beautiful moments, family
            memories and little pieces of a wonderful journey.
          </p>
        </div>

        {/* ====================================================
            LARGE IMAGE
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-10
            w-full
            max-w-5xl

            sm:mt-14

            md:mt-16
          "
        >
          <div
            className="
              relative
              h-[360px]
              w-full
              overflow-hidden
              rounded-[1.5rem]
              border
              border-pink-100
              bg-[#fff9fc]
              shadow-[0_25px_80px_rgba(236,47,131,0.12)]

              sm:h-[500px]
              sm:rounded-[2rem]

              md:h-[600px]
              md:rounded-[2.5rem]
            "
          >
            {/* ==================================================
                IMAGE
            ================================================== */}

            <img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`Memory ${activeIndex + 1}`}
              className="
                h-full
                w-full
                object-cover
                animate-[galleryFade_0.8s_ease-in-out]
              "
            />

            {/* Image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-black/5
              "
            />

            {/* ==================================================
                IMAGE NUMBER
            ================================================== */}

            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/40
                bg-black/20
                px-3
                py-1.5
                text-[9px]
                font-medium
                tracking-[0.15em]
                text-white
                backdrop-blur-md

                sm:left-6
                sm:top-6
                sm:px-4
                sm:py-2
                sm:text-[10px]
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              / {String(images.length).padStart(2, "0")}
            </div>

            {/* ==================================================
                HEART
            ================================================== */}

            <div
              className="
                absolute
                right-4
                top-4
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                bg-black/20
                text-lg
                text-white
                backdrop-blur-md

                sm:right-6
                sm:top-6
                sm:h-11
                sm:w-11
              "
            >
              ♡
            </div>

            {/* ==================================================
                BOTTOM INFORMATION
            ================================================== */}

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4

                sm:bottom-6
                sm:left-6
                sm:right-6
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/70

                  sm:text-[10px]
                "
              >
                A beautiful memory
              </p>

              <p
                className="
                  mt-1
                  font-serif
                  text-lg
                  text-white

                  sm:text-2xl
                "
              >
                Memory {activeIndex + 1}
              </p>
            </div>
          </div>
        </div>

        {/* ====================================================
            3 SECOND PROGRESS
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-5
            w-full
            max-w-5xl

            sm:mt-6
          "
        >
          <div
            className="
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
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#a88d99]

                sm:text-[9px]
              "
            >
              {activeIndex === images.length - 1
                ? "Final memory"
                : "Next memory"}
            </span>

            <span
              className="
                text-[9px]
                font-medium
                text-[#ec2f83]

                sm:text-[10px]
              "
            >
              3 seconds
            </span>
          </div>
        </div>

        {/* ====================================================
            THUMBNAILS — ALL 11
        ==================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-5
            w-full
            max-w-5xl

            sm:mt-7
          "
        >
          <div
            ref={thumbnailContainerRef}
            className="
              flex
              w-full
              gap-2.5
              overflow-x-auto
              px-1
              pb-3

              sm:gap-3

              md:justify-center
              md:overflow-visible
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {images.map((image, index) => {
              const active =
                index === activeIndex;

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() =>
                    selectImage(index)
                  }
                  aria-label={`View memory ${
                    index + 1
                  }`}
                  className={`
                    group
                    relative
                    h-[65px]
                    w-[65px]
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    border
                    bg-white
                    transition-all
                    duration-300

                    sm:h-[78px]
                    sm:w-[78px]
                    sm:rounded-2xl

                    md:h-[82px]
                    md:w-[82px]

                    ${
                      active
                        ? `
                          scale-105
                          border-[#ec2f83]
                          p-[2px]
                          shadow-[0_8px_30px_rgba(236,47,131,0.25)]
                        `
                        : `
                          border-pink-100
                          opacity-65
                          hover:scale-105
                          hover:opacity-100
                        `
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`Memory ${index + 1}`}
                    className="
                      h-full
                      w-full
                      rounded-[9px]
                      object-cover

                      sm:rounded-[13px]
                    "
                  />

                  {/* Active ring */}

                  {active && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[9px]
                        ring-2
                        ring-[#ec2f83]
                        ring-inset

                        sm:rounded-[13px]
                      "
                    />
                  )}

                  {/* Number */}

                  <span
                    className={`
                      absolute
                      bottom-1
                      left-1
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      px-1
                      text-[7px]
                      font-semibold
                      backdrop-blur-sm

                      ${
                        active
                          ? "bg-[#ec2f83] text-white"
                          : "bg-black/45 text-white"
                      }
                    `}
                  >
                    {index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            GALLERY PROGRESS
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-5
            max-w-md

            sm:mt-7
          "
        >
          <div
            className="
              h-[2px]
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
                transition-all
                duration-700
              "
              style={{
                width: `${
                  ((activeIndex + 1) /
                    images.length) *
                  100
                }%`,
              }}
            />
          </div>

          <div
            className="
              mt-3
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#a88d99]

                sm:text-[9px]
              "
            >
              Memories
            </span>

            <span
              className="
                text-[9px]
                font-medium
                text-[#ec2f83]

                sm:text-[10px]
              "
            >
              {String(activeIndex + 1).padStart(
                2,
                "0"
              )}{" "}
              / 11
            </span>
          </div>
        </div>

        {/* ====================================================
            BOTTOM MESSAGE
        ==================================================== */}

        <div
          className="
            mt-10
            text-center

            sm:mt-14
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                bg-pink-100

                sm:w-14
              "
            />

            <span className="text-sm text-[#ec2f83]">
              ❤️
            </span>

            <span
              className="
                h-px
                w-8
                bg-pink-100

                sm:w-14
              "
            />
          </div>

          <p
            className="
              mt-4
              font-serif
              text-sm
              italic
              text-[#d91b68]

              sm:mt-5
              sm:text-lg
            "
          >
            Every picture has a story.
          </p>
        </div>
      </div>

      {/* ======================================================
          ANIMATION
      ====================================================== */}

      <style jsx>{`
        @keyframes galleryFade {
          0% {
            opacity: 0;
            transform: scale(1.025);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}