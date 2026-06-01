"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function NewRegister() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Candidate Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex flex-col items-start text-left">
                {/* Image */}
                <div className="mb-4">
                  <Image
                    src="/Assets/Home/Girl.svg"
                    alt="Become a candidate"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Become a candidate
                  </h2>
                  {/* Button */}
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 font-medium flex items-center gap-0">
                    Register Now
                    <IoIosArrowRoundForward size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Employer Card */}
          <div className="bg-blue-500 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 ">
              <div className="flex flex-col items-start text-left">
                {/* Image */}
                <div className="mb-4">
                  <Image
                    src="/Assets/Home/Meet.svg"
                    alt="Become an employer"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
                <div className="text-left">
                  {/* Content */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Become a Employer
                  </h2>

                  {/* Button */}
                  <button className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium flex items-center gap-0">
                    Register Now
                    <IoIosArrowRoundForward size={27} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
