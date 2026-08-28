"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SchoolStory() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".school-label", {
        opacity: 0,
        y: 20,
        duration: 0.7,
      })
        .from(
          ".school-year",
          {
            opacity: 0,
            scale: 0.7,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".school-content",
          {
            opacity: 0,
            x: -40,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".school-visual",
          {
            opacity: 0,
            x: 40,
            scale: 0.94,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".school-detail",
          {
            opacity: 0,
            y: 20,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.5"
        );

      /* Floating school icon */

      gsap.to(".school-icon", {
        y: -10,
        rotation: 2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Glow */

      gsap.to(".school-glow", {
        scale: 1.15,
        opacity: 0.65,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Decorative dots */

      gsap.to(".school-dot-one", {
        y: -18,
        x: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".school-dot-two", {
        y: 15,
        x: -8,
        duration: 3.5,
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

        {/* Main glow */}

        <div
          className="
            school-glow
            absolute
            left-[25%]
            top-[35%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-pink-200/25
            blur-[110px]
            sm:h-[550px]
            sm:w-[550px]
          "
        />

        {/* Giant 2004 */}

        <div
          className="
            school-year
            absolute
            right-[-20px]
            top-[12%]
            font-serif
            text-[180px]
            font-bold
            leading-none
            text-[#ec2f83]/[0.035]
            sm:right-[3%]
            sm:text-[320px]
          "
        >
          2004
        </div>

        {/* Decorative circles */}

        <div className="absolute -left-20 bottom-[10%] h-52 w-52 rounded-full border border-pink-100/70" />

        <div className="absolute right-[8%] top-[18%] h-20 w-20 rounded-full border border-pink-100/70" />

        {/* Floating symbols */}

        <span className="school-dot-one absolute left-[10%] top-[22%] text-2xl text-[#ec2f83]/20">
          ✦
        </span>

        <span className="school-dot-two absolute right-[12%] top-[65%] text-3xl text-[#ec2f83]/15">
          ♡
        </span>

        <span className="absolute bottom-[18%] left-[42%] text-lg text-[#ec2f83]/10">
          ✧
        </span>
      </div>

      {/* =====================================================
          MAIN CARD
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        <div
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-pink-100
            bg-white/90
            shadow-[0_30px_120px_rgba(236,47,131,0.09)]
            backdrop-blur-xl
            sm:rounded-[2.5rem]
          "
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="school-content p-7 sm:p-12 lg:p-16">

              {/* Chapter */}

              <div className="school-label flex items-center gap-3">
                <span className="h-px w-8 bg-[#ec2f83]/30" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#ec2f83] sm:text-[10px]">
                  Chapter 01
                </p>
              </div>

              {/* Date badge */}

              <div
                className="
                  school-detail
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-pink-100
                  bg-[#fff9fc]
                  px-4
                  py-2
                "
              >
                <span className="text-xs text-[#ec2f83]">
                  2004
                </span>

                <span className="h-1 w-1 rounded-full bg-pink-300" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#765f69]">
                  Where it began
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  school-detail
                  mt-7
                  max-w-xl
                  font-serif
                  text-[42px]
                  font-semibold
                  leading-[1.08]
                  tracking-tight
                  text-[#24151d]
                  sm:text-6xl
                "
              >
               V. G. Limaye Vidya Mandir
                <br />
                <span className="text-[#ec2f83]">
                  School
                </span>
              </h2>

              {/* Divider */}

              <div className="school-detail mt-7 h-px w-16 bg-[#ec2f83]/40" />

              {/* Story */}

              <p
                className="
                  school-detail
                  mt-7
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#765f69]
                  sm:text-base
                  sm:leading-8
                "
              >
                In 2004, two teachers found themselves sharing
                the same school. They came together for work,
                but life had something much more beautiful
                planned for them.
              </p>

              <p
                className="
                  school-detail
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#765f69]
                  sm:text-base
                  sm:leading-8
                "
              >
                Somewhere between classrooms, conversations
                and everyday school life, a simple connection
                slowly began to become something more.
              </p>

              {/* =================================================
                  MINI STORY POINTS
              ================================================= */}

              <div className="school-detail mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <div
                  className="
                    rounded-2xl
                    border
                    border-pink-100
                    bg-[#fff9fc]
                    p-4
                  "
                >
                  <div className="text-xl">
                    🏫
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ec2f83]">
                    Same School
                  </p>

                  <p className="mt-1 text-xs text-[#765f69]">
                    Where they met
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-pink-100
                    bg-[#fff9fc]
                    p-4
                  "
                >
                  <div className="text-xl">
                    👩‍🏫
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ec2f83]">
                    Teachers
                  </p>

                  <p className="mt-1 text-xs text-[#765f69]">
                    A shared journey
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-pink-100
                    bg-[#fff9fc]
                    p-4
                  "
                >
                  <div className="text-xl">
                    ❤️
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ec2f83]">
                    First Connection
                  </p>

                  <p className="mt-1 text-xs text-[#765f69]">
                    Something began
                  </p>
                </div>

              </div>

              {/* Closing */}

              <div className="school-detail mt-9 flex items-center gap-3">
                <span className="font-serif text-lg italic text-[#d91b68]">
                  Every love story has a beginning.
                </span>

                <span className="text-[#ec2f83]">
                  ♡
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div
              className="
                school-visual
                relative
                min-h-[420px]
                overflow-hidden
                bg-[#fff0f6]
                lg:min-h-full
              "
            >
              {/* Background giant year */}

              <div
                className="
                  absolute
                  right-[-30px]
                  top-[-20px]
                  font-serif
                  text-[190px]
                  font-bold
                  leading-none
                  text-white/60
                  sm:text-[260px]
                "
              >
                04
              </div>

              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[80px]" />

              {/* Rotating circle */}

              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 sm:h-80 sm:w-80" />

              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 sm:h-64 sm:w-64" />

              {/* Main visual */}

              <div className="relative z-10 flex h-full min-h-[420px] flex-col items-center justify-center px-8 text-center">

                {/* Icon */}

                <div
                  className="
                    school-icon
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-[2rem]
                    border
                    border-white
                    bg-white/80
                    text-6xl
                    shadow-[0_25px_80px_rgba(236,47,131,0.15)]
                    backdrop-blur-xl
                    sm:h-36
                    sm:w-36
                    sm:text-7xl
                  "
                >
                  🏫
                </div>

                {/* Year */}

                <p
                  className="
                    mt-7
                    font-serif
                    text-7xl
                    font-semibold
                    leading-none
                    text-[#ec2f83]
                    sm:text-8xl
                  "
                >
                  2004
                </p>

                <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-[#765f69]">
                  Where it all began
                </p>

                {/* Small timeline */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white
                    bg-white/60
                    px-5
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <span className="text-xs font-medium text-[#ec2f83]">
                    School
                  </span>

                  <span className="text-pink-300">
                    →
                  </span>

                  <span className="text-xs font-medium text-[#765f69]">
                    Friendship
                  </span>

                  <span className="text-pink-300">
                    →
                  </span>

                  <span className="text-xs font-medium text-[#d91b68]">
                    Love
                  </span>
                </div>
              </div>

              {/* Floating heart */}

              <div
                className="
                  absolute
                  bottom-7
                  right-7
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/70
                  text-lg
                  shadow-lg
                  backdrop-blur
                "
              >
                ♡
              </div>

              {/* Floating sparkle */}

              <div className="absolute left-8 top-8 text-xl text-white">
                ✦
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM STORY BAR
          ================================================= */}

          <div
            className="
              border-t
              border-pink-100
              bg-[#fff9fc]/80
              px-6
              py-5
              sm:px-12
            "
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:justify-between">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#765f69] sm:text-[10px]">
                A school became a memory
              </p>

              <div className="flex items-center gap-3 text-xs">
                <span className="font-medium text-[#ec2f83]">
                  2004
                </span>

                <span className="text-pink-300">
                  →
                </span>

                <span className="font-medium text-[#765f69]">
                  Two Teachers
                </span>

                <span className="text-pink-300">
                  →
                </span>

                <span className="font-semibold text-[#d91b68]">
                  One Story ❤️
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
