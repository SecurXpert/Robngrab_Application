'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  LuLayoutDashboard,
  LuShield,
  LuFileText,
  LuSettings,
  LuCreditCard,
  LuBuilding,
  LuStore,
  LuMegaphone,
  LuUserCheck,
  LuDollarSign,
  LuDatabase,
  LuLogOut,
  LuX,
  LuFilter,
} from 'react-icons/lu';
import FilterModel from '../components/FilterModel';

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
    { icon: LuCreditCard, label: 'Subscription Plans', active: currentActivePage === 'subscription', href: '/super-admin/subscription' },
    { icon: LuBuilding, label: 'Vendors / Tenants', active: currentActivePage === 'vendor', href: '/super-admin/vendor' },
    { icon: LuStore, label: 'Franchise Management', active: currentActivePage === 'franchise-management', href: '/super-admin/franchise-management' },
    { icon: LuMegaphone, label: 'Prime Bulletins', active: currentActivePage === 'bulletins' },
    { icon: LuUserCheck, label: 'Recruiters', active: currentActivePage === 'recruiters', href: '/super-admin/recruiters' },
    { icon: LuDollarSign, label: 'Payments', active: currentActivePage === 'payments', href: '/super-admin/payments' },
    { icon: LuDatabase, label: 'Cold Data', active: currentActivePage === 'cold-data', href: '/super-admin/cold-data' },
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                    item.active 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
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
                      onClose();
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                      item.active
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => console.log('Logging out...')}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 w-full text-left"
            >
              <LuLogOut className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Logout</span>
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
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                      item.active 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
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
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
            
            {/* Logout Button for Desktop */}
            <div className="p-2 border-t border-gray-200">
              <button
                onClick={() => console.log('Logging out...')}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 w-full text-left"
              >
                <LuLogOut className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Logout</span>
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
