"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-08-29T00:00:00").getTime();

    const update = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    ["days", "Days"],
    ["hours", "Hours"],
    ["minutes", "Minutes"],
    ["seconds", "Seconds"],
  ];

  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-white px-4 sm:px-6">
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      {/* Decorative circles */}
      <div className="absolute left-[8%] top-[18%] h-10 w-10 rounded-full border border-pink-200/60" />
      <div className="absolute right-[8%] bottom-[20%] h-16 w-16 rounded-full border border-pink-200/50" />

      <div className="relative z-10 w-full max-w-5xl text-center">
        
        {/* Label */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#ec2f83] shadow-sm backdrop-blur sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ec2f83]" />
          The celebration begins in
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#24151d] sm:text-5xl md:text-6xl">
          Counting down
          <br />
          <span className="text-[#ec2f83]">to her special day</span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-[#765f69] sm:text-sm">
          Every second brings us closer to
          <br className="sm:hidden" /> Kavya's special day.
        </p>

        {/* Countdown */}
        <div className="mx-auto mt-7 grid max-w-3xl grid-cols-4 gap-2 sm:mt-10 sm:gap-4">
          {items.map(([key, label]) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-pink-100 bg-white/90 px-2 py-4 shadow-[0_15px_50px_rgba(236,47,131,0.08)] backdrop-blur-xl sm:rounded-3xl sm:p-7"
            >
              {/* Pink shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ec2f83]/50 to-transparent" />

              <div className="font-serif text-3xl font-semibold tabular-nums text-[#ec2f83] sm:text-5xl md:text-6xl">
                {String(time[key]).padStart(2, "0")}
              </div>

              <div className="mt-2 text-[8px] uppercase tracking-[0.18em] text-[#765f69] sm:mt-3 sm:text-[10px] sm:tracking-[0.25em]">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Date */}
        <div className="mt-7 sm:mt-9">
          <div className="mx-auto h-px w-12 bg-[#ec2f83]/40" />

          <p className="mt-4 font-serif text-lg text-[#d91b68] sm:text-2xl">
            29 · 08 · 2026
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[10px]">
            Kavya's Birthday
          </p>
        </div>

      </div>
    </section>
  );
}
