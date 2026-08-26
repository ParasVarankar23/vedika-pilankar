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

      /*
       * =====================================================
       * INTRO
       * =====================================================
       */

      tl.from(".letter-label", {
        opacity: 0,
        y: 15,
        duration: 0.7,
      })
        .from(
          ".letter-title",
          {
            opacity: 0,
            y: 25,
            duration: 0.9,
          },
          "-=0.4"
        )

        /*
         * ===================================================
         * ENVELOPE
         * ===================================================
         */

        .from(
          ".envelope",
          {
            opacity: 0,
            y: 35,
            scale: 0.88,
            duration: 1,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        )

        /*
         * Small pause before opening
         */

        .to({}, {
          duration: 0.8,
        })

        /*
         * ===================================================
         * OPEN ENVELOPE
         * ===================================================
         */

        .to(".envelope-flap", {
          rotateX: 180,
          duration: 1.2,
          ease: "power2.inOut",
        })

        .to(
          ".envelope",
          {
            scale: 0.96,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.8"
        )

        /*
         * ===================================================
         * LETTER RISES
         * ===================================================
         */

        .to(
          ".letter-paper",
          {
            y: -115,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.2"
        )

        /*
         * ===================================================
         * LETTER CONTENT
         * ===================================================
         */

        .to(".letter-content", {
          opacity: 1,
          duration: 0.7,
        })

        .from(
          ".letter-line",
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
            stagger: 0.35,
          },
          "-=0.3"
        )

        .from(
          ".letter-signature",
          {
            opacity: 0,
            y: 15,
            duration: 0.8,
          },
          "-=0.2"
        )

        /*
         * ===================================================
         * HEART
         * ===================================================
         */

        .from(
          ".letter-heart",
          {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            ease: "back.out(2)",
          },
          "-=0.3"
        );

      /*
       * Floating glow
       */

      gsap.to(".letter-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * Floating hearts
       */

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

      /*
       * Final heart pulse
       */

      gsap.to(".letter-heart", {
        scale: 1.12,
        duration: 1.6,
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
      className="relative flex h-[100svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-white px-5 sm:px-8"
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

        {/* Top glow */}

        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-100/40 blur-[100px]" />

        {/* Bottom glow */}

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-rose-100/40 blur-[100px]" />

        {/* Giant envelope */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[230px] font-bold leading-none text-[#ec2f83]/[0.025] sm:text-[420px]">
          ♥
        </div>

        {/* Floating decorations */}

        <span className="floating-heart-one absolute left-[10%] top-[27%] text-2xl text-[#ec2f83]/20 sm:left-[18%]">
          ♡
        </span>

        <span className="floating-heart-two absolute right-[10%] top-[31%] text-3xl text-[#ec2f83]/20 sm:right-[18%]">
          ♡
        </span>

        <span className="absolute bottom-[22%] left-[18%] text-sm text-[#ec2f83]/20">
          ✦
        </span>

        <span className="absolute bottom-[25%] right-[18%] text-lg text-[#ec2f83]/20">
          ✧
        </span>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-3xl text-center">

        {/* Label */}

        <div className="letter-label flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-12" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
            One More Surprise
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-12" />

        </div>

        {/* Title */}

        <h2 className="letter-title mt-4 font-serif text-[38px] font-semibold leading-tight text-[#24151d] sm:mt-5 sm:text-6xl">
          A Letter For Minal
        </h2>

        <p className="letter-title mx-auto mt-2 max-w-sm text-[10px] leading-5 text-[#a88d99] sm:text-sm">
          Some feelings are better written than spoken.
        </p>

        {/* =================================================
            ENVELOPE
        ================================================= */}

        <div className="envelope relative mx-auto mt-7 h-[220px] w-[290px] sm:mt-9 sm:h-[250px] sm:w-[370px]">

          {/* Envelope shadow */}

          <div className="absolute bottom-0 left-1/2 h-7 w-[240px] -translate-x-1/2 rounded-full bg-pink-200/30 blur-xl" />

          {/* =================================================
              LETTER PAPER
          ================================================= */}

          <div className="letter-paper absolute left-1/2 top-[18px] z-10 h-[200px] w-[245px] -translate-x-1/2 rounded-lg bg-[#fffdfd] px-5 py-5 text-left shadow-[0_15px_40px_rgba(36,21,29,0.12)] sm:h-[225px] sm:w-[310px] sm:px-7 sm:py-6">

            {/* Paper texture */}

            <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-white via-[#fffafd] to-pink-50/50" />

            {/* Letter content */}

            <div className="letter-content relative z-10 opacity-0">

              <p className="letter-line font-serif text-base text-[#24151d] sm:text-lg">
                Dear Minal,
              </p>

              <p className="letter-line mt-3 text-[8px] leading-4 text-[#765f69] sm:mt-4 sm:text-[10px] sm:leading-5">
                Today we celebrate not just your birthday,
                but the beautiful person you have become.
              </p>

              <p className="letter-line mt-2 text-[8px] leading-4 text-[#765f69] sm:mt-3 sm:text-[10px] sm:leading-5">
                From a story that began in 2004,
                to a beautiful chapter that began in 2008...
              </p>

              <p className="letter-line mt-2 text-[8px] leading-4 text-[#765f69] sm:mt-3 sm:text-[10px] sm:leading-5">
                May Chapter 40 bring you endless happiness,
                laughter, love and beautiful memories.
              </p>

              <div className="letter-signature mt-3 sm:mt-4">

                <p className="font-serif text-[10px] text-[#d91b68] sm:text-xs">
                  With lots of love,
                </p>

                <p className="mt-1 font-serif text-[11px] font-semibold text-[#24151d] sm:text-sm">
                  Vishal & Vedika
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              ENVELOPE BODY
          ================================================= */}

          <div className="absolute bottom-0 left-1/2 z-20 h-[150px] w-[290px] -translate-x-1/2 overflow-hidden rounded-xl bg-gradient-to-br from-[#f9b8d1] to-[#ec2f83] shadow-[0_25px_60px_rgba(236,47,131,0.22)] sm:h-[170px] sm:w-[370px]">

            {/* Left fold */}

            <div className="absolute bottom-0 left-0 h-full w-1/2 border-r-[1px] border-white/20 bg-[#ef8fb5] [clip-path:polygon(0_0,100%_50%,0_100%)]" />

            {/* Right fold */}

            <div className="absolute bottom-0 right-0 h-full w-1/2 bg-[#df6f9b] [clip-path:polygon(100%_0,0_50%,100%_100%)]" />

            {/* Center heart */}

            <div className="absolute left-1/2 top-1/2 z-30 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-[#ec2f83] shadow-[0_8px_25px_rgba(236,47,131,0.2)] sm:h-14 sm:w-14 sm:text-xl">
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
              top-[70px]
              z-30
              h-[150px]
              w-[290px]
              -translate-x-1/2
              origin-top
              rounded-t-xl
              bg-gradient-to-br
              from-[#fbc6dc]
              to-[#ef8fb5]
              [clip-path:polygon(0_0,50%_75%,100%_0)]
              sm:h-[170px]
              sm:w-[370px]
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          />

        </div>

        {/* =====================================================
            AUTOMATIC MESSAGE
        ===================================================== */}

        <div className="letter-heart mt-3 text-2xl text-[#ec2f83] sm:mt-5 sm:text-3xl">
          ♥
        </div>

        <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
          With love, always
        </p>

      </div>

    </section>
  );
}