"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SkillsTree() {
  const branchesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      branchesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  const skills = {
    "AI & Machine Learning": [
      "OpenAI API",
      "LangChain",
      "TensorFlow",
      "Embeddings",
      "Vertex AI",
    ],
    "Fullstack Development": [
      "Next.js",
      "React.js",
      "Flask",
      "MySQL",
      "Tailwind CSS",
    ],
    Tools: ["Postman", "Git", "TablePlus", "Cloudflare API"],
  };

  return (
    <section className="h-auto py-20 px-8 text-center">
      <h2 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
        My Skills Tree 🌿
      </h2>

      <div className="flex flex-wrap justify-center gap-16">
        {Object.entries(skills).map(([branch, leaves], index) => (
          <div
            key={branch}
            ref={(el) => (branchesRef.current[index] = el)}
            className="bg-deepOcean-light text-white rounded-lg shadow-xl p-6 w-72"
          >
            <h3 className="text-2xl font-bold mb-4">{branch}</h3>
            <ul className="space-y-2">
              {leaves.map((leaf, leafIndex) => (
                <li
                  key={leaf}
                  className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-blue-300"
                >
                  {leaf}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
