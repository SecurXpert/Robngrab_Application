'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


// Security page for superadmin settings

const TRUSTED_DEVICES = [
  {
    id: 'current',
    name: 'Chrome on macOS',
    location: 'New York, US',
    lastActive: 'Last active 5 min ago',
    isCurrent: true,
    removable: false,
  },
  {
    id: 'iphone',
    name: 'Safari on iPhone',
    location: 'New York, US',
    lastActive: 'Last active 2 hours ago',
    isCurrent: false,
    removable: true,
  },
  {
    id: 'windows',
    name: 'Chrome on Windows',
    location: 'Boston, US',
    lastActive: 'Last active 1 day ago',
    isCurrent: false,
    removable: true,
  },
];

function SectionCard({ children }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200">
      {children}
    </section>
  );
}

function SectionHeader({ title, description, rightSlot }) {
  return (
    <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-slate-200">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {description && (
          <p className="mt-1 text-xs text-slate-500 max-w-md">{description}</p>
        )}
      </div>
      {rightSlot}
    </div>
  );
}

function SettingRow({ iconLabel, title, description, actionLabel }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3 min-w-0">
        {iconLabel && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-medium text-slate-600">
            {iconLabel}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-900">{title}</p>
          {description && (
            <p className="text-xs text-slate-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
      <button
        type="button"
        className="text-xs font-medium text-blue-600 hover:text-blue-700 shrink-0"
      >
        {actionLabel}
      </button>
    </div>
  );
}

function TrustedDeviceRow({ device }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-medium text-slate-600">
            {device.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-900">{device.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{device.location}</p>
            <p className="text-xs text-slate-500">{device.lastActive}</p>
          </div>
        </div>
        <button
          type="button"
          disabled={!device.removable}
          className={
            device.removable
              ? 'text-xs font-medium text-red-500 hover:text-red-600'
              : 'text-xs font-medium text-slate-400 cursor-default'
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function SecurityPage() {
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

          <div className="max-w-3xl mx-auto space-y-6">
            <SectionCard>
              <SectionHeader
                title="Multi-Factor Authentication"
                description="Add an extra layer of security to your account."
                rightSlot={
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium bg-emerald-50 text-emerald-700">
                    Enabled
                  </span>
                }
              />
              <div className="px-6 pb-6 pt-4 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <SettingRow
                    iconLabel="AA"
                    title="Authenticator App"
                    description="Google Authenticator configured"
                    actionLabel="Reconfigure"
                  />
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <SettingRow
                    title="Backup Codes"
                    description="Use these codes to access your account if you lose your authentication device."
                    actionLabel="View Backup Codes"
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHeader
                title="Trusted Devices"
                description="Manage the devices that have been marked as trusted for your account."
              />
              <div className="px-6 pb-6 pt-4 space-y-3">
                {TRUSTED_DEVICES.map((device) => (
                  <TrustedDeviceRow key={device.id} device={device} />
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
  );
}
