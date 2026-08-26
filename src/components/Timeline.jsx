"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    year: "2004",
    title: "The Beginning",
    text: "Their story begins at Modern English School — two teachers, one school and the first moments of a story neither of them knew would become a lifetime.",
    icon: "🏫",
    label: "Where it all began",
  },
  {
    year: "2005",
    title: "Something Beautiful",
    text: "The connection slowly becomes something more meaningful. Small conversations, familiar smiles and moments that quietly bring two people closer.",
    icon: "♡",
    label: "A connection grows",
  },
  {
    year: "2006–2007",
    title: "Growing Together",
    text: "More memories, more moments and a love that continues becoming stronger with every passing year.",
    icon: "✨",
    label: "Love becomes stronger",
  },
  {
    year: "2008",
    title: "From Love to Forever",
    text: "Their love story enters its most beautiful chapter. They got married and began building a life together.",
    icon: "💍",
    label: "A new beginning",
    featured: true,
  },
  {
    year: "2026",
    title: "Chapter 40",
    text: "Twenty-two years after their story began, a beautiful new chapter arrives — celebrating Minal's 40th birthday.",
    icon: "🎂",
    label: "A new chapter",
    final: true,
  },
];

export default function Timeline() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading */

      gsap.from(".timeline-heading", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      /* Timeline line */

      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
          once: true,
        },
      });

      /* Timeline items */

      gsap.from(".timeline-item", {
        opacity: 0,
        y: 60,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 72%",
          once: true,
        },
      });

      /* Nodes */

      gsap.from(".timeline-node", {
        opacity: 0,
        scale: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 72%",
          once: true,
        },
      });

      /* Floating decoration */

      gsap.to(".timeline-heart-one", {
        y: -18,
        x: 8,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".timeline-heart-two", {
        y: 15,
        x: -8,
        rotation: -7,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Glow */

      gsap.to(".timeline-glow", {
        scale: 1.15,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-white
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

        {/* Main glow */}

        <div
          className="
            timeline-glow
            absolute
            left-1/2
            top-[45%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-100/30
            blur-[120px]
          "
        />

        {/* Giant background years */}

        <div
          className="
            absolute
            left-[-20px]
            top-[12%]
            font-serif
            text-[160px]
            font-bold
            leading-none
            text-[#ec2f83]/[0.025]
            sm:text-[300px]
          "
        >
          2004
        </div>

        <div
          className="
            absolute
            bottom-[8%]
            right-[-20px]
            font-serif
            text-[170px]
            font-bold
            leading-none
            text-[#ec2f83]/[0.025]
            sm:text-[300px]
          "
        >
          2026
        </div>

        {/* Rings */}

        <div
          className="
            absolute
            -left-24
            top-[40%]
            h-64
            w-64
            rounded-full
            border
            border-pink-100/60
          "
        />

        <div
          className="
            absolute
            -right-20
            top-[20%]
            h-72
            w-72
            rounded-full
            border
            border-pink-100/50
          "
        />

        {/* Floating symbols */}

        <span
          className="
            timeline-heart-one
            absolute
            left-[8%]
            top-[25%]
            text-3xl
            text-[#ec2f83]/20
          "
        >
          ♡
        </span>

        <span
          className="
            timeline-heart-two
            absolute
            right-[9%]
            bottom-[30%]
            text-3xl
            text-[#ec2f83]/20
          "
        >
          ✦
        </span>

        <span className="absolute left-[22%] top-[55%] text-lg text-[#ec2f83]/15">
          ✧
        </span>

        <span className="absolute right-[20%] top-[68%] text-xl text-[#ec2f83]/15">
          ♡
        </span>
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="timeline-heading relative z-10 mx-auto max-w-4xl text-center">

        <div className="flex items-center justify-center gap-4">

          <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-12" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#ec2f83] sm:text-[10px]">
            Their journey
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-12" />

        </div>

        <div
          className="
            mx-auto
            mt-7
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-pink-100
            bg-[#fff9fc]
            px-4
            py-2
            shadow-sm
          "
        >
          <span className="text-xs text-[#ec2f83]">
            2004
          </span>

          <span className="text-pink-300">
            →
          </span>

          <span className="text-xs text-[#765f69]">
            2026
          </span>
        </div>

        <h2
          className="
            mt-8
            font-serif
            text-[42px]
            font-semibold
            leading-[1.08]
            tracking-tight
            text-[#24151d]
            sm:text-6xl
            md:text-7xl
          "
        >
          A Story
          <br />
          <span className="text-[#ec2f83]">
            Through Time
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-sm
            leading-7
            text-[#765f69]
            sm:text-base
            sm:leading-8
          "
        >
          Some moments pass quietly. Others become the chapters
          we remember forever.
        </p>
      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div className="timeline-wrapper relative z-10 mx-auto mt-16 max-w-5xl sm:mt-20">

        {/* Vertical line */}

        <div
          className="
            timeline-line
            absolute
            bottom-10
            left-[15px]
            top-8
            w-px
            bg-gradient-to-b
            from-pink-200
            via-[#ec2f83]/40
            to-pink-100
            sm:left-1/2
            sm:-translate-x-1/2
          "
        />

        {events.map((event, index) => {
          const isRight = index % 2 !== 0;

          return (
            <div
              key={event.year}
              className={`
                timeline-item
                relative
                mb-12
                pl-12
                sm:mb-16
                sm:grid
                sm:grid-cols-2
                sm:gap-16
                sm:pl-0
              `}
            >
              {/* =================================================
                  MOBILE NODE
              ================================================= */}

              <div
                className="
                  timeline-node
                  absolute
                  left-[3px]
                  top-8
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-white
                  bg-[#ec2f83]
                  shadow-[0_0_0_5px_rgba(236,47,131,0.08)]
                  sm:left-1/2
                  sm:top-10
                  sm:-translate-x-1/2
                  sm:h-8
                  sm:w-8
                "
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>

              {/* =================================================
                  EMPTY SIDE
              ================================================= */}

              {!isRight && (
                <div className="hidden sm:block" />
              )}

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className={`
                  ${isRight ? "sm:col-start-2" : "sm:col-start-1"}
                `}
              >
                <div
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    p-6
                    shadow-[0_20px_70px_rgba(236,47,131,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    sm:p-8
                    ${
                      event.featured
                        ? "border-pink-200 bg-gradient-to-br from-[#fff0f6] to-white shadow-[0_25px_90px_rgba(236,47,131,0.12)]"
                        : event.final
                        ? "border-pink-200 bg-[#fff9fc]"
                        : "border-pink-100 bg-white"
                    }
                  `}
                >
                  {/* Giant year */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[-10px]
                      top-[-25px]
                      font-serif
                      text-8xl
                      font-bold
                      leading-none
                      text-[#ec2f83]/[0.045]
                    "
                  >
                    {event.year}
                  </div>

                  {/* Top row */}

                  <div className="relative flex items-start justify-between gap-4">

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ec2f83]">
                        {event.label}
                      </p>

                      <p className="mt-3 font-serif text-4xl font-semibold leading-none text-[#ec2f83] sm:text-5xl">
                        {event.year}
                      </p>
                    </div>

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-pink-100
                        bg-[#fff9fc]
                        text-xl
                        shadow-sm
                        transition
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      {event.icon}
                    </div>
                  </div>

                  {/* Title */}

                  <h3 className="relative mt-6 font-serif text-2xl font-semibold text-[#24151d] sm:text-3xl">
                    {event.title}
                  </h3>

                  {/* Text */}

                  <p className="relative mt-4 text-sm leading-7 text-[#765f69] sm:text-base sm:leading-8">
                    {event.text}
                  </p>

                  {/* Bottom */}

                  <div className="relative mt-6 flex items-center gap-3">

                    <div className="h-px w-8 bg-[#ec2f83]/30" />

                    <span className="text-xs text-[#ec2f83]">
                      {index === 0
                        ? "The first chapter"
                        : index === 3
                        ? "Forever begins"
                        : index === 4
                        ? "Today"
                        : "A beautiful memory"}
                    </span>

                  </div>

                  {/* Featured badge */}

                  {event.featured && (
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        bg-[#ec2f83]
                        px-3
                        py-1.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white
                        shadow-lg
                      "
                    >
                      Forever
                    </div>
                  )}

                  {event.final && (
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        border
                        border-pink-200
                        bg-white
                        px-3
                        py-1.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#ec2f83]
                      "
                    >
                      Today
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          END MESSAGE
      ===================================================== */}

      <div className="relative z-10 mx-auto mt-8 max-w-xl text-center">

        <div className="mx-auto flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-pink-100" />
          <span className="text-sm text-[#ec2f83]">
            ❤️
          </span>
          <span className="h-px w-12 bg-pink-100" />
        </div>

        <p className="mt-6 font-serif text-lg italic text-[#d91b68] sm:text-xl">
          And the beautiful story continues...
        </p>

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#a88d99]">
          2004 → 2008 → 2026 → Forever
        </p>
      </div>
    </section>
  );
}