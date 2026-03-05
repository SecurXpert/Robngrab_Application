import React from 'react';

export default function LoginAuthSection({ activeSessions }) {
  return (
    <div className="p-6 space-y-6">
      {/* Password Section */}
      <div>
        <h3 className="text-base font-medium text-gray-900 mb-4">Password</h3>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <p className="text-sm font-medium text-gray-900">Last changed</p>
            <p className="text-sm text-gray-600">30 days ago</p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Active Sessions */}
      <div>
        <h3 className="text-base font-medium text-gray-900 mb-4">Active Sessions</h3>
        <div className="space-y-3">
          {activeSessions.map((session, index) => (
            <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-900">{session.device}</p>
                  {index === 0 && (
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Current</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{session.ip} • {session.location}</p>
                <p className="text-xs text-gray-500 mt-1">Last active: {session.time}</p>
              </div>
              {index !== 0 && (
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-red-700 transition-colors">
                  Sign out
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
