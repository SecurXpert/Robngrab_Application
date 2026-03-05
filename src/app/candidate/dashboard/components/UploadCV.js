"use client";

import React, { useState } from 'react';
import { FiUpload, FiFile } from 'react-icons/fi';

const UploadCV = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Your CV</h2>
      
      {!uploadedFile ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input').click()}
        >
          <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-700 mb-1">
            Drag & drop your CV here
          </p>
          <p className="text-xs text-gray-500 mb-3">
            or click to browse files
          </p>
          <p className="text-xs text-gray-400">
            PDF, DOC, DOCX (Max 5MB)
          </p>
          <input
            id="file-input"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
          />
        </div>
      ) : (
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
          <FiFile className="w-5 h-5 text-green-600" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {uploadedFile.name}
            </p>
            <p className="text-xs text-gray-500">
              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            onClick={() => setUploadedFile(null)}
            className="text-xs text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      )}
      
      <div className="mt-4 space-y-2">
        <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Upload CV
        </button>
        <p className="text-xs text-gray-500 text-center">
          Keep your CV updated for better job matches
        </p>
      </div>
    </div>
  );
};

export default UploadCV;
