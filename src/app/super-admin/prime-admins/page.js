"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { INITIAL_ADMIN_DATA, TABS } from "@/utils/primeAdminsConstants";

export default function PrimeAdmins() {
  const [activeTab, setActiveTab] = useState("Prime Creator");
  const [searchTerm, setSearchTerm] = useState("");
  const [adminData, setAdminData] = useState(INITIAL_ADMIN_DATA);

  // Stats always derived from live state
  const totalAdmins = Object.values(adminData).reduce(
    (s, arr) => s + arr.length,
    0,
  );
  const statsCards = [
    { title: "Total Admins", value: String(totalAdmins) },
    {
      title: "Prime Creator",
      value: String(adminData["Prime Creator"]?.length || 0),
    },
    {
      title: "Prime Accountant",
      value: String(adminData["Prime Accountant"]?.length || 0),
    },
    {
      title: "Prime IT Services",
      value: String(adminData["Prime IT Services"]?.length || 0),
    },
  ];

  const handleDelete = (adminId, role) => {
    if (!confirm("Are you sure you want to delete this admin?")) return;
    setAdminData((prev) => ({
      ...prev,
      [role]: prev[role].filter((a) => a.id !== adminId),
    }));
  };

  const filteredAdmins = (adminData[activeTab] || []).filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #F8F9FF 0%, #FCFCFF 100%)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 px-3 pt-10 pb-4 sm:px-6 lg:px-8 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Prime Admins
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage Prime Admin roles and permissions
          </p>
        </div>
        <Link
          href="/super-admin/prime-admins/manage?mode=create"
          className="flex items-center px-3 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-lg sm:px-4 hover:bg-blue-700"
        >
          <FiPlus className="w-4 h-4" />
          <span className="hidden text-sm font-medium sm:inline">
            Create Admin
          </span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="px-3 py-4 sm:px-6 lg:px-8 sm:py-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="p-3 bg-white border border-gray-200 shadow-sm rounded-2xl sm:p-6"
            >
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs + Search + Table */}
      <div className="px-3 pb-4 sm:px-6 lg:px-8 sm:pb-6">
        {/* Tabs */}
        <div className="mb-4 sm:mb-6">
          <div className="flex space-x-4 overflow-hidden border-b border-gray-200 sm:space-x-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-1 pb-3 text-sm font-bold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                  activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-4 bg-white border border-gray-200 shadow-sm rounded-2xl sm:mb-6">
          <div className="px-2 py-1 sm:px-4 sm:py-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search admins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-300">
                  {[
                    "Name",
                    "Email",
                    "Role",
                    "Status",
                    "Created Date",
                    "Last Login",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-xs font-bold text-left text-gray-800 sm:px-6 sm:py-3 sm:text-sm"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-3 py-6 text-sm text-center text-gray-500 sm:px-6 sm:py-12"
                    >
                      No admins found for this role
                    </td>
                  </tr>
                ) : (
                  filteredAdmins.map((admin) => (
                    <tr key={admin.id} className="border-t border-gray-100">
                      <td className="px-3 py-2 text-sm font-medium text-gray-900 sm:px-6 sm:py-4">
                        {admin.name}
                      </td>
                      <td className="px-3 py-2 text-sm text-gray-600 sm:px-6 sm:py-4">
                        {admin.email}
                      </td>
                      <td className="px-3 py-2 text-sm text-gray-600 sm:px-6 sm:py-4">
                        {admin.role}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            admin.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {admin.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-sm text-gray-600 sm:px-6 sm:py-4">
                        {admin.createdDate}
                      </td>
                      <td className="px-3 py-2 text-sm text-gray-600 sm:px-6 sm:py-4">
                        {admin.lastLogin}
                      </td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <Link
                            href={`/super-admin/prime-admins/manage?mode=edit&id=${admin.id}&name=${encodeURIComponent(admin.name)}&email=${encodeURIComponent(admin.email)}&role=${encodeURIComponent(admin.role)}`}
                            className="hover:text-blue-800"
                            style={{ color: "rgba(74, 85, 101, 1)" }}
                            title="Edit Admin"
                          >
                            <FiEdit2 className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(admin.id, admin.role)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete Admin"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
