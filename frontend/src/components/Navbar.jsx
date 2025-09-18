// src/components/NavBar.jsx
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a
            href="/"
            className="text-2xl font-bold text-white tracking-wide hover:scale-105 transform transition"
          >
            Minicom<span className="text-yellow-300">.com</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-white font-medium">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transform transition"
            >
              Get Started
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className={`w-7 h-7 transform transition-transform ${
                  open ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-indigo-700 transition-all duration-300 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3 text-white font-medium">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-300 transition"
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            className="block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
