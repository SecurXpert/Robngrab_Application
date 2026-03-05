export default function BaseModal({ children, title, wide = false }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-xl p-6 relative ${
        wide ? 'w-full max-w-xl max-h-[85vh] overflow-y-auto' : 'w-full max-w-lg'
      }`}>
       
        {title && <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
