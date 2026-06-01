import React, { useState } from 'react';
import { LuX, LuChevronDown } from 'react-icons/lu';

export default function BulkCallAssignmentModal({ onClose, users }) {
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('High');

  const handleAssignCalls = () => {
    // Validation: Check if assignee is empty
    if (!assignee.trim()) {
      alert('Please enter an assignee name before assigning calls.');
      return;
    }
    
    // Validation: Check if there are users
    if (users.length === 0) {
      alert('No users selected. Please select users to assign calls.');
      return;
    }
    
    console.log('Assigning calls to:', assignee);
    console.log('Priority:', priority);
    console.log('Users:', users);
    alert('Calls assigned successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl transform transition-all">
        <div className="flex justify-between items-center p-4 border-b border-[#D1D5DC]">
          <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A] mb-2">Bulk Call Assignment</h2>
          <button onClick={onClose} className=" ">
            <LuX size={20} className="text-[#0A0A0A]" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Selected Users ({users.length})</label>
            <div className="max-h-32 overflow-y-auto border border-[#E5E7EB] bg-[#F9FAFB] rounded-lg p-3">
              {users.map((user, index) => (
                <div key={user.id}>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#0A0A0A] text-sm">{user.name}</span>
                      </div>
                      {user.phone && (
                        <span className="text-[#6B7280] text-xs">{user.phone}</span>
                      )}
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
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Assignee</label>
            <div className="relative">
              <input
                type="text"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder="Enter the name of the team member..."
                className="w-full px-3 py-2 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
             
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#0A0A0A] mb-2">Call Priority</label>
            <div className="relative">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-[#D1D5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LuChevronDown className="w-4 h-4 text-[#000000]" />
              </div>
            </div>
          </div>

          <div className="border-b border-[#E5E7EB] mb-6"></div>

          <div className="flex gap-3 px-0 pb-6">
            <button
              onClick={onClose}
              className="flex-1 border border-[#D1D5DC] rounded-lg py-2.5 text-[#0A0A0A] hover:bg-gray-50 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleAssignCalls}
              className="flex-1 bg-[#2563EB] text-white rounded-lg py-2.5 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-sm"
            >
              
              Assign Calls
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
