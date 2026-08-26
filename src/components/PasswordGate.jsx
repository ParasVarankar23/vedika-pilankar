"use client";

import { useEffect, useState } from "react";

export default function PasswordGate({ onUnlock }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const SECRET_PASSWORD = "29081986";

    const addNumber = (number) => {
        if (isUnlocking || password.length >= 8) return;

        setError("");
        setPassword((prev) => prev + number);
    };

    const removeNumber = () => {
        if (isUnlocking) return;

        setError("");
        setPassword((prev) => prev.slice(0, -1));
    };

    const clearPassword = () => {
        if (isUnlocking) return;

        setError("");
        setPassword("");
    };

    const unlock = () => {
        if (password !== SECRET_PASSWORD) {
            setError("That's not the secret date ❤️");
            setIsShaking(true);

            setTimeout(() => {
                setIsShaking(false);
            }, 500);

            return;
        }

        setError("");
        setIsUnlocking(true);
        onUnlock();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length === 8) {
            unlock();
        }
    };

    /* Keyboard */

    useEffect(() => {
        const handleKeyboard = (e) => {
            if (isUnlocking) return;

            if (/^[0-9]$/.test(e.key)) {
                e.preventDefault();
                addNumber(e.key);
            }

            if (e.key === "Backspace") {
                e.preventDefault();
                removeNumber();
            }

            if (e.key === "Escape") {
                e.preventDefault();
                clearPassword();
            }

            if (e.key === "Enter" && password.length === 8) {
                e.preventDefault();
                unlock();
            }
        };

        window.addEventListener("keydown", handleKeyboard);

        return () => {
            window.removeEventListener("keydown", handleKeyboard);
        };
    }, [password, isUnlocking]);

    return (
        <main className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[#fff9fc] px-3 sm:px-5">

            {/* Background */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/25 blur-[100px] sm:h-[500px] sm:w-[500px]" />

                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-pink-100/50 blur-[90px]" />

                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-rose-100/50 blur-[90px]" />

                <span className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-[#ec2f83]/25" />

                <span className="absolute right-[12%] top-[24%] h-3 w-3 rounded-full bg-[#ec2f83]/20" />

                <span className="absolute bottom-[18%] left-[15%] h-3 w-3 rounded-full bg-pink-300/30" />

                <span className="absolute bottom-[20%] right-[17%] h-2 w-2 rounded-full bg-[#ec2f83]/25" />

                <span className="absolute left-[8%] top-[42%] text-2xl text-[#ec2f83]/15">
                    ♡
                </span>

                <span className="absolute right-[8%] top-[55%] text-3xl text-[#ec2f83]/15">
                    ♡
                </span>

                <span className="absolute right-[28%] top-[13%] text-xl text-[#ec2f83]/10">
                    ✧
                </span>

            </div>

            {/* Main */}

            <div
                className={`relative z-10 w-full max-w-[400px] transition-all duration-700 ${isUnlocking
                        ? "scale-105 opacity-0 blur-sm"
                        : "scale-100 opacity-100"
                    } ${isShaking ? "animate-shake" : ""}`}
            >

                {/* Card */}

                <div className="rounded-[28px] border border-white bg-white/80 px-5 py-4 shadow-[0_25px_80px_rgba(236,47,131,0.14)] backdrop-blur-xl sm:px-7 sm:py-5">

                    {/* Badge */}

                    <div className="mb-3 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#d91b68] shadow-sm sm:text-[9px]">
                            <span>✦</span>
                            A little surprise awaits
                            <span>✦</span>
                        </div>
                    </div>

                    {/* Lock */}

                    <div className="mb-3 flex justify-center">

                        <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-pink-100 bg-[#fff9fc] shadow-[0_10px_35px_rgba(236,47,131,0.12)] sm:h-[70px] sm:w-[70px]">

                            <div className="absolute inset-1.5 rounded-full border border-pink-100/70" />

                            <span className="relative text-2xl sm:text-3xl">
                                {isUnlocking ? "🔓" : "🔐"}
                            </span>

                        </div>

                    </div>

                    {/* Heading */}

                    <div className="text-center">

                        <p className="mb-1 text-[9px] uppercase tracking-[0.35em] text-[#ec2f83]">
                            A Secret Story
                        </p>

                        <h1 className="font-serif text-[30px] font-semibold leading-tight text-[#24151d] sm:text-[34px]">
                            Someone Special
                        </h1>

                        <p className="mx-auto mt-2 max-w-[280px] text-[11px] leading-5 text-[#765f69] sm:text-xs">
                            A beautiful little story has been waiting
                            behind this door.
                        </p>

                    </div>

                    {/* Date */}

                    <div className="mt-4">

                        <p className="mb-2 text-center text-[8px] uppercase tracking-[0.3em] text-[#a88d99] sm:text-[9px]">
                            Enter the special date
                        </p>

                        <div className="flex justify-center gap-1.5 sm:gap-2">

                            {Array.from({ length: 8 }).map((_, index) => {

                                const digit = password[index];

                                return (
                                    <div
                                        key={index}
                                        className="flex h-9 w-7 items-center justify-center rounded-lg border border-pink-100 bg-[#fff9fc] text-sm font-semibold text-[#ec2f83] shadow-sm sm:h-10 sm:w-8"
                                    >
                                        {digit || (
                                            <span className="text-pink-200">
                                                •
                                            </span>
                                        )}
                                    </div>
                                );
                            })}

                        </div>

                        <p className="mt-1.5 text-center text-[8px] text-[#a88d99]">
                            DD • MM • YYYY
                        </p>

                    </div>

                    {/* Keypad */}

                    <form
                        onSubmit={handleSubmit}
                        className="mt-3"
                    >

                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">

                            {[
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                            ].map((number) => (
                                <button
                                    key={number}
                                    type="button"
                                    onClick={() => addNumber(number)}
                                    disabled={
                                        isUnlocking ||
                                        password.length >= 8
                                    }
                                    className="h-10 rounded-xl border border-pink-100 bg-white text-sm text-[#24151d] shadow-sm transition-all hover:border-pink-200 hover:bg-[#fff5f9] active:scale-95 disabled:opacity-50 sm:h-11"
                                >
                                    {number}
                                </button>
                            ))}

                            {/* Clear */}

                            <button
                                type="button"
                                onClick={clearPassword}
                                disabled={isUnlocking}
                                className="h-10 rounded-xl border border-pink-100 bg-white text-[9px] font-semibold uppercase tracking-wider text-[#a88d99] transition hover:bg-[#fff5f9] active:scale-95 disabled:opacity-40 sm:h-11"
                            >
                                Clear
                            </button>

                            {/* 0 */}

                            <button
                                type="button"
                                onClick={() => addNumber("0")}
                                disabled={
                                    isUnlocking ||
                                    password.length >= 8
                                }
                                className="h-10 rounded-xl border border-pink-100 bg-white text-sm text-[#24151d] shadow-sm transition hover:border-pink-200 hover:bg-[#fff5f9] active:scale-95 disabled:opacity-50 sm:h-11"
                            >
                                0
                            </button>

                            {/* Delete */}

                            <button
                                type="button"
                                onClick={removeNumber}
                                disabled={
                                    isUnlocking ||
                                    password.length === 0
                                }
                                className="h-10 rounded-xl border border-pink-100 bg-white text-base text-[#ec2f83] transition hover:bg-[#fff5f9] active:scale-95 disabled:opacity-30 sm:h-11"
                            >
                                ←
                            </button>

                        </div>

                        {/* Unlock */}

                        <button
                            type="submit"
                            disabled={
                                isUnlocking ||
                                password.length !== 8
                            }
                            className="mt-2.5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#ec2f83] text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-pink-200 transition-all hover:bg-[#d91b68] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#ec2f83]/50 disabled:shadow-none sm:h-12"
                        >

                            {isUnlocking ? (
                                <>
                                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />

                                    Opening...
                                </>
                            ) : (
                                <>
                                    Unlock the Surprise
                                    <span>✨</span>
                                </>
                            )}

                        </button>

                    </form>

                    {/* Error */}

                    <div className="min-h-[20px] text-center">

                        {error && (
                            <p className="mt-2 text-[10px] font-medium text-[#d91b68]">
                                {error}
                            </p>
                        )}

                    </div>

                    {/* Hint */}

                    <p className="mt-1 text-center text-[8px] uppercase tracking-[0.2em] text-[#b49aa5]">
                        ♥ A very special date ♥
                    </p>

                </div>

            </div>

            {/* Unlock overlay */}

            {isUnlocking && (
                <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#fff9fc]/70 backdrop-blur-sm">

                    <div className="text-center">

                        <div className="mb-3 text-4xl animate-pulse">
                            💗
                        </div>

                        <p className="font-serif text-lg text-[#24151d]">
                            Opening your story...
                        </p>

                    </div>

                </div>
            )}

            <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }

          20% {
            transform: translateX(-7px);
          }

          40% {
            transform: translateX(7px);
          }

          60% {
            transform: translateX(-5px);
          }

          80% {
            transform: translateX(5px);
          }
        }

        :global(.animate-shake) {
          animation: shake 0.45s ease-in-out;
        }
      `}</style>

        </main>
    );
}