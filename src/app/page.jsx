"use client";

import { useEffect, useRef, useState } from "react";

import PasswordGate from "@/components/PasswordGate";
import HeroSection from "@/components/HeroSection";
import Countdown from "@/components/Countdown";
import BirthdayReveal from "@/components/BirthdayReveal";
import StoryIntro from "@/components/StoryIntro";
import SchoolStory from "@/components/SchoolStory";
import GuitarMoment from "@/components/GuitarMoment";
import LoveStory from "@/components/LoveStory";
import Timeline from "@/components/Timeline";
import Marriage2008 from "@/components/Marriage2008";
import JourneySection from "@/components/JourneySection";
import Chapter40 from "@/components/Chapter40";
import MemoryGallery from "@/components/MemoryGallery";
import BirthdayLetter from "@/components/BirthdayLetter";
import BirthdayCake from "@/components/BirthdayCake";
import FinalMessage from "@/components/FinalMessage";
import FloatingDecorations from "@/components/FloatingDecorations";

const chapters = [
  Countdown,
  HeroSection,
  BirthdayReveal,
  // Their story
  StoryIntro,
  SchoolStory,
  GuitarMoment,
  LoveStory,
  Timeline,
  Marriage2008,
  JourneySection,

  // Minal's birthday
  Chapter40,
  MemoryGallery,
  BirthdayLetter,
  BirthdayCake,
  FinalMessage,
];

const getChapterDuration = (chapterComponent) => {
  if (chapterComponent === Countdown) return 18000;
  if (chapterComponent === Chapter40) return 14000;
  if (chapterComponent === MemoryGallery) return 13000;
  if (chapterComponent === BirthdayLetter) return 20000;
  if (chapterComponent === BirthdayCake) return 13000;
  if (chapterComponent === FinalMessage) return 22000;

  return 9000;
};

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const audioRef = useRef(null);
  const chapterContainerRef = useRef(null);

  const getActiveScrollElement = () => {
    const container = chapterContainerRef.current;
    if (!container) return null;

    const containerHasOverflow = container.scrollHeight > container.clientHeight;
    if (containerHasOverflow) return container;

    const nestedScrollable = container.querySelector('[data-auto-scrollable="true"]');
    if (!nestedScrollable) return container;

    return nestedScrollable;
  };

  /*
   * Start music after password unlock
   */
  const handleUnlock = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.35;
        await audioRef.current.play();
      }
    } catch (error) {
      console.log("Music could not start:", error);
    } finally {
      setTimeout(() => {
        setUnlocked(true);
      }, 250);
    }
  };

  // If hot-reload or edits change chapter count, recover safely.
  useEffect(() => {
    if (chapter < 0 || chapter >= chapters.length) {
      setChapter(0);
      setTransitioning(false);
    }
  }, [chapter]);

  /*
   * Automatically move through the story.
   *
   * 9000 = 9 seconds per chapter.
   * Change to 12000 for 12 seconds, etc.
   */
  useEffect(() => {
    if (!unlocked) return;

    // Stop when the final chapter is reached
    if (chapter >= chapters.length - 1) return;

    const activeChapter = chapters[chapter];
    const scrollTarget = getActiveScrollElement();
    const hasOverflow = Boolean(
      scrollTarget && scrollTarget.scrollHeight > scrollTarget.clientHeight
    );

    const chapterDurationMs =
      getChapterDuration(activeChapter) + (hasOverflow ? 4000 : 0);

    const timer = setTimeout(() => {
      setTransitioning(true);

      setTimeout(() => {
        setChapter((current) => current + 1);
        setTransitioning(false);
      }, 700);
    }, chapterDurationMs);

    return () => clearTimeout(timer);
  }, [chapter, unlocked]);

  /*
   * Auto-scroll overflowing chapter content.
   * Scrolls only when chapter content is taller than viewport.
   */
  useEffect(() => {
    if (!unlocked) return;

    const scrollTarget = getActiveScrollElement();
    if (!scrollTarget) return;

    scrollTarget.scrollTo({ top: 0, behavior: "auto" });

    let cancelled = false;
    let frameId;
    let startDelayId;
    let startTime;

    const stopAutoScroll = () => {
      cancelled = true;

      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };

    const startAutoScroll = () => {
      if (cancelled) return;

      const maxScroll = scrollTarget.scrollHeight - scrollTarget.clientHeight;
      if (maxScroll <= 0) return;

      const scrollDurationMs = Math.max(5000, Math.min(12000, maxScroll * 18));

      const animate = (timestamp) => {
        if (cancelled) return;

        if (startTime === undefined) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrollDurationMs, 1);

        scrollTarget.scrollTop = maxScroll * progress;

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    };

    // Wait for intro animations/layout before measuring overflow.
    startDelayId = window.setTimeout(startAutoScroll, 1200);

    scrollTarget.addEventListener("wheel", stopAutoScroll, { once: true, passive: true });
    scrollTarget.addEventListener("touchstart", stopAutoScroll, { once: true, passive: true });

    return () => {
      window.clearTimeout(startDelayId);
      scrollTarget.removeEventListener("wheel", stopAutoScroll);
      scrollTarget.removeEventListener("touchstart", stopAutoScroll);
      stopAutoScroll();
    };
  }, [chapter, unlocked]);

  /*
   * Password screen
   */
  if (!unlocked) {
    return (
      <main className="h-[100svh] w-full overflow-hidden bg-[#fff9fc]">
        <audio
          ref={audioRef}
          src="/music/birthday.mp3"
          loop
          preload="auto"
        />
        <PasswordGate onUnlock={handleUnlock} />
      </main>
    );
  }

  const CurrentChapter = chapters[chapter] || Countdown;
  const isFinalChapter = chapter === chapters.length - 1;

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-[#fff9fc] text-[#24151d]">

      {/* Background music */}
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
        preload="auto"
      />

      {/* Floating decorations */}
      <FloatingDecorations />

      {/* Current chapter */}
      <div
        ref={chapterContainerRef}
        key={chapter}
        className={`
          relative z-10
          h-[100svh]
          w-full
          overflow-x-hidden
          overflow-y-auto
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            transitioning
              ? "translate-x-8 scale-[0.98] opacity-0 blur-sm"
              : "translate-x-0 scale-100 opacity-100 blur-0"
          }
        `}
      >
        <CurrentChapter />
      </div>

      {/* Minimal story progress */}
      <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-full border border-pink-100 bg-white/70 px-3 py-2 shadow-lg shadow-pink-100/30 backdrop-blur-xl">
          {chapters.map((_, index) => (
            <span
              key={index}
              className={`
                block rounded-full transition-all duration-500
                ${
                  index === chapter
                    ? "h-1.5 w-5 bg-[#ec2f83]"
                    : index < chapter
                    ? "h-1.5 w-1.5 bg-[#ec2f83]/50"
                    : "h-1.5 w-1.5 bg-pink-200"
                }
              `}
            />
          ))}
        </div>
      </div>

      {isFinalChapter && (
        <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2">
          <button
            type="button"
            onClick={() => {
              setTransitioning(false);
              setChapter(0);
            }}
            className="pointer-events-auto rounded-full border border-pink-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d91b68] shadow-lg shadow-pink-100/40 backdrop-blur"
          >
            Read Again
          </button>
        </div>
      )}

    </main>
  );
}