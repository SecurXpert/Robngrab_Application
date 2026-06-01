import { useState } from "react";
import { Search, Download } from "lucide-react";
import GenericModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/GenericModal';

export default function ShortlistedModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const candidates = [
    {
      name: "John Smith",
      role: "Software Engineer",
      category: "IT",
      recruiter: "Sarah Johnson",
      date: "Feb 18, 2026",
    },
    {
      name: "Emily Chen",
      role: "Data Analyst",
      category: "IT",
      recruiter: "Mike Davis",
      date: "Feb 18, 2026",
    },
    {
      name: "Robert Taylor",
      role: "HR Manager",
      category: "Non-IT",
      recruiter: "Lisa Anderson",
      date: "Feb 17, 2026",
    },
    {
      name: "Jennifer White",
      role: "Sales Executive",
      category: "Non-IT",
      recruiter: "David Martinez",
      date: "Feb 17, 2026",
    },
    {
      name: "Michael Brown",
      role: "DevOps Engineer",
      category: "IT",
      recruiter: "Sarah Johnson",
      date: "Feb 16, 2026",
    },
  ];

  const filteredCandidates = candidates.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.recruiter.toLowerCase().includes(q)
    );
  });

  const handleExport = () => {
    const headers = ["Name", "Role", "Category", "Recruiter", "Date", "Status"];
    const rows = candidates.map((c) => [
      c.name,
      c.role,
      c.category,
      c.recruiter,
      c.date,
      "Shortlisted",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "shortlisted_candidates.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <GenericModal
      isOpen={isOpen}
      onClose={onClose}
      title="Shortlisted Candidates"
      subtitle="Detailed view of shortlisted candidates"
      showExportButton={false}
    >
      {/* Search */}
      <div className="relative mb-3">
        <Search className="absolute w-3.5 h-3.5 text-gray-400 left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by name, role, or recruiter..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-10 pl-10 pr-4 border border-[#D1D5DB] rounded-xl text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Export Button */}
      <div className="mb-3">
        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Export Data
        </button>
      </div>

      {/* Candidate Cards */}
      <div className="space-y-2.5">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate, index) => (
            <div
              key={index}
              className="border border-[#E5E7EB] rounded-xl p-4 bg-white"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[15px] font-semibold text-[#111827]">
                    {candidate.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-[#6B7280]">
                    {candidate.role}
                  </p>
                </div>
                <span className="px-3 py-1 text-[11px] font-medium text-[#2563EB] bg-[#EFF6FF] rounded-full">
                  Shortlisted
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <p className="text-[11px] text-[#6B7280] mb-0.5">Category</p>
                  <p className="text-[13px] font-medium text-[#111827]">
                    {candidate.category}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6B7280] mb-0.5">Recruiter</p>
                  <p className="text-[13px] font-medium text-[#111827]">
                    {candidate.recruiter}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#6B7280] mb-0.5">Date</p>
                  <p className="text-[13px] font-medium text-[#111827]">
                    {candidate.date}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[13px] text-[#6B7280] py-6">
            No candidates match your search.
          </p>
        )}
      </div>
    </GenericModal>
  );
}
