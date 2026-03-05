"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiBell } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfileDropdown = () => {
    setIsProfileOpen(false);
  };
  
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Logo */}
            <div className="flex items-center">
              <Image 
                src="/assets/home/logo.png" 
                alt="RobNGrab Logo" 
                width={240} 
                height={64}
                className="h-16 w-auto"
              />
            </div>
            
            {/* Center - Navigation */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleNavigation('/candidate/dashboard')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={() => handleNavigation('/candidate/jobs')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Jobs
              </button>
              <button 
                onClick={() => handleNavigation('/candidate/applied-jobs')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Applied Jobs
              </button>
              <button 
                onClick={() => handleNavigation('/candidate/resume-builder')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Resume Builder
              </button>
              <button 
                onClick={() => handleNavigation('/candidate/interview-management')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Interview Management
              </button>
              <button 
                onClick={() => handleNavigation('/candidate/settings')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Settings
              </button>
            </div>
            
            {/* Right - Notifications and Profile */}
            <div className="flex items-center space-x-4 relative">
              {/* Notification Bell */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FiBell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Profile Logo */}
              <button 
                onClick={handleProfileClick}
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="text-white text-sm font-medium">JD</span>
              </button>
              
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute top-10 right-0 z-50">
                  <ProfileDropdown 
                    isOpen={isProfileOpen} 
                    onClose={closeProfileDropdown} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
