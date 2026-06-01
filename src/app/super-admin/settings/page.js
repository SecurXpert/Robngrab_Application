'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiUser } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";

const user = {
  initials: 'SA',
  name: 'Super Admin',
  email: 'admin@robngrab.com',
  firstName: 'Kishore',
  lastName: 'Jack',
  phone: '+1 (555) 123-4567',
};

export default function SettingsPage() {
  const pathname = usePathname();
  
  const tabClass = (href) =>
    pathname.toLowerCase() === href.toLowerCase()
      ? 'px-4 py-2 text-sm font-semibold border-b-2 -mb-px text-[#0163D7] border-[#0163D7]'
      : 'px-4 py-2 text-sm font-medium border-b-2 -mb-px text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-300 transition-colors';

  return (
     <div className="py-8" style={{ backgroundColor: '#F8F9FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-family-inter font-weight-500  text-[#0A0A0A] mb-1">
                Settings & Profile
              </h1>
              <p className="text-base text-slate-500 ">
                Manage your account and security preferences
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-6">
            <Link href="/super-admin/settings" className={tabClass('/super-admin/settings')}>
              <div className="flex items-center">
                <FiUser className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Profile</span>
              </div>
            </Link>
            <Link href="/super-admin/settings/security" className={tabClass('/super-admin/settings/security')}>
              <div className="flex items-center">
                <LuShield className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Security</span>
              </div>
            </Link>
            <Link href="/super-admin/settings/preferences" className={tabClass('/super-admin/settings/preferences')}>
              <div className="flex items-center ">
                <LuSettings className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-md">Preferences</span>
              </div>
            </Link>
          </div>

          {/* Profile Tab Content */}
          <section className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-slate-200 max-w-1xl mx-auto" style={{ borderBottom: '2.7px solid #0163D7', paddingBottom: '16px' }}>
            <header className="px-6 pt-6 pb-6 border-b border-slate-200">
              <h2 className="text-lg font-medium text-slate-900 mb-4">Personal Details</h2>
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-2xl  shrink-0">
                  {user.initials}
                </div>
                <div>
                  <p className="text-md font-family-inter font-weight-500 text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                  <button
                    type="button"
                    className="mt-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            </header>

            <form className="px-6 py-6 space-y-5">
              {/* First & last name on the same row */}
              <div className="flex gap-1.5">
                <div className="w-1/3">
                  <label className="block text-sm font-family-inter font-weight-500 text-[#0A0A0A] mb-1.5">First Name</label>
                  <input type="text" placeholder="Enter your first name" className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" style={{ borderColor: '#D1D5DC'}} />
                </div>

                <div className="w-1/3">
                  <label className="block text-sm font-family-inter font-weight-500 text-[#0A0A0A] mb-1.5">Last Name</label>
                  <input type="text" placeholder="Enter your last name" className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" style={{ borderColor: '#D1D5DC'}} />
                </div>
              </div>

              {/* Remaining fields one below another */}
              <div className="w-2/3">
                <label className="block text-sm font-family-inter font-weight-500 text-[#0A0A0A] mb-1.5">Email Address</label>
                <input type="email" placeholder="Enter your email address" className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" style={{ borderColor: '#D1D5DC' }} />
              </div>
             <div className="w-2/3">
                <label className="block text-sm font-family-inter font-weight-500 text-[#0A0A0A] mb-1.5">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" style={{ borderColor: '#D1D5DC' }} />
              </div>
              <div className="w-2/3">
                <label className="block text-sm font-family-inter font-weight-500 text-[#0A0A0A] mb-1.5">Address</label>
                <textarea placeholder="Enter your address" className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" style={{height: '90px', borderColor: '#D1D5DC' }} />
              </div>
              <div className="w-2/3">
                <label className="block text-sm font-family-inter font-weight-500 text-[#0A0A0A] mb-1.5">Date of Birth</label>
                <input type="text" className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="MM/DD/YYYY" style={{ borderColor: '#D1D5DC' }} />
              </div>

              <div className="flex flex-wrap items-center justify-start gap-3 border-t border-slate-50 mt-4 pt-4">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#0163D7] text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF] border radius=18.89px"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="px-4 py-2.5 rounded-lg bg-[#EFF6FF] text-[#0163D7] text-sm font-medium border border-blue-50 hover:bg-blue-100 border-radius: 18.89px"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
  );
}
