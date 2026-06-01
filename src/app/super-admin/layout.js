'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/app/super-admin/Model/Header';
import Sidebar from '@/app/super-admin/Model/Sidebar';

export default function SuperAdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // derive activePage from path segments (e.g. /super-admin/roles -> "roles")
  let activePage = '';
  let isAuthPage = false;
  if (pathname) {
    const parts = pathname.split('/').filter(Boolean);
    activePage = parts[1] || '';
    const authPages = ['', 'login', 'signup'];
    if (parts.length <= 1 || authPages.includes(activePage)) {
      isAuthPage = true;
    }
  }

  useEffect(() => {
    if (!isAuthPage) {
      const token = localStorage.getItem('superAdminToken');
      if (!token) {
        router.push('/super-admin');
      } else {
        setAuthorized(true);
      }
    }
  }, [pathname, isAuthPage, router]);

  if (isAuthPage) {
    return <>{children}</>;
  }

  if (!authorized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500 font-medium">Checking authorization...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarOpen(true)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activePage={activePage}
      />

      {/* overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* main content wrapper provides top padding for fixed header and left margin for sidebar */}
      <main className="pt-16 lg:ml-72 transition-[margin] duration-300">
        {children}
      </main>
    </div>
  );
}
