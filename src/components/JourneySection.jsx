"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-header", {
        opacity: 0,
        y: 35,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".journey-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      gsap.from(".journey-card", {
        opacity: 0,
        y: 45,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      });

      gsap.from(".journey-number", {
        opacity: 0,
        scale: 0.7,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          once: true,
        },
      });

      gsap.to(".journey-heart", {
        y: -8,
        scale: 1.08,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".journey-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      year: "2004",
      title: "Where It Began",
      description:
        "A school, a guitar, a few little moments — and the beginning of something beautiful.",
    },
    {
      year: "2008",
      title: "A New Beginning",
      description:
        "Their story became a marriage, and two lives began walking together.",
    },
    {
      year: "2026",
      title: "Still Together",
      description:
        "18 years of marriage, countless memories and a lifetime still waiting ahead.",
    },
  ];

  const stats = [
    {
      number: "18",
      label: "Years of Marriage",
      icon: "♡",
    },
    {
      number: "22",
      label: "Years Since Their Story Began",
      icon: "✦",
    },
    {
      number: "∞",
      label: "Memories Yet To Come",
      icon: "∞",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
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
            journey-glow
            absolute
            left-1/2
            top-[40%]
            h-[320px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-pink-200/20
            blur-[110px]
            sm:h-[520px]
            sm:w-[520px]
            sm:blur-[140px]
          "
        />

        {/* Corner glows */}

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-100/30 blur-[100px]" />

        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-rose-100/30 blur-[100px]" />

        {/* Giant background number */}

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
            text-[#ec2f83]/[0.025]
            sm:text-[280px]
          "
        >
          18
        </div>

        {/* Decorative sparkles */}

        <span className="absolute left-[8%] top-[28%] text-sm text-[#ec2f83]/15">
          ✦
        </span>

        <span className="absolute right-[9%] top-[20%] text-lg text-[#ec2f83]/15">
          ✧
        </span>

        <span className="absolute bottom-[18%] left-[15%] text-sm text-[#ec2f83]/15">
          ♡
        </span>

        <span className="absolute bottom-[25%] right-[13%] text-sm text-[#ec2f83]/15">
          ✦
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}

        <div className="text-center">
          <div className="journey-header flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#ec2f83] sm:text-[10px]">
              2008 — 2026
            </p>

            <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />
          </div>

          <h2
            className="
              journey-header
              mt-5
              font-serif
              text-[40px]
              font-semibold
              leading-tight
              tracking-tight
              text-[#24151d]
              sm:text-6xl
              md:text-7xl
            "
          >
            18 Years
            <span className="block text-[#ec2f83]">
              Together
            </span>
          </h2>

          <p
            className="
              journey-header
              mx-auto
              mt-6
              max-w-[340px]
              text-[12px]
              leading-6
              text-[#765f69]
              sm:max-w-2xl
              sm:text-base
              sm:leading-8
            "
          >
            From the day they began their married life to today,
            they have continued building a life filled with love,
            family, happiness and countless memories.
          </p>
        </div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative mt-16 sm:mt-20">

          {/* Desktop line */}

          <div
            className="
              journey-line
              absolute
              left-[16.66%]
              right-[16.66%]
              top-5
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#ec2f83]/25
              to-transparent
              md:block
            "
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="journey-card relative text-center"
              >
                {/* Timeline dot */}

                <div className="relative mx-auto mb-7 flex h-10 w-10 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-pink-100/70 blur-md" />

                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-pink-200 bg-white shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#ec2f83]" />
                  </div>
                </div>

                {/* Year */}

                <p className="font-serif text-3xl font-semibold text-[#ec2f83]">
                  {item.year}
                </p>

                <h3 className="mt-2 text-sm font-semibold text-[#24151d] sm:text-base">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-[#765f69]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            HEART CONNECTION
        ===================================================== */}

        <div className="relative my-16 flex items-center justify-center sm:my-20">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-200" />

          <div
            className="
              journey-heart
              mx-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-pink-200
              bg-white
              text-xl
              text-[#ec2f83]
              shadow-[0_15px_45px_rgba(236,47,131,0.12)]
            "
          >
            ♡
          </div>

          <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                journey-card
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-pink-100
                bg-white/80
                p-7
                text-center
                shadow-[0_20px_70px_rgba(236,47,131,0.07)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_80px_rgba(236,47,131,0.12)]
                sm:p-9
              "
            >
              {/* Card glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-24
                  w-24
                  -translate-x-1/2
                  rounded-full
                  bg-pink-100/30
                  blur-3xl
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              {/* Icon */}

              <div className="relative mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff9fc] text-sm text-[#ec2f83]">
                {item.icon}
              </div>

              {/* Number */}

              <div
                className="
                  journey-number
                  relative
                  font-serif
                  text-5xl
                  font-semibold
                  tracking-tight
                  text-[#ec2f83]
                  sm:text-6xl
                "
              >
                {item.number}
              </div>

              {/* Label */}

              <p className="relative mx-auto mt-3 max-w-[190px] text-[10px] uppercase tracking-[0.18em] text-[#765f69]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            FINAL LINE
        ===================================================== */}

        <div className="journey-header mt-16 text-center sm:mt-20">
          <p className="font-serif text-lg italic text-[#d91b68] sm:text-2xl">
            And the best chapters are still being written. ❤️
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-[#ec2f83]/30">
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