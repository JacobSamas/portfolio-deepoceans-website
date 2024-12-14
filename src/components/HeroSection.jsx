"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Letter animation for heading
    gsap.fromTo(
      headingRef.current.querySelectorAll("span"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    // Subheading animation
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Call-to-Action animation
    gsap.fromTo(
      ctaRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        delay: 1.5,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-8">
      <h1
        ref={headingRef}
        className="text-6xl font-extrabold text-white leading-tight tracking-wide"
      >
        {"Welcome to My Portfolio".split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      <p
        ref={subheadingRef}
        className="text-lg mt-6 text-white opacity-80 tracking-wider"
      >
        Showcasing my projects and skills through innovation.
      </p>

      <button
        ref={ctaRef}
        className="mt-10 px-8 py-4 bg-deepOcean-light text-white rounded-md font-semibold text-lg hover:bg-deepOcean-dark transition-all duration-300"
      >
        View My Work
      </button>
    </section>
  );
}
