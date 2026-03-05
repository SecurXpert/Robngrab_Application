import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function SendEmailModal({ onClose, user }) {
  const [template, setTemplate] = useState('Payment Reminder');
  const [content, setContent] = useState('');
  const [logActivity, setLogActivity] = useState(true);

  const handleSendEmail = () => {
    console.log('Sending email to:', user);
    console.log('Template:', template);
    console.log('Content:', content);
    alert('Email sent successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Send Email</h2>
          <button onClick={onClose} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-md transition-colors">
            <FaTimes size={16} className="text-gray-600" />
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
              <option value="Payment Reminder">Payment Reminder</option>
              <option value="Technical Assistance">Technical Assistance</option>
              <option value="Registration Help">Registration Help</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Recipient</label>
            <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
              <div className="font-medium text-gray-900">{user?.name}</div>
              <div className="text-gray-600">{user?.email}</div>
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

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={handleSendEmail}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
