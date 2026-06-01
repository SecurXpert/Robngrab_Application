'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiMapPin, FiFilter, FiX, FiChevronDown } from 'react-icons/fi';

export default function JobFilters({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedCategory,
  setSelectedCategory,
  selectedJobType,
  setSelectedJobType,
  selectedExperience,
  setSelectedExperience,
  selectedDate,
  setSelectedDate,
  selectedSalary,
  setSelectedSalary,
  selectedTags,
  setSelectedTags,
  onApplyFilters
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 9999 });
  
  // Refs for slider keyboard navigation
  const minHandleRef = useRef(null);
  const maxHandleRef = useRef(null);
  const sliderTrackRef = useRef(null);

  // Temporary filter states
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);
  const [tempSelectedLocation, setTempSelectedLocation] = useState(selectedLocation);
  const [tempSelectedCategory, setTempSelectedCategory] = useState(selectedCategory);
  const [tempSelectedJobType, setTempSelectedJobType] = useState(selectedJobType);
  const [tempSelectedExperience, setTempSelectedExperience] = useState(selectedExperience);
  const [tempSelectedDate, setTempSelectedDate] = useState(selectedDate);
  const [tempSelectedSalary, setTempSelectedSalary] = useState(selectedSalary);
  const [tempSelectedTags, setTempSelectedTags] = useState(selectedTags);

  const filterOptions = {
    location: ['New York', 'San Francisco', 'Remote', 'Boston', 'Seattle'],
    category: ['Commerce', 'Telecommunications', 'Hotels & Tourism', 'Education', 'Financial Services'],
    jobType: ['Full Time', 'Part Time', 'Freelance', 'Seasonal', 'Fixed-Price'],
    experience: ['No-experience', 'Fresher', 'Intermediate', 'Expert'],
    datePosted: ['All', 'Last Hour', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'],
    salary: ['$0-50k', '$50k-75k', '$75k-100k', '$100k+'],
    tags: ['engineering', 'design', 'ui/ux', 'marketing', 'management', 'soft', 'construction'],
  };

  const handleApplyFilters = () => {
    setSearchTerm(tempSearchTerm);
    setSelectedLocation(tempSelectedLocation);
    setSelectedCategory(tempSelectedCategory);
    setSelectedJobType(tempSelectedJobType);
    setSelectedExperience(tempSelectedExperience);
    setSelectedDate(tempSelectedDate);
    setSelectedSalary(tempSelectedSalary);
    setSelectedTags(tempSelectedTags);
    if (onApplyFilters) {
      onApplyFilters();
    }
  };

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden fixed top-20 left-4 z-40">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-[#0163D6] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <FiFilter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </button>
      </div>

      {/* Mobile Filter Floating Panel */}
      {isFilterOpen && (
        <div className="md:hidden fixed top-16 left-0 z-50 animate-in slide-in-from-left duration-300">
          <div className="bg-white shadow-2xl rounded-r-lg w-80 max-w-[85vw] h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-lg">
              <h2 className="text-lg font-bold text-gray-800">Search by Job Title</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiX className="w-7 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <FilterContent />
            </div>
          </div>
        </div>
      )}

      {/* iPad+ Filters */}
      <div className="hidden md:block">
        <FilterContent />
      </div>
    </>
  );

  function FilterContent() {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    return (
      <div className="flex flex-col space-y-4 sm:space-y-6 max-w-[16rem] sm:max-w-[20rem]">
        <div className="rounded-lg border border-gray-200 p-4 sm:p-6" style={{backgroundColor: '#E7F0FA'}}>
          
        
            {/* Search by Job Title */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-md sm:text-md font-semibold text-[#152A5B] mb-2 sm:mb-3">Search by Job Title</h3>
              <div className="relative">
                <FiSearch className="absolute left-3 top-2.5 sm:top-3 text-gray-500 w-3 h-3 sm:w-4 sm:h-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Job title or company"
                  value={tempSearchTerm}
                  onChange={(e) => setTempSearchTerm(e.target.value)}
                  className="w-full pl-9 bg-white sm:pl-10 pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-[#152A5B] placeholder:text-gray-400"
                  autoFocus={true}
                  maxLength={40}
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-md sm:text-md font-semibold text-[#152A5B] mb-2 sm:mb-3">Location</h3>
              <div className="relative">
                <button
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  className="w-full pl-9 bg-white sm:pl-10 pr-8 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center">
                    <FiMapPin className="absolute left-3 top-2.5 sm:top-3 text-gray-500 w-3 h-3 sm:w-4 sm:h-4 pointer-events-none" />
                    <span className={tempSelectedLocation ? 'text-gray-900' : 'text-gray-400'}>
                      {tempSelectedLocation || 'Choose city'}
                    </span>
                  </div>
                  <FiChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLocationDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                    {filterOptions.location.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setTempSelectedLocation(location === tempSelectedLocation ? '' : location);
                          setIsLocationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          tempSelectedLocation === location
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Category */}
            <div className="mb-2 sm:mb-2">
              <h3 className="text-md sm:text-md font-semibold text-[#152A5B] mb-1 sm:mb-0">Category</h3>
              <div className="space-y-0 sm:space-y-0">
                {filterOptions.category.map((category) => (
                  <label key={category} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1.5 sm:p-2 rounded">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={tempSelectedCategory === category}
                        onChange={(e) => setTempSelectedCategory(e.target.checked ? category : '')}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded focus:ring-blue-500" style={{border: '1.27px solid #6C757D'}}
                      />
                      <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-[#152A5B]">{category}</span>
                    </div>
                    <span className="inline-flex items-center justify-center w-7 h-5 bg-white text-[#152A5B] text-xs font-medium rounded-full">
  10
</span>
                  </label>
                ))}
              </div>
              <button className="w-full mt-2 bg-[#0163D6] text-white py-1.5 sm:py-2 rounded-md hover:bg-[#0152b8] transition-colors text-xs sm:text-sm" >
                Show More
              </button>
            </div>

            {/* Job Type */}
            <div className="mb-2 sm:mb-2">
              <h3 className="text-md sm:text-md font-semibold text-[#152A5B] mb-1 sm:mb-0">Job Type</h3>
              <div className="space-y-0 sm:space-y-0">
                {filterOptions.jobType.map((type) => (
                  <label key={type} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1.5 sm:p-2 rounded">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={tempSelectedJobType === type}
                        onChange={(e) => setTempSelectedJobType(e.target.checked ? type : '')}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded focus:ring-blue-500" style={{border: '1.27px solid #6C757D'}}
                      />
                      <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-[#152A5B]">{type}</span>
                    </div>
                    <span className="inline-flex items-center justify-center w-7 h-5 bg-white text-[#152A5B] text-xs font-medium rounded-full">
  10
</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="mb-2 sm:mb-2">
              <h3 className="text-md sm:text-md font-semibold text-[#152A5B] mb-1 sm:mb-0">Experience Level</h3>
              <div className="space-y-0 sm:space-y-0">
                {filterOptions.experience.map((exp) => (
                  <label key={exp} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1.5 sm:p-2 rounded">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={tempSelectedExperience === exp}
                        onChange={(e) => setTempSelectedExperience(e.target.checked ? exp : '')}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded focus:ring-blue-500" style={{border: '1.27px solid #6C757D'}}
                      />
                      <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-[#152A5B]">{exp}</span>
                    </div>
                    <span className="inline-flex items-center justify-center w-7 h-5 bg-white text-[#152A5B] text-xs font-medium rounded-full">
  10
</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Posted */}
            <div className="mb-2 sm:mb-2">
              <h3 className="text-md sm:text-md font-semibold text-gray-700 mb-1 sm:mb-0">Date Posted</h3>
              <div className="space-y-0 sm:space-y-0">
                {filterOptions.datePosted.map((date) => (
                  <label key={date} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1.5 sm:p-2 rounded">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={tempSelectedDate === date}
                        onChange={(e) => setTempSelectedDate(e.target.checked ? date : '')}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded focus:ring-blue-500" style={{border: '1.27px solid #6C757D'}}
                      />
                      <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-[#152A5B]">{date}</span>
                    </div>
                    <span className="inline-flex items-center justify-center w-7 h-5 bg-white text-[#152A5B] text-xs font-medium rounded-full">
  10
</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-md sm:text-md font-semibold text-[#152A5B] mb-2 sm:mb-2">Salary</h3>
              <div className="space-y-2 sm:space-y-4">
                <div className="relative px-2">
                  <div 
                    className="relative h-1 bg-white rounded-full border border-gray-100"
                    onMouseMove={(e) => {
                      if (e.buttons === 1) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                        const value = Math.round(percent * 9999);
                        const centerValue = salaryRange.min + (salaryRange.max - salaryRange.min) / 2;
                        
                        if (value < centerValue) {
                          setSalaryRange(prev => ({ ...prev, min: Math.max(0, Math.min(value, prev.max - 1)) }));
                        } else {
                          setSalaryRange(prev => ({ ...prev, max: Math.min(9999, Math.max(value, prev.min + 1)) }));
                        }
                      }
                    }}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const percent = (e.clientX - rect.left) / rect.width;
                      const value = Math.round(percent * 9999);
                      const centerValue = salaryRange.min + (salaryRange.max - salaryRange.min) / 2;
                      
                      if (value < centerValue) {
                        setSalaryRange(prev => ({ ...prev, min: Math.max(0, Math.min(value, prev.max - 1)) }));
                      } else {
                        setSalaryRange(prev => ({ ...prev, max: Math.min(9999, Math.max(value, prev.min + 1)) }));
                      }
                    }}
                  >
                    {/* Blue Track - Only the selected range */}
                    <div 
                      className="absolute h-1 bg-[#0163D6] rounded-full"
                      style={{
                        left: `${(salaryRange.min / 9999) * 100}%`,
                        width: `${((salaryRange.max - salaryRange.min) / 9999) * 100}%`
                      }}
                    />
                    
                    {/* Min Handle */}
                    <div 
                      ref={minHandleRef}
                      className="absolute w-4 h-4 bg-[#0163D6] rounded-full shadow-md cursor-grab top-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      style={{ left: `calc(${(salaryRange.min / 9999) * 100}% - 10px)` }}
                      tabIndex={0}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                          e.preventDefault();
                          setSalaryRange(prev => ({ ...prev, min: Math.max(0, prev.min - 100) }));
                        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                          e.preventDefault();
                          setSalaryRange(prev => ({ ...prev, min: Math.min(prev.max - 1, prev.min + 100) }));
                        }
                      }}
                    />
                    
                    {/* Max Handle */}
                    <div 
                      ref={maxHandleRef}
                      className="absolute w-4 h-4 bg-[#0163D6] rounded-full shadow-md cursor-grab top-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      style={{ left: `calc(${(salaryRange.max / 9999) * 100}% - 10px)` }}
                      tabIndex={0}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                          e.preventDefault();
                          setSalaryRange(prev => ({ ...prev, max: Math.max(prev.min + 1, prev.max - 100) }));
                        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                          e.preventDefault();
                          setSalaryRange(prev => ({ ...prev, max: Math.min(9999, prev.max + 100) }));
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">Salary: ₹{salaryRange.min.toLocaleString()} - ₹{salaryRange.max.toLocaleString()}</span>
                  <button className="bg-[#0163D6] text-white px-3 py-1.3 sm:py-1 rounded-md hover:bg-blue-600 transition-colors text-xs sm:text-sm" onClick={handleApplyFilters}>
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-md sm:text-md font-semibold text-gray-700 mb-2 sm:mb-3">Tags</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {filterOptions.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      if (tempSelectedTags.includes(tag)) {
                        setTempSelectedTags(tempSelectedTags.filter(t => t !== tag));
                      } else {
                        setTempSelectedTags([...tempSelectedTags, tag]);
                      }
                    }}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
                      tempSelectedTags.includes(tag)
                        ? 'bg-blue-500 text-white border border-blue-500'
                        : 'bg-[#E7F0FA] text-[#0163D6] hover:bg-[#d6e6f7]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

        </div>
        <div className="mt-4">
          <img src="/Assets/Home/HiringImg.png" alt="Filters Background" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    );
  }
}
