'use client';

import { 
  FiTruck, 
  FiDollarSign, 
  FiHome, 
  FiBook, 
  FiBriefcase, 
  FiMapPin, 
  FiShoppingCart, 
  FiTool 
} from 'react-icons/fi';

export default function BrowseCategories() {
  const categories = [
    {
      name: 'Agriculture',
      icon: FiTruck,
      jobs: 1254
    },
    {
      name: 'Metal Production',
      icon: FiTool,
      jobs: 816
    },
    {
      name: 'Commerce',
      icon: FiShoppingCart,
      jobs: 2082
    },
    {
      name: 'Construction',
      icon: FiHome,
      jobs: 1520
    },
    {
      name: 'Hotels & Tourism',
      icon: FiMapPin,
      jobs: 1022
    },
    {
      name: 'Education',
      icon: FiBook,
      jobs: 1496
    },
    {
      name: 'Financial Services',
      icon: FiDollarSign,
      jobs: 1529
    },
    {
      name: 'Transport',
      icon: FiTruck,
      jobs: 1244
    }
  ];

  return (
    <section className="bg-blue-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-center mb-8 sm:mb-12 text-[#152A5B]">
          Browse by Category
        </h2>

        {/* Categories Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile Layout - 2 cards per row, 4 rows (8 cards total) */}
          <div className="grid grid-cols-2 sm:hidden gap-4 mb-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group shadow-sm aspect-square flex flex-col justify-center"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>

                  {/* Jobs Count */}
                  <div className="flex justify-center">
                    <span className="text-blue-500 bg-[#3096891A] text-xs font-medium px-3 py-1 rounded-lg">
                      {category.jobs.toLocaleString()} jobs
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout - 3 rows */}
          <div className="hidden sm:block">
            {/* First Row - 3 cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {categories.slice(0, 3).map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group shadow-sm aspect-square flex flex-col justify-center"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                      {category.name}
                    </h3>

                    {/* Jobs Count */}
                    <div className="flex justify-center">
                      <span className="text-blue-500 bg-[#3096891A] text-xs sm:text-sm md:text-base font-medium px-3 py-1 rounded-lg">
                        {category.jobs.toLocaleString()} jobs
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second Row - 3 cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {categories.slice(3, 6).map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index + 3}
                    className="bg-white rounded-xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group shadow-sm aspect-square flex flex-col justify-center"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                      {category.name}
                    </h3>

                    {/* Jobs Count */}
                    <div className="flex justify-center">
                      <span className="text-blue-500 bg-[#3096891A] text-xs sm:text-sm md:text-base font-medium px-3 py-1 rounded-lg">
                        {category.jobs.toLocaleString()} jobs
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Third Row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {categories.slice(6, 8).map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index + 6}
                    className="bg-white rounded-xl p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group shadow-sm aspect-square flex flex-col justify-center"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                      {category.name}
                    </h3>

                    {/* Jobs Count */}
                    <div className="flex justify-center">
                      <span className="text-blue-500 bg-[#3096891A] text-xs sm:text-sm md:text-base font-medium px-3 py-1 rounded-lg">
                        {category.jobs.toLocaleString()} jobs
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}