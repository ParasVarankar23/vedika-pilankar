"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Chapter40() {
  const section = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /* =====================================================
         INTRO ANIMATION
      ===================================================== */

      tl.from(".chapter-orbit", {
        opacity: 0,
        scale: 0.5,
        duration: 1.3,
      })
        .from(
          ".chapter-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.7"
        )
        .from(
          ".chapter-number",
          {
            opacity: 0,
            scale: 0.65,
            y: 30,
            duration: 1.2,
            ease: "back.out(1.4)",
          },
          "-=0.4"
        )
        .from(
          ".chapter-title",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.55"
        )
        .from(
          ".chapter-description",
          {
            opacity: 0,
            y: 18,
            duration: 0.8,
          },
          "-=0.35"
        )
        .from(
          ".chapter-date",
          {
            opacity: 0,
            y: 15,
            scale: 0.95,
            duration: 0.8,
          },
          "-=0.35"
        );

      /* =====================================================
         CENTER GLOW
      ===================================================== */

      gsap.to(".chapter-glow", {
        scale: 1.2,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         GIANT BACKGROUND 40
      ===================================================== */

      gsap.to(".chapter-background-number", {
        scale: 1.04,
        opacity: 0.08,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         ORBIT
      ===================================================== */

      gsap.to(".chapter-orbit", {
        rotation: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         FLOATING HEARTS
      ===================================================== */

      gsap.to(".chapter-heart-one", {
        y: -18,
        x: 7,
        rotation: 8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter-heart-two", {
        y: -15,
        x: -7,
        rotation: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chapter-heart-three", {
        y: -20,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         MAIN 40 PULSE
      ===================================================== */

      gsap.to(".chapter-main-number", {
        scale: 1.035,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         SPARKLE
      ===================================================== */

      gsap.to(".chapter-sparkle", {
        rotation: 180,
        scale: 1.15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative flex h-[100svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-white px-5 sm:px-8"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}

        <div
          className="
            chapter-glow
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-200/30
            blur-[100px]
            sm:h-[520px]
            sm:w-[520px]
            sm:blur-[140px]
          "
        />

        {/* Top left glow */}

        <div className="absolute -left-36 -top-36 h-80 w-80 rounded-full bg-pink-100/50 blur-[110px]" />

        {/* Bottom right glow */}

        <div className="absolute -bottom-36 -right-36 h-80 w-80 rounded-full bg-rose-100/50 blur-[110px]" />

        {/* =================================================
            GIANT BACKGROUND NUMBER
        ================================================= */}

        <div
          className="
            chapter-background-number
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[230px]
            font-bold
            leading-none
            text-[#ec2f83]
            opacity-[0.045]
            sm:text-[480px]
          "
        >
          42
        </div>

        {/* =================================================
            ORBIT
        ================================================= */}

        <div
          className="
            chapter-orbit
            absolute
            left-1/2
            top-1/2
            h-[285px]
            w-[285px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#ec2f83]/10
            sm:h-[500px]
            sm:w-[500px]
          "
        >
          {/* Orbit dot */}

          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ec2f83]/55 shadow-[0_0_18px_rgba(236,47,131,0.5)]" />

          {/* Orbit dot */}

          <span className="absolute bottom-[8%] left-[12%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/30" />

          {/* Orbit dot */}

          <span className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-pink-300/40" />
        </div>

        {/* =================================================
            FLOATING DECORATIONS
        ================================================= */}

        <span className="chapter-heart-one absolute left-[9%] top-[25%] text-2xl text-[#ec2f83]/20 sm:left-[17%] sm:text-3xl">
          ♡
        </span>

        <span className="chapter-heart-two absolute right-[9%] top-[30%] text-3xl text-[#ec2f83]/20 sm:right-[17%]">
          ♡
        </span>

        <span className="chapter-heart-three absolute bottom-[22%] left-[17%] text-lg text-[#ec2f83]/20 sm:left-[25%]">
          ✦
        </span>

        <span className="absolute bottom-[25%] right-[17%] text-xl text-[#ec2f83]/15">
          ✧
        </span>

        <span className="absolute left-[8%] top-[17%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

        <span className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-[#ec2f83]/25" />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-4xl text-center">

        {/* =================================================
            LABEL
        ================================================= */}

        <div className="chapter-label flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
            A New Chapter
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

        </div>

        {/* =================================================
            MAIN NUMBER
        ================================================= */}

        <div className="relative mx-auto mt-2 w-fit sm:mt-0">

          {/* Glow behind number */}

          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/25 blur-[60px] sm:h-48 sm:w-48" />

          <h2
            className="
              chapter-number
              chapter-main-number
              relative
              font-serif
              text-[120px]
              font-semibold
              leading-none
              tracking-[-0.08em]
              text-[#24151d]
              sm:text-[180px]
              md:text-[210px]
            "
          >
            42
          </h2>

        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="chapter-title -mt-2 sm:-mt-4">

          <h3 className="text-2xl font-semibold tracking-tight text-[#d91b68] sm:text-4xl">
            Chapter 42
          </h3>

          <div className="mt-2 flex items-center justify-center gap-2">

            <span className="h-px w-6 bg-[#ec2f83]/25 sm:w-10" />

            <span className="chapter-sparkle text-xs text-[#ec2f83]">
              ✦
            </span>

            <span className="h-px w-6 bg-[#ec2f83]/25 sm:w-10" />

          </div>

        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            chapter-description
            mx-auto
            mt-5
            max-w-[320px]
            text-[11px]
            leading-6
            text-[#765f69]
            sm:mt-6
            sm:max-w-2xl
            sm:text-base
            sm:leading-7
          "
        >
          Forty-two years of life, laughter, love, memories
          and countless moments that shaped the beautiful
          person Minal is today.
        </p>

        {/* =================================================
            DATE
        ================================================= */}

        <div className="chapter-date mx-auto mt-6 flex w-fit flex-col items-center sm:mt-8">

          <div className="flex items-center gap-2 rounded-full border border-pink-100 bg-white/75 px-4 py-2 shadow-[0_10px_35px_rgba(236,47,131,0.08)] backdrop-blur-xl sm:px-6 sm:py-2.5">

            <span className="font-serif text-xs font-semibold text-[#765f69] sm:text-sm">
              29 · 08 · 1984
            </span>

            <span className="text-[#ec2f83]">
              →
            </span>

            <span className="font-serif text-xs font-semibold text-[#ec2f83] sm:text-sm">
              29 · 08 · 2026
            </span>

          </div>

          <p className="mt-2 text-[7px] uppercase tracking-[0.3em] text-[#b49aa5] sm:text-[8px]">
            42 beautiful years
          </p>

        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div className="mt-6 sm:mt-8">

          <p className="text-[8px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
            The best chapters are still ahead
          </p>

        </div>

      </div>
    </section>
  );
}