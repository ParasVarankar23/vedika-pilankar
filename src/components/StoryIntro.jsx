"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".story-label", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".story-title-line",
          {
            opacity: 0,
            y: 45,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".story-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".story-year",
          {
            opacity: 0,
            scale: 0.7,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".story-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.96,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Floating hearts

      gsap.to(".story-heart-one", {
        y: -18,
        x: 8,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".story-heart-two", {
        y: 15,
        x: -8,
        rotation: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Central glow

      gsap.to(".story-glow", {
        scale: 1.15,
        opacity: 0.65,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Small pulse

      gsap.to(".story-dot", {
        scale: 1.6,
        opacity: 0.25,
        duration: 2,
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
            story-glow
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-100/40
            blur-[100px]
            sm:h-[500px]
            sm:w-[500px]
          "
        />

        {/* Giant year */}

        <div
          className="
            absolute
            left-1/2
            top-[18%]
            -translate-x-1/2
            font-serif
            text-[150px]
            font-bold
            leading-none
            tracking-tight
            text-[#ec2f83]/[0.035]
            sm:text-[280px]
          "
        >
          2004
        </div>

        {/* Decorative rings */}

        <div
          className="
            absolute
            -left-24
            top-[35%]
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
            bottom-[20%]
            h-72
            w-72
            rounded-full
            border
            border-pink-100/60
          "
        />

        {/* Floating symbols */}

        <span
          className="
            story-heart-one
            absolute
            left-[9%]
            top-[25%]
            text-3xl
            text-[#ec2f83]/20
          "
        >
          ♡
        </span>

        <span
          className="
            story-heart-two
            absolute
            right-[10%]
            bottom-[25%]
            text-3xl
            text-[#ec2f83]/20
          "
        >
          ♡
        </span>

        <span
          className="
            absolute
            left-[20%]
            top-[65%]
            text-lg
            text-[#ec2f83]/15
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            right-[22%]
            top-[20%]
            text-xl
            text-[#ec2f83]/15
          "
        >
          ✧
        </span>

        <span
          className="
            story-dot
            absolute
            left-[30%]
            top-[30%]
            h-2
            w-2
            rounded-full
            bg-[#ec2f83]/40
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Chapter label */}

        <div className="story-label flex items-center justify-center gap-4">

          <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-12" />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#ec2f83]
              sm:text-[10px]
            "
          >
            Before the birthday
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-12" />

        </div>

        {/* Small chapter badge */}

        <div
          className="
            story-label
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
            Chapter 00
          </span>

          <span className="h-1 w-1 rounded-full bg-pink-300" />

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#765f69]">
            The beginning
          </span>
        </div>

        {/* Heading */}

        <h2
          className="
            mt-9
            font-serif
            text-[43px]
            font-semibold
            leading-[1.08]
            tracking-tight
            text-[#24151d]
            sm:text-6xl
            md:text-7xl
          "
        >
          <span className="story-title-line block">
            Every beautiful story
          </span>

          <span className="story-title-line mt-1 block">
            has a
            <span className="text-[#ec2f83]">
              {" "}beginning.
            </span>
          </span>
        </h2>

        {/* Decorative divider */}

        <div className="story-title-line mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />

          <span className="text-sm text-[#ec2f83]">
            ♡
          </span>

          <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />
        </div>

        {/* Description */}

        <p
          className="
            story-description
            mx-auto
            mt-8
            max-w-2xl
            text-sm
            leading-7
            text-[#765f69]
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          And theirs began not with a grand plan, but with two
          teachers, a school and a few moments that would slowly
          become something much more.
        </p>

        {/* =====================================================
            YEAR CARD
        ===================================================== */}

        <div className="relative mx-auto mt-12 max-w-xl">

          {/* Year */}

          <div
            className="
              story-year
              font-serif
              text-[110px]
              font-semibold
              leading-none
              tracking-[-0.05em]
              text-[#ec2f83]
              sm:text-[170px]
            "
          >
            2004
          </div>

          {/* Year caption */}

          <div
            className="
              story-card
              relative
              mx-auto
              -mt-3
              w-fit
              rounded-full
              border
              border-pink-100
              bg-white/90
              px-5
              py-2.5
              shadow-[0_15px_50px_rgba(236,47,131,0.08)]
              backdrop-blur-xl
              sm:-mt-5
              sm:px-7
              sm:py-3
            "
          >
            <div className="flex items-center gap-3">

              <span className="text-sm">
                🏫
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#765f69] sm:text-[10px]">
                Where their story began
              </span>

              <span className="text-sm">
                ❤️
              </span>

            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <div className="story-card mt-12">

          <p className="font-serif text-lg italic text-[#d91b68] sm:text-xl">
            “Some beginnings are ordinary...
            <br className="sm:hidden" />
            until they become unforgettable.”
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#a88d99]">
            <span>2004</span>
            <span className="text-pink-300">•</span>
            <span>Two Teachers</span>
            <span className="text-pink-300">•</span>
            <span>One Story</span>
          </div>

        </div>
      </div>
    </section>
  );
}