'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


// Preferences page for superadmin settings

const selectStyles =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

const checkboxStyles = 'h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500';

const LANGUAGES = [
  { value: 'en-us', label: 'English (US)' },
  { value: 'en-gb', label: 'English (UK)' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
];

const TIMEZONES = [
  { value: 'utc-8', label: 'UTC-8 (Pacific Time)' },
  { value: 'utc-7', label: 'UTC-7 (Mountain Time)' },
  { value: 'utc-6', label: 'UTC-6 (Central Time)' },
  { value: 'utc-5', label: 'UTC-5 (Eastern Time)' },
  { value: 'utc', label: 'UTC (Coordinated Universal Time)' },
];

const DATE_FORMATS = [
  { value: 'mmddyyyy', label: 'MM/DD/YYYY' },
  { value: 'ddmmyyyy', label: 'DD/MM/YYYY' },
  { value: 'yyyymmdd', label: 'YYYY-MM-DD' },
];

const EMAIL_OPTIONS = [
  { id: 'security', label: 'Security alerts', checked: true },
  { id: 'system', label: 'System updates', checked: true },
  { id: 'vendor', label: 'New vendor registrations', checked: false },
  { id: 'franchise', label: 'Franchise requests', checked: false },
  { id: 'weekly', label: 'Weekly reports', checked: true },
];

export default function PreferencesPage() {
  const pathname = usePathname();
  
  const tabClass = (href) =>
    pathname === href
      ? 'px-4 py-2 text-sm font-medium border-b-2 -mb-px text-blue-600 border-blue-600 font-semibold'
      : 'px-4 py-2 text-sm font-medium border-b-2 -mb-px text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-300 transition-colors';
  
  return (
    <>
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
            <div className="px-6 pt-6 pb-4 border-b border-slate-200">
              <h2 className="text-sm font-semibold text-slate-900">System Preferences</h2>
              <p className="mt-1 text-xs text-slate-500 max-w-md">
                Choose your default language, timezone, date format, and which email updates you want to
                receive.
              </p>
            </div>

            <form className="px-6 pb-6 pt-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Language</label>
                  <select defaultValue="en-us" className={selectStyles}>
                    {LANGUAGES.map((lang) => (
                      <option key={lang.value} value={lang.value}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">Timezone</label>
                  <select defaultValue="utc-5" className={selectStyles}>
                    {TIMEZONES.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">Date Format</label>
                <select defaultValue="mmddyyyy" className={selectStyles}>
                  {DATE_FORMATS.map((format) => (
                    <option key={format.value} value={format.value}>
                      {format.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">Email Notifications</h3>
                <div className="space-y-3">
                  {EMAIL_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={opt.checked}
                        className={checkboxStyles}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-start gap-3 border-t border-slate-100 pt-4">
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
    </>
  );
}
