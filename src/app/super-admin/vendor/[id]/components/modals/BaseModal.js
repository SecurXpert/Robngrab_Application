export default function BaseModal({ 
  title, 
  subtitle, 
  children, 
  onClose, 
  maxWidth = "max-w-2xl",
  showFooter = true,
  footerContent = null 
}) {
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className={`bg-white rounded-2xl shadow-xl ${maxWidth} w-full mx-4 max-h-[90vh] flex flex-col`}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>

        {/* Modal Footer */}
        {showFooter && (
          <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
            {footerContent || (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Close
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
