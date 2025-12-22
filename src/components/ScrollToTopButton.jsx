import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // new state

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      // Show button only after scrolling 200px
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle parameters
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  if (!isVisible) return null; // hide button if not scrolled enough

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-7 bottom-30 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
    >
      {/* Arrow */}
      <FaArrowUp className="text-gray-800 z-10" />

      {/* Circular progress border */}
      <svg
        className="absolute w-16 h-16"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="transparent"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#666464"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
