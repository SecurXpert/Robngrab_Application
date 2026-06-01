import React, { useState } from 'react';

export default function CareerTimeline() {
  const [expandedSections, setExpandedSections] = useState({
    senior: true,
    frontend: true,
    junior: true
  });
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section className='bg-white shadow-md p-5 rounded-lg'>
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-lg">
          <img src="/Assets/Home/Careertimeline.svg" alt="Career Timeline" className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Career Timeline</h3>
      </div>
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        <div className="space-y-8 ">
          <div className="relative">
            <div className="absolute left-0 top-0 w-5 h-5 rounded-full border-2 border-white shadow-sm bg-gradient-to-r from-[#E0E7FF] to-[#F0FDFA]"></div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm ml-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Senior Frontend Engineer</h4>
                <button 
                  onClick={() => toggleSection('senior')}
                  className="text-gray-700 p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                  style={{backgroundColor: '#E0E7FF'}}
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${expandedSections.senior ? 'rotate-0' : 'rotate-180'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">TechFlow Inc.</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>2024 - Present</span>
                <span className="mx-2">•</span>
                <span>2 years</span>
              </div>
              {expandedSections.senior && (
                <div className="mt-3 text-sm text-gray-700">
                  <p className="font-medium">Key Achievements</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Led migration of legacy codebase to React 18 and TypeScript</li>
                    <li>Reduced bundle size by 40% through code splitting and optimization</li>
                    <li>Mentored 3 junior developers and established code review standards</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-5 h-5 rounded-full border-2 border-white shadow-sm bg-gradient-to-r from-[#E0E7FF] to-[#F0FDFA]"></div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm ml-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                <button 
                  onClick={() => toggleSection('frontend')}
                  className="text-gray-700 p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                  style={{backgroundColor: '#CBFBF1'}}
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${expandedSections.frontend ? 'rotate-0' : 'rotate-180'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">Digital Solutions Ltd.</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>2022 - 2024</span>
                <span className="mx-2">•</span>
                <span>2 years</span>
              </div>
              {expandedSections.frontend && (
                <div className="mt-3 text-sm text-gray-700">
                  <p className="font-medium">Key Achievements</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Developed responsive web applications using React and Vue.js</li>
                    <li>Improved website performance by 60% through optimization techniques</li>
                    <li>Collaborated with UX team to implement modern design systems</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-5 h-5 rounded-full border-2 border-white shadow-sm bg-gradient-to-r from-[#E0E7FF] to-[#F0FDFA]"></div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm ml-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Junior Web Developer</h4>
                <button 
                  onClick={() => toggleSection('junior')}
                  className="text-gray-700 p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                  style={{backgroundColor: '#E0E7FF'}}
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${expandedSections.junior ? 'rotate-0' : 'rotate-180'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">StartUp Hub</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>2020 - 2022</span>
                <span className="mx-2">•</span>
                <span>2 years</span>
              </div>
              {expandedSections.junior && (
                <div className="mt-3 text-sm text-gray-700">
                  <p className="font-medium">Key Achievements</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Built and maintained client websites using HTML, CSS, and JavaScript</li>
                    <li>Implemented RESTful APIs and integrated third-party services</li>
                    <li>Participated in agile development process and daily stand-ups</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
