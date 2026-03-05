export default function StatsCards({ stats }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <StatCard label="Total Recruiters" value={stats.total} />
      <StatCard label="Active" value={stats.active} />
      <StatCard label="Pending" value={stats.pending} />
      <StatCard label="Total Active Jobs" value={stats.totalActiveJobs} />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-md">
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
