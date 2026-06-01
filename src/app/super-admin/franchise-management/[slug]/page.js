"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { displayFieldError } from '@/utils/validation';
import { SAMPLE_RECRUITERS } from '@/utils/franchiseManagementConstants';

// Import Components
import FranchiseHeader from '@/app/super-admin/franchise-management/[slug]/Model/FranchiseHeader';
import FranchiseInfo from '@/app/super-admin/franchise-management/[slug]/Model/FranchiseInfo';
import MetricsCards from '@/app/super-admin/franchise-management/[slug]/Model/MetricsCards';
import HiringMetricsDashboard from '@/app/super-admin/franchise-management/[slug]/Model/HiringMetricsDashboard';
import ActivityStatus from '@/app/super-admin/franchise-management/[slug]/Model/ActivityStatus';
import RecruiterTable from '@/app/super-admin/franchise-management/[slug]/Model/RecruiterTable';
import FranchiseActions from '@/app/super-admin/franchise-management/[slug]/Model/FranchiseActions';
import LoadingState from '@/app/super-admin/franchise-management/[slug]/Model/LoadingState';

// Import Modals
import ShortlistedModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/ShortlistedModal';
import SelectedCandidatesModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/SelectedCandidatesModal';
import InterviewProcessModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/InterviewProcessModal';
import GenericModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/GenericModal';
import FranchiseHistoryModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/FranchiseHistoryModal';
import EditFranchiseModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/EditFranchiseModal';
import RecruiterDetailsModal from '@/app/super-admin/franchise-management/[slug]/Model/modals/RecruiterDetailsModal';

import {
  TotalResumeViewsModal,
  TotalResumeDownloadsModal,
  RejectedCandidatesModal,
} from '@/app/super-admin/franchise-management/[slug]/Model/modals/HiringMetricsModals';

import {
  TotalRecruitersModal,
  ActiveRecruitersModal,
  TotalCandidatesModal,
} from '@/app/super-admin/franchise-management/[slug]/Model/modals/PerformanceModals';

import {
  TotalRevenueModal,
  BalanceDetailsModal,
} from '@/app/super-admin/franchise-management/[slug]/Model/modals/FinanceModals';

export default function FranchiseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const franchiseId = params.slug;

  // Modal States
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRecruitersModalOpen, setIsRecruitersModalOpen] = useState(false);
  const [isActiveRecruitersModalOpen, setIsActiveRecruitersModalOpen] = useState(false);
  const [isTotalCandidatesModalOpen, setIsTotalCandidatesModalOpen] = useState(false);
  const [isRevenueModalOpen, setIsRevenueModalOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [isInterviewProcessModalOpen, setIsInterviewProcessModalOpen] = useState(false);
  const [isMetricsModalOpen, setIsMetricsModalOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isShortlistedModalOpen, setIsShortlistedModalOpen] = useState(false);
  const [isSelectedCandidatesModalOpen, setIsSelectedCandidatesModalOpen] = useState(false);

  // Data States
  const [vendors, setVendors] = useState([]);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [metricsSearchQuery, setMetricsSearchQuery] = useState("");
  const [editFormData, setEditFormData] = useState({});
  const [editFormErrors, setEditFormErrors] = useState({});
  const [realTimeErrors, setRealTimeErrors] = useState({});

  const cardConfig = {
    shortlisted: { icon: "UserCheck", color: "blue", value: 47, label: "Shortlisted Candidates", modal: "shortlisted" },
    interviewProcess: { icon: "Activity", color: "purple", value: 89, label: "Interview Process", modal: "interviewProcess" },
    interviewScheduled: { icon: "CiCalendar", color: "green", value: 23, label: "Interview Scheduled", modal: "interviewScheduled" },
    interviewCompleted: { icon: "CircleCheckBig", color: "red", value: 156, label: "Interview Completed", modal: "interviewCompleted" },
    rejectedCandidates: { icon: "FaRegCircleXmark", color: "orange", value: 67, label: "Rejected Candidates", modal: "rejectedCandidates" },
    selectedCandidates: { icon: "CircleCheckBig", color: "yellow", value: 34, label: "Selected Candidates", modal: "selectedCandidates" },
    totalResumeViews: { icon: "FiEye", color: "indigo", value: 45, label: "Total Resume Views", modal: "totalResumeViews" },
    totalResumeDownloads: { icon: "FiDownload", color: "pink", value: 38, label: "Total Resume Downloads", modal: "totalResumeDownloads" },
    totalBalanceRemaining: { icon: "DollarSign", color: "gray", value: 12, label: "Total Balance Remaining", modal: "totalBalanceRemaining" },
  };

  const openRecruiterModal = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setIsRecruiterModalOpen(true);
  };

  const closeRecruiterModal = () => {
    setIsRecruiterModalOpen(false);
    setSelectedRecruiter(null);
  };

  const openMetricsModal = (metricType) => {
    setSelectedMetric(metricType);
    setIsMetricsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleRealTimeValidation(name, value);
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRealTimeValidation = (fieldName, value) => {
    const errors = { ...realTimeErrors };
    delete errors[fieldName];
    if (fieldName.includes("name") || fieldName === "franchiseName" || fieldName === "ownerName" || fieldName === "regionState" || fieldName === "city") {
      if (value && !/^[a-zA-Z\s\-\.'']*$/.test(value)) {
        errors[fieldName] = "Only letters, spaces, hyphens, and apostrophes allowed";
      }
    }
    if (fieldName.includes("phone") || fieldName === "phoneNumber" || fieldName === "contactPhone") {
      if (value && !/^[\d\s\+\-\(\)]*$/.test(value)) {
        errors[fieldName] = "Only numbers, spaces, and phone symbols allowed";
      }
    }
    if (fieldName.includes("email") || fieldName === "ownerEmail" || fieldName === "contactEmail") {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[fieldName] = "Please enter a valid email address";
      }
    }
    setRealTimeErrors(errors);
  };

  const handleUpdateFranchise = (updatedFranchiseData) => {
    if (Object.keys(realTimeErrors).length > 0) return;

    const requiredFields = { name: "Franchise Name", email: "Contact Email", phone: "Contact Phone", location: "Address" };
    const newErrors = {};
    Object.entries(requiredFields).forEach(([field, label]) => {
      if (!updatedFranchiseData[field] || updatedFranchiseData[field].trim() === "") {
        newErrors[field] = `${label} is required`;
      }
    });

    if (updatedFranchiseData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedFranchiseData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (updatedFranchiseData.phone && updatedFranchiseData.phone.replace(/[\s\+\-\(\)]/g, '').length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setEditFormErrors(newErrors);
      return;
    }

    setEditFormErrors({});
    setRealTimeErrors({});

    const savedFranchises = localStorage.getItem("franchises");
    if (savedFranchises) {
      const allFranchises = JSON.parse(savedFranchises);
      const updatedFranchises = allFranchises.map((f) =>
        f.id.toString() === franchiseId
          ? { ...f, ...updatedFranchiseData, city: updatedFranchiseData.city || f.city, state: updatedFranchiseData.state || f.state }
          : f
      );
      localStorage.setItem("franchises", JSON.stringify(updatedFranchises));
      setVendors(updatedFranchises.map(enrichFranchise));
      window.dispatchEvent(new CustomEvent("franchiseUpdated"));
    }
    setIsEditModalOpen(false);
  };

  const downloadCSV = (filename, headers, rows) => {
    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportRecruiters = () => {
    const headers = ["Name", "Role", "Status", "Active Time", "Inactive Time", "Last Action"];
    const rows = SAMPLE_RECRUITERS.map((r) => [r.name, r.role, r.status, r.activeTime, r.inactiveTime, r.lastAction]);
    downloadCSV("total_recruiters.csv", headers, rows);
  };

  const handleExportActiveRecruiters = () => {
    const activeRecruiters = SAMPLE_RECRUITERS.filter((r) => r.status === "Active");
    const headers = ["Name", "Role", "Active Time", "Inactive Time", "Last Action"];
    const rows = activeRecruiters.map((r) => [r.name, r.role, r.activeTime, r.inactiveTime, r.lastAction]);
    downloadCSV("active_recruiters.csv", headers, rows);
  };

  const handleExportTotalCandidates = () => {
    const headers = ["Category", "Count"];
    const rows = [["Total", "1847"], ["IT Category", "1234"], ["Non-IT", "613"]];
    downloadCSV("total_candidates.csv", headers, rows);
  };

  const handleExportRevenue = () => {
    const headers = ["Metric", "Value"];
    const rows = [["Total Revenue", franchise?.revenue || "$128K"], ["This Month", "$42K"], ["Growth Rate", "+18% increase from last month"]];
    downloadCSV("revenue_details.csv", headers, rows);
  };

  const handleExportBalance = () => {
    const headers = ["Metric", "Value"];
    const rows = [["Current Balance", franchise?.balance || "$45K"], ["Available Credit", "$85K"], ["Payment Status", "All payments up to date"]];
    downloadCSV("balance_details.csv", headers, rows);
  };

  const handleDownloadReports = () => {
    const headers = ["Category / Section", "Metric / Detail", "Value"];
    const rows = [
      ["Franchise Info", "Franchise ID", franchise?.id || "N/A"],
      ["Franchise Info", "Franchise Name", franchise?.name || "N/A"],
      ["Franchise Info", "Status", franchise?.status || "N/A"],
      ["Franchise Info", "Contact Phone", franchise?.phone || "N/A"],
      ["Franchise Info", "Contact Email", franchise?.email || "N/A"],
      ["Financial & Activity", "Revenue", franchise?.revenue || "N/A"],
      ["Financial & Activity", "Balance", franchise?.balance || "N/A"],
    ];
    const fileName = `${(franchise?.name || "franchise").toLowerCase().replace(/[^a-z0-9]/g, "_")}_report.csv`;
    downloadCSV(fileName, headers, rows);
  };

  const handleDisableFranchise = () => {
    if (confirm("Are you sure you want to disable this franchise?")) {
      const savedFranchises = localStorage.getItem("franchises");
      if (savedFranchises) {
        const allFranchises = JSON.parse(savedFranchises);
        const updated = allFranchises.filter((f) => f.id.toString() !== franchiseId);
        localStorage.setItem("franchises", JSON.stringify(updated));
        window.dispatchEvent(new CustomEvent("franchiseUpdated"));
      }
      router.push("/super-admin/franchise-management");
    }
  };

  const enrichFranchise = (f) => ({
    ...f,
    location: f.location || (f.city && f.state ? `${f.city}, ${f.state}` : "Not available"),
    subscription: f.subscription || (f.plan ? (f.plan.toLowerCase().includes("plan") ? f.plan : `${f.plan} Plan`) : "Not available"),
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFranchises = localStorage.getItem("franchises");
      if (savedFranchises) {
        setVendors(JSON.parse(savedFranchises).map(enrichFranchise));
      } else {
        const fallbackFranchises = [
          {
            id: 1, name: "Tech Solutions Inc.", email: "contact@techsolutionsinc.com", category: "IT", recruiters: 48, active: "42 active", status: "Active", balance: "$45K bal.", city: "Silicon Valley", state: "California, USA", location: "Silicon Valley, California, USA", phone: "+1 800 555 1234", plan: "Enterprise", subscription: "Enterprise Plan", candidates: "1,847", revenue: "$128K", activeTime: "6h 45m", inactiveTime: "1h 15m", idleTime: "45m",
          },
          {
            id: 2, name: "Global Staffing Ltd.", email: "info@globalstaffing.com", category: "Non-IT", recruiters: 62, active: "58 active", status: "Active", balance: "$62K bal.", city: "New York", state: "New York, USA", location: "New York, New York, USA", phone: "+1 800 555 2345", plan: "Enterprise", subscription: "Enterprise Plan", candidates: "2,134", revenue: "$185K", activeTime: "5h 30m", inactiveTime: "2h 00m", idleTime: "30m",
          },
          {
            id: 3, name: "Elite Recruiters Co.", email: "hello@eliterecruiter.com", category: "IT", recruiters: 35, active: "32 active", status: "Active", balance: "$38K bal.", city: "Austin", state: "Texas, USA", location: "Austin, Texas, USA", phone: "+1 800 555 3456", plan: "Professional", subscription: "Professional Plan", candidates: "1,523", revenue: "$95K", activeTime: "4h 15m", inactiveTime: "3h 30m", idleTime: "1h 15m",
          },
        ];
        setVendors(fallbackFranchises);
      }
    }
  }, []);

  const franchise = vendors.find((v) => v.id.toString() === franchiseId) || vendors[0];

  if (!franchise || vendors.length === 0) {
    return <LoadingState />;
  }

  const metrics = {
    totalResumes: franchise?.candidates || "1,847",
    candidateInterviews: franchise?.active ? franchise.active.toString().replace(" active", "") : (franchise?.recruiters || "42"),
    totalResumeViews: franchise?.candidates || "1,847",
    totalResumeDownloads: franchise?.revenue || "$128K",
    totalBalanceRemaining: franchise?.balance || "$45K bal.",
  };

  const activities = [
    { date: "Feb 18, 2026 - 12:30 PM", action: "Status changed to Active", type: "active" },
    { date: "Feb 18, 2026 - 01:00 PM", action: "Status changed to Idle", type: "idle" },
    { date: "Feb 18, 2026 - 02:15 PM", action: "Status changed to Active", type: "active" },
    { date: "Feb 17, 2026 - 06:00 PM", action: "Franchise logged out", type: "logout" },
    { date: "Feb 17, 2026 - 09:00 AM", action: "Franchise enabled by Super Admin", type: "enabled" },
  ];

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <Link href="/super-admin/franchise-management" className="inline-flex items-center mb-4 text-[16px] font-medium text-[#0A0A0A] hover:text-gray-700">
            <ArrowLeft className="w-5 h-5 mr-2 text-[#0A0A0A]" />
            Back to Franchise
          </Link>
          <FranchiseHeader franchise={franchise} />
        </div>

        {/* Content Sections */}
        <FranchiseInfo franchise={franchise} />

        <MetricsCards
          franchise={franchise}
          metrics={metrics}
          setIsRecruitersModalOpen={setIsRecruitersModalOpen}
          setIsActiveRecruitersModalOpen={setIsActiveRecruitersModalOpen}
          setIsTotalCandidatesModalOpen={setIsTotalCandidatesModalOpen}
          setIsRevenueModalOpen={setIsRevenueModalOpen}
          setIsBalanceModalOpen={setIsBalanceModalOpen}
        />

        <HiringMetricsDashboard
          cardConfig={cardConfig}
          setIsShortlistedModalOpen={setIsShortlistedModalOpen}
          setIsSelectedCandidatesModalOpen={setIsSelectedCandidatesModalOpen}
          setIsInterviewProcessModalOpen={setIsInterviewProcessModalOpen}
          openMetricsModal={openMetricsModal}
        />

        <ActivityStatus franchise={franchise} activities={activities} />

        <RecruiterTable
          SAMPLE_RECRUITERS={SAMPLE_RECRUITERS}
          openRecruiterModal={openRecruiterModal}
        />

        <FranchiseActions
          setEditFormData={setEditFormData}
          setEditFormErrors={setEditFormErrors}
          setRealTimeErrors={setRealTimeErrors}
          setIsEditModalOpen={setIsEditModalOpen}
          setIsHistoryModalOpen={setIsHistoryModalOpen}
          handleDownloadReports={handleDownloadReports}
          handleDisableFranchise={handleDisableFranchise}
        />

        {/* Modals */}
        <FranchiseHistoryModal isOpen={isHistoryModalOpen} onClose={() => setIsHistoryModalOpen(false)} />
        <EditFranchiseModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          franchise={franchise}
          editFormData={editFormData}
          editFormErrors={editFormErrors}
          realTimeErrors={realTimeErrors}
          handleInputChange={handleInputChange}
          handleUpdateFranchise={handleUpdateFranchise}
          displayFieldError={displayFieldError}
        />
        <TotalRecruitersModal isOpen={isRecruitersModalOpen} onClose={() => setIsRecruitersModalOpen(false)} franchise={franchise} handleExportRecruiters={handleExportRecruiters} />
        <ActiveRecruitersModal isOpen={isActiveRecruitersModalOpen} onClose={() => setIsActiveRecruitersModalOpen(false)} handleExportActiveRecruiters={handleExportActiveRecruiters} />
        <TotalCandidatesModal isOpen={isTotalCandidatesModalOpen} onClose={() => setIsTotalCandidatesModalOpen(false)} handleExportTotalCandidates={handleExportTotalCandidates} />
        <TotalRevenueModal isOpen={isRevenueModalOpen} onClose={() => setIsRevenueModalOpen(false)} franchise={franchise} handleExportRevenue={handleExportRevenue} />
        <BalanceDetailsModal isOpen={isBalanceModalOpen} onClose={() => setIsBalanceModalOpen(false)} franchise={franchise} handleExportBalance={handleExportBalance} />

        <ShortlistedModal isOpen={isShortlistedModalOpen} onClose={() => setIsShortlistedModalOpen(false)} searchQuery={metricsSearchQuery} setSearchQuery={setMetricsSearchQuery} downloadCSV={downloadCSV} />
        <SelectedCandidatesModal isOpen={isSelectedCandidatesModalOpen} onClose={() => setIsSelectedCandidatesModalOpen(false)} searchQuery={metricsSearchQuery} setSearchQuery={setMetricsSearchQuery} downloadCSV={downloadCSV} />
        <InterviewProcessModal isOpen={isInterviewProcessModalOpen} onClose={() => setIsInterviewProcessModalOpen(false)} downloadCSV={downloadCSV} />
        <TotalResumeViewsModal isOpen={selectedMetric === "totalResumeViews"} onClose={() => setSelectedMetric(null)} searchQuery={metricsSearchQuery} setSearchQuery={setMetricsSearchQuery} downloadCSV={downloadCSV} />
        <TotalResumeDownloadsModal isOpen={selectedMetric === "totalResumeDownloads"} onClose={() => setSelectedMetric(null)} searchQuery={metricsSearchQuery} setSearchQuery={setMetricsSearchQuery} downloadCSV={downloadCSV} />
        <RejectedCandidatesModal isOpen={selectedMetric === "rejectedCandidates"} onClose={() => setSelectedMetric(null)} searchQuery={metricsSearchQuery} setSearchQuery={setMetricsSearchQuery} downloadCSV={downloadCSV} />

        <RecruiterDetailsModal
          isOpen={isRecruiterModalOpen}
          onClose={closeRecruiterModal}
          recruiter={selectedRecruiter}
        />

      </div>
    </div>
  );
}
