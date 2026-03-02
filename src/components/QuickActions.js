'use client';

export default function QuickActions() {
  const actions = [
    { label: 'Role Management', icon: '👥', color: 'bg-blue-500' },
    { label: 'View Audit Logs', icon: '📋', color: 'bg-green-500' },
    { label: 'Create Subscription', icon: '💳', color: 'bg-purple-500' },
    { label: 'Add Vendor', icon: '🏢', color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 gap-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white rounded-lg p-4 hover:opacity-90 transition-opacity`}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <div className="text-sm font-medium">{action.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
