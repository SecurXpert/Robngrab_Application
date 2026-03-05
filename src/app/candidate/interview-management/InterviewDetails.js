"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { flushSync } from 'react-dom';

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f9fafb',
    padding: '24px',
  },
  card: {
    maxWidth: '600px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '24px',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  headerSubtitle: {
    fontSize: '14px',
    opacity: '0.9',
  },
  content: {
    padding: '32px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: '1px solid #e5e7eb',
  },
  detailRowLast: {
    borderBottom: 'none',
  },
  detailLabel: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: '16px',
    color: '#111827',
    fontWeight: '500',
    textAlign: 'right',
    maxWidth: '60%',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  badgeVideo: {
    background: '#dbeafe',
    color: '#1e40af',
  },
  linkContainer: {
    background: '#f3f4f6',
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  linkText: {
    fontSize: '14px',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
    flex: '1',
  },
  copyButton: {
    background: 'none',
    border: 'none',
    color: '#6b7280',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  },
  copyButtonHover: {
    backgroundColor: '#e5e7eb',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '32px',
  },
  button: {
    flex: '1',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: 'none',
  },
  rescheduleButton: {
    background: '#3b82f6',
    color: 'white',
  },
  rescheduleButtonHover: {
    background: '#2563eb',
  },
  cancelButton: {
    background: 'white',
    color: '#ef4444',
    border: '1px solid #ef4444',
  },
  cancelButtonHover: {
    background: '#fef2f2',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#6b7280',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    transition: 'background-color 0.2s',
  },
  backButtonHover: {
    backgroundColor: '#f3f4f6',
  },
  noInterview: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  noInterviewTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
  },
  noInterviewText: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '24px',
  },
  backButtonContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  icon: {
    width: '16px',
    height: '16px',
  }
};

// Sample interview data
const sampleInterviews = {
  1: {
    id: 1,
    jobTitle: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    round: 'Technical Round',
    date: 'February 16, 2026',
    time: '10:00 AM - 11:00 AM',
    mode: 'Video Call',
    meetingLink: 'https://meet.google.com/abc-defg-hij'
  },
  2: {
    id: 2,
    jobTitle: 'Product Designer',
    company: 'DesignHub',
    round: 'Design Review',
    date: 'February 16, 2026',
    time: '2:00 PM - 3:00 PM',
    mode: 'Video Call',
    meetingLink: 'https://meet.google.com/xyz-uvw-rst'
  },
  3: {
    id: 3,
    jobTitle: 'Backend Developer',
    company: 'DataDrive',
    round: 'System Design',
    date: 'February 17, 2026',
    time: '11:00 AM - 12:00 PM',
    mode: 'Video Call',
    meetingLink: 'https://meet.google.com/pqr-stu-vwx'
  },
  4: {
    id: 4,
    jobTitle: 'Marketing Manager',
    company: 'Growth Inc',
    round: 'Behavioral Round',
    date: 'February 18, 2026',
    time: '3:00 PM - 4:00 PM',
    mode: 'Video Call',
    meetingLink: 'https://meet.google.com/lmn-opq-rst'
  }
};

export default function InterviewDetails({ interviewId }) {
  const router = useRouter();
  const [interview, setInterview] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Get interview data based on ID
    const mockInterview = sampleInterviews[interviewId] || null;
    
    // Use flushSync to batch state update and avoid cascading renders
    flushSync(() => {
      setInterview(mockInterview);
    });
  }, [interviewId]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleReschedule = () => {
    // Navigate to generic reschedule page without ID
    router.push('/interviews/reschedule');
  };

  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel this interview?')) {
      // Handle cancellation
      alert('Interview cancelled');
      router.push('/interviews');
    }
  };

  const goBack = () => {
    router.push('/interviews');
  };

  if (!interview) {
    return (
      <div style={styles.container}>
        <div style={styles.backButtonContainer}>
          <button
            style={styles.backButton}
            onClick={goBack}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.backButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.backButton)}
          >
            <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Interviews
          </button>
        </div>
        <div style={styles.noInterview}>
          <div style={styles.noInterviewTitle}>Interview Not Found</div>
          <div style={styles.noInterviewText}>The interview you&apos;re looking for doesn&apos;t exist.</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.backButtonContainer}>
        <button
          style={styles.backButton}
          onClick={goBack}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.backButtonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.backButton)}
        >
          <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Interviews
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Interview Details</h1>
          <p style={styles.headerSubtitle}>Manage your upcoming interview</p>
        </div>

        <div style={styles.content}>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Job Title</span>
            <span style={styles.detailValue}>{interview.jobTitle}</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Company</span>
            <span style={styles.detailValue}>{interview.company}</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Round</span>
            <span style={styles.detailValue}>{interview.round}</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Schedule</span>
            <span style={styles.detailValue}>{interview.date}</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Time</span>
            <span style={styles.detailValue}>{interview.time}</span>
          </div>

          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Interview Mode</span>
            <span style={styles.detailValue}>
              <span style={{...styles.badge, ...styles.badgeVideo}}>
                {interview.mode}
              </span>
            </span>
          </div>

          <div style={{...styles.detailRow, ...styles.detailRowLast}}>
            <span style={styles.detailLabel}>Meeting Link</span>
            <div style={styles.linkContainer}>
              <a 
                href={interview.meetingLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.linkText}
              >
                {interview.meetingLink}
              </a>
              <button
                style={styles.copyButton}
                onClick={() => copyToClipboard(interview.meetingLink)}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.copyButtonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.copyButton)}
                title={copied ? "Copied!" : "Copy link"}
              >
                {copied ? (
                  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div style={styles.actions}>
            <button
              style={{...styles.button, ...styles.rescheduleButton}}
              onClick={handleReschedule}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.rescheduleButtonHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.rescheduleButton)}
            >
              Reschedule Interview
            </button>
            <button
              style={{...styles.button, ...styles.cancelButton}}
              onClick={handleCancel}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.cancelButtonHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.cancelButton)}
            >
              Cancel Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
