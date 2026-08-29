"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GuitarMoment() {
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

            tl.from(".guitar-label", {
                opacity: 0,
                y: 20,
                duration: 0.7,
            })
                .from(
                    ".guitar-orbit",
                    {
                        opacity: 0,
                        scale: 0.6,
                        duration: 1,
                    },
                    "-=0.4"
                )
                .from(
                    ".guitar-icon",
                    {
                        opacity: 0,
                        scale: 0.4,
                        rotation: -18,
                        duration: 1.2,
                        ease: "back.out(1.7)",
                    },
                    "-=0.6"
                )
                .from(
                    ".guitar-title",
                    {
                        opacity: 0,
                        y: 35,
                        duration: 0.9,
                    },
                    "-=0.5"
                )
                .from(
                    ".guitar-description",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.8,
                    },
                    "-=0.4"
                )
                .from(
                    ".guitar-ending",
                    {
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.8,
                    },
                    "-=0.3"
                );

            /* Guitar floating */

            gsap.to(".guitar-icon", {
                y: -10,
                rotation: 3,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.2,
            });

            /* Soft glow */

            gsap.to(".guitar-glow", {
                scale: 1.2,
                opacity: 0.75,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* Orbit */

            gsap.to(".guitar-orbit", {
                rotation: 360,
                duration: 24,
                repeat: -1,
                ease: "none",
            });

            /* Music notes */

            gsap.to(".music-note-one", {
                y: -25,
                x: 8,
                rotation: 10,
                opacity: 0.4,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".music-note-two", {
                y: -20,
                x: -7,
                rotation: -8,
                opacity: 0.35,
                duration: 3.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".music-note-three", {
                y: -28,
                duration: 4.2,
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

                {/* Main pink glow */}

                <div
                    className="
            guitar-glow
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-200/25
            blur-[100px]
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[130px]
          "
                />

                {/* Top glow */}

                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-100/40 blur-[100px]" />

                {/* Bottom glow */}

                <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-rose-100/40 blur-[100px]" />

                {/* Giant background guitar */}

                <div
                    className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-[240px]
            opacity-[0.025]
            grayscale
            sm:text-[420px]
          "
                >
                    🎸
                </div>

                {/* =================================================
            ORBIT
        ================================================= */}

                <div
                    className="
            guitar-orbit
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
            sm:h-[410px]
            sm:w-[410px]
          "
                >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ec2f83]/40 shadow-[0_0_15px_rgba(236,47,131,0.4)]" />

                    <span className="absolute bottom-[12%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/25" />

                    <span className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-pink-300/30" />
                </div>

                {/* Music notes */}

                <span className="music-note-one absolute left-[13%] top-[25%] text-3xl text-[#ec2f83]/20 sm:left-[22%]">
                    ♪
                </span>

                <span className="music-note-two absolute right-[13%] top-[32%] text-2xl text-[#ec2f83]/20 sm:right-[22%]">
                    ♫
                </span>

                <span className="music-note-three absolute bottom-[25%] left-[18%] text-xl text-[#ec2f83]/15 sm:left-[27%]">
                    ♪
                </span>

                {/* Sparkles */}

                <span className="absolute left-[10%] top-[18%] text-sm text-[#ec2f83]/15">
                    ✦
                </span>

                <span className="absolute right-[10%] top-[20%] text-lg text-[#ec2f83]/15">
                    ✧
                </span>

                <span className="absolute bottom-[20%] right-[18%] text-sm text-[#ec2f83]/15">
                    ✦
                </span>
            </div>

            {/* =====================================================
          CONTENT
      ===================================================== */}

            <div className="relative z-10 w-full max-w-4xl text-center">

                {/* Label */}

                <div className="guitar-label flex items-center justify-center gap-3">

                    <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
                        A Little Music
                    </p>

                    <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-14" />

                </div>

                {/* Date */}

                <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-pink-100 bg-white/80 px-4 py-2 shadow-[0_10px_35px_rgba(236,47,131,0.07)] backdrop-blur-xl sm:mt-6 sm:px-5">

                    <span className="text-[10px] text-[#ec2f83]">
                        2004
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#ec2f83]/40" />

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#765f69]">
                        C.K.T. School, Panvel
                    </span>

                </div>

                {/* =================================================
            GUITAR
        ================================================= */}

                <div className="relative mx-auto my-8 flex h-44 w-44 items-center justify-center sm:my-10 sm:h-52 sm:w-52">

                    <div className="absolute inset-5 rounded-full border border-pink-100 bg-white/70 shadow-[0_20px_70px_rgba(236,47,131,0.1)] backdrop-blur-xl" />

                    <div
                        className="
              guitar-icon
              relative
              z-10
              flex
              h-28
              w-28
              items-center
              justify-center
              rounded-full
              border
              border-pink-100
              bg-[#fff9fc]
              text-7xl
              shadow-[0_20px_60px_rgba(236,47,131,0.13)]
              sm:h-32
              sm:w-32
              sm:text-8xl
            "
                    >
                        🎸
                    </div>

                </div>

                {/* =================================================
            TITLE
        ================================================= */}

                <h2
                    className="
            guitar-title
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
                    Then there was
                    <br />
                    <span className="text-[#ec2f83]">
                        the guitar.
                    </span>
                </h2>

                {/* =================================================
            DESCRIPTION
        ================================================= */}

                <p
                    className="
            guitar-description
            mx-auto
            mt-6
            max-w-[320px]
            text-[12px]
            leading-6
            text-[#765f69]
            sm:mt-7
            sm:max-w-2xl
            sm:text-base
            sm:leading-8
          "
                >
                    Siddhartha loved playing the guitar.
                    <br className="sm:hidden" />
                    {" "}
                    And somewhere between the music,
                    school life and everyday moments,
                    Kavya began to notice him.
                </p>

                {/* =================================================
            ENDING
        ================================================= */}

                <div className="guitar-ending mt-8 sm:mt-10">

                    <div className="mx-auto flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-[#ec2f83]/20 sm:w-12" />

                        <span className="text-sm text-[#ec2f83]">
                            ♪
                        </span>

                        <span className="h-px w-8 bg-[#ec2f83]/20 sm:w-12" />

                    </div>

                    <p className="mt-4 font-serif text-lg italic text-[#d91b68] sm:text-2xl">
                        Maybe it was the music. ❤️
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#b49aa5] sm:text-[9px]">
                        Or maybe it was something more
                    </p>

                </div>

            </div>
        </section>
    );
}
