"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FinalMessage() {
  const section = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".final-glow", {
        opacity: 0,
        scale: 0.75,
        duration: 1.2,
      })
        .from(
          ".final-heart",
          {
            opacity: 0,
            scale: 0,
            y: 20,
            duration: 0.9,
            ease: "back.out(1.8)",
          },
          "-=0.6"
        )
        .from(
          ".final-label",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".final-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".final-description",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".final-divider",
          {
            opacity: 0,
            scaleX: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".final-story",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".final-birthday",
          {
            opacity: 0,
            y: 20,
            scale: 0.97,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".final-signature",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
          },
          "-=0.3"
        );

      // Main glow
      gsap.to(".final-glow", {
        scale: 1.12,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Heart breathing animation
      gsap.to(".final-heart", {
        scale: 1.08,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });

      // Orbit
      gsap.to(".final-orbit", {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      // Floating decorations
      gsap.to(".final-heart-one", {
        y: -18,
        x: 7,
        rotation: 8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".final-heart-two", {
        y: -14,
        x: -7,
        rotation: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".final-heart-three", {
        y: -16,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".final-sparkle", {
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
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#fff9fc]
        px-5
        py-10
        sm:px-8
        sm:py-12
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div
          className="
            final-glow
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-200/30
            blur-[90px]
            sm:h-[520px]
            sm:w-[520px]
            sm:blur-[140px]
          "
        />

        {/* Corner glows */}
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-100/50 blur-[100px]" />

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-rose-100/50 blur-[100px]" />

        {/* Giant heart */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[220px]
            leading-none
            text-[#ec2f83]
            opacity-[0.025]
            sm:text-[480px]
          "
        >
          ♥
        </div>

        {/* Orbit */}
        <div
          className="
            final-orbit
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#ec2f83]/10
            sm:h-[500px]
            sm:w-[500px]
          "
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec2f83]/45 shadow-[0_0_18px_rgba(236,47,131,0.4)]" />

          <span className="absolute bottom-[10%] left-[10%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/30" />

          <span className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-pink-300/40" />
        </div>

        {/* Floating hearts */}
        <span className="final-heart-one absolute left-[8%] top-[22%] text-2xl text-[#ec2f83]/20 sm:left-[17%] sm:text-3xl">
          ♡
        </span>

        <span className="final-heart-two absolute right-[8%] top-[27%] text-3xl text-[#ec2f83]/20 sm:right-[17%]">
          ♡
        </span>

        <span className="final-heart-three absolute bottom-[20%] left-[18%] text-lg text-[#ec2f83]/20 sm:left-[25%]">
          ✦
        </span>

        <span className="absolute bottom-[22%] right-[18%] text-xl text-[#ec2f83]/20">
          ✧
        </span>

        <span className="absolute left-[10%] top-[16%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

        <span className="absolute right-[10%] top-[18%] h-2 w-2 rounded-full bg-[#ec2f83]/25" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Heart */}
        <div
          className="
            final-heart
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-pink-100
            bg-white/85
            text-2xl
            shadow-[0_18px_55px_rgba(236,47,131,0.15)]
            backdrop-blur-xl
            sm:h-20
            sm:w-20
            sm:text-4xl
          "
        >
          ❤️
        </div>

        {/* Label */}
        <div className="final-label mt-5 flex items-center justify-center gap-3 sm:mt-7">
          <span className="h-px w-7 bg-[#ec2f83]/25 sm:w-14" />

          <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
            The Story Continues
          </p>

          <span className="h-px w-7 bg-[#ec2f83]/25 sm:w-14" />
        </div>

        {/* Title */}
        <h2
          className="
            final-title
            mx-auto
            mt-4
            max-w-3xl
            font-serif
            text-[30px]
            font-semibold
            leading-[1.1]
            tracking-tight
            text-[#24151d]
            sm:mt-6
            sm:text-6xl
            md:text-7xl
          "
        >
          Some stories begin
          <br />
          with a <span className="text-[#ec2f83]">moment.</span>
        </h2>

        {/* Description */}
        <p
          className="
            final-description
            mx-auto
            mt-4
            max-w-[300px]
            text-[10px]
            leading-5
            text-[#765f69]
            sm:mt-6
            sm:max-w-xl
            sm:text-base
            sm:leading-7
          "
        >
          Some begin with a song.
          <br />
          And some become a lifetime.
        </p>

        {/* Divider */}
        <div className="final-divider mx-auto my-5 flex items-center justify-center gap-3 sm:my-7">
          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-16" />

          <span className="final-sparkle text-xs text-[#ec2f83]">
            ✦
          </span>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-16" />
        </div>

        {/* Story */}
        <div className="final-story">
          <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
            Their story began in
          </p>

          <div className="mt-1 flex items-center justify-center gap-3">
            <span className="font-serif text-lg font-semibold text-[#765f69] sm:text-2xl">
              2004
            </span>

            <span className="text-[#ec2f83]">→</span>

            <span className="font-serif text-lg font-semibold text-[#ec2f83] sm:text-2xl">
              2026
            </span>
          </div>
        </div>

        {/* Birthday */}
        <div className="final-birthday mt-4 sm:mt-6">
          <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#a88d99] sm:text-[9px]">
            A beautiful journey
          </p>

          <h3
            className="
              mt-1.5
              font-serif
              text-[25px]
              font-semibold
              leading-tight
              text-[#ec2f83]
              sm:mt-2
              sm:text-5xl
              md:text-6xl
            "
          >
            Happy Birthday,
            <br className="sm:hidden" /> Kavya
          </h3>

          <div className="mt-1 text-sm text-[#ec2f83]">
            ✨
          </div>

          <p className="mt-1 text-[8px] text-[#765f69] sm:text-sm">
            Chapter 42 begins now.
          </p>
        </div>

        {/* Signature */}
        <div className="final-signature mt-4 sm:mt-7">
          <p className="text-[7px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
            With love, always
          </p>

          <p className="mt-1.5 font-serif text-base font-semibold text-[#24151d] sm:mt-2 sm:text-xl">
            Siddhartha
          </p>

          <div className="mt-1 text-xs text-[#ec2f83]">
            ♥
          </div>
        </div>
      </div>
    </section>
  );
}
