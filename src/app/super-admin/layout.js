'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function SuperAdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // derive activePage from path segments (e.g. /super-admin/roles -> "roles")
  let activePage = '';
  if (pathname) {
    const parts = pathname.split('/').filter(Boolean);
    // parts[0] === 'super-admin', parts[1] is the page key
    activePage = parts[1] || '';

    // If we're on the root or a login/signup page, don't render header/sidebar
    const authPages = ['', 'login', 'signup'];
    if (parts.length <= 1 || authPages.includes(activePage)) {
      // simply return children untouched
      return <>{children}</>;
    }
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* main content wrapper provides top padding for fixed header and left margin for sidebar */}
      <main className="pt-16 lg:ml-72 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
