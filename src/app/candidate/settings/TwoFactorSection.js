import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';

export default function TwoFactorSection({ enabled, authMethod, onToggle, onSetAuth }) {
  return (
    <div className="p-6 space-y-6">
      {/* Status */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Status</p>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            enabled 
              ? 'text-green-700 bg-green-100' 
              : 'text-red-700 bg-red-100'
          }`}>
            {enabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        <button
          onClick={onToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Info Alert */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-bold text-sm">!</span>
        </div>
        <p className="text-sm text-blue-800">
          2FA adds an extra layer of security to your account by requiring a second form of verification
        </p>
      </div>

      {/* Primary Method */}
      <div>
        <p className="text-sm font-medium text-gray-900 mb-4">Primary Method</p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            authMethod === 'app' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 bg-white hover:bg-gray-50'
          }`}
          onClick={() => onSetAuth('app')}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FaMobileAlt className="h-5 w-5 text-gray-600" />
                <p className="text-sm font-medium text-gray-900">Authenticator App</p>
              </div>
              {authMethod === 'app' && (
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Active</span>
              )}
            </div>
            <p className="text-xs text-gray-600">Use Google Authenticator or similar app</p>
          </div>
          
          <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            authMethod === 'sms' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 bg-white hover:bg-gray-50'
          }`}
          onClick={() => onSetAuth('sms')}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FaMobileAlt className="h-5 w-5 text-gray-600" />
                <p className="text-sm font-medium text-gray-900">SMS</p>
              </div>
              {authMethod === 'sms' && (
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Active</span>
              )}
            </div>
            <p className="text-xs text-gray-600">Send codes via text message</p>
          </div>
        </div>
      </div>

      {/* Change Method Button */}
      <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
        Change Method
      </button>
    </div>
  );
}
