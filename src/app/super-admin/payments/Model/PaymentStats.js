import { LuDollarSign, LuCircleCheckBig, LuClock, LuCircleX, LuSearch, LuFilter, LuChevronDown, LuTrendingUp, LuUsers, LuCalendar, LuCreditCard, LuRepeat } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";

const Card = ({ icon, iconBg, title, value, sub }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className={`p-3 mt-1.5 rounded-lg ${iconBg} flex-shrink-0 flex items-center justify-center`}>{icon}</div>
      <div className="flex-1 text-left">
        <span className="text-sm text-[#4A5565] block">{title}</span>
        <h3 className="text-xl font-medium text-[#0A0A0A]">{value}</h3>
      </div>
    </div>
    {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
  </div>
);

const PaymentMethod = ({ icon, iconBg, name, count, percent }) => (
  <div className="flex items-center gap-4">
    <div className={`p-3 rounded-lg ${iconBg}`}>{icon}</div>
    <div>
      <h4 className="text-sm text-[#4A5565]">{name}</h4>
      <p className="text-lg font-medium text-[#0A0A0A]">{count}</p>
      <p className="text-xs text-[#6A7282]">{percent}</p>
    </div>
  </div>
);

export default function PaymentStats({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, handleExport }) {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-medium text-[#0A0A0A]">Payments</h1>
          <p className="text-md text-[#4A5565] mt-1">Track and manage all payment transactions</p>
        </div>
        <button onClick={handleExport} className="flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm transition w-full sm:w-auto">
          <FiDownload size={18} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <Card icon={<LuDollarSign className="text-[#00A63E]" />} iconBg="bg-[#F0FDF4]" title="Total Revenue" value="$2,410.83" />
        <Card icon={<LuCircleCheckBig className="text-blue-600" />} iconBg="bg-[#EFF6FF]" title="Successful Payments" value="8" />
        <Card icon={<LuClock className="text-yellow-600" />} iconBg="bg-[#FEFCE8]" title="Pending Payments" value="3" />
        <Card icon={<LuCircleX className="text-red-600" />} iconBg="bg-[#FEF2F2]" title="Failed Payments" value="2" />
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-3">
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-5 w-full shadow-sm">
          <LuSearch size={18} className="text-[#99A1AF]" />
          <input
            type="text"
            placeholder="Search by customer, company, payment ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 w-full outline-none text-sm text-[#0A0A0A80]"
          />
        </div>
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 min-w-[350px] shadow-sm">
          <LuFilter size={18} className="text-[#99A1AF] mr-2" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="outline-none text-md text-[#0A0A0A] bg-transparent flex-1 appearance-none"
          >
            <option value="all">All Status</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          <LuChevronDown size={16} className="text-gray-600 ml-2" />
        </div>
      </div>

      {/* Prior Information */}
      <h2 className="text-lg font-medium text-[#0A0A0A] mb-2">Prior Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4">
        <Card icon={<LuTrendingUp className="text-[#9810FA]" />} iconBg="bg-[#FAF5FF]" title="Monthly Growth" value="+18.5%" sub="Compared to last month" />
        <Card icon={<LuUsers className="text-[#4F39F6]" />} iconBg="bg-[#EEF2FF]" title="Active Customers" value="1,247" sub="Currently subscribed" />
        <Card icon={<LuDollarSign className="text-[#0092B8]" />} iconBg="bg-[#ECFEFF]" title="Average Transaction" value="$301.35" sub="Per successful payment" />
        <Card icon={<LuCalendar className="text-[#009966]" />} iconBg="bg-[#ECFDF5]" title="This Month" value="$2,410.83" sub="February 2026" />
      </div>

      {/* Payment Method Distribution */}
      <h2 className="text-lg font-medium text-[#0A0A0A] mb-2">Payment Method Distribution</h2>
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <PaymentMethod icon={<LuCreditCard className="text-[#155DFC]" />} iconBg="bg-[#EFF6FF]" name="Credit Card" count="5" percent="38% of total" />
          <PaymentMethod icon={<LuDollarSign className="text-[#00A63E]" />} iconBg="bg-[#F0FDF4]" name="Bank Transfer" count="2" percent="15% of total" />
          <PaymentMethod icon={<LuCreditCard className="text-[#9810FA]" />} iconBg="bg-[#FAF5FF]" name="PayPal" count="1" percent="8% of total" />
        </div>
      </div>
    </>
  );
}
