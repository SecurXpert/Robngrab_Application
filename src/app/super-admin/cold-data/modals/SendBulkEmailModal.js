import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

export default function SendBulkEmailModal({ onClose, users }) {
  const [template, setTemplate] = useState('Technical Assistance');
  const [content, setContent] = useState('');
  const [logActivity, setLogActivity] = useState(true);

  const handleSendEmail = () => {
    console.log('Sending bulk email to:', users);
    console.log('Template:', template);
    console.log('Content:', content);
    alert('Bulk email sent successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Send Bulk Email</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Email Template</label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Technical Assistance">Technical Assistance</option>
              <option value="Payment Reminder">Payment Reminder</option>
              <option value="Registration Help">Registration Help</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Recipients ({users.length})</label>
            <div className="max-h-32 overflow-y-auto border border-gray-200 rounded-lg p-3">
              {users.map((user) => (
                <div key={user.id} className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-medium text-gray-900">{user.name}</span>
                    <span className="text-gray-600 ml-2">{user.email}</span>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Email Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Email content will appear here..."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={logActivity}
                onChange={(e) => setLogActivity(e.target.checked)}
                className="rounded border-gray-300 mr-2"
              />
              <span className="text-sm text-gray-900">Email will be logged automatically in the user's activity history</span>
            </label>
          </div>

          <div className="flex justify-center gap-3 px-6 pb-6">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSendEmail}
              className="flex-1 bg-blue-600 text-white rounded-lg py-2 flex  justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <FiSend /> Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
