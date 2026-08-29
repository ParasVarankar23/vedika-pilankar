"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function BirthdayCake() {
  const [blown, setBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  useEffect(() => {
    if (!blown) return;

    const ctx = gsap.context(() => {
      gsap.from(".birthday-result", {
        opacity: 0,
        y: 30,
        scale: 0.92,
        duration: 1.1,
        ease: "back.out(1.7)",
      });

      gsap.from(".confetti-piece", {
        opacity: 0,
        y: -30,
        scale: 0,
        rotation: 0,
        duration: 1.4,
        stagger: 0.03,
        ease: "back.out(1.7)",
      });

      gsap.to(".success-heart", {
        y: -18,
        scale: 1.12,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, [blown]);

  const blowCandles = () => {
    if (blown || isBlowing) return;

    setIsBlowing(true);

    setTimeout(() => {
      setBlown(true);
      setIsBlowing(false);
    }, 900);
  };

  const confetti = Array.from({ length: 32 });

  return (
    <section className="relative flex h-[100svh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#fff9fc] px-5 text-center sm:px-8">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-[100px] sm:h-[520px] sm:w-[520px] sm:blur-[130px]" />

        {/* Top left glow */}

        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-100/50 blur-[100px]" />

        {/* Bottom right glow */}

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-rose-100/50 blur-[110px]" />

        {/* Giant 40 */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[230px] font-bold leading-none text-[#ec2f83]/[0.035] sm:text-[430px]">
          42
        </div>

        {/* Floating hearts */}

        <span className="absolute left-[10%] top-[25%] animate-float text-2xl text-[#ec2f83]/20 sm:left-[18%]">
          ♡
        </span>

        <span className="absolute right-[10%] top-[30%] animate-float-delayed text-3xl text-[#ec2f83]/20 sm:right-[18%]">
          ♡
        </span>

        <span className="absolute bottom-[25%] left-[18%] text-sm text-[#ec2f83]/20">
          ✦
        </span>

        <span className="absolute bottom-[22%] right-[18%] text-lg text-[#ec2f83]/20">
          ✧
        </span>

      </div>

      {/* =====================================================
          CONFETTI
      ===================================================== */}

      {blown && (
        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">

          {confetti.map((_, index) => (
            <span
              key={index}
              className="confetti-piece absolute left-1/2 top-[42%] h-2 w-1.5 rounded-full bg-[#ec2f83]"
              style={{
                transform: `rotate(${index * 29}deg)`,
                left: `${10 + ((index * 17) % 80)}%`,
                top: `${12 + ((index * 13) % 65)}%`,
              }}
            />
          ))}

        </div>
      )}

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-3xl">

        {/* Top label */}

        <div className="flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-12" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ec2f83] sm:text-[10px] sm:tracking-[0.45em]">
            {blown ? "A Wish Has Been Made" : "Make A Wish"}
          </p>

          <span className="h-px w-8 bg-[#ec2f83]/25 sm:w-12" />

        </div>

        {/* Heading */}

        {!blown ? (
          <>
            <h2 className="mt-4 font-serif text-[38px] font-semibold leading-tight tracking-tight text-[#24151d] sm:mt-5 sm:text-6xl">
              One Last Surprise
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[11px] leading-5 text-[#765f69] sm:text-sm sm:leading-6">
              Close your eyes, make a wish,
              and let this beautiful moment belong to you.
            </p>
          </>
        ) : (
          <div className="birthday-result">

            <h2 className="mt-4 font-serif text-[42px] font-semibold leading-tight text-[#ec2f83] sm:text-6xl">
              Happy Birthday
            </h2>

            <p className="mt-1 font-serif text-xl text-[#24151d] sm:text-2xl">
              Kavya ❤️
            </p>

          </div>
        )}

        {/* =====================================================
            CAKE AREA
        ===================================================== */}

        <div className="relative mx-auto mt-7 w-full max-w-[330px] sm:mt-9 sm:max-w-[390px]">

          {/* Cake glow */}

          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/25 blur-[65px]" />

          {/* =================================================
              CANDLE FLAMES
          ================================================= */}

          {!blown && (
            <div
              className={`absolute left-1/2 top-[-8px] z-20 flex -translate-x-1/2 gap-7 transition-all duration-700 sm:top-[-12px] sm:gap-9 ${
                isBlowing
                  ? "translate-y-[-8px] scale-x-[1.4] opacity-0"
                  : "opacity-100"
              }`}
            >
              {[0, 1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="relative flex flex-col items-center"
                >

                  {/* Flame */}

                  <div className="relative mb-1 h-7 w-4">

                    <span className="absolute left-1/2 top-0 h-6 w-3 -translate-x-1/2 rounded-[50%_50%_50%_50%] bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.7)] animate-pulse" />

                    <span className="absolute left-1/2 top-2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-white/90" />

                  </div>

                  {/* Candle */}

                  <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-pink-200 via-[#ec2f83] to-[#d91b68] shadow-sm sm:h-12 sm:w-3" />

                </div>
              ))}
            </div>
          )}

          {/* =================================================
              CAKE
          ================================================= */}

          <div
            className={`relative mx-auto transition-all duration-700 ${
              isBlowing
                ? "scale-[0.98]"
                : "scale-100"
            }`}
          >

            {/* Cake plate */}

            <div className="absolute bottom-[-7px] left-1/2 h-5 w-[280px] -translate-x-1/2 rounded-full bg-white shadow-[0_12px_30px_rgba(236,47,131,0.15)] ring-1 ring-pink-100 sm:w-[330px]" />

            {/* Cake */}

            <div className="relative mx-auto w-[230px] sm:w-[270px]">

              {/* Top frosting */}

              <div className="relative z-10 h-16 rounded-t-[45%] rounded-b-2xl bg-gradient-to-b from-pink-100 to-[#f8b5cf] shadow-inner sm:h-20">

                {/* Cream */}

                <div className="absolute left-0 right-0 top-0 h-7 rounded-full bg-white/80" />

                {/* Strawberry dots */}

                <span className="absolute left-[18%] top-5 text-xs">
                  ♡
                </span>

                <span className="absolute right-[20%] top-5 text-xs text-[#ec2f83]">
                  ♥
                </span>

                <span className="absolute left-[45%] top-3 text-[10px] text-[#ec2f83]/60">
                  ✦
                </span>

              </div>

              {/* Cake body */}

              <div className="relative -mt-1 h-20 rounded-b-[28px] bg-gradient-to-b from-[#f7a7c5] to-[#ec2f83] shadow-[0_18px_35px_rgba(236,47,131,0.22)] sm:h-24">

                {/* Cream drips */}

                <span className="absolute left-[12%] top-0 h-8 w-7 rounded-b-full bg-white/80" />

                <span className="absolute left-[38%] top-0 h-10 w-8 rounded-b-full bg-white/80" />

                <span className="absolute right-[17%] top-0 h-7 w-7 rounded-b-full bg-white/80" />

                {/* Cake text */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <span className="font-serif text-2xl font-semibold text-white drop-shadow-sm sm:text-3xl">
                    42
                  </span>

                </div>

              </div>

              {/* Bottom layer */}

              <div className="h-5 rounded-b-[40%] bg-[#d91b68] shadow-lg" />

            </div>

          </div>

        </div>

        {/* =====================================================
            MESSAGE / ACTION
        ===================================================== */}

        {!blown ? (
          <div className="mt-7 sm:mt-8">

            <p className="text-sm font-medium text-[#24151d] sm:text-base">
              Make a wish, Kavya...
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#a88d99]">
              It only happens once
            </p>

            {/* Blow button */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                blowCandles();
              }}
              disabled={isBlowing}
              className="
                mt-5
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#ec2f83]
                px-6
                py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                shadow-[0_12px_35px_rgba(236,47,131,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#d91b68]
                hover:shadow-[0_18px_40px_rgba(236,47,131,0.3)]
                active:scale-95
                disabled:cursor-wait
                disabled:opacity-70
              "
            >
              {isBlowing ? (
                <>
                  <span className="animate-pulse">
                    💨
                  </span>

                  Blowing...
                </>
              ) : (
                <>
                  Blow The Candles
                  <span>✨</span>
                </>
              )}
            </button>

          </div>
        ) : (
          <div className="birthday-result mt-7">

            {/* Heart */}

            <div className="success-heart mb-3 text-3xl text-[#ec2f83]">
              ♥
            </div>

            <p className="mx-auto max-w-md text-[11px] leading-5 text-[#765f69] sm:text-sm sm:leading-6">
              May every wish you make today
              find its way into your life.
            </p>

            <p className="mt-3 font-serif text-sm italic text-[#d91b68]">
              With love, always.
            </p>

          </div>
        )}

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <p className="mt-5 text-[7px] uppercase tracking-[0.35em] text-[#b49aa5] sm:mt-6 sm:text-[8px]">
          29 August 1984 · Chapter 42
        </p>

      </div>

    </section>
  );
}
