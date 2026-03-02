export default function HeroSection() {
  return (
    <div className="flex-1 bg-white flex items-start justify-center p-4 sm:p-6 lg:p-8 min-h-screen transition-all duration-300 relative overflow-hidden hidden lg:flex">
      <div className="text-left max-w-full w-full relative z-20 mt-8 lg:mt-12">
        <div className="mb-6 lg:mb-8">
          <img
            src="/assets/home/logo.png"
            alt="Rob N Grab"
            className="h-16 lg:h-[5rem] w-auto "
          />
        </div>
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 leading-tight text-black ">
            Start Your Career Journey Today
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-8 opacity-90 text-black">
            Join thousands of professionals building their dream careers
            on CareerSpace
          </p>
        </div>

        <div
          className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl p-4 lg:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] mb-6 lg:mb-8 relative overflow-hidden h-40 lg:h-48"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=300&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent z-10"></div>
          <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-20">
            <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2 text-white">
                  Premium oppurtunities
                </h3>
                <p className="text-xs lg:text-sm opacity-80 text-white">
                  Access exclusive job listings from top companies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
          <div
            className="flex-1 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl p-4 lg:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] relative overflow-hidden h-32 lg:h-40"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1554224211-48f1cf6ec27e?w=400&h=250&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-transparent z-10"></div>
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-20">
              <div className="text-xs lg:text-sm opacity-80 text-white">
                Smart Matching
              </div>
            </div>
          </div>

          <div
            className="flex-1 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl p-4 lg:p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] relative overflow-hidden h-32 lg:h-40"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-transparent z-10"></div>
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 z-20">
              <div className="text-xs lg:text-sm opacity-80 text-white">
                Career growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
