"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const texts = ["Software Developer Engineer", "Flutter Developer", "Backend Engineer"];
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentText.length) {
            setTypedText(currentText.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentText.slice(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background-color)]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/hero-thumb.jpg"
        >
          <source src="/videos/hero-video-medium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="hero-title">
          I am Kevin Stifel
        </h1>
        <p className="hero-typed-text">
          {typedText}
          <span className="hero-cursor">|</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="/cv/kevin-stifel-cv.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 bg-[var(--accent-color)] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <FiDownload />
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--accent-color)] transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <FiMail />
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
