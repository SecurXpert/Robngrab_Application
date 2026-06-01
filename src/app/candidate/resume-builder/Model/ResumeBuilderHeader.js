'use client';

export default function ResumeBuilderHeader({
  isPreviewMode,
  onTogglePreview,
  onSave,
  onDownload,
  isSaving,
  resumeTitle,
}) {
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Title */}
        <p className="text-sm font-semibold text-gray-800 truncate max-w-xs">
          {resumeTitle || 'Resume Builder'}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePreview}
            className="px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {isPreviewMode ? 'Edit Mode' : 'Preview'}
          </button>
          <button
            onClick={onSave}
            disabled={isSaving}
            className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60 transition-colors"
          >
            {isSaving ? 'Saving…' : 'Save'}
          </button>
          <button
            onClick={onDownload}
            className="px-3 py-1.5 text-xs font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
