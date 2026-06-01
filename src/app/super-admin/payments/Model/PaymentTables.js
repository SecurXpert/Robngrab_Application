import { LuRepeat, LuCircleCheckBig, LuCircleX, LuCalendar, LuCircleCheckBig as LuCircleCheck, LuClock4, LuCircleX as LuCircleXMark } from "react-icons/lu";
import { FiEye } from "react-icons/fi";

const StatusBadge = ({ status }) => {
  const styles = {
    Success: "bg-green-50 text-green-600 border-green-200",
    Pending: "bg-orange-50 text-orange-600 border-orange-200",
    Failed: "bg-red-50 text-red-600 border-red-200",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center justify-center w-fit gap-1 ${styles[status]}`}>
      {status === "Success" && <LuCircleCheck size={12} className="text-[#008236]" />}
      {status === "Pending" && <LuClock4 size={12} className="text-[#A65F00]" />}
      {status === "Failed" && <LuCircleXMark size={12} className="text-[#C10007]" />}
      {status}
    </span>
  );
};

export default function PaymentTables({ transactions, handleViewTransaction }) {
  const emiData = [
    { name: "Michael Brown", company: "Premier Staffing", plan: "Enterprise Plan", total: "$899.00", installment: "$299.67", tenure: "3 months", paid: "1 / 3", nextDue: "Mar 18, 2026", status: "Active" },
    { name: "Amanda Wilson", company: "Workforce Dynamics", plan: "Professional Plan", total: "$79.00", installment: "$26.33", tenure: "3 months", paid: "1 / 3", nextDue: "Mar 17, 2026", status: "Active" },
  ];

  return (
    <>
      {/* EMI Overview */}
      <h2 className="text-lg font-medium text-[#0A0A0A] mb-4">EMI Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: <LuRepeat />, title: "Total EMI Plans", value: "5", bg: "bg-[#EEF2FF]", text: "text-[#4F39F6]" },
          { icon: <LuCircleCheckBig />, title: "Active EMIs", value: "4", bg: "bg-[#F0FDF4]", text: "text-[#00A63E]" },
          { icon: <LuCircleX />, title: "Overdue EMIs", value: "1", bg: "bg-[#FEF2F2]", text: "text-[#E7000B]" },
          { icon: <LuCalendar />, title: "EMI Revenue", value: "$475.83", bg: "bg-[#EFF6FF]", text: "text-[#155DFC]" }
        ].map((card, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${card.bg} ${card.text}`}>{card.icon}</div>
              <div><p className="text-sm text-[#4A5565]">{card.title}</p><h3 className="text-xl font-medium">{card.value}</h3></div>
            </div>
          </div>
        ))}
      </div>

      {/* EMI Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#F9FAFB] text-[#6A7282] border-b">
              <tr>
                {["Customer", "Plan", "Total", "Installment", "Tenure", "Paid", "Next Due", "Status", "Actions"].map(h => (
                  <th key={h} className="px-4 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {emiData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-4"><div className="font-medium">{item.name}</div><div className="text-xs text-gray-500">{item.company}</div></td>
                  <td className="px-4 py-4">{item.plan}</td>
                  <td className="px-4 py-4 font-semibold">{item.total}</td>
                  <td className="px-4 py-4">{item.installment}</td>
                  <td className="px-4 py-4">{item.tenure}</td>
                  <td className="px-4 py-4">{item.paid}</td>
                  <td className="px-4 py-4">{item.nextDue}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === "Active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{item.status}</span>
                  </td>
                  <td className="px-4 py-4"><button onClick={() => handleViewTransaction(null, item.status, item)} className="text-blue-600 flex items-center gap-1"><FiEye /> View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Recent Transactions</h2>
        <span className="text-sm text-gray-500">{transactions.length} transactions found</span>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-[#F9FAFB] border-b text-sm text-gray-500">
              <tr>
                {["ID", "Date", "Customer", "Company", "Plan", "Amount", "Method", "Status", "Actions"].map(h => (
                  <th key={h} className="px-6 py-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map(t => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{t.id}</td>
                  <td className="px-6 py-4">{t.date}</td>
                  <td className="px-6 py-4 font-medium">{t.customer}</td>
                  <td className="px-6 py-4">{t.company}</td>
                  <td className="px-6 py-4">{t.plan}</td>
                  <td className="px-6 py-4 font-medium">{t.amount}</td>
                  <td className="px-6 py-4">{t.method}</td>
                  <td className="px-6 py-4"><StatusBadge status={t.status} /></td>
                  <td className="px-6 py-4 text-center"><button onClick={() => handleViewTransaction(t.id, t.status)} className="text-blue-600"><FiEye size={18} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0A0A0A] mb-6">Top Subscription Plans</h3>
          <div className="space-y-4">
            {[
              { name: "Enterprise Plan", count: "5 payments", width: "50%", color: "bg-[#00C950]" },
              { name: "Professional Plan", count: "5 payments", width: "50%", color: "bg-[#2B7FFF]" },
              { name: "Basic Plan", count: "3 payments", width: "30%", color: "bg-[#AD46FF]" }
            ].map(plan => (
              <div key={plan.name}>
                <div className="flex justify-between mb-2 text-sm"><span className="text-gray-600 font-medium">{plan.name}</span><span className="font-medium">{plan.count}</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2"><div className={`${plan.color} h-2 rounded-full`} style={{width: plan.width}}></div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { title: "Success payment from John Smith", plan: "Professional Plan - $79.00", date: "Feb 18, 2026" },
              { title: "Success payment from Sarah Johnson", plan: "Enterprise Plan - $899.00", date: "Feb 18, 2026" },
              { title: "Failed payment from Emily Chen", plan: "Professional Plan - $79.00", date: "Feb 17, 2026" }
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3">
                <div className="w-2 h-2 rounded-full mt-2 bg-blue-500"></div>
                <div><p className="text-sm font-medium">{activity.title}</p><p className="text-sm text-gray-500">{activity.plan}</p><p className="text-xs text-gray-400 mt-1">{activity.date}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

