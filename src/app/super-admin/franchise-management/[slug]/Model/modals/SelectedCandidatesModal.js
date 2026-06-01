"use client";

import { useState } from "react";
import { Search, Download, X } from "lucide-react";

export default function SelectedCandidatesModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const candidates = [
    {
      name: "Charlotte Lee",
      role: "Software Engineer",
      category: "IT",
      recruiter: "Sarah Johnson",
      date: "Feb 15, 2026",
      action: "Offer sent",
    },
    {
      name: "Benjamin Harris",
      role: "Operations Manager",
      category: "Non-IT",
      recruiter: "Mike Davis",
      date: "Feb 14, 2026",
      action: "Joined",
    },
    {
      name: "Amelia Clark",
      role: "UI/UX Designer",
      category: "IT",
      recruiter: "Lisa Anderson",
      date: "Feb 14, 2026",
      action: "Offer accepted",
    },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    const q = searchQuery.toLowerCase();

    return (
      candidate.name.toLowerCase().includes(q) ||
      candidate.role.toLowerCase().includes(q) ||
      candidate.recruiter.toLowerCase().includes(q)
    );
  });

  const handleExport = () => {
    const headers = [
      "Name",
      "Role",
      "Category",
      "Recruiter",
      "Date",
      "Action Taken",
      "Status",
    ];

    const rows = candidates.map((candidate) => [
      candidate.name,
      candidate.role,
      candidate.category,
      candidate.recruiter,
      candidate.date,
      candidate.action,
      "Selected",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "selected_candidates.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-48px)]">
        {/* Header & Search combined container without separating horizontal line */}
        <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Selected Candidates
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                Detailed view of selected candidates
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                setSearchQuery("");
              }}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative mt-3">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, role, or recruiter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Body / Scrollable Cards */}
        <div
          className="flex-1 px-6 pt-4 pb-6 space-y-4 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          <div className="mb-2">
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>

          {filteredCandidates.length > 0 ? (
            filteredCandidates.map((candidate, index) => (
              <div
                key={index}
                className="border border-[#E5E7EB] rounded-2xl p-5 bg-white shadow-xs mb-4"
              >
                {/* Top row: Name/Role & Selected Badge */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-900 leading-snug">
                      {candidate.name}
                    </h4>
                    <p className="text-[14px] text-gray-500 mt-0.5">
                      {candidate.role}
                    </p>
                  </div>
                  <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#ECFDF3] text-[#16A34A] flex-shrink-0 ml-3">
                    Selected
                  </span>
                </div>

                {/* Bottom row: 2-column grid */}
                <div className="grid grid-cols-2 gap-y-3 mt-3.5">
                  <div>
                    <p className="text-[12px] text-gray-400 leading-none mb-0.5">
                      Category
                    </p>
                    <p className="text-[14px] font-medium text-gray-900">
                      {candidate.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-gray-400 leading-none mb-0.5">
                      Recruiter
                    </p>
                    <p className="text-[14px] font-medium text-gray-900">
                      {candidate.recruiter}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-gray-400 leading-none mb-0.5">
                      Date
                    </p>
                    <p className="text-[14px] font-medium text-gray-900">
                      {candidate.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-gray-400 leading-none mb-0.5">
                      Action Taken
                    </p>
                    <p className="text-[14px] font-medium text-gray-900">
                      {candidate.action}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-[13px] text-gray-500 py-8">
              No candidates match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
