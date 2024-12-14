"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    // Heading animation
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

    // Scroll Indicator animation
    gsap.to(scrollRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Rotating Tagline animation
    const roles = ["Developer", "Designer", "Creator"];
    let index = 0;

    const changeTagline = () => {
      taglineRef.current.textContent = roles[index];
      index = (index + 1) % roles.length;
    };
    changeTagline();
    setInterval(changeTagline, 2000);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-500 opacity-20 animate-pulse"></div>

      {/* Main Heading */}
      <h1
        ref={headingRef}
        className="text-6xl font-extrabold text-white leading-tight tracking-wide relative z-10"
      >
        {"Welcome to My Portfolio".split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      {/* Subheading */}
      <p
        ref={subheadingRef}
        className="text-xl mt-6 text-white opacity-80 tracking-wider relative z-10"
      >
        Showcasing my projects and skills through{" "}
        <span ref={taglineRef} className="font-bold text-blue-300"></span>.
      </p>

      {/* Call-to-Action */}
      <button
        ref={ctaRef}
        className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-300 relative z-10"
      >
        View My Work
      </button>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8 relative z-10">
        <a href="https://github.com/JacobSamas" target="_blank" rel="noopener">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            className="w-8 h-8 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jacobsamas"
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-8 h-8 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a href="https://twitter.com/samasjacob" target="_blank" rel="noopener">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
            className="w-8 h-8 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 animate-bounce text-white text-sm tracking-wider"
      >
        <span className="block">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-auto mt-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
