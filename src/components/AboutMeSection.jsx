"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutMeSection() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Title Animation
    tl.fromTo(
      titleRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    // Text Animation
    tl.fromTo(
      textRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1 },
      "<0.3"
    );

    // Image Animation
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, ease: "back.out(1.7)" },
      "<0.5"
    );
  }, []);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-8 gap-10">
      <div ref={titleRef} className="text-left md:w-1/2">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p
          ref={textRef}
          className="text-lg text-white opacity-80 leading-relaxed"
        >
          I am a passionate software developer with a strong foundation in full
          stack development, focused on creating dynamic, user-friendly web
          experiences. I thrive on building innovative projects using modern web
          technologies.
        </p>
      </div>

      <div
        ref={imageRef}
        className="w-64 h-64 bg-gray-400 rounded-lg shadow-lg"
      ></div>
    </section>
  );
}
