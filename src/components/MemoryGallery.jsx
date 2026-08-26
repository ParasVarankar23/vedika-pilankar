"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const memories = [
  {
    number: "01",
    year: "2004",
    title: "Where It Began",
    subtitle: "The first chapter",
    description:
      "A school, a few moments, and the beginning of something beautiful.",
    image: "/images/school/school-01.jpg",
  },
  {
    number: "02",
    year: "2004 — 2008",
    title: "Beautiful Moments",
    subtitle: "Love growing",
    description:
      "Small moments slowly became memories they would carry forever.",
    image: "/images/love-story/memory-01.jpg",
  },
  {
    number: "03",
    year: "2008",
    title: "The Wedding",
    subtitle: "A new beginning",
    description:
      "Two hearts, one promise, and the beginning of their life together.",
    image: "/images/wedding/wedding-01.jpg",
  },
  {
    number: "04",
    year: "2008 — 2026",
    title: "Years Together",
    subtitle: "And still counting",
    description:
      "Years of laughter, family, memories and countless moments together.",
    image: "/images/journey/journey-01.jpg",
  },
];

export default function MemoryGallery() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const [active, setActive] = useState(0);

  const memory = memories[active];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-heading", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".gallery-main", {
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.08,
          x: 25,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  const changeMemory = (index) => {
    if (index === active) return;
    setActive(index);
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        h-[100svh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#fff9fc]
        px-4
        py-6
        sm:px-8
        sm:py-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/25 blur-[120px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-rose-100/30 blur-[100px]" />

        <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-pink-100/30 blur-[100px]" />

        <span className="absolute left-[8%] top-[18%] text-2xl text-[#ec2f83]/15">
          ✦
        </span>

        <span className="absolute right-[8%] top-[30%] text-3xl text-[#ec2f83]/10">
          ♡
        </span>

        <span className="absolute bottom-[18%] left-[12%] text-xl text-[#ec2f83]/10">
          ✧
        </span>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 flex h-full w-full max-w-6xl flex-col justify-center">
        {/* HEADER */}

        <div className="gallery-heading mb-4 text-center sm:mb-5">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-12" />

            <span className="text-[10px] text-[#ec2f83]">
              ✦
            </span>

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#ec2f83] sm:text-[10px]">
              Memories
            </p>

            <span className="text-[10px] text-[#ec2f83]">
              ✦
            </span>

            <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-12" />
          </div>

          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#24151d] sm:text-5xl">
            Little Moments,
            <span className="text-[#ec2f83]"> Forever Memories</span>
          </h2>
        </div>

        {/* =====================================================
            GALLERY
        ===================================================== */}

        <div
          className="
            gallery-main
            mx-auto
            flex
            w-full
            max-w-5xl
            flex-1
            min-h-0
            items-center
            justify-center
          "
        >
          <div
            className="
              grid
              h-[62vh]
              max-h-[620px]
              min-h-[380px]
              w-full
              grid-cols-1
              overflow-hidden
              rounded-[1.75rem]
              border
              border-pink-100
              bg-white
              shadow-[0_30px_100px_rgba(236,47,131,0.12)]
              sm:grid-cols-[1.35fr_0.65fr]
              sm:rounded-[2rem]
            "
          >
            {/* =================================================
                LARGE IMAGE
            ================================================= */}

            <div className="relative min-h-0 overflow-hidden">
              <img
                ref={imageRef}
                src={memory.image}
                alt={memory.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Number */}

              <div className="absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center rounded-full border border-white/40 bg-white/85 px-3 text-xs font-semibold text-[#ec2f83] shadow-lg backdrop-blur-xl sm:left-6 sm:top-6">
                {memory.number}
              </div>

              {/* Year */}

              <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:right-6 sm:top-6 sm:text-[9px]">
                {memory.year}
              </div>

              {/* Image title */}

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-pink-100 sm:text-[9px]">
                  {memory.subtitle}
                </p>

                <h3 className="mt-1 font-serif text-3xl font-semibold text-white sm:text-5xl">
                  {memory.title}
                </h3>

                <div className="mt-3 h-px w-10 bg-white/70" />
              </div>
            </div>

            {/* =================================================
                INFORMATION PANEL
            ================================================= */}

            <div className="flex min-h-0 flex-col justify-between bg-white p-5 sm:p-7 md:p-9">
              <div ref={contentRef}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83]">
                  Memory {memory.number}
                </p>

                <p className="mt-2 font-serif text-2xl text-[#d91b68] sm:text-3xl">
                  {memory.year}
                </p>

                <div className="my-4 h-px w-12 bg-[#ec2f83]/40" />

                <p className="text-xs leading-6 text-[#765f69] sm:text-sm sm:leading-7">
                  {memory.description}
                </p>
              </div>

              {/* =================================================
                  MEMORY SELECTOR
              ================================================= */}

              <div className="mt-4">
                <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.25em] text-[#a88d99]">
                  Journey
                </p>

                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {memories.map((item, index) => (
                    <button
                      key={item.number}
                      onClick={() => changeMemory(index)}
                      aria-label={`View ${item.title}`}
                      className={`
                        relative
                        h-10
                        overflow-hidden
                        rounded-lg
                        border
                        transition-all
                        duration-300
                        sm:h-12
                        sm:rounded-xl
                        ${
                          active === index
                            ? "border-[#ec2f83] ring-2 ring-pink-100"
                            : "border-pink-100 opacity-60 hover:opacity-100"
                        }
                      `}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />

                      {active === index && (
                        <div className="absolute inset-0 bg-[#ec2f83]/20" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Progress */}

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-pink-100">
                    <div
                      className="h-full rounded-full bg-[#ec2f83] transition-all duration-500"
                      style={{
                        width: `${((active + 1) / memories.length) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-[9px] font-medium text-[#765f69]">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(memories.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="mt-3 text-center sm:mt-4">
          <p className="font-serif text-sm italic text-[#d91b68] sm:text-base">
            Some memories are meant to last forever. ♡
          </p>
        </div>
      </div>
    </section>
  );
}