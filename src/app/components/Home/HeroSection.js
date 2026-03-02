'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/bg-hero.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 sm:py-20 md:py-24 lg:py-28 sm:px-0">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-4 sm:mb-6 leading-tight drop-shadow-md px-4">
          Find Your Dream Job Today!
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 text-center mb-8 sm:mb-12 lg:mb-16 max-w-2xl md:max-w-3xl lg:max-w-4xl leading-relaxed px-4">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-2xl mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-gray-200">
            {/* Job Title Input */}
            <div className="p-2 sm:p-3 flex items-center">
              <input
                type="text"
                placeholder="Job Title or Company"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border-0 text-sm sm:text-base text-gray-700 bg-white transition-all duration-200 focus:outline-none focus:ring-0 placeholder-gray-400" />
            </div>

            {/* Location Dropdown */}
            <div className="relative p-2 sm:p-3 flex items-center">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 pr-8 sm:pr-10 border-0 text-sm sm:text-base text-gray-400 bg-white transition-all duration-200 focus:outline-none focus:ring-0 appearance-none bg-[url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23374151\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e')] bg-[position:right_0.5rem_center] bg-[repeat:no-repeat] bg-[size:1rem sm:1.25rem]"
              >
                <option value="">Select Location</option>
                <option value="new-york">New York</option>
                <option value="london">London</option>
                <option value="tokyo">Tokyo</option>
                <option value="remote">Remote</option>
              </select>
              <svg className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-700 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
              </svg>
            </div>

            {/* Category Dropdown */}
            <div className="relative p-2 sm:p-3 flex items-center">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 pr-8 sm:pr-10 border-0 text-sm sm:text-base text-gray-400 bg-white transition-all duration-200 focus:outline-none focus:ring-0 appearance-none bg-[url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23374151\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e')] bg-[position:right_0.5rem_center] bg-[repeat:no-repeat] bg-[size:1rem sm:1.25rem]"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
              <svg className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-700 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
              </svg>
            </div>

            {/* Search Button */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <button className="w-full h-full bg-[#0163D7] hover:bg-blue-600 text-white py-3 sm:py-4 lg:py-6 rounded-tr-xl sm:rounded-tr-2xl rounded-br-xl sm:rounded-br-2xl font-semibold text-sm sm:text-base lg:text-lg flex items-center justify-center transition-colors duration-200 border-none cursor-pointer">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Search Job</span>
                <span className="sm:hidden">Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4">
          {/* Jobs Stat */}
          <div className="rounded-xl p-4 sm:p-6 lg:p-8 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-[#0163D7] rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Image src="/assets/home/briefcase.png" alt="Jobs" width={24} height={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">25,850</h3>
                <p className="text-sm sm:text-base text-white/90 font-medium">Jobs</p>
              </div>
            </div>
          </div>

          {/* Candidates Stat */}
          <div className="rounded-xl p-4 sm:p-6 lg:p-8 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-[#0163D7] rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Image src="/assets/home/threepeople.svg" alt="Candidates" width={24} height={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">10,250</h3>
                <p className="text-sm sm:text-base text-white/90 font-medium">Candidates</p>
              </div>
            </div>
          </div>

          {/* Companies Stat */}
          <div className="rounded-xl p-4 sm:p-6 lg:p-8 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-[#0163D7] rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Image src="/assets/home/building.svg" alt="Companies" width={24} height={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">18,400</h3>
                <p className="text-sm sm:text-base text-white/90 font-medium">Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Bar */}
        <div className="w-full bg-[#0163D7] py-8 sm:py-10 lg:py-12">
          <div className="px-4">
            <div className="flex justify-around items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 overflow-hidden">
              {/* Spotify Logo */}
              <div className="flex-shrink-0"><img src="/assets/home/spotify.svg" alt="Spotify" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" /></div>

              {/* Slack Logo */}
              <div className="flex-shrink-0"><img src="/assets/home/slack.svg" alt="Slack" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" /></div>

              {/* Adobe Logo */}
              <div className="flex-shrink-0"><img src="/assets/home/adobe.svg" alt="Adobe" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" /></div>

              {/* Asana Logo */}
              <div className="flex-shrink-0"><img src="/assets/home/asana.svg" alt="Asana" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" /></div>

              {/* Linear Logo */}
              <div className="flex-shrink-0"><img src="/assets/home/linear.svg" alt="Linear" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" /></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
