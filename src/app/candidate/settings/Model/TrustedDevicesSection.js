import React from 'react';
import { FaDesktop } from 'react-icons/fa';

export default function TrustedDevicesSection({ devices }) {
  return (
    <div className="p-6">
      <div className="space-y-3">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <FaDesktop className="mr-3 h-5 w-5 text-gray-600" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-900">{device.name}</p>
                  {device.isCurrent && (
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Current</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{device.browser} • {device.os}</p>
                <p className="text-sm text-gray-600">{device.location} • {device.lastUsed}</p>
              </div>
            </div>
            {!device.isCurrent && (
              <button className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                Sign out
              </button>
            )}
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
        Add Trusted Device
      </button>
    </div>
  );
}
