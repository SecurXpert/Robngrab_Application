"use client";

import { useState, useEffect } from "react";
import { sampleInterviews } from '@/app/candidate/interview-management/Model/InterviewCard';
import InterviewCard from '@/app/candidate/interview-management/Model/InterviewCard';
import Calendar from '@/app/candidate/interview-management/Model/Calendar';
import InterviewDetailsModal from '@/app/candidate/interview-management/Model/InterviewDetailsModal';
import styles from '@/app/candidate/interview-management/Model/Styles';

// Main Orchestrator Component
export default function Interviews() {
  const [interviews, setInterviews] = useState(sampleInterviews);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCancelInterview = (id) => {
    setInterviews((prev) => prev.filter((i) => i.id !== id));
    setSelectedInterview(null);
  };

  // Client-mount guard to completely eliminate Next.js/React hydration mismatch errors
  if (!mounted) {
    return (
      <div style={{ ...styles.container, justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#0163D6", fontWeight: "600" }}>
          Loading scheduled interviews...
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h1 style={styles.sidebarTitle}>Scheduled Interviews</h1>
          <p style={styles.sidebarSubtitle}>Manage your upcoming interviews.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {interviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              interview={interview}
              isActive={selectedInterview?.id === interview.id}
              onClick={() => setSelectedInterview(interview)}
            />
          ))}
        </div>
      </aside>

      {/* MAIN CALENDAR PORTION */}
      <main style={styles.mainContent}>
        <div style={{ width: "100%", maxWidth: "1150px" }}>
          <div style={{ height: "16px" }} />
          <Calendar
            interviews={interviews}
            onEventClick={(interview) => setSelectedInterview(interview)}
          />
        </div>
      </main>

      {/* DETAILED INTERVIEW VIEW MODAL */}
      {selectedInterview && (
        <InterviewDetailsModal
          interview={selectedInterview}
          onClose={() => setSelectedInterview(null)}
          onCancel={handleCancelInterview}
        />
      )}
    </div>
  );
}
