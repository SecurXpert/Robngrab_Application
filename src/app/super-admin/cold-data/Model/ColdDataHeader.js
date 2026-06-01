import React from 'react';
import { FiDownload, FiPhone } from 'react-icons/fi';
import { MdOutlineMailOutline } from "react-icons/md";

export default function ColdDataHeader({ selectedUsers, onExportData, onShowBulkEmail, onShowBulkCall }) {
  return (
    <header className="">
      <div className="py-8 px-4">
      <div className=" px-8 "></div>
        <div className="flex flex-col gap-1 sm:items-center sm:justify-between sm:flex-row h-auto sm:h-10">
          <div className="flex items-center">
            <div>
              <h1 className=" px-4 text-2xl font-family-inter font-weight-500 text-[#0A0A0A] mb-1">Cold Data</h1>
              <p className=" px-4 text-sm text-[#4A5565]">Users requiring intervention & follow-up</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-3">
            <button 
              onClick={onExportData}
              className="px-2 py-2 sm:px-3 sm:py-2.5 bg-white border border-[#D1D5DC] rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm text-[#0A0A0A]"
            >
              <FiDownload />
              <span>Export Data</span>
            </button>
            <button 
              onClick={onShowBulkEmail}
              className="px-2 py-2 sm:px-3 sm:py-2.5 bg-white border border-[#D1D5DC] rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm text-[#0A0A0A]"
            >
              <MdOutlineMailOutline className="w-4 h-4" />
              <span>Bulk Email ({selectedUsers.length})</span>
             
            </button>
            <button 
              onClick={onShowBulkCall}
              className="px-2 py-2 sm:px-3 sm:py-2.5 bg-[#2563EB] text-[#F9FAFB] rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm text-[#0A0A0A]"
            >
              <FiPhone className="w-4 h-4" />
              <span>Bulk Call Assignment ({selectedUsers.length})</span>
            
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
