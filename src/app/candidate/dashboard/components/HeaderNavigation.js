import React from 'react';
import { useRouter } from 'next/navigation';
import { FiHome, FiBriefcase, FiCheckSquare, FiFileText, FiCalendar, FiSettings } from 'react-icons/fi';

const HeaderNavigation = () => {
  const router = useRouter();
  
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', active: true, path: '/candidate/dashboard' },
    { icon: FiBriefcase, label: 'Jobs', active: false, path: '/candidate/jobs' },
    { icon: FiCheckSquare, label: 'Applied Jobs', active: false, path: '/candidate/applied-jobs' },
    { icon: FiFileText, label: 'Resume Builder', active: false, path: '/candidate/resume-builder' },
    { icon: FiCalendar, label: 'Interview Management', active: false, path: '/candidate/interviews' },
    { icon: FiSettings, label: 'Settings', active: false, path: '/candidate/settings' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.path)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                item.active
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-4 h-4 ${item.active ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`text-sm font-medium ${item.active ? 'text-blue-600' : 'text-gray-700'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
