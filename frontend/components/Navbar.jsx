"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold text-white cursor-pointer">
            🌾 AgriAssist AI
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold">

          <Link href="/" className="hover:text-green-200">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-green-200">
            Dashboard
          </Link>

          <Link href="/crop" className="hover:text-green-200">
            Crop
          </Link>

          <Link href="/weather" className="hover:text-green-200">
            Weather
          </Link>

          <Link href="/disease" className="hover:text-green-200">
            Disease
          </Link>

          <Link href="/contact" className="hover:text-green-200">
            Contact
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 text-white flex flex-col px-6 py-4 space-y-4">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>

          <Link href="/crop" onClick={() => setMenuOpen(false)}>
            Crop
          </Link>

          <Link href="/weather" onClick={() => setMenuOpen(false)}>
            Weather
          </Link>

          <Link href="/disease" onClick={() => setMenuOpen(false)}>
            Disease
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}