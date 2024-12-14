"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ContactForm() {
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Form Animation
    gsap.fromTo(
      formRef.current.elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
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
        Get In Touch
      </h2>

      <form
        ref={formRef}
        className="bg-deepOcean-light text-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-lg text-black"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg text-black"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 rounded-lg text-black"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-deepOcean-dark text-white font-bold rounded-lg transform hover:scale-105 hover:bg-white hover:text-deepOcean-dark transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
