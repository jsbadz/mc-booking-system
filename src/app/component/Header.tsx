"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/settings" className="hover:text-blue-600">
            Settings
          </Link>
        </nav>

        {/* (Optional) Right section / buttons */}
        <div className="flex items-center space-x-3">
          <button className="border px-3 py-1 rounded hover:bg-blue-50">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
