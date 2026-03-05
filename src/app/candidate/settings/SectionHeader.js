import React from 'react';
import { FiKey } from 'react-icons/fi';
import { LuShield, LuFileKey2, LuLaptop } from "react-icons/lu";
import { FaCog } from 'react-icons/fa';

const iconMap = {
  FiKey,
  LuShield,
  LuFileKey2,
  LuLaptop,
  FaCog
};

export default function SectionHeader({ sectionKey }) {
  const config = {
    loginAuth: {
      icon: 'FiKey',
      title: 'Login & Authentication',
      description: 'Manage your password and active sessions'
    },
    twoFactor: {
      icon: 'LuShield',
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account'
    },
    backupCodes: {
      icon: 'LuFileKey2',
      title: 'Backup Codes',
      description: '2FA backup codes can be used to access your account if you lose access to your authentication method'
    },
    trustedDevices: {
      icon: 'LuLaptop',
      title: 'Trusted Devices',
      description: 'Devices that can bypass two-factor authentication'
    },
    accountRecovery: {
      icon: 'FaCog',
      title: 'Account Recovery',
      description: 'Set up recovery options to regain access if you\'re locked out'
    }
  };

  const { icon, title, description } = config[sectionKey];
  const IconComponent = iconMap[icon];

  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <IconComponent className="h-9 w-9 text-blue-600 bg-blue-100 rounded-lg p-2" />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
