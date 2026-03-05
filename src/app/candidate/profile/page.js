'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/app/candidate/dashboard/components/Header';
import Link from 'next/link';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
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
  
  const userData = {
    name: "John Doe",
    title: "Software Engineer",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  };

  return (
    <>
    <Header />
    <div className="bg-gray-50 py-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Profile Header Section */}
        <div className="px-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1 rounded-lg">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          </div>
          <p className="text-gray-600 mt-1">Turn your experience into opportunity.</p>
        </div>

        <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <Image
                        src="/alex-rivera.png"
                        alt="Alex Rivera"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-blue-200 shadow-sm"
                      />
                      <span className="absolute bottom-2 right-2 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-gray-900">Alex Rivera</h2>
                    <p className="text-sm text-gray-600">Frontend Engineer | React & TypeScript</p>
                    <a href="#" className="text-blue-600 text-sm mt-1 flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Edit tagline
                    </a>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Experience</p>
                        <p className="text-gray-900">4+ years</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Location</p>
                        <p className="text-gray-900">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-green-800">Open to work</span>
                    </div>
                    <p className="text-sm text-green-700">Frontend Engineer roles</p>
                    <p className="text-xs text-green-600 mt-1">Last updated: 2 days ago</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link href="/candidate/profile/alex-rivera/edit" className="block w-full px-4 py-2 bg-[#0163D5] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                      Edit Profile
                    </Link>
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-[#F1F5F9] text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Resume
                      </button>
                      <button className="flex-1 px-4 py-2 bg-[#F1F5F9] text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Content */}
              <div className="lg:col-span-6">
                <div className="space-y-8 ">
                  {/* Smart Highlights */}
                  <section className='bg-white shadow-md p-5 rounded-lg'>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <img src="/assets/home/highlights.svg" alt="Smart Highlights" className="w-10 h-10" />
                        <h3 className="text-lg font-semibold text-gray-900">Smart Highlights</h3>
                      </div>
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">AI-Powered</span>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-200 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Strong match for Frontend roles</h4>
                          </div>
                        </div>
                      </div>
                      <div className="bg-teal-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-teal-200 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">4+ years experience in React ecosystem </h4>
                          </div>
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-200 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Top 10% profile completion in platform</h4>                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  

                  {/* Career Timeline */}
                  <section className='bg-white shadow-md p-5 rounded-lg'>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-lg">
                        <img src="/assets/home/Careertimeline.svg" alt="Featured Projects" className="w-10 h-10" />

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

                  {/* Featured Projects */}
                  <section className='bg-white shadow-md p-5 rounded-lg'>
                    <div className="flex items-center gap-3 mb-6">
                      <img src="/assets/home/Featuredprojects.svg" alt="Featured Projects" className="w-10 h-10" />
                      <h3 className="text-lg font-semibold text-gray-900">Featured Projects</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0FDFA]">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">E-commerce Platform</h4>
                            <p className="text-sm text-gray-600">Built a full-featured shopping platform with cart, payments, and admin dashboard</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>React</span>
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>Node.js</span>
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>Stripe</span>
                        </div>
                      </div>
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0FDFA]">
                        <h4 className="font-semibold text-gray-900">Real-time Chat Application</h4>
                        <p className="text-sm text-gray-600 mt-1">WebSocket-based chat with typing indicators and file sharing</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>React</span>
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>Socket.io</span>
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>MongoDB</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Certifications */}
                  <section className='bg-white shadow-md p-5 rounded-lg'>
                    <div className="flex items-center gap-3 mb-6">
                      <div className=" rounded-lg">
                        <img src="/assets/home/certifications.svg" alt="Certifications" className="w-10 h-10" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#FFFBEB]">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">AWS Certified Developer</h4>
                            <p className="text-sm text-gray-600">Amazon Web Services</p>
                          </div>
                          <span className="text-sm text-gray-500">2023</span>
                        </div>
                      </div>
                      <div className="rounded-xl p-4 shadow-sm  bg-gradient-to-r from-[#F8FAFC] to-[#FFFBEB]">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">React Advanced Patterns</h4>
                            <p className="text-sm text-gray-600">Frontend Masters</p>
                          </div>
                          <span className="text-sm text-gray-500">2024</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  

                                  </div>
              </div>
              

              {/* Right Sidebar - Profile Strength */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Strength</h3>
                  <img src="/assets/home/Profilestrength.svg" alt="sparks" className="w-full h-full" />
                  
                  <div className="space-y-6">
                    {/* Skills */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Skills</span>
                        <span className="text-sm text-gray-500">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BC7D] h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Experience</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BC7D] h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>

                    {/* Resume */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Resume</span>
                        <span className="text-sm text-gray-500">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BC7D] h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Preferences</span>
                        <span className="text-sm text-gray-500">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#FFB900] to-[#FFB900] h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                <button className="w-full px-4 py-2 bg-[#01BCA433] text-[#007A55] rounded-lg font-semibold hover:bg-green-300 transition-colors">
                  Excellent Profile
                </button>
              </div>
            </div>
          </div>          
        </div>
        {/* Job Preferences */}
                  <section className='bg-white shadow-md p-5 rounded-lg mt-6'>
                    <div className="flex items-center gap-3 mb-6">
                      <img src="/assets/home/JobPrefer.svg" alt="Job Preferences" className="w-10 h-10" />
                      <h3 className="text-lg font-semibold text-gray-900">Job Preferences</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Desired Role Card */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#E0E7FF]">
                        <div className="flex items-center gap-3">
                          <img src="/assets/home/Jobsuitcase.svg" alt="Desired Role" className="w-8 h-8" />
                          <div>
                            <p className="text-sm text-gray-600">Desired Role</p>
                            <h4 className="font-semibold text-gray-900">Senior Frontend</h4>
                          </div>
                        </div>
                      </div>

                      {/* Location Card */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#CBFBF1]">
                        <div className="flex items-center gap-3">
                          <img src="/assets/home/greenlocation.svg" alt="Location" className="w-8 h-8" />
                          <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <h4 className="font-semibold text-gray-900">Remote / SF Bay</h4>
                          </div>
                        </div>
                      </div>

                      {/* Salary Range Card */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#E0E7FF]">
                        <div className="flex items-center gap-3">
                          <img src="/assets/home/bluedollar.svg" alt="Salary Range" className="w-8 h-8" />
                          <div>
                            <p className="text-sm text-gray-600">Salary Range</p>
                            <h4 className="font-semibold text-gray-900">$120k - $180k</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Recent Applications */}
                  <section className='bg-white shadow-md p-5 rounded-lg mt-6'>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-lg">
                        <img src="/assets/home/recentapps.svg" alt="Job Preferences" className="w-10 h-10" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Application Card 1 */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">TechCorp Solutions</h4>
                            <p className="text-xs text-gray-600 mt-1">Senior Frontend Engineer</p>
                            <div className="flex items-center justify-between mt-3">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                In Progress
                              </span>
                              <span className="text-xs text-gray-500">3 days ago</span>
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Application Card 2 */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">Digital Innovations Inc.</h4>
                            <p className="text-xs text-gray-600 mt-1">Frontend Developer</p>
                            <div className="flex items-center justify-between mt-3">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Interview Scheduled
                              </span>
                              <span className="text-xs text-gray-500">1 week ago</span>
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Application Card 3 */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">StartupHub</h4>
                            <p className="text-xs text-gray-600 mt-1">React Developer</p>
                            <div className="flex items-center justify-between mt-3">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Applied
                              </span>
                              <span className="text-xs text-gray-500">2 weeks ago</span>
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Privacy & Visibility */}
                  <section className='bg-white shadow-md p-5 rounded-lg mt-6'>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-lg">
                        <img src="/assets/home/privacyandvis.svg" alt="Job Preferences" className="w-10 h-10" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Privacy & Visibility</h3>
                    </div>

                    <div className="space-y-4">
                      {/* Profile Visibility Card */}
                      <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Profile Visibility</h4>
                              <p className="text-sm text-gray-600">Your profile is visible to recruiters</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                          </label>
                        </div>
                      </div>

                      {/* Two Smaller Cards Side by Side */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Show Contact Info Card */}
                        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">Show contact info</h4>
                              <p className="text-xs text-gray-600">Email and phone</p>
                            </div>
                          </div>
                        </div>

                        {/* Show Resume Card */}
                        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] border border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">Show resume</h4>
                              <p className="text-xs text-gray-600">PDF download</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
      </div>
      </div>
    </div>
    </>
  );
}
