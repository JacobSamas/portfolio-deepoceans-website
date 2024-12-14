"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function UnderwaterScene() {
  useEffect(() => {
    // Fish Animation
    gsap.to(".fish", {
      x: "60vw",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 8,
      stagger: 2,
    });

    // Light Rays Flicker
    gsap.to(".light-ray", {
      opacity: 0.5,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

    // Rising Bubbles
    gsap.to(".bubble", {
      y: "-100vh",
      opacity: 0,
      repeat: -1,
      duration: 8,
      ease: "power1.inOut",
      stagger: 2,
    });
  }, []);

  return (
    <div className="ocean">
      {/* Light Rays */}
      <div className="light-ray ray-1"></div>
      <div className="light-ray ray-2"></div>

      {/* Fish */}
      <div className="fish fish-1"></div>
      <div className="fish fish-2"></div>

      {/* Rising Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>

      {/* Ocean Floor & Corals */}
      <div className="ocean-floor">
        <div className="coral coral-1"></div>
        <div className="coral coral-2"></div>
      </div>
    </div>
  );
}
