'use client';

import Image from 'next/image';

export default function AboutJob() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center mb-12 lg:mb-16 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/assets/home/about_job.jpg"
                alt="Team working together"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152A5B] mb-4 sm:mb-6 leading-tight">
              Good Life Begins
              <br />
              With A Good
              <br />
              Company
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices
              purus diam egestas amet faucibus tempor blandit. Elit velit mauris
              aliquam est diam. Leo sagittis consectetur diam morbi erat aenean.
              Vulputate praesent congue faucibus in euismod feugiat euismod
              volutpat.
              <br />
              <br />
              Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus
              in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel...
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#0163D6] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-sm sm:text-base border-none cursor-pointer">
                Search Job
              </button>
              <button className="text-[#0163D6] px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-50 transition-colors duration-300 font-medium text-sm sm:text-base bg-transparent cursor-pointer">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {/* Clients Stat */}
          <div className="text-center sm:text-start">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0163D6] mb-2">12k+</h3>
            <p className="text-[#152A5B] text-base sm:text-lg font-medium">Clients worldwide</p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum...</p>
          </div>

          {/* Active Resume Stat */}
          <div className="text-center sm:text-start">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0163D6] mb-2">20k+</h3>
            <p className="text-[#152A5B] text-base sm:text-lg font-medium">Active resume</p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum...</p>
          </div>

          {/* Companies Stat */}
          <div className="text-center sm:text-start">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0163D6] mb-2">18k+</h3>
            <p className="text-[#152A5B] text-base sm:text-lg font-medium">Companies</p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum...</p>
          </div>
        </div>
      </div>
    </section>
  );
}