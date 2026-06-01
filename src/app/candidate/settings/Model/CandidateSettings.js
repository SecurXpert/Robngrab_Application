"use client";

import { useSettings } from '@/utils/useSettings';
import SectionHeader from '@/app/candidate/settings/Model/SectionHeader';
import LoginAuthSection from '@/app/candidate/settings/Model/LoginAuthSection';
import TwoFactorSection from '@/app/candidate/settings/Model/TwoFactorSection';
import BackupCodesSection from '@/app/candidate/settings/Model/BackupCodesSection';
import TrustedDevicesSection from '@/app/candidate/settings/Model/TrustedDevicesSection';
import AccountRecoverySection from '@/app/candidate/settings/Model/AccountRecoverySection';

export default function CandidateSettings() {
  const {
    twoFactorEnabled,
    authMethod,
    backupCodes,
    codesRevealed,
    toggleCodeVisibility,
    toggleTwoFactor,
    setAuth,
    toggleAllCodes,
    trustedDevices,
    activeSessions
  } = useSettings();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="items-center justify-between h-16">
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600">Manage your security settings and account protection</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Main Content */}
        <div>
          {/* Login & Authentication Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <SectionHeader sectionKey="loginAuth" />
            <LoginAuthSection activeSessions={activeSessions} />
          </div>

          {/* Two-Factor Authentication Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <SectionHeader sectionKey="twoFactor" />
            <TwoFactorSection
              enabled={twoFactorEnabled}
              authMethod={authMethod}
              onToggle={toggleTwoFactor}
              onSetAuth={setAuth}
            />
          </div>

          {/* Backup Codes Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <SectionHeader sectionKey="backupCodes" />
            <BackupCodesSection
              codes={backupCodes}
              revealed={codesRevealed}
              onToggleVisibility={toggleCodeVisibility}
              onToggleAll={toggleAllCodes}
            />
          </div>

          {/* Trusted Devices Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <SectionHeader sectionKey="trustedDevices" />
            <TrustedDevicesSection devices={trustedDevices} />
          </div>

          {/* Account Recovery Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <SectionHeader sectionKey="accountRecovery" />
            <AccountRecoverySection />
          </div>
        </div>
      </div>
    </div>
  );
}
