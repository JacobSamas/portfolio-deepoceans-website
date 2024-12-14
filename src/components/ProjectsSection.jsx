"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const projects = [
  {
    title: "Photo Editor",
    description: "Online photo manipulation tool using Flask & OpenCV.",
  },
  {
    title: "Fishes Recognition",
    description: "AI-based image recognition for fish species.",
  },
  {
    title: "Solar Dhobi Cart",
    description: "Online laundry service with order management.",
  },
];

export default function ProjectsSection() {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Cards Animation
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="h-auto py-20 px-8 text-center">
      <h2
        ref={titleRef}
        className="text-4xl font-extrabold text-white mb-8 tracking-wide"
      >
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-deepOcean-light text-white rounded-lg shadow-lg p-6 hover:scale-105 hover:-translate-y-2 transform transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-80">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
