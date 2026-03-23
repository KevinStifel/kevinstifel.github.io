"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About me", href: "#about" },
  { name: "Professional Experience & Education", href: "#resume" },
  { name: "Portfolio", href: "#portfolio" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="header-logo shrink-0">
          <img
            src="/img/logo.jpg"
            alt="Kevin Stifel Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <FiSun className="theme-icon-sun" />
            ) : (
              <FiMoon className="theme-icon-moon" />
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="mobile-menu-icon" />
            ) : (
              <FiMenu className="mobile-menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="mobile-menu-link"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
