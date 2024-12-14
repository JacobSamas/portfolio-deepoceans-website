"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Navbar Animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Logo Animation
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Links Animation
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 1,
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full px-8 py-4 bg-deepOcean-light text-white"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          ref={logoRef}
          className="text-2xl font-bold tracking-wider uppercase"
        >
          Jacob Samas
        </h1>
        <ul className="flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((text, index) => (
            <li
              key={text}
              ref={(el) => (linksRef.current[index] = el)}
              className="hover:text-deepOcean-dark transition-colors duration-300"
            >
              <Link href={`/${text.toLowerCase()}`}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
