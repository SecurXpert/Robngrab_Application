'use client';

import { FiBell, FiUser, FiMenu } from 'react-icons/fi';

export default function Header({ onMenuToggle, userName = 'Super Admin', userEmail = 'admin@robngrab.com', userImage = null }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-2 sm:py-3 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile menu toggle */}
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FiMenu className="w-5 h-5 text-gray-700" />
          </button>
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/assets/home/logo.png?v=1" 
              alt="RobNGrab" 
              className="h-14 w-auto rounded-lg"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
            <FiBell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              {userImage ? (
                <img src={userImage} alt={userName} className="w-full h-full object-cover" />
              ) : (
                <FiUser className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
