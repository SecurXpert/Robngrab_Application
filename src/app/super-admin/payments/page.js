"use client";

import { useState } from "react";
import {
  FaDollarSign,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaDownload,
  FaSearch,
  FaFilter,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaCreditCard,
  FaSync,
  FaEllipsisV,
  FaChevronDown,
  FaEye,
  FaTimes,
} from "react-icons/fa";

import PaymentSuccessModal from "./sucesspage";
import PaymentPendingModal from "./pendingpage";
import PaymentFailedModal from "./failedpage";

const PaymentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("month");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const transactions = [
    {
      id: "PAY-2024-001",
      date: "Feb 18, 2026",
      customer: "John Smith",
      company: "TechCorp Inc.",
      plan: "Professional Plan",
      amount: "$79.00",
      method: "Credit Card",
      status: "Success",
    },
    {
      id: "PAY-2024-002",
      date: "Feb 18, 2026",
      customer: "Sarah Johnson",
      company: "Global Staffing Ltd.",
      plan: "Enterprise Plan",
      amount: "$899.00",
      method: "Bank Transfer",
      status: "Success",
    },
    {
      id: "PAY-2024-003",
      date: "Feb 17, 2026",
      customer: "Mike Davis",
      company: "Hire Solutions",
      plan: "Basic Plan",
      amount: "$29.00",
      method: "Credit Card",
      status: "Pending",
    },
    {
      id: "PAY-2024-004",
      date: "Feb 17, 2026",
      customer: "Emily Chen",
      company: "Elite Recruiters",
      plan: "Professional Plan",
      amount: "$79.00",
      method: "Credit Card",
      status: "Failed",
    },
    {
      id: "PAY-2024-005",
      date: "Feb 16, 2026",
      customer: "Robert Taylor",
      company: "Talent Bridge Co.",
      plan: "Basic Plan",
      amount: "$29.00",
      method: "PayPal",
      status: "Success",
    },
    {
      id: "PAY-2024-006",
      date: "Feb 16, 2026",
      customer: "Lisa Anderson",
      company: "ProStaff Agency",
      plan: "Enterprise Plan",
      amount: "$899.00",
      method: "Bank Transfer",
      status: "Success",
    },
    {
      id: "PAY-2024-007",
      date: "Feb 15, 2026",
      customer: "David Martinez",
      company: "NextGen Recruiting",
      plan: "Professional Plan",
      amount: "$79.00",
      method: "Credit Card",
      status: "Pending",
    },
    {
      id: "PAY-2024-008",
      date: "Feb 15, 2026",
      customer: "Jennifer White",
      company: "Apex Talent Group",
      plan: "Basic Plan",
      amount: "$29.00",
      method: "Credit Card",
      status: "Success",
    },
  ];

  const getStatusColor = (status) => {
    const styles = {
      Success: "bg-green-50 text-green-600 border-green-200",
      Pending: "bg-orange-50 text-orange-600 border-orange-200",
      Failed: "bg-red-50 text-red-600 border-red-200",
    };
    return styles[status] || "bg-gray-50 text-gray-600 border-gray-200";
  };

  const StatusBadge = ({ status }) => {
    return (
      <span
        className={`px-3 py-1 rounded-full border text-xs font-medium flex items-center justify-center w-fit gap-1 ${getStatusColor(status)}`}
      >
        {status === "Success" && (
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        )}
        {status === "Pending" && (
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        )}
        {status === "Failed" && (
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        )}
        {status}
      </span>
    );
  };

  const handleExport = () => {
    console.log("Export button clicked!");
    alert("Export button is working!");
  };

  const handleFilterChange = (filter) => {
    console.log("Filter changed:", filter);
    setStatusFilter(filter);
  };

  const handleDateChange = (date) => {
    console.log("Date changed:", date);
    setDateFilter(date);
  };

  const handleSearchChange = (value) => {
    console.log("Search:", value);
    setSearchTerm(value);
  };

  const handleViewTransaction = (id, status) => {
    console.log("View transaction:", id, "Status:", status);
    if (status === "Success") {
      setShowSuccessModal(true);
    } else if (status === "Pending") {
      setShowPendingModal(true);
    } else if (status === "Failed") {
      setShowFailedModal(true);
    } else {
      alert(`View button clicked for: ${id} (Status: ${status})`);
    }
  };

  /* Reusable Card */
  function Card({ icon, iconBg, title, value, sub }) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-4">
          <div
            className={`p-3 mt-1.5 rounded-lg ${iconBg} flex-shrink-0 flex items-center justify-center`}
          >
            {icon}
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-xl font-semibold text-gray-900">{value}</h3>
            <span className="text-sm text-gray-500 block mt-1">{title}</span>
          </div>
        </div>
        {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
      </div>
    );
  }

  /* Payment Method Card */
  function PaymentMethod({ icon, iconBg, name, count, percent }) {
    return (
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${iconBg}`}>{icon}</div>
        <div>
          <h4 className="text-sm text-gray-600">{name}</h4>
          <p className="text-lg font-semibold text-gray-900">{count}</p>
          <p className="text-xs text-gray-400">{percent}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Payments
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Track and manage all payment transactions
            </p>
          </div>

          <button
            onClick={handleExport}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition w-full sm:w-auto"
          >
            <FaDownload size={18} />
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <Card
            icon={<FaDollarSign className="text-green-600" />}
            iconBg="bg-green-100"
            title="Total Revenue"
            value="$2,410.83"
          />
          <Card
            icon={<FaCheckCircle className="text-blue-600" />}
            iconBg="bg-blue-100"
            title="Successful Payments"
            value="8"
          />
          <Card
            icon={<FaClock className="text-yellow-600" />}
            iconBg="bg-yellow-100"
            title="Pending Payments"
            value="3"
          />
          <Card
            icon={<FaTimesCircle className="text-red-600" />}
            iconBg="bg-red-100"
            title="Failed Payments"
            value="2"
          />
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 w-full shadow-sm">
            <FaSearch size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer, company, payment ID..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="ml-2 w-full outline-none text-sm text-gray-600 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 min-w-[180px] shadow-sm">
              <FaFilter size={16} className="text-gray-600 mr-2" />
              <select
                value={statusFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="outline-none text-sm text-gray-600 bg-transparent"
              >
                <option value="all">All Status</option>
                <option value="success">Success</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              <FaChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Prior Information */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Prior Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <Card
            icon={<FaChartLine className="text-purple-600" />}
            iconBg="bg-purple-100"
            title="Monthly Growth"
            value="+18.5%"
            sub="Compared to last month"
          />
          <Card
            icon={<FaUsers className="text-blue-600" />}
            iconBg="bg-blue-100"
            title="Active Customers"
            value="1,247"
            sub="Currently subscribed"
          />
          <Card
            icon={<FaDollarSign className="text-cyan-600" />}
            iconBg="bg-cyan-100"
            title="Average Transaction"
            value="$301.35"
            sub="Per successful payment"
          />
          <Card
            icon={<FaCalendarAlt className="text-green-600" />}
            iconBg="bg-green-100"
            title="This Month"
            value="$2,410.83"
            sub="February 2026"
          />
        </div>

        {/* Payment Method Distribution */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Payment Method Distribution
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <PaymentMethod
              icon={<FaCreditCard className="text-blue-600" />}
              iconBg="bg-blue-100"
              name="Credit Card"
              count="5"
              percent="38% of total"
            />
            <PaymentMethod
              icon={<FaDollarSign className="text-green-600" />}
              iconBg="bg-green-100"
              name="Bank Transfer"
              count="2"
              percent="15% of total"
            />
            <PaymentMethod
              icon={<FaCreditCard className="text-purple-600" />}
              iconBg="bg-purple-100"
              name="PayPal"
              count="1"
              percent="8% of total"
            />
          </div>
        </div>

        {/* EMI Overview */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          EMI Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <Card
            icon={<FaSync className="text-indigo-600" />}
            iconBg="bg-indigo-100"
            title="Total EMI Plans"
            value="5"
          />
          <Card
            icon={<FaCheckCircle className="text-green-600" />}
            iconBg="bg-green-100"
            title="Active EMIs"
            value="4"
          />
          <Card
            icon={<FaTimesCircle className="text-red-600" />}
            iconBg="bg-red-100"
            title="Overdue EMIs"
            value="1"
          />
          <Card
            icon={<FaCalendarAlt className="text-blue-600" />}
            iconBg="bg-blue-100"
            title="EMI Revenue"
            value="$475.83"
          />
        </div>

        {/* Active EMI Plans */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Active EMI Plans
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Customer
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Plan
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Total Amount
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Installment
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Tenure
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Paid/Remaining
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Next Due
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-medium whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    name: "Michael Brown",
                    company: "Premier Staffing Solutions",
                    plan: "Enterprise Plan",
                    total: "$899.00",
                    installment: "$299.67",
                    tenure: "3 months",
                    paid: "1 / 3",
                    nextDue: "Mar 18, 2026",
                    status: "Active",
                  },
                  {
                    name: "Amanda Wilson",
                    company: "Workforce Dynamics Inc.",
                    plan: "Professional Plan",
                    total: "$79.00",
                    installment: "$26.33",
                    tenure: "3 months",
                    paid: "1 / 3",
                    nextDue: "Mar 17, 2026",
                    status: "Active",
                  },
                  {
                    name: "Christopher Lee",
                    company: "Elite Talent Network",
                    plan: "Enterprise Plan",
                    total: "$899.00",
                    installment: "$149.83",
                    tenure: "6 months",
                    paid: "2 / 6",
                    nextDue: "Mar 16, 2026",
                    status: "Active",
                  },
                  {
                    name: "Jessica Moore",
                    company: "Strategic Hiring Partners",
                    plan: "Professional Plan",
                    total: "$79.00",
                    installment: "$19.75",
                    tenure: "4 months",
                    paid: "2 / 4",
                    nextDue: "Feb 19, 2026",
                    status: "Active",
                  },
                  {
                    name: "Daniel Garcia",
                    company: "Prime Recruiting Group",
                    plan: "Enterprise Plan",
                    total: "$899.00",
                    installment: "$224.75",
                    tenure: "4 months",
                    paid: "1 / 4",
                    nextDue: "Feb 10, 2026",
                    status: "Overdue",
                  },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-2 sm:px-4 py-3 sm:py-4">
                      <div className="font-semibold text-gray-800 text-sm">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {item.company}
                      </div>
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-sm">
                      {item.plan}
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-gray-800 text-sm">
                      {item.total}
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-sm">
                      {item.installment}
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-sm">
                      {item.tenure}
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-sm">
                      {item.paid}
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-sm">
                      {item.nextDue}
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-2 sm:px-4 py-3 sm:py-4">
                      <button
                        onClick={() =>
                          handleViewTransaction(item.name, item.status)
                        }
                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                      >
                        <FaEllipsisV size={14} />
                        <span className="hidden sm:inline">View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Recent Transactions Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
          {/* Header */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Recent Transactions
            </h2>
            <span className="text-sm text-gray-500">
              {transactions.length} transactions found
            </span>
          </div>

          {/* Table with Horizontal Scroll */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-gray-400 text-sm uppercase tracking-wider">
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Payment ID
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Customer
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Company
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Plan
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Amount
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Method
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-2 sm:px-6 py-4 font-medium text-center whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-2 sm:px-6 py-4 text-sm font-bold text-gray-700">
                      {row.id}
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-sm text-gray-600">
                      {row.date}
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-sm font-bold text-gray-800">
                      {row.customer}
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-sm text-gray-400">
                      {row.company}
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-sm text-gray-500">
                      {row.plan}
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-sm font-bold text-gray-900">
                      {row.amount}
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-sm text-gray-500">
                      {row.method}
                    </td>
                    <td className="px-2 sm:px-6 py-4">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-2 sm:px-6 py-4 text-center">
                      <button
                        onClick={() =>
                          handleViewTransaction(row.id, row.status)
                        }
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                      >
                        <FaEye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            Showing 1 to 4 of 1,234 transactions
          </p>
          <div className="flex gap-2 justify-center sm:justify-start">
            <button
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-[70] backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-md max-h-[90vh] overflow-auto">
              <PaymentSuccessModal />
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <FaTimes size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        )}

        {/* Pending Modal */}
        {showPendingModal && (
          <div className="fixed inset-0 z-[70] backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-md max-h-[90vh] overflow-auto">
              <PaymentPendingModal />
              <button
                onClick={() => setShowPendingModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <FaTimes size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        )}

        {/* Failed Modal */}
        {showFailedModal && (
          <div className="fixed inset-0 z-[70] backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-md max-h-[90vh] overflow-auto">
              <PaymentFailedModal />
              <button
                onClick={() => setShowFailedModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <FaTimes size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentsPage;
