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

/* ============================================================
   STORY CHAPTERS
   ============================================================ */

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

  // Birthday
  Chapter40,
  MemoryGallery,
  BirthdayLetter,
  BirthdayCake,
  FinalMessage,
];

/* ============================================================
   CHAPTER TIMINGS
   ============================================================ */

/*
  Normal chapter:
  9 seconds

  Countdown:
  18 seconds

  Timeline:
  7 sections × 3 seconds = 21 seconds

  MemoryGallery:
  11 images × 3 seconds = 33 seconds

  Birthday Letter:
  20 seconds

  Birthday Cake:
  13 seconds

  Final:
  22 seconds
*/

const getChapterDuration = (chapterComponent) => {
  if (chapterComponent === Countdown) {
    return 18000;
  }

  if (chapterComponent === Timeline) {
    return 21000;
  }

  if (chapterComponent === Chapter40) {
    return 14000;
  }

  if (chapterComponent === MemoryGallery) {
    return 33000;
  }

  if (chapterComponent === BirthdayLetter) {
    return 20000;
  }

  if (chapterComponent === BirthdayCake) {
    return 13000;
  }

  if (chapterComponent === FinalMessage) {
    return 22000;
  }

  return 9000;
};

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const audioRef = useRef(null);
  const chapterContainerRef = useRef(null);

  /* ============================================================
     FIND ACTIVE SCROLL AREA
     ============================================================ */

  const getActiveScrollElement = () => {
    const container = chapterContainerRef.current;

    if (!container) {
      return null;
    }

    /*
      First check whether the main chapter
      itself needs scrolling.
    */
    if (container.scrollHeight > container.clientHeight) {
      return container;
    }

    /*
      Otherwise check for a nested auto-scroll area.
    */
    const nestedScrollable = container.querySelector(
      '[data-auto-scrollable="true"]'
    );

    if (nestedScrollable) {
      return nestedScrollable;
    }

    return container;
  };

  /* ============================================================
     PASSWORD UNLOCK + MUSIC
     ============================================================ */

  const handleUnlock = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.35;

        await audioRef.current.play();
      }
    } catch (error) {
      console.log("Music could not start:", error);
    }

    setTimeout(() => {
      setUnlocked(true);
    }, 250);
  };

  /* ============================================================
     SAFETY CHECK
     ============================================================ */

  useEffect(() => {
    if (
      chapter < 0 ||
      chapter >= chapters.length
    ) {
      setChapter(0);
      setTransitioning(false);
    }
  }, [chapter]);

  /* ============================================================
     AUTOMATIC CHAPTER TRANSITION
     ============================================================ */

  useEffect(() => {
    if (!unlocked) {
      return;
    }

    /*
      Stop automatically on the final chapter.
    */
    if (chapter >= chapters.length - 1) {
      return;
    }

    const activeChapter = chapters[chapter];

    const duration = getChapterDuration(
      activeChapter
    );

    const timer = window.setTimeout(() => {
      setTransitioning(true);

      /*
        Give the old chapter time to fade/slide away.
      */
      window.setTimeout(() => {
        setChapter((current) => current + 1);
        setTransitioning(false);
      }, 700);
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [chapter, unlocked]);

  /* ============================================================
     SLOW AUTO SCROLL
     ============================================================ */

  useEffect(() => {
    if (!unlocked) {
      return;
    }

    const scrollTarget = getActiveScrollElement();

    if (!scrollTarget) {
      return;
    }

    /*
      Every new chapter starts from the top.
    */
    scrollTarget.scrollTo({
      top: 0,
      behavior: "auto",
    });

    let cancelled = false;
    let frameId = null;
    let delayId = null;
    let startTime;

    /* ------------------------------------------------------------
       Stop auto scrolling if user touches/scrolls manually
       ------------------------------------------------------------ */

    const stopAutoScroll = () => {
      cancelled = true;

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    /* ------------------------------------------------------------
       Start slow scrolling
       ------------------------------------------------------------ */

    const startAutoScroll = () => {
      if (cancelled) {
        return;
      }

      const maxScroll =
        scrollTarget.scrollHeight -
        scrollTarget.clientHeight;

      /*
        There is nothing to scroll.
      */
      if (maxScroll <= 0) {
        return;
      }

      /*
        Slow scroll.

        The larger the content,
        the longer it takes to reach the bottom.

        Minimum: 12 seconds
        Maximum: 30 seconds
      */
      const scrollDurationMs = Math.max(
        12000,
        Math.min(30000, maxScroll * 35)
      );

      const animate = (timestamp) => {
        if (cancelled) {
          return;
        }

        if (startTime === undefined) {
          startTime = timestamp;
        }

        const elapsed =
          timestamp - startTime;

        const progress = Math.min(
          elapsed / scrollDurationMs,
          1
        );

        /*
          Smooth ease-in-out.
        */
        const easedProgress =
          progress < 0.5
            ? 2 * progress * progress
            : 1 -
              Math.pow(
                -2 * progress + 2,
                2
              ) /
                2;

        scrollTarget.scrollTop =
          maxScroll * easedProgress;

        if (progress < 1) {
          frameId =
            window.requestAnimationFrame(
              animate
            );
        }
      };

      frameId =
        window.requestAnimationFrame(
          animate
        );
    };

    /*
      Wait for the chapter entrance animation
      before measuring its height.
    */
    delayId = window.setTimeout(
      startAutoScroll,
      1200
    );

    /*
      Manual mouse scrolling stops automatic scrolling.
    */
    scrollTarget.addEventListener(
      "wheel",
      stopAutoScroll,
      {
        once: true,
        passive: true,
      }
    );

    /*
      Manual touch scrolling stops automatic scrolling.
    */
    scrollTarget.addEventListener(
      "touchstart",
      stopAutoScroll,
      {
        once: true,
        passive: true,
      }
    );

    return () => {
      if (delayId !== null) {
        window.clearTimeout(delayId);
      }

      scrollTarget.removeEventListener(
        "wheel",
        stopAutoScroll
      );

      scrollTarget.removeEventListener(
        "touchstart",
        stopAutoScroll
      );

      stopAutoScroll();
    };
  }, [chapter, unlocked]);

  /* ============================================================
     PASSWORD SCREEN
     ============================================================ */

  if (!unlocked) {
    return (
      <main
        className="
          h-[100svh]
          w-full
          overflow-hidden
          bg-[#fff9fc]
        "
      >
        <audio
          ref={audioRef}
          src="/music/birthday.mp3"
          loop
          preload="auto"
        />

        <PasswordGate
          onUnlock={handleUnlock}
        />
      </main>
    );
  }

  /* ============================================================
     CURRENT CHAPTER
     ============================================================ */

  const CurrentChapter =
    chapters[chapter] || Countdown;

  const isFinalChapter =
    chapter === chapters.length - 1;

  /* ============================================================
     MAIN PAGE
     ============================================================ */

  return (
    <main
      className="
        relative
        h-[100svh]
        w-full
        overflow-hidden
        bg-[#fff9fc]
        text-[#24151d]
      "
    >
      {/* ======================================================
          BACKGROUND MUSIC
          ====================================================== */}

      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
        preload="auto"
      />

      {/* ======================================================
          FLOATING DECORATIONS
          ====================================================== */}

      <FloatingDecorations />

      {/* ======================================================
          CURRENT CHAPTER
          ====================================================== */}

      <div
        ref={chapterContainerRef}
        key={chapter}
        className={`
          relative
          z-10
          h-[100svh]
          w-full
          overflow-x-hidden
          overflow-y-auto
          overscroll-contain

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            transitioning
              ? `
                translate-x-8
                scale-[0.98]
                opacity-0
                blur-sm
              `
              : `
                translate-x-0
                scale-100
                opacity-100
                blur-0
              `
          }
        `}
      >
        <CurrentChapter />
      </div>

      {/* ======================================================
          STORY PROGRESS
          ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          bottom-4
          left-1/2
          z-50
          -translate-x-1/2

          sm:bottom-5
        "
      >
        <div
          className="
            flex
            max-w-[90vw]
            items-center
            gap-1.5
            overflow-hidden
            rounded-full
            border
            border-pink-100
            bg-white/70
            px-3
            py-2
            shadow-lg
            shadow-pink-100/30
            backdrop-blur-xl
          "
        >
          {chapters.map((_, index) => (
            <span
              key={index}
              className={`
                block
                shrink-0
                rounded-full
                transition-all
                duration-500

                ${
                  index === chapter
                    ? `
                      h-1.5
                      w-5
                      bg-[#ec2f83]
                    `
                    : index < chapter
                    ? `
                      h-1.5
                      w-1.5
                      bg-[#ec2f83]/50
                    `
                    : `
                      h-1.5
                      w-1.5
                      bg-pink-200
                    `
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* ======================================================
          READ AGAIN
          ====================================================== */}

      {isFinalChapter && (
        <div
          className="
            fixed
            bottom-20
            left-1/2
            z-50
            -translate-x-1/2

            sm:bottom-24
          "
        >
          <button
            type="button"
            onClick={() => {
              setTransitioning(false);
              setChapter(0);
            }}
            className="
              pointer-events-auto
              whitespace-nowrap

              rounded-full
              border
              border-pink-200
              bg-white/90

              px-4
              py-2

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d91b68]

              shadow-lg
              shadow-pink-100/40
              backdrop-blur

              transition
              duration-300

              hover:scale-105
              active:scale-95

              sm:px-5
              sm:py-2.5
              sm:text-xs
            "
          >
            Read Again
          </button>
        </div>
      )}
    </main>
  );
}