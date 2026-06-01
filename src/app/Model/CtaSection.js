'use client';

import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className="bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0163D6] rounded-2xl  sm:p-6 lg:p-5 mt-4">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left - Content */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-6xl font-figtree font-bold font-weight-700 mb-4 sm:mb-6 ml-15 leading-tight">
                Create A Better Future For Yourself
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed ml-15">
                Discover opportunities that match your skills, goals, and ambitions. Start your journey toward a rewarding career today.
              </p>
              <button className="bg-white text-[#0163D6] px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 font-semibold text-sm sm:text-base border-none cursor-pointer ml-15">
                Search Job
              </button>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/Assets/Home/Cta.png"
                  alt="Woman pointing towards text"
                  className="rounded-md translate-y-6 sm:translate-y-12 md:translate-y-8 lg:translate-y-5 min-w-[45rem] w-full h-full lg:min-w-[45rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}