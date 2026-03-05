'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const inputStyles =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

const user = {
  initials: 'SA',
  name: 'Super Admin',
  email: 'admin@robngrab.com',
  firstName: 'Kishore',
  lastName: 'Jack',
  phone: '+1 (555) 123-4567',
};

function TextField({ id, label, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input id={id} className={inputStyles} {...props} />
    </div>
  );
}

export default function SettingsPage() {
  const pathname = usePathname();
  
  const tabClass = (href) =>
    pathname === href
      ? 'px-4 py-2 text-sm font-medium border-b-2 -mb-px text-blue-600 border-blue-600 font-semibold'
      : 'px-4 py-2 text-sm font-medium border-b-2 -mb-px text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-300 transition-colors';
  
  return (
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
                Settings & Profile
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Manage your account information, security, and preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-6">
            <Link href="/super-admin/settings" className={tabClass('/super-admin/settings')}>
              Profile
            </Link>
            <Link href="/super-admin/settings/security" className={tabClass('/super-admin/settings/security')}>
              Security
            </Link>
            <Link href="/super-admin/settings/preferences" className={tabClass('/super-admin/settings/preferences')}>
              Preferences
            </Link>
          </div>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
            <header className="px-6 pt-6 pb-6 border-b border-slate-200">
              <h2 className="text-sm font-semibold text-slate-900 mb-4">Personal Details</h2>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-base font-semibold shrink-0">
                  {user.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{user.name}</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  id="firstName"
                  label="First Name"
                  type="text"
                  defaultValue={user.firstName}
                />
                <TextField
                  id="lastName"
                  label="Last Name"
                  type="text"
                  defaultValue={user.lastName}
                />
              </div>

              {/* Remaining fields one below another */}
              <TextField id="email" label="Email Address" type="email" defaultValue={user.email} />
              <TextField id="phone" label="Phone Number" type="tel" defaultValue={user.phone} />
              <TextField id="address" label="Address" type="text" />
              <TextField id="dob" label="Date of Birth" type="text" placeholder="MM/DD/YYYY" />

              <div className="flex flex-wrap items-center justify-start gap-3 border-t border-slate-100 mt-4 pt-4">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#1677FF] text-sm font-semibold text-white shadow-sm hover:bg-[#125fcb]"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="px-4 py-2.5 rounded-lg bg-slate-50 text-sm font-medium text-slate-700 hover:bg-slate-100"
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
