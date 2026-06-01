"use client";

import React from 'react';
import { FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const ProfileDropdown = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  if (!isOpen) return null;

  const handleViewProfile = () => {
    router.push('/candidate/profile');
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-48">
      {/* Navigation Items */}
      <div className="py-1">
        <button 
          onClick={handleViewProfile}
          className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
        >
          <FiSettings className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700 text-sm">View & Update Profile</span>
        </button>
         <button 
          onClick={() => { router.push('/candidate/settings'); onClose(); }}
          className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
        >
          <FiSettings className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700 text-sm">Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left">
          <FiHelpCircle className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700 text-sm">FAQs</span>
        </button>
        
        <button 
          onClick={() => { router.push('/'); onClose(); }}
          className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left text-red-600"
        >
          <FiLogOut className="w-4 h-4" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
