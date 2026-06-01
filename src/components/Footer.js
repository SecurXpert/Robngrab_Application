'use client';

import { FiPhone, FiMapPin, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import CopyRightSection from '@/components/CopyRightSection';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 items-start">
          {/* Company Info */}
          <div className="lg:col-span-2 lg:pr-8">
            <div className="mb-8">
              <div className="flex items-center mb-6">

                <img src="/assets/home/logo.png?v=1" alt="RobNGrab" className="h-12 w-auto" />
              </div>

            </div>
            <div className="space-y-4">
              <div className="flex items-center text-slate-600 text-sm leading-relaxed group">
                {/* <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <FiPhone className="w-4 h-4 text-blue-600" />
                </div> */}
                <div>
                  <p className="font-medium text-slate-800">Call now: <a href="tel:+918976562166" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">+91-8976562166</a></p>

                </div>
              </div>
              <div className="flex items-start text-slate-600 text-sm leading-relaxed group">
                {/* <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:bg-blue-200 transition-colors duration-300">
                  <FiMapPin className="w-4 h-4 text-blue-600" />
                </div> */}
                <div>
                  <p className="font-medium text-slate-800">Address:</p>
                  <p className="text-slate-600">Hitech City Opp Radison Hotel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-blue-600 mb-6 text-sm tracking-wider">Quick Link</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">About</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/contact-us" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Contact</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Pricing</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Blog</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* Candidate */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-blue-600 mb-6 text-sm tracking-wider">Candidate</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/jobs" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Browse Jobs</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/jobs" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Browse Employers</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/candidate/dashboard" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Candidate Dashboard</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/candidate/dashboard" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Saved Jobs</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* Employers */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-blue-600 mb-6 text-sm tracking-wider">Employers</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/super-admin" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Post a Job</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/super-admin" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Browse Candidates</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/super-admin" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Employers Dashboard</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link href="/super-admin" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Applications</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-blue-600 mb-6 text-sm tracking-wider">Support</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">FAQs</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a href="#" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Privacy Policy</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a href="#" className="group text-slate-600 text-sm py-2  hover:text-blue-600 transition-all duration-300 flex items-center rounded-lg relative">
                <span className="font-medium whitespace-nowrap transition-transform duration-300 group-hover:translate-x-3">Terms & Conditions</span>
                <FiArrowRight className="w-3 h-3 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <CopyRightSection />
    </footer>
  );
}