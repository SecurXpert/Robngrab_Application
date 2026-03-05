import React, { useState } from 'react';
import { FiX, FiUser, FiSave } from 'react-icons/fi';

export default function UpdateUserStatusModal({ onClose }) {
  const [form, setForm] = useState({
    status: "",
    priority: "",
    member: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.status || !form.priority || !form.member) {
      setMsg("Please fill all fields...");
      return;
    }

    console.log("Saved Data:", form);
    setMsg("User status updated ");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[520px] bg-white rounded-lg shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 ">
          <h2 className="text-lg font-semibold">Update User Status</h2>
          <FiX className="cursor-pointer" onClick={onClose} />
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">
          {/* PROFILE BOX */}
          <div className="bg-blue-50 rounded-lg p-6 text-center shadow-md p-7">
            <div className="w-12 h-12 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full">
              <FiUser />
            </div>
            <p className="text-sm text-gray-500 mt-3">Sarah Williams</p>
            <h3 className="font-semibold text-lg">Update Status</h3>
          </div>

          {/* INPUTS */}
          <div>
            <label className="text-sm text-gray-600">New Status</label>
            <input
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">New Priority</label>
            <input
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Assigned Team Member</label>
            <input
              name="member"
              placeholder="Enter the name of the team member..."
              value={form.member}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {msg && <p className="text-green-600 text-sm">{msg}</p>}
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <FiSave /> Update Status
          </button>
        </div>
      </div>
    </div>
  );
}
