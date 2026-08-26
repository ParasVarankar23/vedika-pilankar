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
                scale: 0.7,
                duration: 1.4,
            })
                .from(
                    ".final-heart",
                    {
                        opacity: 0,
                        scale: 0,
                        y: 20,
                        duration: 1,
                        ease: "back.out(1.8)",
                    },
                    "-=0.7"
                )
                .from(
                    ".final-label",
                    {
                        opacity: 0,
                        y: 18,
                        duration: 0.7,
                    },
                    "-=0.45"
                )
                .from(
                    ".final-title",
                    {
                        opacity: 0,
                        y: 35,
                        duration: 1,
                    },
                    "-=0.35"
                )
                .from(
                    ".final-description",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                    },
                    "-=0.4"
                )
                .from(
                    ".final-divider",
                    {
                        opacity: 0,
                        scaleX: 0,
                        duration: 0.7,
                    },
                    "-=0.35"
                )
                .from(
                    ".final-story",
                    {
                        opacity: 0,
                        y: 18,
                        duration: 0.8,
                    },
                    "-=0.35"
                )
                .from(
                    ".final-birthday",
                    {
                        opacity: 0,
                        y: 25,
                        scale: 0.96,
                        duration: 0.9,
                    },
                    "-=0.4"
                )
                .from(
                    ".final-signature",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                    },
                    "-=0.35"
                );

            /* =====================================================
               MAIN GLOW
            ===================================================== */

            gsap.to(".final-glow", {
                scale: 1.18,
                opacity: 0.7,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* =====================================================
               HEART
            ===================================================== */

            gsap.to(".final-heart", {
                scale: 1.1,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.5,
            });

            /* =====================================================
               ORBIT
            ===================================================== */

            gsap.to(".final-orbit", {
                rotation: 360,
                duration: 28,
                repeat: -1,
                ease: "none",
            });

            /* =====================================================
               FLOATING HEARTS
            ===================================================== */

            gsap.to(".final-heart-one", {
                y: -20,
                x: 8,
                rotation: 8,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".final-heart-two", {
                y: -15,
                x: -8,
                rotation: -8,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".final-heart-three", {
                y: -18,
                duration: 3.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* =====================================================
               SPARKLES
            ===================================================== */

            gsap.to(".final-sparkle", {
                rotation: 180,
                scale: 1.2,
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
        h-[100svh]
        min-h-[560px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-5
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
            final-glow
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
            sm:h-[540px]
            sm:w-[540px]
            sm:blur-[140px]
          "
                />

                {/* Top left glow */}

                <div className="absolute -left-36 -top-36 h-80 w-80 rounded-full bg-pink-100/50 blur-[110px]" />

                {/* Bottom right glow */}

                <div className="absolute -bottom-36 -right-36 h-80 w-80 rounded-full bg-rose-100/50 blur-[110px]" />

                {/* =================================================
            GIANT BACKGROUND HEART
        ================================================= */}

                <div
                    className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[240px]
            leading-none
            text-[#ec2f83]
            opacity-[0.025]
            sm:text-[480px]
          "
                >
                    ♥
                </div>

                {/* =================================================
            ORBIT
        ================================================= */}

                <div
                    className="
            final-orbit
            absolute
            left-1/2
            top-1/2
            h-[290px]
            w-[290px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#ec2f83]/10
            sm:h-[510px]
            sm:w-[510px]
          "
                >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec2f83]/50 shadow-[0_0_18px_rgba(236,47,131,0.45)]" />

                    <span className="absolute bottom-[10%] left-[10%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/30" />

                    <span className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-pink-300/40" />
                </div>

                {/* =================================================
            FLOATING DECORATIONS
        ================================================= */}

                <span className="final-heart-one absolute left-[8%] top-[24%] text-2xl text-[#ec2f83]/20 sm:left-[17%] sm:text-3xl">
                    ♡
                </span>

                <span className="final-heart-two absolute right-[8%] top-[29%] text-3xl text-[#ec2f83]/20 sm:right-[17%]">
                    ♡
                </span>

                <span className="final-heart-three absolute bottom-[22%] left-[18%] text-lg text-[#ec2f83]/20 sm:left-[25%]">
                    ✦
                </span>

                <span className="absolute bottom-[24%] right-[18%] text-xl text-[#ec2f83]/20">
                    ✧
                </span>

                <span className="absolute left-[10%] top-[16%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

                <span className="absolute right-[10%] top-[18%] h-2 w-2 rounded-full bg-[#ec2f83]/25" />

            </div>

            {/* =====================================================
          CONTENT
      ===================================================== */}

            <div className="relative z-10 w-full max-w-4xl text-center">

                {/* =================================================
            HEART
        ================================================= */}

                <div
                    className="
            final-heart
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-pink-100
            bg-white/80
            text-3xl
            text-[#ec2f83]
            shadow-[0_18px_55px_rgba(236,47,131,0.15)]
            backdrop-blur-xl
            sm:h-20
            sm:w-20
            sm:text-4xl
          "
                >
                    ❤️
                </div>

                {/* =================================================
            LABEL
        ================================================= */}

                <div className="final-label mt-7 flex items-center justify-center gap-3 sm:mt-8">

                    <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
                        The Story Continues
                    </p>

                    <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

                </div>

                {/* =================================================
            MAIN TITLE
        ================================================= */}

                <h2
                    className="
            final-title
            mx-auto
            mt-5
            max-w-3xl
            font-serif
            text-[34px]
            font-semibold
            leading-[1.12]
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

                {/* =================================================
            DESCRIPTION
        ================================================= */}

                <p
                    className="
            final-description
            mx-auto
            mt-5
            max-w-[310px]
            text-[11px]
            leading-6
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

                {/* =================================================
            DIVIDER
        ================================================= */}

                <div className="final-divider mx-auto my-6 flex items-center justify-center gap-3 sm:my-7">

                    <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />

                    <span className="final-sparkle text-xs text-[#ec2f83]">
                        ✦
                    </span>

                    <span className="h-px w-10 bg-[#ec2f83]/25 sm:w-16" />

                </div>

                {/* =================================================
            STORY
        ================================================= */}

                <div className="final-story">

                    <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
                        Their story began in
                    </p>

                    <div className="mt-2 flex items-center justify-center gap-3">

                        <span className="font-serif text-xl font-semibold text-[#765f69] sm:text-2xl">
                            2004
                        </span>

                        <span className="text-[#ec2f83]">
                            →
                        </span>

                        <span className="font-serif text-xl font-semibold text-[#ec2f83] sm:text-2xl">
                            2026
                        </span>

                    </div>

                </div>

                {/* =================================================
            BIRTHDAY MESSAGE
        ================================================= */}

                <div className="final-birthday mt-5 sm:mt-6">

                    <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#a88d99] sm:text-[9px]">
                        A beautiful journey
                    </p>

                    <h3
                        className="
              mt-2
              font-serif
              text-[27px]
              font-semibold
              leading-tight
              text-[#ec2f83]
              sm:text-5xl
              md:text-6xl
            "
                    >
                        Happy 40th Birthday,
                        <br className="sm:hidden" /> Minal
                    </h3>

                    <div className="mt-2 text-sm text-[#ec2f83]">
                        ✨
                    </div>

                    <p className="mt-2 text-[9px] text-[#765f69] sm:text-sm">
                        Chapter 40 begins now.
                    </p>

                </div>

                {/* =================================================
            SIGNATURE
        ================================================= */}

                <div className="final-signature mt-5 sm:mt-7">

                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
                        With love, always
                    </p>

                    <p className="mt-2 font-serif text-lg font-semibold text-[#24151d] sm:text-xl">
                        Vishal{" "}
                        <span className="text-[#ec2f83]">&</span>{" "}
                        Vedika
                    </p>

                    <div className="mt-1 text-xs text-[#ec2f83]">
                        ♥
                    </div>

                </div>

            </div>
        </section>
    );
}