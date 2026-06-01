import { UsersRound, TrendingUp, DollarSign } from "lucide-react";
import { LuCheckCheck, LuTrendingUp } from "react-icons/lu";

export default function MetricsCards({
  metrics,
  franchise,
  setIsRecruitersModalOpen,
  setIsActiveRecruitersModalOpen,
  setIsTotalCandidatesModalOpen,
  setIsRevenueModalOpen,
  setIsBalanceModalOpen,
}) {
  const MetricCard = ({ icon, title, value, growth, onClick }) => (
    <div
      className="bg-white border border-[#E5E7EB] rounded-2xl p-4"
      style={{
        boxShadow:
          "0px 1px 2px rgba(16,24,40,0.05), 0px 1px 3px rgba(16,24,40,0.1)",
      }}
    >
      <div className="mb-3">
        {icon}
        <p className="mt-3 text-sm text-[#4A5565]">{title}</p>
      </div>
      <p className="text-[28px] leading-[36px] font-bold text-[#0A0A0A] mb-4">
        {value}
      </p>
      <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#F3F4F6]">
        <span className="text-sm font-medium text-[#00A63E]">
          <div className="flex items-center gap-1 text-sm font-semibold text-[#00A63E]">
            <TrendingUp className="w-4 h-4 stroke-[2.5]" />
            {growth}
          </div>
        </span>
        <button
          onClick={onClick}
          className="text-sm font-medium text-[#0A0A0A]"
        >
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3 lg:grid-cols-5">
      <MetricCard
        icon={
          <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
            <UsersRound className="w-5 h-5 text-[#2563EB]" />
          </div>
        }
        title="Total Recruiters"
        value={franchise?.recruiters || "0"}
        growth="+12%"
        onClick={() => setIsRecruitersModalOpen(true)}
      />
      <MetricCard
        icon={
          <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center">
            <LuCheckCheck className="w-5 h-5 text-[#16A34A] stroke-[2.5]" />
          </div>
        }
        title="Active Recruiters"
        value={metrics?.candidateInterviews || "0"}
        growth="+8%"
        onClick={() => setIsActiveRecruitersModalOpen(true)}
      />
      <MetricCard
        icon={
          <div className="w-10 h-10 bg-[#FAF5FF] rounded-lg flex items-center justify-center">
            <UsersRound className="w-5 h-5 text-[#9333EA]" />
          </div>
        }
        title="Total Candidates"
        value={metrics?.totalResumeViews || "0"}
        growth="+15%"
        onClick={() => setIsTotalCandidatesModalOpen(true)}
      />
      <MetricCard
        icon={
          <div className="w-10 h-10 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
            <LuTrendingUp className="w-5 h-5 text-[#EA580C] stroke-[2.5]" />
          </div>
        }
        title="Total Revenue"
        value={metrics?.totalResumeDownloads || "$0"}
        growth="+6%"
        onClick={() => setIsRevenueModalOpen(true)}
      />
      <MetricCard
        icon={
          <div className="w-10 h-10 bg-[#FEF2F2] rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-[#DC2626]" />
          </div>
        }
        title="Balance Remaining"
        value={metrics?.totalBalanceRemaining || "$0"}
        growth="+18%"
        onClick={() => setIsBalanceModalOpen(true)}
      />
    </div>
  );
}
