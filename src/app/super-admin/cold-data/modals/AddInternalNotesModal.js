import React, { useState } from 'react';
import { FiX, FiEdit2, FiSave } from 'react-icons/fi';

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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[520px] bg-white rounded-lg shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="font-semibold text-lg">Add Internal Notes</h2>
          <FiX className="cursor-pointer" onClick={onClose} />
        </div>

        {/* BODY */}
        <div className="p-6 space-y-5">
          {/* PROFILE BOX */}
          <div className="bg-blue-50  rounded-lg p-6 text-center shadow-md p-7">
            <div className="w-12 h-12 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full">
              <FiEdit2 />
            </div>
            <p className="text-sm text-gray-500 mt-3 ">Sarah Williams</p>
            <h3 className="font-semibold">Internal Notes</h3>
          </div>

          {/* TEXTAREA */}
          <div>
            <label className="text-sm text-gray-600">Notes</label>
            <textarea
              className="w-full mt-2  border border-gray-700rounded-lg p-3 h-28 outline-none focus:ring-2 focus:ring-blue-500 shadow-md p-8"
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
            className="flex-1 border py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"
          >
            <FiSave /> Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
