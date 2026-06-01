import { FiUsers, FiBriefcase, FiEye, FiDownload } from "react-icons/fi";
import { LuCalendar, LuDollarSign } from "react-icons/lu";

export default function MetricsCards({ vendor, metrics }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
      <MetricCard
        icon={<FiUsers />}
        color="blue"
        value={vendor.recruiters}
        label="Total Recruiters"
      />
      <MetricCard
        icon={<FiBriefcase />}
        color="green"
        value={metrics.candidateInterviews}
        label="Candidates Handled"
      />
      <MetricCard
        icon={<FiEye />}
        color="purple"
        value={metrics.totalResumeViews}
        label="Resume Views"
      />
      <MetricCard
        icon={<FiDownload />}
        color="orange"
        value={metrics.totalResumeDownloads}
        label="Resume Downloads"
      />
      <MetricCard
        icon={<LuCalendar />}
        color="red"
        value={metrics.totalInterviews}
        label="Total Interviews"
      />
      <MetricCard
        icon={<LuDollarSign />}
        color="yellow"
        value={metrics.totalBalanceRemaining}
        label="Balance"
      />
    </div>
  );
}

function MetricCard({ icon, color, value, label }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center mb-2">
        {typeof icon === 'string' ? (
          <svg className={`w-4 h-4 text-${color}-600 mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        ) : (
          <div className={`w-4 h-4 mr-2 flex items-center justify-center ${color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'purple' ? 'text-purple-600' : color === 'orange' ? 'text-orange-600' : color === 'red' ? 'text-red-600' : 'text-yellow-600'}`}>
            {icon}
          </div>
        )}
        <p className="text-xs text-gray-600 whitespace-nowrap">{label}</p>
      </div>
      <p className="text-xl font-family-inter font-weight-500 text-[#0A0A0A]">{value}</p>
    </div>
  );
}
