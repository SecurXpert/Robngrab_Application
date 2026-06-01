'use client';

import { useParams, usePathname, notFound } from 'next/navigation';
import Link from 'next/link';
import { FiUser, FiSmartphone } from "react-icons/fi";
import { LuShield, LuSettings } from "react-icons/lu";
import { SectionCard, SectionHeader, SettingRow, TrustedDeviceRow, TRUSTED_DEVICES } from '@/app/super-admin/settings/Model/SecurityComponents';

const selectStyles =
  'w-1/2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

const checkboxStyles = 'h-3 w-3 rounded border-slate-300 text-blue-600 focus:ring-blue-500';

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

export default function SettingsSlugPage() {
  const { slug } = useParams();
  const pathname = usePathname();
  
  // Normalize slug to lowercase
  const activeSlug = slug?.toLowerCase();

  // Validate slug
  if (activeSlug !== 'security' && activeSlug !== 'preferences') {
    notFound();
  }

  const tabClass = (href) => {
    // Case-insensitive match for path comparisons
    const isCurrent = pathname.toLowerCase() === href.toLowerCase();
    return isCurrent
      ? 'px-4 py-2 text-sm font-semibold border-b-2 -mb-px text-[#0163D7] border-[#0163D7]'
      : 'px-4 py-2 text-sm font-medium border-b-2 -mb-px text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-300 transition-colors';
  };

  return (
    <div className="py-8 bg-[#F8F9FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Settings & Profile</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your account information, security, and preferences.</p>
        </div>

        <div className="flex border-b border-slate-200 mb-6 overflow-x-auto">
          <Link href="/super-admin/settings" className={tabClass('/super-admin/settings')}>
            <div className="flex items-center"><FiUser className="w-4 h-4 mr-2" /><span>Profile</span></div>
          </Link>
          <Link href="/super-admin/settings/security" className={tabClass('/super-admin/settings/security')}>
            <div className="flex items-center"><LuShield className="w-4 h-4 mr-2" /><span>Security</span></div>
          </Link>
          <Link href="/super-admin/settings/preferences" className={tabClass('/super-admin/settings/preferences')}>
            <div className="flex items-center"><LuSettings className="w-4 h-4 mr-2" /><span>Preferences</span></div>
          </Link>
        </div>

        {activeSlug === 'security' ? (
          <div className="max-w-3xl space-y-6 pb-8 border-b-2 border-[#0163D7]">
            <SectionCard>
              <SectionHeader title="Multi-Factor Authentication" description="Add an extra layer of security to your account." rightSlot={<span className="px-3 py-1 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-md">Enabled</span>} />
              <div className="px-6 pb-6 pt-2">
                <div className="rounded-xl border border-slate-200 px-4 py-1 bg-[#F9FAFB]">
                  <SettingRow icon={<FiSmartphone className="p-3 bg-blue-100 text-blue-600 rounded-full w-12 h-12" />} title="Authenticator App" description="Google Authenticator configured" actionLabel="Reconfigure" />
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHeader title="Backup Codes" description="Use these codes to access your account if you lose your authentication device." />
              <div className="px-6 pb-6 pt-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-slate-300 bg-white rounded-md hover:bg-slate-50"><LuShield className="w-3 h-3" />View Backup Codes</button>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHeader title="Trusted Devices" />
              <div className="px-6 pb-6 pt-2 space-y-3">
                {TRUSTED_DEVICES.map((device) => (
                  <TrustedDeviceRow key={device.id} device={device} />
                ))}
              </div>
            </SectionCard>
          </div>
        ) : (
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 max-w-1xl mx-auto">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-lg font-semibold text-slate-700">System Preferences</h2>
            </div>

            <form className="px-6 pb-6 pt-4 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Language</label>
                  <select defaultValue="en-us" className={selectStyles}>
                    {LANGUAGES.map((lang) => (
                      <option key={lang.value} value={lang.value}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Timezone</label>
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
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date Format</label>
                <select defaultValue="mmddyyyy" className={selectStyles}>
                  {DATE_FORMATS.map((format) => (
                    <option key={format.value} value={format.value}>
                      {format.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ borderTop: '1.35px solid #E5E7EB', paddingTop: '16px' }}>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Email Notifications</h3>
                <div className="space-y-3">
                  {EMAIL_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer"
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
                  className="px-5 py-2.5 rounded-lg bg-[#0163D7] text-sm font-medium text-white shadow-sm hover:bg-[#125fcb]"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="px-4 py-2.5 rounded-lg bg-[#EFF6FF] text-sm font-medium text-[#0163D7] hover:bg-[#D6E4FF]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}
