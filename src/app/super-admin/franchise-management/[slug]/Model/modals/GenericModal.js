export default function GenericModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "max-w-lg",
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[9999] py-6">
      <div
        className={`bg-white rounded-2xl shadow-xl ${maxWidth} w-full mx-4 flex flex-col max-h-[calc(100vh-48px)]`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between flex-shrink-0 px-5 pt-5 pb-4">
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 leading-tight">
              {title}
            </h3>

            <p className="text-[12px] text-gray-500 mt-1">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body — scrollable, no scrollbar */}
        <div
          className="flex-1 px-5 pb-5 overflow-y-auto"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE/Edge */,
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {children}
        </div>
      </div>
    </div>
  );
}
