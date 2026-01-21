"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-orbitron font-bold gradient-text"
            >
              Zakir.Studio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#technology"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Технологии
              </Link>
              <Link
                href="#pricing"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Цены
              </Link>
              <Link
                href="https://t.me/eeephemera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-2 rounded-lg font-semibold"
              >
                Заказать сайт
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 rounded-b-lg border-t border-slate-800">
                <Link
                  href="#technology"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors font-medium"
                >
                  Технологии
                </Link>
                <Link
                  href="#pricing"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors font-medium"
                >
                  Цены
                </Link>
                <Link
                  href="https://t.me/eeephemera"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block px-3 py-2 btn-primary text-white rounded-lg font-semibold text-center mt-2"
                >
                  Заказать сайт
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
