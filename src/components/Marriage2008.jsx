"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Marriage2008() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".marriage-label", {
        opacity: 0,
        y: 20,
        duration: 0.7,
      })
        .from(
          ".marriage-year",
          {
            opacity: 0,
            scale: 0.65,
            y: 50,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".marriage-heart",
          {
            opacity: 0,
            scale: 0,
            rotation: -25,
            duration: 1.1,
            ease: "back.out(1.7)",
          },
          "-=0.7"
        )
        .from(
          ".marriage-title",
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".marriage-text",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".marriage-timeline",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.3"
        );

      /* Heart breathing */

      gsap.to(".marriage-heart-inner", {
        scale: 1.12,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Main glow */

      gsap.to(".marriage-glow", {
        scale: 1.18,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Decorative rings */

      gsap.to(".ring-one", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ring-two", {
        rotation: -360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      /* Floating particles */

      gsap.to(".marriage-particle-one", {
        y: -25,
        x: 8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".marriage-particle-two", {
        y: -18,
        x: -8,
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
        flex
        min-h-[100svh]
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}

        <div
          className="
            marriage-glow
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-200/30
            blur-[100px]
            sm:h-[550px]
            sm:w-[550px]
            sm:blur-[130px]
          "
        />

        {/* Top-left glow */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-pink-100/40 blur-[110px]" />

        {/* Bottom-right glow */}

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-rose-100/40 blur-[110px]" />

        {/* =================================================
            GIANT 2008
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[190px]
            font-bold
            leading-none
            text-[#ec2f83]/[0.025]
            sm:text-[360px]
          "
        >
          2008
        </div>

        {/* =================================================
            ROTATING RINGS
        ================================================= */}

        <div
          className="
            ring-one
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-pink-100
            sm:h-[430px]
            sm:w-[430px]
          "
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec2f83]/30" />
        </div>

        <div
          className="
            ring-two
            absolute
            left-1/2
            top-1/2
            h-[210px]
            w-[210px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-pink-100/60
            sm:h-[350px]
            sm:w-[350px]
          "
        >
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink-300/40" />
        </div>

        {/* Floating particles */}

        <span className="marriage-particle-one absolute left-[12%] top-[28%] text-2xl text-[#ec2f83]/15">
          ✦
        </span>

        <span className="marriage-particle-two absolute right-[12%] top-[34%] text-3xl text-[#ec2f83]/15">
          ♡
        </span>

        <span className="absolute bottom-[22%] left-[17%] text-sm text-[#ec2f83]/15">
          ✧
        </span>

        <span className="absolute bottom-[18%] right-[18%] text-sm text-[#ec2f83]/15">
          ✦
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-5xl text-center">

        {/* Label */}

        <div className="marriage-label flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#ec2f83] sm:text-[10px]">
            The Next Chapter
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />
        </div>

        {/* Small date badge */}

        <div
          className="
            marriage-label
            mx-auto
            mt-5
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-pink-100
            bg-white/80
            px-4
            py-2
            shadow-[0_10px_35px_rgba(236,47,131,0.07)]
            backdrop-blur-xl
          "
        >
          <span className="text-[10px] font-medium text-[#ec2f83]">
            2008
          </span>

          <span className="h-1 w-1 rounded-full bg-[#ec2f83]/40" />

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#765f69]">
            A New Beginning
          </span>
        </div>

        {/* =====================================================
            YEAR
        ===================================================== */}

        <div
          className="
            marriage-year
            mt-7
            font-serif
            text-[88px]
            font-semibold
            leading-none
            tracking-[-0.06em]
            text-[#ec2f83]
            sm:text-[150px]
            md:text-[175px]
          "
        >
          2008
        </div>

        {/* =====================================================
            HEART SEAL
        ===================================================== */}

        <div
          className="
            marriage-heart
            relative
            mx-auto
            -mt-4
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-pink-100
            bg-white
            shadow-[0_20px_70px_rgba(236,47,131,0.16)]
            sm:-mt-8
            sm:h-24
            sm:w-24
          "
        >
          <div className="absolute inset-2 rounded-full border border-pink-100/70" />

          <span className="marriage-heart-inner relative text-3xl sm:text-4xl">
            ❤️
          </span>
        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}

        <h2
          className="
            marriage-title
            mt-7
            font-serif
            text-[36px]
            font-semibold
            leading-[1.12]
            tracking-tight
            text-[#24151d]
            sm:text-6xl
            md:text-7xl
          "
        >
          From Love
          <br />
          <span className="text-[#ec2f83]">
            to Forever
          </span>
        </h2>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <p
          className="
            marriage-text
            mx-auto
            mt-6
            max-w-[330px]
            text-[12px]
            leading-6
            text-[#765f69]
            sm:mt-8
            sm:max-w-2xl
            sm:text-base
            sm:leading-8
          "
        >
          What began at C.K.T. School, Panvel in 2004 slowly
          became a beautiful journey.
          <br className="hidden sm:block" />
          In 2008, their love story entered a new chapter —
          a life together.
        </p>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div
          className="
            marriage-timeline
            mx-auto
            mt-9
            max-w-2xl
            rounded-[1.5rem]
            border
            border-pink-100
            bg-[#fff9fc]/80
            p-5
            shadow-[0_20px_70px_rgba(236,47,131,0.07)]
            backdrop-blur-xl
            sm:mt-11
            sm:rounded-full
            sm:px-8
            sm:py-4
          "
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#765f69] sm:text-xs sm:tracking-[0.2em]">
            <span className="text-[#ec2f83]">
              2004
            </span>

            <span className="text-pink-300">
              →
            </span>

            <span>
              Love
            </span>

            <span className="text-pink-300">
              →
            </span>

            <span className="text-[#ec2f83]">
              2008
            </span>

            <span className="text-pink-300">
              →
            </span>

            <span>
              Marriage
            </span>

            <span className="text-pink-300">
              →
            </span>

            <span className="font-semibold text-[#d91b68]">
              Forever
            </span>
          </div>
        </div>

        {/* =====================================================
            CLOSING
        ===================================================== */}

        <div className="marriage-timeline mt-8">
          <p className="font-serif text-lg italic text-[#d91b68] sm:text-2xl">
            Two lives. One beautiful journey. ❤️
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-[#ec2f83]/30">
            <span>✦</span>
            <span className="h-px w-8 bg-[#ec2f83]/20" />
            <span>♡</span>
            <span className="h-px w-8 bg-[#ec2f83]/20" />
            <span>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}