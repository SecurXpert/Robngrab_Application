import React, { useState } from 'react';
import { LuX, LuChevronDown, LuSave } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';

export default function CallUserModal({ onClose, user }) {
  const [callStatus, setCallStatus] = useState('Connected');
  const [notes, setNotes] = useState('');

  const handleClickToCall = () => {
    alert(`Calling ${user?.name} at ${user?.phone}...`);
  };

  const handleSaveNotes = () => {
    console.log('Call notes saved:', notes);
    console.log('Call status:', callStatus);
    alert('Call notes saved successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl transform transition-all">
        <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
          <h2 className="text-xl  font-inter font-medium text-[#0A0A0A]-500">Call User</h2>
          <button onClick={onClose} className=" transition-colors">
            <LuX size={25} className="text-[#0A0A0A]" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="bg-[#EFF6FF] border border-[#BEDBFF] rounded-lg p-4">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-full">
                    <div className="text-center font-medium text-md text-[#0A0A0A]">{user?.name}</div>
                    <div className="text-center text-xl font-semibold text-[#0A0A0A] mb-1">{user?.phone}</div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleClickToCall}
                        className="px-6 py-1.5 bg-[#2563EB]  items-center  inline-flex text-white rounded-lg hover:bg-[#1D4ED8]"
                      >
                        Click to Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Call Status</label>
            <div className="relative">
              <select
                value={callStatus}
                onChange={(e) => setCallStatus(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#D1D5DC] text-[#1A1A1A] rounded-lg focus:outline-none focus:ring focus:ring-[#2563EB] appearance-none pr-10"
              >
                <option value="Connected">Connected</option>
                <option value="Not Connected">Not Connected</option>
                <option value="Voicemail">Voicemail</option>
                <option value="Busy">Busy</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LuChevronDown className="w-4 h-4 text-[#000000]" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Call Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about the call conversation..."
              rows={4}
              className="w-full px-3 py-2 border border-[#D1D5DC] text-[#0A0A0A80] rounded-lg focus:outline-none focus:ring focus:ring-[#2563EB]"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-[#D1D5DC] rounded-lg hover:bg-gray-50 text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveNotes}
              className="flex-1 px-4 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <LuSave className="w-4 h-4" />
              Save Call Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
