"use client";

export default function FloatingDecorations() {
    const decorations = [
        {
            symbol: "♡",
            left: "5%",
            top: "14%",
            size: "28px",
            opacity: 0.18,
            delay: "0s",
            duration: "7s",
        },
        {
            symbol: "✦",
            left: "13%",
            top: "38%",
            size: "14px",
            opacity: 0.22,
            delay: "1.2s",
            duration: "6s",
        },
        {
            symbol: "♡",
            left: "7%",
            top: "72%",
            size: "22px",
            opacity: 0.16,
            delay: "2s",
            duration: "8s",
        },
        {
            symbol: "✧",
            left: "22%",
            top: "88%",
            size: "15px",
            opacity: 0.18,
            delay: "0.7s",
            duration: "6.5s",
        },

        {
            symbol: "♡",
            left: "90%",
            top: "13%",
            size: "27px",
            opacity: 0.18,
            delay: "1.5s",
            duration: "7.5s",
        },
        {
            symbol: "✦",
            left: "82%",
            top: "34%",
            size: "16px",
            opacity: 0.22,
            delay: "2.4s",
            duration: "6s",
        },
        {
            symbol: "♡",
            left: "94%",
            top: "68%",
            size: "23px",
            opacity: 0.15,
            delay: "0.8s",
            duration: "8s",
        },
        {
            symbol: "✧",
            left: "78%",
            top: "87%",
            size: "14px",
            opacity: 0.2,
            delay: "3s",
            duration: "6.5s",
        },

        {
            symbol: "✦",
            left: "31%",
            top: "17%",
            size: "12px",
            opacity: 0.15,
            delay: "1s",
            duration: "7s",
        },
        {
            symbol: "•",
            left: "67%",
            top: "20%",
            size: "12px",
            opacity: 0.18,
            delay: "2s",
            duration: "6s",
        },
        {
            symbol: "✧",
            left: "42%",
            top: "84%",
            size: "14px",
            opacity: 0.16,
            delay: "1.5s",
            duration: "7s",
        },
    ];

    const particles = [
        {
            left: "27%",
            top: "23%",
            size: "5px",
            delay: "0s",
            duration: "6s",
        },
        {
            left: "73%",
            top: "46%",
            size: "7px",
            delay: "1.5s",
            duration: "8s",
        },
        {
            left: "38%",
            top: "62%",
            size: "5px",
            delay: "2s",
            duration: "7s",
        },
        {
            left: "61%",
            top: "76%",
            size: "4px",
            delay: "0.5s",
            duration: "6.5s",
        },
        {
            left: "18%",
            top: "57%",
            size: "4px",
            delay: "2.5s",
            duration: "8s",
        },
        {
            left: "84%",
            top: "58%",
            size: "5px",
            delay: "1s",
            duration: "7s",
        },
    ];

    return (
        <div
            className="
        pointer-events-none
        fixed
        inset-0
        z-20
        overflow-hidden
        select-none
      "
            aria-hidden="true"
        >
            {/* =====================================================
          FLOATING SYMBOLS
      ===================================================== */}

                {decorations.map((item) => (
                <span
                  key={`${item.symbol}-${item.left}-${item.top}`}
                    className="
            floating-decoration
            absolute
            font-serif
            text-[#ec2f83]
            will-change-transform
          "
                    style={{
                        left: item.left,
                        top: item.top,
                        fontSize: item.size,
                        opacity: item.opacity,
                        animationDuration: item.duration,
                        animationDelay: item.delay,
                    }}
                >
                    {item.symbol}
                </span>
            ))}

            {/* =====================================================
          SOFT PARTICLES
      ===================================================== */}

                {particles.map((particle) => (
                <span
                  key={`${particle.left}-${particle.top}-${particle.size}`}
                    className="
            floating-particle
            absolute
            rounded-full
            bg-[#ec2f83]
            shadow-[0_0_12px_rgba(236,47,131,0.25)]
            will-change-transform
          "
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                        animationDuration: particle.duration,
                        animationDelay: particle.delay,
                    }}
                />
            ))}

            {/* =====================================================
          LARGE SOFT LIGHT SPOTS
      ===================================================== */}

            <span
                className="
          floating-light
          absolute
          -left-20
          top-[35%]
          h-40
          w-40
          rounded-full
          bg-pink-200/10
          blur-[70px]
        "
            />

            <span
                className="
          floating-light
          absolute
          -right-20
          top-[65%]
          h-44
          w-44
          rounded-full
          bg-pink-200/10
          blur-[80px]
        "
                style={{
                    animationDelay: "2s",
                }}
            />

            {/* =====================================================
          CORNER SPARKLES
      ===================================================== */}

            <span className="absolute left-[3%] top-[48%] text-[10px] text-[#ec2f83]/15 sm:text-sm">
                ✦
            </span>

            <span className="absolute right-[3%] top-[52%] text-[11px] text-[#ec2f83]/15 sm:text-sm">
                ✧
            </span>

        </div>
    );
}