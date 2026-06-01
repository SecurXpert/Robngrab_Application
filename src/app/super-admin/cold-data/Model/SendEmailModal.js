import React, { useState } from 'react';
import { LuX, LuChevronDown } from 'react-icons/lu';
import { FiSend } from 'react-icons/fi';

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
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl transform transition-all">
        <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
          <h2 className="text-xl font-inter text-[#0A0A0A]-500">Send Email</h2>
          <button onClick={onClose} className=" transition-colors">
            <LuX size={20} className="text-[#0A0A0A]" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Email Template</label>
            <div className="relative">
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10 text-sm"
              >
                <option value="Payment Reminder">Payment Reminder</option>
                <option value="Technical Assistance">Technical Assistance</option>
                <option value="Registration Help">Registration Help</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LuChevronDown className="w-4 h-4 text-[#000000]" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Recipient</label>
            <div className="border border-[#E5E7EB] rounded-lg p-3 bg-[#F9FAFB]">
              <div className="font-medium text-[#0A0A0A]">{user?.name}</div>
              <div className="text-[#4A5565]">{user?.email}</div>
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Email Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Email content will appear here..."
              rows={6}
              className="w-full px-3 py-2  text-[#0A0A0A80] border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 bg-[#EFF6FF] p-3 rounded-lg border border-[#BEDBFF]">
            <div className="flex items-center">
              <span className="text-sm text-[#1C398E]">✅ Email will be logged automatically in the user's activity history</span>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] pt-4">
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
    </div>
  );
}
