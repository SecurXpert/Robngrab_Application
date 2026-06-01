import { LuX, LuDownload } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

const TableModalHeader = ({ title, subtitle, onClose, searchQuery, setSearchQuery }) => (
  <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-100">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
      </div>
      <button
        onClick={() => {
          onClose();
          setSearchQuery("");
        }}
        className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
      >
        <LuX className="w-5 h-5" />
      </button>
    </div>

    <div className="relative mt-3">
      <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search by name, role, or recruiter..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

const MetricsCard = ({ item, badgeStyle }) => (
  <div className="border border-[#E5E7EB] rounded-2xl p-5 bg-white shadow-xs mb-4">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="text-[16px] font-semibold text-gray-900 leading-snug">
          {item.name}
        </h4>
        <p className="text-[14px] text-gray-500 mt-0.5">{item.role}</p>
      </div>
      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ml-3 ${badgeStyle}`}>
        {item.status}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-y-3 mt-3.5">
      <div>
        <p className="text-[12px] text-gray-400 leading-none mb-0.5">Category</p>
        <p className="text-[14px] font-medium text-gray-900">{item.category}</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-400 leading-none mb-0.5">Recruiter</p>
        <p className="text-[14px] font-medium text-gray-900">{item.recruiter}</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-400 leading-none mb-0.5">Date</p>
        <p className="text-[14px] font-medium text-gray-900">{item.date}</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-400 leading-none mb-0.5">Action Taken</p>
        <p className="text-[14px] font-medium text-gray-900">{item.actionTaken}</p>
      </div>
    </div>
  </div>
);

export function TotalResumeViewsModal({ isOpen, onClose, searchQuery, setSearchQuery, downloadCSV }) {
  if (!isOpen) return null;

  const data = [
    {
      name: "Sarah Williams",
      role: "Full Stack Developer",
      category: "IT",
      recruiter: "Sarah Johnson",
      date: "Feb 19, 2026",
      actionTaken: "47 views",
      status: "Viewed",
    },
    {
      name: "Daniel Zhang",
      role: "Product Manager",
      category: "Non-IT",
      recruiter: "Mike Davis",
      date: "Feb 19, 2026",
      actionTaken: "38 views",
      status: "Viewed",
    },
    {
      name: "Rachel Cooper",
      role: "Backend Developer",
      category: "IT",
      recruiter: "Sarah Johnson",
      date: "Feb 18, 2026",
      actionTaken: "35 views",
      status: "Viewed",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.recruiter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-48px)]">
        <TableModalHeader
          title="Total Resume Views"
          subtitle="Detailed view of total resume views"
          onClose={onClose}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div
          className="flex-1 px-6 pt-4 pb-6 space-y-4 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="mb-2">
            <button
              onClick={() => {
                const headers = ["Name", "Role", "Category", "Recruiter", "Date", "Action Taken"];
                const rows = data.map((d) => [d.name, d.role, d.category, d.recruiter, d.date, d.actionTaken]);
                downloadCSV("total_resume_views.csv", headers, rows);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors"
            >
              <LuDownload className="w-4 h-4" />
              Export Data
            </button>
          </div>
          {filteredData.map((item, index) => (
            <MetricsCard key={index} item={item} badgeStyle="bg-[#FEFCE8] text-[#A65F00]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TotalResumeDownloadsModal({ isOpen, onClose, searchQuery, setSearchQuery, downloadCSV }) {
  if (!isOpen) return null;

  const data = [
    {
      name: "Matthew Collins",
      role: "Senior Software Engineer",
      category: "IT",
      recruiter: "Sarah Johnson",
      date: "Feb 19, 2026",
      actionTaken: "12 downloads",
      status: "Downloaded",
    },
    {
      name: "Victoria James",
      role: "Marketing Director",
      category: "Non-IT",
      recruiter: "Mike Davis",
      date: "Feb 19, 2026",
      actionTaken: "11 downloads",
      status: "Downloaded",
    },
    {
      name: "Andrew Peterson",
      role: "Data Scientist",
      category: "IT",
      recruiter: "Lisa Anderson",
      date: "Feb 18, 2026",
      actionTaken: "10 downloads",
      status: "Downloaded",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.recruiter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-48px)]">
        <TableModalHeader
          title="Total Resume Downloads"
          subtitle="Detailed view of total resume downloads"
          onClose={onClose}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div
          className="flex-1 px-6 pt-4 pb-6 space-y-4 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="mb-2">
            <button
              onClick={() => {
                const headers = ["Name", "Role", "Category", "Recruiter", "Date", "Action Taken"];
                const rows = data.map((d) => [d.name, d.role, d.category, d.recruiter, d.date, d.actionTaken]);
                downloadCSV("total_resume_downloads.csv", headers, rows);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors"
            >
              <LuDownload className="w-4 h-4" />
              Export Data
            </button>
          </div>
          {filteredData.map((item, index) => (
            <MetricsCard key={index} item={item} badgeStyle="bg-[#FEFCE8] text-[#A65F00]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function RejectedCandidatesModal({ isOpen, onClose, searchQuery, setSearchQuery, downloadCSV }) {
  if (!isOpen) return null;

  const data = [
    {
      name: "Noah Thompson",
      role: "DevOps Engineer",
      category: "IT",
      recruiter: "David Martinez",
      date: "Feb 15, 2026",
      actionTaken: "Skills mismatch",
      status: "Rejected",
    },
    {
      name: "Mia Anderson",
      role: "HR Manager",
      category: "Non-IT",
      recruiter: "Sarah Johnson",
      date: "Feb 15, 2026",
      actionTaken: "Experience gap",
      status: "Rejected",
    },
    {
      name: "Ethan White",
      role: "Marketing Manager",
      category: "Non-IT",
      recruiter: "Lisa Anderson",
      date: "Feb 14, 2026",
      actionTaken: "Budget constraints",
      status: "Rejected",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.recruiter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-48px)]">
        <TableModalHeader
          title="Rejected Candidates"
          subtitle="Detailed view of rejected candidates"
          onClose={onClose}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div
          className="flex-1 px-6 pt-4 pb-6 space-y-4 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="mb-2">
            <button
              onClick={() => {
                const headers = ["Name", "Role", "Category", "Recruiter", "Date", "Action Taken"];
                const rows = data.map((d) => [d.name, d.role, d.category, d.recruiter, d.date, d.actionTaken]);
                downloadCSV("rejected_candidates.csv", headers, rows);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors"
            >
              <LuDownload className="w-4 h-4" />
              Export Data
            </button>
          </div>
          {filteredData.map((item, index) => (
            <MetricsCard key={index} item={item} badgeStyle="bg-[#FEF2F2] text-[#DC2626]" />
          ))}
        </div>
      </div>
    </div>
  );
}
