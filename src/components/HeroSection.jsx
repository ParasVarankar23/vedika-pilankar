"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
    const section = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(".hero-orbit", {
                opacity: 0,
                scale: 0.6,
                duration: 1.5,
            })
                .from(
                    ".hero-date",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.8,
                    },
                    "-=0.9"
                )
                .from(
                    ".hero-small-title",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-name",
                    {
                        opacity: 0,
                        y: 45,
                        scale: 0.95,
                        duration: 1.2,
                    },
                    "-=0.45"
                )
                .from(
                    ".hero-line",
                    {
                        scaleX: 0,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.65"
                )
                .from(
                    ".hero-chapter",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-description",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-pills",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-hint",
                    {
                        opacity: 0,
                        y: 10,
                        duration: 0.6,
                    },
                    "-=0.2"
                );

            /* Main glow */

            gsap.to(".hero-glow", {
                scale: 1.18,
                opacity: 0.75,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* Large background 40 */

            gsap.to(".hero-number", {
                scale: 1.04,
                opacity: 0.055,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* Orbit */

            gsap.to(".hero-orbit", {
                rotate: 360,
                duration: 25,
                repeat: -1,
                ease: "none",
            });

            /* Floating hearts */

            gsap.to(".hero-heart-one", {
                y: -18,
                x: 8,
                rotation: 8,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".hero-heart-two", {
                y: -14,
                x: -7,
                rotation: -7,
                duration: 4.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".hero-heart-three", {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* Shimmer */

            gsap.to(".hero-shimmer", {
                backgroundPosition: "200% center",
                duration: 4,
                repeat: -1,
                ease: "linear",
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={section}
            className="relative flex h-[100svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#fff9fc] px-5 sm:px-8"
        >
            {/* =====================================================
          BACKGROUND
      ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                {/* Main pink glow */}

                <div
                    className="
            hero-glow
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[320px]
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

                {/* Top glow */}

                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-100/50 blur-[90px] sm:h-96 sm:w-96" />

                {/* Bottom glow */}

                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-rose-100/50 blur-[100px] sm:h-[420px] sm:w-[420px]" />

                {/* =================================================
            GIANT 40
        ================================================= */}

                <div
                    className="
            hero-number
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[220px]
            font-bold
            leading-none
            text-[#ec2f83]
            opacity-[0.035]
            sm:text-[420px]
          "
                >
                    42
                </div>

                {/* =================================================
            ORBIT
        ================================================= */}

                <div
                    className="
            hero-orbit
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#ec2f83]/10
            sm:h-[500px]
            sm:w-[500px]
          "
                >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec2f83]/50 shadow-[0_0_15px_rgba(236,47,131,0.4)]" />

                    <span className="absolute bottom-[8%] right-[8%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/30" />

                    <span className="absolute bottom-[18%] left-[6%] h-2 w-2 rounded-full bg-pink-300/40" />
                </div>

                {/* =================================================
            DECORATIVE HEARTS
        ================================================= */}

                <span className="hero-heart-one absolute left-[10%] top-[28%] text-xl text-[#ec2f83]/20 sm:left-[16%] sm:text-2xl">
                    ♡
                </span>

                <span className="hero-heart-two absolute right-[10%] top-[32%] text-2xl text-[#ec2f83]/20 sm:right-[17%] sm:text-3xl">
                    ♡
                </span>

                <span className="hero-heart-three absolute bottom-[25%] left-[17%] text-sm text-[#ec2f83]/25 sm:left-[25%]">
                    ✦
                </span>

                <span className="absolute bottom-[28%] right-[20%] text-lg text-[#ec2f83]/15">
                    ✧
                </span>

                {/* Tiny dots */}

                <span className="absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

                <span className="absolute right-[8%] top-[22%] h-2.5 w-2.5 rounded-full bg-pink-300/30" />

                <span className="absolute bottom-[18%] right-[12%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

            </div>

            {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

            <div className="relative z-10 w-full max-w-4xl text-center">

                {/* Date */}

                <div className="hero-date flex items-center justify-center gap-3">

                    <span className="h-px w-7 bg-[#ec2f83]/30 sm:w-12" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
                        01 · 09 · 2026
                    </p>

                    <span className="h-px w-7 bg-[#ec2f83]/30 sm:w-12" />

                </div>

                {/* Small title */}

                <p className="hero-small-title mt-5 text-[9px] font-medium uppercase tracking-[0.3em] text-[#a88d99] sm:mt-7 sm:text-xs sm:tracking-[0.42em]">
                    A family story with Siddhu & Kavu
                </p>

                {/* Name */}

                <div className="relative mt-2 sm:mt-3">

                    <h1
                        className="
              hero-name
              font-serif
              text-[68px]
              font-semibold
              leading-none
              tracking-[-0.04em]
              text-[#24151d]
              sm:text-[110px]
              md:text-[130px]
            "
                    >
                        Kavya
                    </h1>

                    {/* Small heart */}

                    <span className="absolute -right-2 top-0 text-lg text-[#ec2f83]/40 sm:right-[8%] sm:text-2xl">
                        ♥
                    </span>

                </div>

                {/* Elegant line */}

                <div className="hero-line mx-auto mt-5 flex items-center justify-center gap-3 sm:mt-6">

                    <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-12" />

                    <span className="text-xs text-[#ec2f83]">
                        ✦
                    </span>

                    <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-12" />

                </div>

                {/* Chapter */}

                <div className="hero-chapter mt-4 sm:mt-5">

                    <h2 className="hero-shimmer bg-gradient-to-r from-[#d91b68] via-[#ec2f83] to-[#d91b68] bg-[length:200%_auto] bg-clip-text text-lg font-semibold uppercase tracking-[0.18em] text-transparent sm:text-2xl sm:tracking-[0.25em]">
                        Chapter 42
                    </h2>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
                        A beautiful milestone
                    </p>

                </div>

                {/* Description */}

                <p className="hero-description mx-auto mt-5 max-w-[310px] text-[11px] leading-6 text-[#765f69] sm:mt-6 sm:max-w-xl sm:text-base sm:leading-7">
                    Four decades of beautiful memories,
                    meaningful moments, and a love story
                    that continues to become more beautiful.
                </p>

                {/* =================================================
            PREMIUM INFO PILLS
        ================================================= */}

                <div className="hero-pills mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">

                    <div className="rounded-full border border-pink-100 bg-white/75 px-4 py-2 text-[9px] font-medium text-[#765f69] shadow-[0_8px_25px_rgba(236,47,131,0.06)] backdrop-blur-xl sm:px-5 sm:py-2.5 sm:text-xs">
                        42 Years
                    </div>

                    <div className="rounded-full border border-[#ec2f83]/10 bg-[#ec2f83] px-4 py-2 text-[9px] font-medium text-white shadow-[0_10px_30px_rgba(236,47,131,0.22)] sm:px-5 sm:py-2.5 sm:text-xs">
                        A Beautiful Journey ♥
                    </div>

                </div>

                {/* =================================================
            TAP HINT
        ================================================= */}

                <div className="hero-hint mt-8 sm:mt-10">

                    <div className="flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.28em] text-[#a88d99] sm:text-[9px]">

                        <span className="animate-pulse text-[#ec2f83]">
                            ✦
                        </span>

                        Tap anywhere to continue

                        <span className="animate-pulse text-[#ec2f83]">
                            ✦
                        </span>

                    </div>

                </div>

            </div>

            {/* =====================================================
          BOTTOM SIGNATURE
      ===================================================== */}

            <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center sm:bottom-7">

                <p className="text-[7px] uppercase tracking-[0.35em] text-[#b49aa5]">
                    Made with love
                </p>

            </div>

        </section>
    );
}
