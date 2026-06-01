"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[60] bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - left */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-1">
              <img
                src="/assets/home/logo.png?v=1"
                alt="RobNGrab logo"
                className="h-12 sm:h-15 w-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105 ml-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation - left aligned */}
          <div className="hidden lg:flex flex-1 items-center">
            <div className="flex items-center gap-2 lg:gap-2 ml-6">
              <Link
                href="/"
                className={`text-sm lg:text-base px-4 py-2 rounded-md transition-colors ${
                  isActive('/') 
                    ? 'bg-[#0163D6] text-white font-medium' 
                    : 'text-[#7A7878] font-normal hover:text-[#0163D6]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className={`text-sm lg:text-base px-4 py-2 rounded-md transition-colors ${
                  isActive('/jobs') 
                    ? 'bg-[#0163D6] text-white font-medium' 
                    : 'text-[#7A7878] font-normal hover:text-[#0163D6]'
                }`}
              >
                Jobs
              </Link>
              <Link
                href="/contact-us"
                className="text-sm lg:text-base px-4 py-2 rounded-md transition-colors text-[#7A7878] font-normal hover:text-[#0163D6]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop Auth Buttons & For Employees - right */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-3 flex-shrink-0">
            <Link
              href="/signup"
              className="px-4 lg:px-4 py-2.5 text-gray-700 border-1 border-[#162B5C] rounded-sm font-medium text-sm lg:text-base bg-white transition-all hover:bg-slate-50 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Sign Up
            </Link>

            <Link
              href="/login"
              className="px-4 lg:px-4 py-2.5 bg-[#0163D6] text-white rounded-sm font-medium text-sm lg:text-base shadow-md transition-all hover:bg-[#0163D6] hover:-translate-y-0.5 hover:shadow-xl"
            >
              Login
            </Link>

            {/* For Employees Dropdown - last on right side */}
            <div className="relative group">
              <button
                className="text-[#211D1D] font-normal text-sm lg:text-base flex items-center cursor-pointer transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-[6px] after:h-[3px] after:w-0 after:bg-blue-600 after:transition-all group-hover:after:w-full group-hover:text-blue-600"
              >
                For Employees
                <FiChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-gray-700 pointer-events-none" />
              </button>
              <div className="absolute right-0 top-full mt-4 w-56 bg-white rounded-xl shadow-2xl py-2 z-50 opacity-0 invisible transform transition-all duration-300 border border-gray-200/70 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1">
                <Link
                  href="/candidate/dashboard"
                  className="block px-5 py-3 text-sm text-gray-700 font-semibold transition-all hover:bg-slate-50 hover:text-blue-600 hover:pl-6"
                >
                  Dashboard
                </Link>
                <Link
                  href="/candidate/profile"
                  className="block px-5 py-3 text-sm text-gray-700 font-semibold transition-all hover:bg-slate-50 hover:text-blue-600 hover:pl-6"
                >
                  My Profile
                </Link>
                <Link
                  href="/candidate/applied-jobs"
                  className="block px-5 py-3 text-sm text-gray-700 font-semibold transition-all hover:bg-slate-50 hover:text-blue-600 hover:pl-6"
                >
                  My Applications
                </Link>
                <Link
                  href="/candidate/resume-builder"
                  className="block px-5 py-3 text-sm text-gray-700 font-semibold transition-all hover:bg-slate-50 hover:text-blue-600 hover:pl-6"
                >
                  Resume Builder
                </Link>
                <Link
                  href="/super-admin"
                  className="block px-5 py-3 text-sm text-gray-700 font-semibold transition-all hover:bg-slate-50 hover:text-blue-600 hover:pl-6"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-2">
              {/* Mobile Navigation Links */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-[#0163D6] text-white font-semibold' 
                    : 'text-[#4A5568] font-semibold'
                }`}
              >
                Home
              </Link>
              <Link
                href="/jobs"
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors ${
                  isActive('/jobs') 
                    ? 'bg-[#0163D6] text-white font-semibold' 
                    : 'text-[#4A5568] font-semibold'
                }`}
              >
                Jobs
              </Link>
              <Link
                href="/contact-us"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base hover:bg-gray-50 rounded-lg transition-colors text-[#4A5568] font-semibold"
              >
                Contact Us
              </Link>

              {/* Mobile For Employees Section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-4 py-2 text-gray-500 font-semibold text-xs uppercase tracking-wider">
                  For Employees
                </div>
                <Link
                  href="/candidate/dashboard"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 font-semibold text-base hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/candidate/profile"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 font-semibold text-base hover:bg-gray-50 rounded-lg transition-colors"
                >
                  My Profile
                </Link>
                <Link
                  href="/candidate/applied-jobs"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 font-semibold text-base hover:bg-gray-50 rounded-lg transition-colors"
                >
                  My Applications
                </Link>
                <Link
                  href="/candidate/resume-builder"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 font-semibold text-base hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Resume Builder
                </Link>
                <Link
                  href="/super-admin"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-700 font-semibold text-base hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Admin
                </Link>
                
              </div>

              {/* Mobile Auth Buttons */}
              <div className="border-t border-gray-200 pt-4 mt-2 space-y-3 px-4">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="block w-full px-4 py-3 text-center text-white bg-blue-600 rounded-lg font-semibold text-base shadow-md transition-all hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMobileMenu}
                  className="block w-full px-4 py-3 text-center text-gray-700 border-2 border-gray-200 rounded-lg font-semibold text-base bg-white transition-all hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}