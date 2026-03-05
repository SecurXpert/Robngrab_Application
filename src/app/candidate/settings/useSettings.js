import { useState, useCallback } from 'react';
import { INITIAL_BACKUP_CODES, TRUSTED_DEVICES, ACTIVE_SESSIONS } from './constants';

export const useSettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [authMethod, setAuthMethod] = useState('app');
  const [backupCodes, setBackupCodes] = useState(INITIAL_BACKUP_CODES);
  const [codesRevealed, setCodesRevealed] = useState(false);

  const toggleCodeVisibility = useCallback((id) => {
    setBackupCodes(prevCodes => 
      prevCodes.map(code => 
        code.id === id ? { ...code, visible: !code.visible } : code
      )
    );
  }, []);

  const toggleTwoFactor = useCallback(() => {
    setTwoFactorEnabled(prev => !prev);
  }, []);

  const setAuth = useCallback((method) => {
    setAuthMethod(method);
  }, []);

  const toggleAllCodes = useCallback(() => {
    setCodesRevealed(prev => !prev);
  }, []);

  return {
    twoFactorEnabled,
    authMethod,
    backupCodes,
    codesRevealed,
    toggleCodeVisibility,
    toggleTwoFactor,
    setAuth,
    toggleAllCodes,
    trustedDevices: TRUSTED_DEVICES,
    activeSessions: ACTIVE_SESSIONS
  };
};
