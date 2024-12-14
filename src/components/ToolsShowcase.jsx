"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const tools = {
  Workstation: [
    {
      title: "13” MacBook Air, M2, 8GB RAM (2022)",
      description:
        "I love it. It has been a constant companion through my ups and downs. I particularly appreciate the display and the battery life.",
      image: "https://cdn-icons-png.flaticon.com/512/732/732245.png",
    },
    {
      title: "Mac Mini, M1, 16GB RAM (2020), MSI Optix G241",
      description:
        "I love it. This device has been a steadfast partner, handling all tasks with ease. Its standout features are the impressive performance and sleek, compact design.",
      image: "https://cdn-icons-png.flaticon.com/512/906/906333.png",
    },
  ],
  "Development Tools": [
    {
      title: "VS Code",
      description: "Doesn't need an introduction.",
      image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    },
    {
      title: "Powerlevel10k",
      description:
        "A highly customizable Zsh theme that enhances terminal aesthetics and usability.",
      image: "https://cdn-icons-png.flaticon.com/512/2111/2111360.png",
    },
  ],
  Productivity: [
    {
      title: "Cloudflare Warp",
      description:
        "A DNS service that routes traffic faster, built on the WireGuard protocol.",
      image: "https://cdn-icons-png.flaticon.com/512/2820/2820514.png",
    },
    {
      title: "Arc",
      description:
        "I love sidebars, and Arc did it perfectly. It has tons of features and is more powerful than Chrome.",
      image: "https://cdn-icons-png.flaticon.com/512/1047/1047719.png",
    },
    {
      title: "Spark",
      description:
        "Spark is a great email client. I love the way it handles and organizes multiple inboxes.",
      image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
  ],
};

export default function ToolsShowcase() {
  const sectionRef = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
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

  return (
    <section className="h-auto py-20 px-8 text-center">
      <h2 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
        Tools & Equipment
      </h2>

      <div className="space-y-16">
        {Object.entries(tools).map(([category, items], index) => (
          <div key={category} className="space-y-8">
            <h3 className="text-3xl font-bold text-white">{category}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {items.map((tool, toolIndex) => (
                <div
                  key={tool.title}
                  ref={(el) =>
                    (sectionRef.current[index * 10 + toolIndex] = el)
                  }
                  className="bg-deepOcean-light text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transform transition-all duration-300"
                >
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">{tool.title}</h4>
                  <p className="text-sm opacity-80">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
