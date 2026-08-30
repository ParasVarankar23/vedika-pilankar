"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BirthdayLetter() {
    const section = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            // ----------------------------------------
            // INTRO
            // ----------------------------------------

            tl.from(".letter-label", {
                opacity: 0,
                y: 15,
                duration: 0.6,
            })
                .from(
                    ".letter-title",
                    {
                        opacity: 0,
                        y: 25,
                        duration: 0.8,
                    },
                    "-=0.35"
                )

                // ----------------------------------------
                // ENVELOPE ENTER
                // ----------------------------------------

                .from(
                    ".envelope",
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.9,
                        duration: 0.9,
                        ease: "back.out(1.4)",
                    },
                    "-=0.35"
                )

                // Small pause
                .to({}, { duration: 0.7 })

                // ----------------------------------------
                // OPEN FLAP
                // ----------------------------------------

                .to(".envelope-flap", {
                    rotateX: 180,
                    duration: 1.1,
                    ease: "power2.inOut",
                })

                // ----------------------------------------
                // BRING LETTER TO FRONT
                // ----------------------------------------

                .set(".letter-paper", {
                    zIndex: 50,
                })

                // ----------------------------------------
                // LETTER RISE
                // ----------------------------------------

                .to(
                    ".letter-paper",
                    {
                        y: -175,
                        duration: 1.25,
                        ease: "power3.out",
                    },
                    "-=0.35"
                )

                // ----------------------------------------
                // LETTER CONTENT
                // ----------------------------------------

                .to(".letter-content", {
                    opacity: 1,
                    duration: 0.5,
                })

                .from(
                    ".letter-line",
                    {
                        opacity: 0,
                        y: 10,
                        duration: 0.5,
                        stagger: 0.3,
                    },
                    "-=0.2"
                )

                .from(
                    ".letter-signature",
                    {
                        opacity: 0,
                        y: 10,
                        duration: 0.7,
                    },
                    "-=0.15"
                )

                // ----------------------------------------
                // HEART
                // ----------------------------------------

                .from(
                    ".letter-heart",
                    {
                        opacity: 0,
                        scale: 0,
                        duration: 0.7,
                        ease: "back.out(2)",
                    },
                    "-=0.25"
                );

            // ----------------------------------------
            // BACKGROUND GLOW
            // ----------------------------------------

            gsap.to(".letter-glow", {
                scale: 1.15,
                opacity: 0.7,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // ----------------------------------------
            // FLOATING HEARTS
            // ----------------------------------------

            gsap.to(".floating-heart-one", {
                y: -18,
                rotation: 8,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".floating-heart-two", {
                y: -14,
                rotation: -8,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // ----------------------------------------
            // HEART PULSE
            // ----------------------------------------

            gsap.to(".letter-heart", {
                scale: 1.12,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 5,
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
        bg-[#fffafd]
        px-4
        py-6
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
            letter-glow
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-200/30
            blur-[90px]
            sm:h-[460px]
            sm:w-[460px]
            sm:blur-[120px]
          "
                />

                {/* Corner glows */}
                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-100/40 blur-[100px]" />

                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-rose-100/40 blur-[100px]" />

                {/* Large background heart */}
                <div
                    className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            font-serif
            text-[220px]
            font-bold
            leading-none
            text-[#ec2f83]/[0.025]
            sm:text-[400px]
          "
                >
                    ♥
                </div>

                {/* Floating decorations */}
                <span className="floating-heart-one absolute left-[7%] top-[18%] text-3xl text-[#ec2f83]/20 sm:left-[14%]">
                    ♡
                </span>

                <span className="floating-heart-two absolute right-[7%] top-[22%] text-3xl text-[#ec2f83]/20 sm:right-[14%]">
                    ♡
                </span>

                <span className="absolute left-[16%] bottom-[18%] text-sm text-[#ec2f83]/25">
                    ✦
                </span>

                <span className="absolute right-[17%] bottom-[20%] text-lg text-[#ec2f83]/25">
                    ✧
                </span>

                <span className="absolute left-[27%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#ec2f83]/20" />

                <span className="absolute right-[25%] top-[40%] h-2 w-2 rounded-full bg-pink-300/30" />
            </div>

            {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

            <div className="relative z-10 w-full max-w-4xl text-center">
                {/* LABEL */}

                <div className="letter-label flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-14" />

                    <p
                        className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#ec2f83]
              sm:text-[11px]
              sm:tracking-[0.45em]
            "
                    >
                        One More Surprise
                    </p>

                    <span className="h-px w-8 bg-[#ec2f83]/30 sm:w-14" />
                </div>

                {/* TITLE */}

                <h2
                    className="
            letter-title
            mt-3
            font-serif
            text-[36px]
            font-semibold
            leading-tight
            text-[#24151d]
            sm:mt-4
            sm:text-6xl
            lg:text-7xl
          "
                >
                    A Letter For Kavya
                </h2>

                <p
                    className="
            letter-title
            mx-auto
            mt-2
            max-w-md
            text-[10px]
            leading-5
            text-[#a88d99]
            sm:text-sm
          "
                >
                    Some feelings are better written than spoken.
                </p>

                {/* =====================================================
            ENVELOPE
        ===================================================== */}

                <div
                    className="
            envelope
            relative
            mx-auto
            mt-6
            h-[205px]
            w-[275px]
            sm:mt-8
            sm:h-[235px]
            sm:w-[350px]
          "
                >
                    {/* Envelope shadow */}

                    <div
                        className="
              absolute
              bottom-[-8px]
              left-1/2
              h-6
              w-[220px]
              -translate-x-1/2
              rounded-full
              bg-pink-300/30
              blur-xl
              sm:w-[280px]
            "
                    />

                    {/* =================================================
              LETTER PAPER
          ================================================= */}

                    <div
                        className="
              letter-paper
              absolute
              left-1/2
              top-[15px]
              z-10
              h-[210px]
              w-[235px]
              -translate-x-1/2
              rounded-xl
              bg-white
              px-5
              py-5
              text-left
              shadow-[0_20px_50px_rgba(36,21,29,0.15)]
              sm:h-[235px]
              sm:w-[295px]
              sm:px-7
              sm:py-6
            "
                    >
                        {/* Paper gradient */}

                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white via-[#fffafd] to-pink-50/60" />

                        {/* Paper border */}

                        <div className="pointer-events-none absolute inset-0 rounded-xl border border-pink-100/70" />

                        {/* Content */}

                        <div className="letter-content relative z-10 opacity-0">
                            <p className="letter-line font-serif text-base text-[#24151d] sm:text-lg">
                                Dear Kavya,
                            </p>

                            <p className="letter-line mt-2.5 text-[8px] leading-4 text-[#765f69] sm:mt-4 sm:text-[10px] sm:leading-5">
                                Today we celebrate not just your birthday,
                                but the beautiful person you have become.
                            </p>

                            <p className="letter-line mt-2 text-[8px] leading-4 text-[#765f69] sm:mt-3 sm:text-[10px] sm:leading-5">
                                From a story that began in 2004,
                                to a beautiful chapter that began in 2008...
                            </p>

                            <p className="letter-line mt-2 text-[8px] leading-4 text-[#765f69] sm:mt-3 sm:text-[10px] sm:leading-5">
                                May Chapter 42 bring endless happiness,
                                laughter, love and beautiful memories.
                            </p>

                            {/* Signature */}

                            <div className="letter-signature mt-2.5 sm:mt-4">
                                <p className="font-serif text-[9px] text-[#d91b68] sm:text-xs">
                                    With lots of love,
                                </p>

                                <p className="mt-0.5 font-serif text-[10px] font-semibold text-[#24151d] sm:mt-1 sm:text-sm">
                                    Siddhartha ❤️
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              ENVELOPE BODY
          ================================================= */}

                    <div
                        className="
              absolute
              bottom-0
              left-1/2
              z-20
              h-[135px]
              w-[275px]
              -translate-x-1/2
              overflow-hidden
              rounded-xl
              bg-gradient-to-br
              from-[#f7a9c9]
              via-[#ee82ad]
              to-[#ec2f83]
              shadow-[0_25px_60px_rgba(236,47,131,0.24)]
              sm:h-[155px]
              sm:w-[350px]
            "
                    >
                        {/* Left fold */}

                        <div
                            className="
                absolute
                bottom-0
                left-0
                h-full
                w-1/2
                border-r
                border-white/20
                bg-[#ef91b6]
                [clip-path:polygon(0_0,100%_50%,0_100%)]
              "
                        />

                        {/* Right fold */}

                        <div
                            className="
                absolute
                bottom-0
                right-0
                h-full
                w-1/2
                bg-[#dc6e99]
                [clip-path:polygon(100%_0,0_50%,100%_100%)]
              "
                        />

                        {/* Bottom fold */}

                        <div
                            className="
                absolute
                bottom-0
                left-1/2
                h-[65%]
                w-full
                -translate-x-1/2
                bg-gradient-to-t
                from-[#ec2f83]
                to-transparent
                opacity-40
              "
                        />

                        {/* Heart */}

                        <div
                            className="
                absolute
                left-1/2
                top-1/2
                z-30
                flex
                h-10
                w-10
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-lg
                text-[#ec2f83]
                shadow-[0_8px_25px_rgba(236,47,131,0.25)]
                sm:h-14
                sm:w-14
                sm:text-xl
              "
                        >
                            ♥
                        </div>
                    </div>

                    {/* =================================================
              ENVELOPE FLAP
          ================================================= */}

                    <div
                        className="
              envelope-flap
              absolute
              left-1/2
              top-[50px]
              z-40
              h-[135px]
              w-[275px]
              -translate-x-1/2
              origin-top
              bg-gradient-to-br
              from-[#ffd2e3]
              via-[#f8b0ce]
              to-[#ed8eb5]
              [clip-path:polygon(0_0,50%_72%,100%_0)]
              sm:top-[55px]
              sm:h-[155px]
              sm:w-[350px]
            "
                        style={{
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                        }}
                    />
                </div>

                {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

                <div className="letter-heart mt-1 text-2xl text-[#ec2f83] sm:mt-3 sm:text-3xl">
                    ♥
                </div>

                <p
                    className="
            mt-1
            text-[8px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#a88d99]
            sm:text-[10px]
            sm:tracking-[0.4em]
          "
                >
                    With love, always
                </p>
            </div>
        </section>
    );
}
