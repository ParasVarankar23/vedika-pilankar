"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BirthdayReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".reveal-orbit", {
        opacity: 0,
        scale: 0.7,
        duration: 1.2,
      })
        .from(
          ".reveal-spark",
          {
            opacity: 0,
            scale: 0,
            rotation: -30,
            duration: 0.8,
            ease: "back.out(2)",
          },
          "-=0.6"
        )
        .from(
          ".reveal-label",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".reveal-title",
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          ".reveal-name",
          {
            opacity: 0,
            y: 25,
            scale: 0.95,
            duration: 0.9,
          },
          "-=0.5"
        )
        .from(
          ".reveal-line",
          {
            opacity: 0,
            scaleX: 0,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".reveal-description",
          {
            opacity: 0,
            y: 18,
            duration: 0.8,
          },
          "-=0.35"
        )
        .from(
          ".reveal-year",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
          },
          "-=0.3"
        );

      /* =====================================================
         GLOW
      ===================================================== */

      gsap.to(".reveal-glow", {
        scale: 1.18,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         GIANT 40
      ===================================================== */

      gsap.to(".reveal-number", {
        scale: 1.04,
        opacity: 0.055,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         ORBIT
      ===================================================== */

      gsap.to(".reveal-orbit", {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         FLOATING PARTICLES
      ===================================================== */

      gsap.to(".reveal-particle-one", {
        y: -18,
        x: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".reveal-particle-two", {
        y: -14,
        x: -8,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".reveal-particle-three", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         HEART PULSE
      ===================================================== */

      gsap.to(".reveal-heart", {
        scale: 1.12,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#fff9fc] px-5 sm:px-8"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}

        <div
          className="
            reveal-glow
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
            sm:h-[520px]
            sm:w-[520px]
            sm:blur-[140px]
          "
        />

        {/* Top left */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-pink-100/45 blur-[100px]" />

        {/* Bottom right */}

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-rose-100/45 blur-[110px]" />

        {/* =================================================
            GIANT 40
        ================================================= */}

        <div
          className="
            reveal-number
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
            opacity-[0.035]
            sm:text-[450px]
          "
        >
          42
        </div>

        {/* =================================================
            ORBIT
        ================================================= */}

        <div
          className="
            reveal-orbit
            absolute
            left-1/2
            top-1/2
            h-[270px]
            w-[270px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#ec2f83]/10
            sm:h-[470px]
            sm:w-[470px]
          "
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec2f83]/50 shadow-[0_0_15px_rgba(236,47,131,0.45)]" />

          <span className="absolute bottom-[12%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/30" />

          <span className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-pink-300/40" />
        </div>

        {/* =================================================
            PARTICLES
        ================================================= */}

        <span className="reveal-particle-one absolute left-[10%] top-[26%] text-2xl text-[#ec2f83]/20 sm:left-[18%]">
          ♡
        </span>

        <span className="reveal-particle-two absolute right-[10%] top-[30%] text-3xl text-[#ec2f83]/20 sm:right-[18%]">
          ♡
        </span>

        <span className="reveal-particle-three absolute bottom-[24%] left-[18%] text-sm text-[#ec2f83]/25 sm:left-[25%]">
          ✦
        </span>

        <span className="absolute bottom-[26%] right-[18%] text-lg text-[#ec2f83]/20">
          ✧
        </span>

        <span className="absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

        <span className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-[#ec2f83]/25" />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-4xl text-center">

        {/* Spark */}

        <div className="reveal-spark reveal-heart mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-pink-100 bg-white/75 text-2xl text-[#ec2f83] shadow-[0_15px_45px_rgba(236,47,131,0.12)] backdrop-blur-xl sm:h-16 sm:w-16 sm:text-3xl">
          ✨
        </div>

        {/* Label */}

        <div className="reveal-label mt-7 flex items-center justify-center gap-3 sm:mt-8">

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
            A Special Day
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

        </div>

        {/* Main title */}

        <h2
          className="
            reveal-title
            mt-5
            font-serif
            text-[45px]
            font-semibold
            leading-none
            tracking-[-0.03em]
            text-[#24151d]
            sm:mt-6
            sm:text-7xl
            md:text-8xl
          "
        >
          Happy Birthday
        </h2>

        {/* Name */}

        <h3
          className="
            reveal-name
            mt-2
            font-serif
            text-[39px]
            font-semibold
            leading-none
            text-[#ec2f83]
            sm:mt-3
            sm:text-6xl
            md:text-7xl
          "
        >
          Vedika
          <span className="reveal-heart ml-2 inline-block text-2xl sm:text-4xl">
            ♥
          </span>
        </h3>

        {/* Elegant divider */}

        <div className="reveal-line mx-auto mt-6 flex items-center justify-center gap-3 sm:mt-7">

          <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />

          <span className="text-[10px] text-[#ec2f83]">
            ✦
          </span>

          <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />

        </div>

        {/* Description */}

        <p
          className="
            reveal-description
            mx-auto
            mt-6
            max-w-[320px]
            text-[11px]
            leading-6
            text-[#765f69]
            sm:mt-7
            sm:max-w-xl
            sm:text-base
            sm:leading-7
          "
        >
          Before we celebrate Chapter 42,
          let us travel back to the very beginning
          of a beautiful story.
        </p>

        {/* =================================================
            YEAR CARD
        ================================================= */}

        <div className="reveal-year mx-auto mt-7 inline-flex items-center gap-3 rounded-full border border-pink-100 bg-white/70 px-4 py-2 shadow-[0_10px_35px_rgba(236,47,131,0.07)] backdrop-blur-xl sm:mt-8 sm:px-5 sm:py-2.5">

          <span className="text-[#ec2f83]">
            ♡
          </span>

          <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#765f69] sm:text-[9px]">
            A story that began in
          </span>

          <span className="font-serif text-sm font-semibold text-[#d91b68] sm:text-base">
            2004
          </span>

        </div>

        {/* Bottom hint */}

        <div className="mt-7 sm:mt-9">

          <p className="text-[7px] uppercase tracking-[0.3em] text-[#b49aa5] sm:text-[8px]">
            And now, let us go back...
          </p>

        </div>

      </div>
    </section>
  );
}
