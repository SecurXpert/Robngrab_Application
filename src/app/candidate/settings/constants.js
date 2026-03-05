export const INITIAL_BACKUP_CODES = [
  { id: 1, code: '1234-5678-9012', visible: false },
  { id: 2, code: '3456-7890-1234', visible: false },
  { id: 3, code: '5678-9012-3456', visible: false },
  { id: 4, code: '7890-1234-5678', visible: false },
  { id: 5, code: '9012-3456-7890', visible: false }
];

export const TRUSTED_DEVICES = [
  { 
    id: 1, 
    name: 'Macbook Air', 
    browser: 'Chrome 121', 
    os: 'Windows 11', 
    location: 'New York, USA', 
    lastUsed: 'Active now', 
    isCurrent: true 
  },
  { 
    id: 2, 
    name: 'iPhone 15', 
    browser: 'Safari', 
    os: 'iOS 17.3', 
    location: 'Los Angeles, USA', 
    lastUsed: '1 day ago', 
    isCurrent: false 
  },
  { 
    id: 3, 
    name: 'Chrome on Windows', 
    browser: 'Chrome 121', 
    os: 'Windows 11', 
    location: 'Chicago, USA', 
    lastUsed: '3 days ago', 
    isCurrent: false 
  }
];

export const ACTIVE_SESSIONS = [
  { 
    id: 1, 
    device: 'Macbook Air - Chrome on Windows', 
    ip: '192.168.1.100', 
    location: 'New York, USA', 
    time: '2 hours ago' 
  },
  { 
    id: 2, 
    device: 'iPhone 15 - Safari on iPhone', 
    ip: '192.168.1.101', 
    location: 'Los Angeles, USA', 
    time: '1 day ago' 
  }
];

export const SECTION_CONFIG = {
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
