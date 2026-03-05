"use client";

import { useRouter } from 'next/navigation';
import styles from './InterviewCard.module.css';

// Sample interview data for testing
const sampleInterviews = [
  {
    id: 1,
    jobTitle: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    status: 'scheduled',
    date: 'Mon, Feb 16',
    time: '10:00 AM',
    type: 'video',
    fullDate: new Date('2026-02-16T10:00:00')
  },
  {
    id: 2,
    jobTitle: 'Product Designer',
    company: 'DesignHub',
    status: 'Rescheduled',
    date: 'Mon, Feb 16',
    time: '2:00 PM',
    type: 'video',
    originalTime: '11:00 AM',
    fullDate: new Date('2026-02-16T14:00:00')
  },
  {
    id: 3,
    jobTitle: 'Backend Developer',
    company: 'DataDrive',
    status: 'scheduled',
    date: 'Tue, Feb 17',
    time: '11:00 AM',
    type: 'video',
    fullDate: new Date('2026-02-17T11:00:00')
  },
  {
    id: 4,
    jobTitle: 'Marketing Manager',
    company: 'Growth Inc',
    status: 'scheduled',
    date: 'Wed, Feb 18',
    time: '3:00 PM',
    type: 'video',
    fullDate: new Date('2026-02-18T15:00:00')
  }
];

export default function InterviewCard({ interview }) {
  const router = useRouter();
  const { jobTitle, company, status, date, time, type, originalTime } = interview;

  const handleClick = () => {
    router.push('/candidate/interview-management/interview-details');
  };

  return (
    <div className={styles.interviewCard} onClick={handleClick}>
      <div className={styles.interviewContent}>
        <div className={styles.jobTitle}>{jobTitle}</div>
        <div className={styles.companyName}>{company}</div>
        <div className={styles.interviewMeta}>
          <span className={`${styles.statusTag} ${styles[`status${status.charAt(0).toUpperCase() + status.slice(1)}`]}`}>
            {status}
          </span>
          <span>{date}</span>
          <span>{time}</span>
          {type === 'video' && (
            <svg className={styles.videoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </div>
        {originalTime && (
          <div className={styles.rescheduleInfo}>
            Rescheduled from {originalTime}
          </div>
        )}
      </div>
      <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// Export sample data for use in parent components
export { sampleInterviews };
