'use client';

export default function RecentActivity() {
  const activities = [
    { action: 'New vendor registration', entity: 'TechCorp Inc.', time: '5 min ago', type: 'vendor' },
    { action: 'Subscription upgrade', entity: 'Global Staffing Ltd.', time: '12 min ago', type: 'subscription' },
    { action: 'Prime Admin login', entity: 'John Doe (Creator)', time: '25 min ago', type: 'admin' },
    { action: 'Franchise request', entity: 'West Coast Branch', time: '1 hour ago', type: 'franchise' },
    { action: 'Recruiter profile updated', entity: 'Sarah Johnson', time: '2 hours ago', type: 'recruiter' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-gray-800">{activity.action}</div>
                <div className="text-xs text-gray-500">{activity.entity}</div>
              </div>
            </div>
            <span className="text-xs text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm">
        View All
      </button>
    </div>
  );
}
