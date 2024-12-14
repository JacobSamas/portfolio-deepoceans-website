"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OceanEffect() {
  const oceanRef = useRef(null);

  useEffect(() => {
    // Waves Animation
    gsap.to(".wave", {
      duration: 8,
      x: "20%",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse Interaction
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      gsap.to(".wave", {
        xPercent: x / 5 - 10,
        yPercent: y / 10 - 5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll Interaction
    gsap.to(".wave", {
      yPercent: -20,
      scrollTrigger: {
        trigger: oceanRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={oceanRef} className="ocean relative overflow-hidden">
      {/* Waves */}
      <div className="wave wave-layer-1"></div>
      <div className="wave wave-layer-2"></div>
      <div className="wave wave-layer-3"></div>

      {/* Light Rays */}
      <div className="light-ray ray-1"></div>
      <div className="light-ray ray-2"></div>

      {/* Floating Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
    </div>
  );
}
