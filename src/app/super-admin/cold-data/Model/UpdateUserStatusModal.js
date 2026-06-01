import React, { useState } from 'react';
import { LuUserCheck, LuX } from 'react-icons/lu';
import { FiUser, FiSave } from 'react-icons/fi';

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
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[520px] bg-white rounded-lg shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-lg font-inter font-[500] text-[#0A0A0A]">Update User Status</h2>
          <button onClick={onClose} className=" transition-colors">
            <LuX size={20} className="text-[#0A0A0A]" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">
          {/* PROFILE BOX */}
          <div className="bg-[#EFF6FF] border border-[#BEDBFF] rounded-lg p-6 text-center shadow-md p-7">
            <div className="w-13 h-13 mx-auto bg-[#2563EB] text-white flex items-center justify-center rounded-full">
              <LuUserCheck />
            </div>
            <p className="text-sm text-[#0A0A0A] mt-3">Sarah Williams</p>
            <h3 className="font-inter font-[550] text-lg text-[#0A0A0A]">Update Status</h3>
          </div>

          {/* INPUTS */}
          <div>
            <label className="text-sm text-[#0A0A0A]">New Status</label>
            <input
              name="status"
              value={form.status}
              onChange={handleChange}
              placeholder='Enter status'
              className="w-full mt-1 border border-[#D1D5DC] rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-[#0A0A0A]">New Priority</label>
            <input
              name="priority"
              value={form.priority}
              onChange={handleChange}
              placeholder='Enter priority'
              className="w-full mt-1 border border-[#D1D5DC] rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-[#0A0A0A]">Assigned Team Member</label>
            <input
              name="member"
              placeholder="Enter the name of the team member..."
              value={form.member}
              onChange={handleChange}
              className="w-full mt-1 border border-[#D1D5DC] rounded-lg p-2 outline-none focus:ring focus:ring-blue-500 text-sm"
            />
          </div>

          {msg && <p className="text-green-600 text-sm">{msg}</p>}
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={onClose}
            className="flex-1 border border-[#D1D5DC] text-sm rounded-lg py-2 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 bg-[#2563EB] text-sm text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-[#1D4ED8] transition-colors"
          >
            <FiSave /> Update Status
          </button>
        </div>
      </div>
    </div>
  );
}
