export default function StatsCards({ stats }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full">
      <StatCard label="Total Plans" value={stats.totalPlans} />
      <StatCard label="Active Plans" value={stats.activePlans} />
      <StatCard label="Total Subscribers" value={stats.totalSubscribers.toLocaleString()} />
      <StatCard label="Revenue (MRR)" value={`$${stats.mrr.toLocaleString()}`} />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm">
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className="mt-2 text-2xl font-medium text-[#0A0A0A]">{value}</p>
    </div>
  );
}
