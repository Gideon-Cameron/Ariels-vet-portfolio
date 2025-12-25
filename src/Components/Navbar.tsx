import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 font-manrope">
        {/* Left side */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/favicon.png"
              alt="Josh logo"
              className="h-9 w-9 rounded-md"
            />
          </a>

          {/* Nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Resume link */}
          <a
            href="/resume.pdf"
            download
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:inline-flex"
          >
            Resume
          </a>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-indigo-400 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
          >
            Get in Touch
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
