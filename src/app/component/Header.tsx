"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#1E3A73] shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          [CARLOX_LOGO]
        </Link>

        {/* Desktop Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/dashboard" className="hover text-lg">
            Dashboard
          </Link>
          <Link href="/projects" className="hover text-lg">
            Projects
          </Link>
          <Link href="/settings" className="hover text-lg">
            Settings
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link
            href="/dashboard"
            className="block text-md hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/projects"
            className="block text-md hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/settings"
            className="block text-md hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>
        </div>
      )}
    </header>
  );
}
