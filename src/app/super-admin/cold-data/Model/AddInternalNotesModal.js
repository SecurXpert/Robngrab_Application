import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiEdit2, FiSave } from 'react-icons/fi';
import { LuPen, LuX } from 'react-icons/lu';

export default function AddInternalNotesModal({ onClose }) {
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (!notes.trim()) {
      setMessage("Please enter notes...");
      return;
    }

    setMessage("Notes saved successfully ");
    console.log(notes);
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="w-[520px] bg-white rounded-lg shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="font-inter font-[500] text-lg text-[#0A0A0A]">Add Internal Notes</h2>
          <button onClick={onClose} className=" transition-colors">
            <LuX size={20} className="text-gray-600" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-5">
          {/* PROFILE BOX */}
          <div className="bg-[#EFF6FF] border border-[#BEDBFF] rounded-lg p-6 text-center shadow-md p-7">
            <div className="w-13 h-13 mx-auto bg-[#2563EB] text-white flex items-center justify-center rounded-full">
              <LuPen size={20} />
            </div>
            <p className="text-sm text-[#0A0A0A] mt-3 ">Sarah Williams</p>
            <h3 className="font-semibold  text-lg text-[#0A0A0A]">Internal Notes</h3>
          </div>

          {/* TEXTAREA */}
          <div>
            <label className="text-sm text-[#0A0A0A]">Notes</label>
            <textarea
              className="w-full mt-2  border border-[#D1D5DC] rounded-lg p-3 h-28 outline-none focus:ring-2 focus:ring-blue-500 shadow-md text-sm"
              placeholder="Add internal notes about the user..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {message && (
            <p className="text-green-600 border border-green-600 text-sm">{message}</p>
          )}
        </div>

        {/* FOOTER */}
        <div className=" flex gap-3 px-6 pb-6 ">
          <button
            onClick={onClose}
            className="flex-1 border border-[#D1D5DC] py-2 rounded-lg text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 text-sm"
          >
            <FiSave /> Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
