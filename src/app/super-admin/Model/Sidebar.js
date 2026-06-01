'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  LuLayoutDashboard,
  LuShield,
  LuFileText,
  LuSettings,
  LuLogOut,
  LuBuilding2,
} from 'react-icons/lu';
import {
  FiPackage,
  FiTrendingUp,
  FiUsers,
  FiCreditCard as FiCreditCardIcon,
  FiDatabase as FiDatabaseIcon,
} from 'react-icons/fi';
import {
  RiUserSettingsLine,
} from 'react-icons/ri';
import FilterModel from '@/app/super-admin/Model/FilterModel';

export default function DashboardSidebar({ isOpen, onClose, activePage = 'Dashboard' }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('Last 7 days');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCountry, setSelectedCountry] = useState('All countries');
  const [selectedModule, setSelectedModule] = useState('All Modules');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedTenant, setSelectedTenant] = useState('All Tenants');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Derive active page from pathname on client side
  const getActivePage = () => {
    if (!mounted) return activePage;
    if (pathname) {
      const parts = pathname.split('/').filter(Boolean);
      return parts[1] || '';
    }
    return activePage;
  };

  const currentActivePage = getActivePage();

  const menuItems = [
    { icon: LuLayoutDashboard, label: 'Dashboard', active: currentActivePage === 'dashboard', href: '/super-admin/dashboard' },
    { icon: LuShield, label: 'Roles & Permissions', active: currentActivePage === 'roles', href: '/super-admin/roles' },
    { icon: LuFileText, label: 'Audit Logs', active: currentActivePage === 'audit', href: '/super-admin/audit' },
    { icon: LuSettings, label: 'Settings', active: currentActivePage === 'settings' , href: '/super-admin/settings' },
  ];

  const coreModules = [
    { icon: FiPackage, label: 'Subscription Plans', active: currentActivePage === 'subscription', href: '/super-admin/subscription' },
    { icon: LuBuilding2, label: 'Vendors / Tenants', active: currentActivePage === 'vendor', href: '/super-admin/vendor' },
    { icon: FiTrendingUp, label: 'Franchise Management', active: currentActivePage === 'franchise-management', href: '/super-admin/franchise-management' },
    { icon: RiUserSettingsLine, label: 'Prime Admins', active: currentActivePage === 'prime-admins', href: '/super-admin/prime-admins' },
    { icon: FiUsers, label: 'Recruiters', active: currentActivePage === 'recruiters', href: '/super-admin/recruiters' },
    { icon: FiCreditCardIcon, label: 'Payments', active: currentActivePage === 'payments', href: '/super-admin/payments' },
    { icon: FiDatabaseIcon, label: 'Cold Data', active: currentActivePage === 'cold-data', href: '/super-admin/cold-data' },
  ];

  const handleFilterApply = () => {
    console.log('Applying filters:', {
      dateRange: selectedDateRange,
      location: selectedLocation,
      country: selectedCountry,
      module: selectedModule,
      city: selectedCity,
      tenant: selectedTenant
    });
  };

  // Logout functionality
  const handleLogout = () => {
    console.log('Super Admin logout initiated');
    
    // Clear any stored authentication data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('superAdminToken');
      localStorage.removeItem('superAdminUser');
      sessionStorage.removeItem('superAdminToken');
      sessionStorage.removeItem('superAdminUser');
      
      console.log('Authentication data cleared');
      
      // Show logout confirmation
      alert('Super Admin logout initiated');
      
      // Redirect to super admin login page
      setTimeout(() => {
        router.push('/super-admin');
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="w-72 h-full flex flex-col">
          {/* Logo */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto scrollbar-hide">
            <div className="space-y-2 mb-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 w-full text-left ${
                    item.active 
                      ? 'text-white shadow-lg font-medium' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium'
                  }`}
                  style={item.active ? { backgroundColor: '#0163D7', borderRadius: '18.89px' } : { borderRadius: '18.89px' }}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            <div className='border-t border-gray-200'></div>
            
            <div className="mb-6 mt-6">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Core Modules
              </p>
              <div className="space-y-2">
                {coreModules.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (item.href) {
                        router.push(item.href);
                      } else {
                        console.log(`Navigating to ${item.label}`);
                      }
                      onClose();
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                      item.active
                        ? 'bg-blue-600 text-white shadow-lg font-medium'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 w-full text-left font-medium"
            >
              <LuLogOut className="w-5 h-5 flex-shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <div className="fixed left-0 top-18 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 w-72">
          <div className="w-72 h-full flex flex-col">            
            <nav className="flex-1 px-4 py-6 overflow-y-auto scrollbar-hide">
              <div className="space-y-2 mb-8">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => router.push(item.href)}
                    className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 w-full text-left ${
                      item.active 
                        ? 'text-white shadow-lg font-medium' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium'
                    }`}
                    style={item.active ? { backgroundColor: '#0163D7', borderRadius: '18.89px' } : { borderRadius: '18.89px' }}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className='border-t border-gray-200 my-4'></div>
              </div>
              
              <div className="mb-6">
                <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Core Modules
                </p>
                <div className="space-y-2">
                  {coreModules.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (item.href) {
                          router.push(item.href);
                        } else {
                          console.log(`Navigating to ${item.label}`);
                        }
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                        item.active
                          ? 'bg-blue-600 text-white shadow-lg font-medium'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium'
                      }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
            
            {/* Logout Button for Desktop */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 w-full text-left font-medium"
              >
                <LuLogOut className="w-5 h-5 flex-shrink-0" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModel
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        onApply={handleFilterApply}
        selectedDateRange={selectedDateRange}
        setSelectedDateRange={setSelectedDateRange}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedModule={selectedModule}
        setSelectedModule={setSelectedModule}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedTenant={selectedTenant}
        setSelectedTenant={setSelectedTenant}
      />
    </>
  );
}
