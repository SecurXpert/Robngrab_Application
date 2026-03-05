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
    <div className="bg-white h-full overflow-y-auto rounded-xl shadow-sm p-6 border border-gray-200 mb-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </a>
      </div>
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <div className="flex-1 space-y-2">
              <div className="text-sm font-medium text-gray-800">{activity.action}</div>
              <div className="text-xs text-gray-500">{activity.entity}</div>
            </div>
            <span className="text-xs text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
