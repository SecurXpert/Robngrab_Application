"use client";

import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Phone,
  ChevronRight
} from "lucide-react";
import styles from '@/app/candidate/interview-management/Model/Styles';

// Sample interview data for testing - exactly matching layout and dates
const sampleInterviews = [
  {
    id: 1,
    jobTitle: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    status: "scheduled",
    date: "Feb 15, 2026",
    time: "2:00 PM",
    type: "video",
    fullDate: new Date("2026-02-15T14:00:00"),
  },
  {
    id: 2,
    jobTitle: "Product Designer",
    company: "DesignHub",
    status: "Rescheduled",
    date: "Feb 18, 2026",
    time: "10:30 AM",
    type: "video",
    originalTime: "Feb 17, 10:30 AM",
    fullDate: new Date("2026-02-18T10:30:00"),
  },
  {
    id: 3,
    jobTitle: "Full Stack Developer",
    company: "StartupXYZ",
    status: "scheduled",
    date: "Feb 20, 2026",
    time: "3:00 PM",
    type: "phone",
    fullDate: new Date("2026-02-20T15:00:00"),
  },
  {
    id: 4,
    jobTitle: "Backend Engineer",
    company: "CloudScale",
    status: "Rescheduled",
    date: "Feb 22, 2026",
    time: "11:00 AM",
    type: "video",
    originalTime: "Feb 20, 11:00 AM",
    fullDate: new Date("2026-02-22T11:00:00"),
  },
];

// Sidebar high-fidelity card component
export default function InterviewCard({ interview, onClick, isActive }) {
  const { jobTitle, company, status, date, time, type, originalTime } = interview;

  return (
    <div
      style={{
        ...styles.interviewCard,
        ...(isActive ? styles.interviewCardActive : {}),
      }}
      onClick={onClick}
      className="group"
    >
      {/* TOP ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "8px",
        }}
      >
        <div style={styles.jobTitle}>{jobTitle}</div>
        <span
          style={{
            ...styles.statusTag,
            ...styles[`status${status.charAt(0).toUpperCase() + status.slice(1)}`],
            position: "absolute",
            right: "20px",
            top: "20px",
          }}
        >
          {status}
        </span>
      </div>

      {/* COMPANY */}
      <div style={styles.companyName}>{company}</div>

      {/* METADATA */}
      <div style={styles.interviewMeta}>
        <div style={styles.metaItem}>
          <CalendarIcon size={15} color="#64748B" strokeWidth={2.5} />
          <span>{date}</span>
        </div>
        <div style={styles.metaItem}>
          <Clock size={15} color="#64748B" strokeWidth={2.5} />
          <span>{time}</span>
        </div>
        <div style={styles.metaItem}>
          {type === "phone" ? (
            <Phone size={15} color="#64748B" strokeWidth={2.5} />
          ) : (
            <Video size={15} color="#64748B" strokeWidth={2.5} />
          )}
          <span>{type === "phone" ? "Phone Call" : "Video Call"}</span>
        </div>
      </div>

      {/* RESCHEDULE DETAILS */}
      {originalTime && (
        <div style={styles.rescheduleInfo}>
          <div style={{ color: "#EA580C", fontWeight: "700" }}>
            Originally: {originalTime}
          </div>
          <div style={{ color: "#EA580C", fontWeight: "600", marginTop: "2px" }}>
            Updated Feb 14
          </div>
        </div>
      )}

      {/* ACTION CHEVRON */}
      <div style={styles.arrowIcon}>
        <ChevronRight size={18} />
      </div>
    </div>
  );
}

export { sampleInterviews };
