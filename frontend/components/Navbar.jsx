"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const isLoggedIn = status === "authenticated";

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
        <div className="hidden md:flex items-center gap-6 text-white font-semibold">

          <Link href="/" className="hover:text-green-200">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-200">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-200">
            Contact
          </Link>

          {/* Protected links */}
          {isLoggedIn && (
            <>
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

              <Link href="/ai" className="hover:text-green-200">
                AI
              </Link>

              <Link href="/recommend" className="hover:text-green-200">
                Recommend
              </Link>

              <Link href="/profile" className="hover:text-green-200">
                Profile
              </Link>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100"
              >
                Logout
              </button>
            </>
          )}

          {/* Login when logged out */}
          {!isLoggedIn && status !== "loading" && (
            <Link
              href="/login"
              className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100"
            >
              Login
            </Link>
          )}
          <ThemeToggle />
          
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

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {isLoggedIn && (
            <>
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

              <Link href="/ai" onClick={() => setMenuOpen(false)}>
                AI
              </Link>

              <Link href="/recommend" onClick={() => setMenuOpen(false)}>
                Recommend
              </Link>

              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="text-left"
              >
                Logout
              </button>
            </>
          )}

          {!isLoggedIn && status !== "loading" && (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}

        </div>
      )}
    </nav>
  );
}