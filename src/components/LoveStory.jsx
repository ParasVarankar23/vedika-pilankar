"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LoveStory() {
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

      tl.from(".love-label", {
        opacity: 0,
        y: 20,
        duration: 0.7,
      })
        .from(
          ".love-title",
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".love-line",
          {
            scaleX: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .from(
          ".love-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".person-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".love-ending",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );

      /* Heart breathing animation */

      gsap.to(".love-heart", {
        scale: 1.12,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Background glow */

      gsap.to(".love-glow", {
        scale: 1.18,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Floating hearts */

      gsap.to(".floating-heart-one", {
        y: -25,
        x: 8,
        rotation: 8,
        opacity: 0.35,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-heart-two", {
        y: -18,
        x: -10,
        rotation: -7,
        opacity: 0.3,
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
        bg-[#fff9fc]
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
            love-glow
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-200/25
            blur-[100px]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[130px]
          "
        />

        {/* Corner glows */}

        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-pink-100/30 blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-rose-100/30 blur-[100px]" />

        {/* Giant background heart */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[250px]
            text-[#ec2f83]/[0.025]
            sm:text-[420px]
          "
        >
          ♡
        </div>

        {/* Floating hearts */}

        <span className="floating-heart-one absolute left-[10%] top-[25%] text-3xl text-[#ec2f83]/15">
          ♡
        </span>

        <span className="floating-heart-two absolute right-[10%] top-[32%] text-2xl text-[#ec2f83]/15">
          ♡
        </span>

        {/* Sparkles */}

        <span className="absolute left-[15%] top-[18%] text-sm text-[#ec2f83]/15">
          ✦
        </span>

        <span className="absolute right-[15%] top-[20%] text-lg text-[#ec2f83]/15">
          ✧
        </span>

        <span className="absolute bottom-[20%] left-[18%] text-sm text-[#ec2f83]/15">
          ✧
        </span>

        <span className="absolute bottom-[18%] right-[17%] text-sm text-[#ec2f83]/15">
          ✦
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Chapter */}

        <div className="love-label flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#ec2f83] sm:text-[10px]">
            Chapter 02
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />
        </div>

        {/* Date badge */}

        <div className="love-label mt-5 inline-flex items-center gap-3 rounded-full border border-pink-100 bg-white/80 px-4 py-2 shadow-[0_10px_35px_rgba(236,47,131,0.06)] backdrop-blur-xl">
          <span className="text-[10px] text-[#ec2f83]">
            2004
          </span>

          <span className="h-1 w-1 rounded-full bg-[#ec2f83]/40" />

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#765f69]">
            Something changed
          </span>
        </div>

        {/* Title */}

        <h2
          className="
            love-title
            mt-7
            font-serif
            text-[39px]
            font-semibold
            leading-[1.1]
            tracking-tight
            text-[#24151d]
            sm:text-6xl
            md:text-7xl
          "
        >
          Something beautiful
          <br />
          <span className="text-[#ec2f83]">
            began.
          </span>
        </h2>

        {/* Divider */}

        <div className="love-line mx-auto mt-8 h-px w-20 bg-[#ec2f83] sm:mt-10 sm:w-24" />

        {/* Description */}

        <p
          className="
            love-description
            mx-auto
            mt-7
            max-w-[330px]
            text-[12px]
            leading-6
            text-[#765f69]
            sm:mt-9
            sm:max-w-2xl
            sm:text-base
            sm:leading-8
          "
        >
          What began as small moments slowly became a meaningful
          connection.
          <br className="hidden sm:block" />
          The school where they worked became the place where
          their love story quietly began.
        </p>

        {/* =====================================================
            TWO PEOPLE
        ===================================================== */}

        <div className="relative mx-auto mt-10 max-w-2xl sm:mt-14">
          {/* Connecting line */}

          <div
            className="
              absolute
              left-[22%]
              right-[22%]
              top-1/2
              hidden
              h-px
              -translate-y-1/2
              bg-gradient-to-r
              from-pink-200
              via-[#ec2f83]/30
              to-pink-200
              sm:block
            "
          />

          <div className="relative grid grid-cols-2 gap-4 sm:gap-10">
            {/* Vishal */}

            <div
              className="
                person-card
                rounded-[1.5rem]
                border
                border-pink-100
                bg-white/80
                p-5
                shadow-[0_20px_60px_rgba(236,47,131,0.07)]
                backdrop-blur-xl
                sm:rounded-[2rem]
                sm:p-7
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-[#fff9fc] text-lg text-[#ec2f83] sm:h-14 sm:w-14">
                V
              </div>

              <p className="mt-4 font-serif text-xl font-semibold text-[#24151d] sm:text-2xl">
                Vishal
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#a88d99]">
                The Guitarist
              </p>
            </div>

            {/*  */}

            <div
              className="
                person-card
                rounded-[1.5rem]
                border
                border-pink-100
                bg-white/80
                p-5
                shadow-[0_20px_60px_rgba(236,47,131,0.07)]
                backdrop-blur-xl
                sm:rounded-[2rem]
                sm:p-7
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-[#fff9fc] text-lg text-[#ec2f83] sm:h-14 sm:w-14">
                M
              </div>

              <p className="mt-4 font-serif text-xl font-semibold text-[#24151d] sm:text-2xl">
                Vedika
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#a88d99]">
                The One Who Noticed
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            HEART
        ===================================================== */}

        <div className="love-ending mt-10 sm:mt-12">
          <div
            className="
              love-heart
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-pink-200
              bg-white
              text-xl
              text-[#ec2f83]
              shadow-[0_15px_50px_rgba(236,47,131,0.13)]
            "
          >
            ❤️
          </div>

          <p className="mt-5 font-serif text-lg italic text-[#d91b68] sm:text-2xl">
            And somewhere along the way,
            <br className="sm:hidden" /> they found each other.
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
