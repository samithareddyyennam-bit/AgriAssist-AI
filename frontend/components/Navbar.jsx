"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-white cursor-pointer">
            🌾 AgriAssist AI
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-white font-semibold">

          <Link
            href="/"
            className="hover:text-green-200 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-green-200 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            href="/crop"
            className="hover:text-green-200 transition duration-300"
          >
            Crop
          </Link>

          <Link
            href="/weather"
            className="hover:text-green-200 transition duration-300"
          >
            Weather
          </Link>

          <Link
            href="/disease"
            className="hover:text-green-200 transition duration-300"
          >
            Disease
          </Link>

          <Link
            href="/contact"
            className="hover:text-green-200 transition duration-300"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}