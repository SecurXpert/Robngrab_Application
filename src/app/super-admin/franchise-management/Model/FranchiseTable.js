"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function FranchiseTable({ filteredFranchises }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead className="bg-[#fafafa] border-b border-gray-200">
          <tr>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Franchise Name
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Category
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Location
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Contact
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Recruiters
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Candidates
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Revenue
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Plan
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Status
            </th>
            <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredFranchises.map((item, index) => (
            <tr
              key={index}
              className="transition duration-200 border-b border-gray-100 hover:bg-gray-50 text-gray-900"
            >
              {/* Franchise */}
              <td className="px-3 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#eef4ff] flex items-center justify-center text-[#2563eb] text-xs font-semibold">
                    {item.logo}
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-[10px] text-gray-500">
                      {item.joined}
                    </p>
                  </div>
                </div>
              </td>

              {/* Category */}
              <td className="px-3 py-3">
                <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg whitespace-nowrap">
                  {item.category}
                </span>
              </td>

              {/* Location */}
              <td className="px-3 py-3">
                <div className="flex gap-1">
                  <MapPin size={12} className="text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-medium text-gray-800">
                      {item.city}
                    </h3>
                    <p className="text-[10px] text-gray-500">
                      {item.state}
                    </p>
                  </div>
                </div>
              </td>

              {/* Contact */}
              <td className="px-3 py-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Mail size={10} />
                    <span className="text-xs truncate max-w-[100px]">
                      {item.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Phone size={10} />
                    <span className="text-xs">{item.phone}</span>
                  </div>
                </div>
              </td>

              {/* Recruiters */}
              <td className="px-3 py-3">
                <h3 className="text-sm font-bold text-gray-900">
                  {item.recruiters}
                </h3>
                <p className="text-xs text-green-600">{item.active}</p>
              </td>

              {/* Candidates */}
              <td className="px-3 py-3">
                <h3 className="text-sm font-bold text-gray-900">
                  {item.candidates}
                </h3>
              </td>

              {/* Revenue */}
              <td className="px-3 py-3">
                <h3 className="text-sm font-bold text-gray-900">
                  {item.revenue}
                </h3>
                <p className="text-xs text-gray-500">{item.balance}</p>
              </td>

              {/* Plan */}
              <td className="px-3 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap
                  ${
                    item.plan === "Enterprise"
                      ? "bg-purple-100 text-purple-700"
                      : item.plan === "Professional"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.plan}
                </span>
              </td>

              {/* Status */}
              <td className="px-3 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium
                  ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              {/* Action */}
              <td className="px-3 py-3">
                <Link
                  href={`/super-admin/franchise-management/${item.id}`}
                  className="flex items-center gap-1 text-xs font-medium text-gray-900 transition hover:text-blue-600"
                >
                  View
                  <ChevronRight size={12} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
