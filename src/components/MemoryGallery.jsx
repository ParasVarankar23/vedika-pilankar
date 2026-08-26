"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".memory-heading", {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".memory-card", {
        opacity: 0,
        y: 70,
        scale: 0.96,
        duration: 1,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".memory-grid",
          start: "top 78%",
          once: true,
        },
      });

      gsap.to(".gallery-glow", {
        scale: 1.15,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#fff9fc]
        px-5
        py-24
        sm:px-8
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            gallery-glow
            absolute
            left-1/2
            top-[30%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-pink-200/20
            blur-[120px]
          "
        />

        <div className="absolute -left-32 top-[45%] h-72 w-72 rounded-full bg-rose-100/30 blur-[100px]" />

        <div className="absolute -right-32 top-[15%] h-72 w-72 rounded-full bg-pink-100/30 blur-[100px]" />

        <span className="absolute left-[8%] top-[18%] text-2xl text-[#ec2f83]/10">
          ✦
        </span>

        <span className="absolute right-[9%] top-[38%] text-3xl text-[#ec2f83]/10">
          ♡
        </span>

        <span className="absolute bottom-[15%] left-[14%] text-xl text-[#ec2f83]/10">
          ✧
        </span>
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="memory-heading relative z-10 mx-auto mb-14 max-w-3xl text-center sm:mb-20">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />

          <span className="text-xs text-[#ec2f83]">
            ✦
          </span>

          <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#ec2f83] sm:text-[10px]">
            Memories
          </p>

          <span className="text-xs text-[#ec2f83]">
            ✦
          </span>

          <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />
        </div>

        <h2
          className="
            font-serif
            text-5xl
            font-semibold
            leading-tight
            tracking-tight
            text-[#24151d]
            sm:text-7xl
          "
        >
          Little Moments,
          <br />
          <span className="text-[#ec2f83]">
            Forever Memories
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#765f69] sm:text-base sm:leading-8">
          A few beautiful chapters from a journey that began
          with a simple moment and became a lifetime of memories.
        </p>
      </div>

      {/* =====================================================
          MEMORY GRID
      ===================================================== */}

      <div
        className="
          memory-grid
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          gap-6
          sm:grid-cols-2
          lg:gap-8
        "
      >
        {memories.map((memory, index) => (
          <article
            key={memory.number}
            className={`
              memory-card
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-pink-100
              bg-white
              shadow-[0_20px_70px_rgba(236,47,131,0.08)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_90px_rgba(236,47,131,0.15)]
              ${index % 2 === 1 ? "lg:mt-14" : ""}
            `}
          >
            {/* IMAGE */}

            <div className="relative aspect-[4/5] overflow-hidden bg-pink-100 sm:aspect-[5/6]">
              <img
                src={memory.image}
                alt={memory.title}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Image gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-black/5
                  to-transparent
                  opacity-70
                  transition-opacity
                  duration-500
                  group-hover:opacity-90
                "
              />

              {/* Soft pink tint */}

              <div className="absolute inset-0 bg-pink-500/0 transition duration-700 group-hover:bg-pink-500/5" />

              {/* Number */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  h-11
                  min-w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/50
                  bg-white/85
                  px-3
                  text-xs
                  font-semibold
                  tracking-wider
                  text-[#ec2f83]
                  shadow-lg
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-white
                "
              >
                {memory.number}
              </div>

              {/* Year */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  rounded-full
                  border
                  border-white/30
                  bg-black/10
                  px-4
                  py-2
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white
                  backdrop-blur-md
                "
              >
                {memory.year}
              </div>

              {/* Bottom image information */}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-pink-100">
                  {memory.subtitle}
                </p>

                <h3 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                  {memory.title}
                </h3>

                <div className="mt-4 h-px w-10 bg-white/60 transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Hover heart */}

              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  flex
                  h-10
                  w-10
                  scale-90
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  text-lg
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                ♡
              </div>
            </div>

            {/* CARD FOOTER */}

            <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-7">
              <p className="max-w-sm text-xs leading-5 text-[#765f69]">
                {memory.description}
              </p>

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-pink-100
                  text-sm
                  text-[#ec2f83]
                  transition-all
                  duration-300
                  group-hover:border-[#ec2f83]
                  group-hover:bg-[#ec2f83]
                  group-hover:text-white
                "
              >
                ↗
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="relative z-10 mt-16 text-center sm:mt-20">
        <div className="mx-auto flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#ec2f83]/20" />

          <span className="text-sm text-[#ec2f83]">
            ♡
          </span>

          <span className="h-px w-12 bg-[#ec2f83]/20" />
        </div>

        <p className="mt-5 font-serif text-lg italic text-[#d91b68]">
          Some memories are meant to last forever.
        </p>
      </div>
    </section>
  );
}