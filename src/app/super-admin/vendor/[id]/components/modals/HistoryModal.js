import BaseModal from './BaseModal';

export default function HistoryModal({ isOpen, onClose, activities }) {
  if (!isOpen) return null;

  return (
    <BaseModal
      title="Vendor History"
      subtitle="Complete activity log and history"
      onClose={onClose}
      footerContent={
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Export History
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      }
    >
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
              activity.status === 'success' ? 'bg-green-500' :
              activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            }`}></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </BaseModal>
  );
}
