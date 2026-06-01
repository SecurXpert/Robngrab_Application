import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { LuX, LuChevronDown } from 'react-icons/lu';

export default function SendBulkEmailModal({ onClose, users }) {
  const [template, setTemplate] = useState('Technical Assistance');
  const [content, setContent] = useState('');
  const [logActivity, setLogActivity] = useState(true);

  const handleSendEmail = () => {
    // Validation: Check if email content is empty
    if (!content.trim()) {
      alert('Please enter email content before sending.');
      return;
    }
    
    // Validation: Check if there are recipients
    if (users.length === 0) {
      alert('No recipients selected. Please select recipients to send email.');
      return;
    }
    
    console.log('Sending bulk email to:', users);
    console.log('Template:', template);
    console.log('Content:', content);
    alert('Bulk email sent successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg transform transition-all">
        <div className="flex justify-between items-center p-6 border-b border-[#D1D5DC]">
          <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A]">Send Bulk Email</h2>
          <button onClick={onClose} className="  p-2  transition-colors">
            <LuX size={20} className="text-[#0A0A0A]" />
          </button>
        </div>
        
        <div className="p-5">
          <div className="mb-2">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Email Template</label>
            <div className="relative">
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-[#D1D5DC] rounded-lg focus:outline-none appearance-none bg-white text-sm"
              >
                <option value="Technical Assistance text-xs">Technical Assistance</option>
                <option value="Payment Reminder text-xs">Payment Reminder</option>
                <option value="Registration Help text-xs">Registration Help</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LuChevronDown className="w-4 h-4 text-[#000000]" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Recipients ({users.length})</label>
            <div className="max-h-32 overflow-y-auto border border-[#D1D5DC] bg-[#F9FAFB] rounded-lg p-3">
              {users.map((user, index) => (
                <div key={user.id}>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#0A0A0A] text-sm">{user.name}</span>
                      </div>
                      <span className="text-[#6B7280] text-xs">{user.email}</span>
                    </div>
                    <button className="text-[#E7000B] hover:text-[#B91C1C] p-1">
                      <LuX className="w-4 h-4" />
                    </button>
                  </div>
                  {index < users.length - 1 && (
                    <div className="border-b border-[#E5E7EB] my-2"></div>
                  )}
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
              className="w-full px-3 py-2 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <div className="mb-6 bg-[#EFF6FF] p-3 rounded-lg">
            <div className="flex items-center">
              <span className="text-sm text-[#1C398E]">✅ Email will be logged automatically in the user's activity history</span>
            </div>
          </div>

          <div className="flex gap-3 px-0 pb-2">
            <button
              onClick={onClose}
              className="flex-1 border border-[#D1D5DC] rounded-lg py-2 text-[#0A0A0A] hover:bg-gray-50 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleSendEmail}
              className="flex-1 bg-[#2563EB] text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-sm"
            >
              <FiSend /> Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
