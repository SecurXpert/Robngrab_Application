"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  AlertCircle,
  Video,
  Copy,
  Phone,
  X,
  Check
} from "lucide-react";
import styles from '@/app/candidate/interview-management/Model/Styles';

export default function InterviewDetailsModal({ interview, onClose, onCancel }) {
  const [copied, setCopied] = useState(false);

  if (!interview) return null;

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>

        {/* Header info */}
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Interview Details</h2>
          <p style={styles.modalSubtitle}>View and manage your upcoming interview</p>
        </div>

        {/* Main job and status block */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "800",
                color: "#0F172A",
                margin: "0 0 6px 0",
                lineHeight: "1.3",
              }}
            >
              {interview.jobTitle}
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#64748B",
                margin: "0 0 12px 0",
              }}
            >
              {interview.company}
            </p>
            <span
              style={{
                background: "#F1F5F9",
                color: "#475569",
                fontSize: "12px",
                fontWeight: "600",
                padding: "6px 12px",
                borderRadius: "8px",
              }}
            >
              {interview.round || "Technical Round 1"}
            </span>
          </div>

          <span
            style={{
              ...styles.statusTag,
              ...styles[
                `status${
                  interview.status.charAt(0).toUpperCase() +
                  interview.status.slice(1)
                }`
              ],
              fontSize: "13px",
              fontWeight: "600",
              padding: "6px 14px",
            }}
          >
            {interview.status}
          </span>
        </div>

        <hr style={styles.divider} />

        {/* Schedule specifics */}
        <p
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#0F172A",
            margin: "0 0 12px 0",
          }}
        >
          Schedule
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          {/* Date Card */}
          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "12px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              border: "1px solid #F1F5F9",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "white",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CalendarIcon size={18} color="#0163D6" strokeWidth={2.5} />
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#0F172A",
                  margin: "0 0 2px 0",
                }}
              >
                {interview.date}
              </p>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>Date</p>
            </div>
          </div>

          {/* Time Card */}
          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "12px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              border: "1px solid #F1F5F9",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "white",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Clock size={18} color="#0163D6" strokeWidth={2.5} />
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#0F172A",
                  margin: "0 0 2px 0",
                }}
              >
                {interview.time}
              </p>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                IST (GMT+5:30)
              </p>
            </div>
          </div>

          {/* Rescheduled warning pill */}
          {interview.status.toLowerCase() === "rescheduled" && (
            <div
              style={{
                background: "#FFFBEB",
                border: "1px solid #FEF3C7",
                borderRadius: "12px",
                padding: "14px 18px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <AlertCircle
                size={18}
                color="#D97706"
                strokeWidth={2.5}
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#B45309",
                    margin: "0 0 4px 0",
                  }}
                >
                  Rescheduled
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#B45309",
                    lineHeight: "1.4",
                    margin: "0 0 2px 0",
                  }}
                >
                  Previously: {interview.originalTime || "Feb 17, 10:30 AM"}
                </p>
                <p style={{ fontSize: "12px", color: "#D97706", margin: 0 }}>
                  Updated on Feb 14, 2026
                </p>
              </div>
            </div>
          )}
        </div>

        <hr style={styles.divider} />

        {/* Mode selection block */}
        <p
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#0F172A",
            margin: "0 0 12px 0",
          }}
        >
          Interview Mode
        </p>

        <div
          style={{
            background: "#F8FAFC",
            borderRadius: "12px",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "20px",
            border: "1px solid #F1F5F9",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: "1.5px solid #0163D6",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {interview.type === "phone" ? (
              <Phone size={20} color="#0163D6" strokeWidth={2.5} />
            ) : (
              <Video size={20} color="#0163D6" strokeWidth={2.5} />
            )}
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#0F172A",
                margin: "0 0 2px 0",
              }}
            >
              {interview.type === "phone" ? "Phone Call" : "Video Call"}
            </p>
            <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
              {interview.type === "phone"
                ? "Inbound phone call from recruiter"
                : "Virtual meeting video room"}
            </p>
          </div>
        </div>

        {/* Meet Link copy container */}
        <p
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#0F172A",
            margin: "0 0 8px 0",
          }}
        >
          {interview.type === "phone" ? "Phone Contact" : "Meeting Link"}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
            padding: "10px 14px",
            gap: "12px",
            background: "#F8FAFC",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#475569",
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {interview.type === "phone"
              ? "+1 (555) 019-2834"
              : "https://meet.google.com/abc-defg-hij"}
          </span>
          <button
            onClick={() =>
              handleCopyLink(
                interview.type === "phone"
                  ? "+1 (555) 019-2834"
                  : "https://meet.google.com/abc-defg-hij"
              )
            }
            style={{
              border: "1px solid #E2E8F0",
              background: "white",
              borderRadius: "8px",
              width: "34px",
              height: "34px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
            className="hover:bg-slate-50"
          >
            {copied ? (
              <Check size={15} color="#10B981" strokeWidth={3} />
            ) : (
              <Copy size={15} color="#64748B" strokeWidth={2.5} />
            )}
          </button>
        </div>

        <hr style={styles.divider} />

        {/* Recruiter Details */}
        <p
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#0F172A",
            margin: "0 0 12px 0",
          }}
        >
          Interviewer
        </p>

        <div
          style={{
            background: "#F8FAFC",
            borderRadius: "12px",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "28px",
            border: "1px solid #F1F5F9",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0163D6 0%, #AD46FF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "white",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            {(interview.interviewer?.name || "David Park").charAt(0)}
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#0F172A",
                margin: "0 0 2px 0",
              }}
            >
              {interview.interviewer?.name || "David Park"}
            </p>
            <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
              {interview.interviewer?.title || "Senior Engineering Architect"}
            </p>
          </div>
        </div>

        {/* Form actions: Reschedule / Cancel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            style={{
              width: "100%",
              background: "#0163D6",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "14px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(1, 99, 214, 0.2)",
            }}
            className="hover:bg-blue-700"
          >
            Reschedule Interview
          </button>

          <button
            onClick={() => onCancel(interview.id)}
            style={{
              width: "100%",
              background: "white",
              color: "#EF4444",
              border: "1.5px solid #EF4444",
              borderRadius: "999px",
              padding: "14px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            className="hover:bg-red-50"
          >
            Cancel Interview
          </button>
        </div>
      </div>
    </div>
  );
}
