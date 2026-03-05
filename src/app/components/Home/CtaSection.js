'use client';

import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0163D6] rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left - Content */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Create A Better Future For Yourself
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Discover opportunities that match your skills, goals, and ambitions. Start your journey toward a rewarding career today.
              </p>
              <button className="bg-white text-[#0163D6] px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 font-semibold text-sm sm:text-base border-none cursor-pointer">
                Search Job
              </button>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/assets/home/cta.png"
                  alt="Woman pointing towards text"
                  className="rounded-md translate-y-6 sm:translate-y-12 md:translate-y-8 lg:translate-y-12 min-w-[30rem] w-full h-auto lg:min-w-[34rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}