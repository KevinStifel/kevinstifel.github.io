"use client";

import { useEffect, useState } from "react";
import { FiMail, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-[var(--accent-color)] text-white">
      <div className="container mx-auto px-4">
        {/* Copyright */}
        <div className="text-center mb-6">
          <p>
            © <span>{year}</span>{" "}
            <strong className="px-1">Kevin Stifel</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:krstifel@uc.cl"
            aria-label="Email"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <FiMail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-stifel-362bb6279/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Credits */}
        <div className="text-center text-sm text-white/80">
          <p>
            Migrated to <span className="font-semibold">Next.js + React</span> with Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
