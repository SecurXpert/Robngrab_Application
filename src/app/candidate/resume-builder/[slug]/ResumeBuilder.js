'use client';

import { useState } from 'react';
import { FiSave, FiDownload, FiEye, FiEdit } from 'react-icons/fi';

export default function ResumeBuilderHeader({ 
  isPreviewMode, 
  onTogglePreview, 
  onSave, 
  onDownload,
  isSaving,
  resumeTitle 
}) {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Resume Builder</h1>
            {resumeTitle && (
              <span className="text-sm text-gray-500">• {resumeTitle}</span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onTogglePreview}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isPreviewMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isPreviewMode ? (
                <>
                  <FiEdit className="w-4 h-4" />
                  Edit Mode
                </>
              ) : (
                <>
                  <FiEye className="w-4 h-4" />
                  Preview
                </>
              )}
            </button>
            
            <button
              onClick={onSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50"
            >
              <FiSave className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <FiDownload className="w-4 h-4" />
                Download
              </button>
              
              {showDownloadMenu && (
                <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <button
                    onClick={() => { onDownload('pdf'); setShowDownloadMenu(false); }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    Download as PDF
                  </button>
                  <button
                    onClick={() => { onDownload('docx'); setShowDownloadMenu(false); }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    Download as DOCX
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
