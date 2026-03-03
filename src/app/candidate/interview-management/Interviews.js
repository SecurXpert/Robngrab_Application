"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sampleInterviews } from './InterviewCard';

// Combined styles for the entire interview management system
const styles = {
  container: {
    display: 'flex',
    minHeight: 'calc(100vh - 80px)',
    background: '#f9fafb',
  },
  sidebar: {
    width: '380px',
    background: 'white',
    borderRight: '1px solid #e5e7eb',
    padding: '24px',
    overflowY: 'auto',
  },
  sidebarHeader: {
    marginBottom: '24px',
  },
  sidebarTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px',
  },
  sidebarSubtitle: {
    fontSize: '14px',
    color: '#6b7280',
  },
  mainContent: {
    flex: '1',
    padding: '24px',
    overflowY: 'auto',
  },
  interviewCard: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interviewCardHover: {
    borderColor: '#3b82f6',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.1)',
  },
  interviewContent: {
    flex: '1',
  },
  jobTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px',
  },
  companyName: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '8px',
  },
  interviewMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '13px',
    color: '#6b7280',
  },
  statusTag: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  statusScheduled: {
    background: '#dbeafe',
    color: '#1e40af',
  },
  statusRescheduled: {
    background: '#fef3c7',
    color: '#92400e',
  },
  videoIcon: {
    width: '16px',
    height: '16px',
    color: '#6b7280',
  },
  arrowIcon: {
    width: '16px',
    height: '16px',
    color: '#9ca3af',
  },
  rescheduleInfo: {
    fontSize: '11px',
    color: '#92400e',
    marginTop: '4px',
  },
  calendarContainer: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  },
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  calendarTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
  },
  calendarNavigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
    color: '#6b7280',
    transition: 'background-color 0.2s',
  },
  navButtonHover: {
    backgroundColor: '#f3f4f6',
  },
  todayButton: {
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  todayButtonHover: {
    background: '#2563eb',
  },
  viewSelector: {
    display: 'flex',
    gap: '4px',
    background: '#f3f4f6',
    padding: '2px',
    borderRadius: '6px',
  },
  viewButton: {
    background: 'none',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '13px',
    cursor: 'pointer',
    color: '#6b7280',
    transition: 'all 0.2s',
  },
  viewButtonActive: {
    background: 'white',
    color: '#111827',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  interviewCount: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '16px',
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1px',
    background: '#e5e7eb',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  weekdayHeader: {
    background: '#f9fafb',
    padding: '12px 8px',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
  },
  calendarDay: {
    background: 'white',
    minHeight: '80px',
    padding: '8px',
    position: 'relative',
  },
  dayNumber: {
    fontSize: '13px',
    color: '#111827',
    marginBottom: '4px',
  },
  dayNumberOtherMonth: {
    color: '#d1d5db',
  },
  dayNumberToday: {
    background: '#3b82f6',
    color: 'white',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  interviewEvent: {
    background: '#dbeafe',
    borderLeft: '3px solid #3b82f6',
    padding: '2px 6px',
    marginBottom: '2px',
    borderRadius: '2px',
    fontSize: '11px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  interviewEventHover: {
    background: '#bfdbfe',
  },
  eventTime: {
    color: '#1e40af',
    fontWeight: '500',
  },
  eventTitle: {
    color: '#1e40af',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  eventCompany: {
    color: '#6b7280',
    fontSize: '10px',
  },
  '@media (max-width: 1024px)': {
    container: {
      flexDirection: 'column',
    },
    sidebar: {
      width: '100%',
      borderRight: 'none',
      borderBottom: '1px solid #e5e7eb',
    },
  },
};

// InterviewCard Component
function InterviewCard({ interview }) {
  const router = useRouter();
  const { jobTitle, company, status, date, time, type, originalTime } = interview;

  const handleClick = () => {
    router.push('/candidate/interview-management/details');
  };

  return (
    <div 
      style={styles.interviewCard}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, styles.interviewCardHover);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, styles.interviewCard);
      }}
      onClick={handleClick}
    >
      <div style={styles.interviewContent}>
        <div style={styles.jobTitle}>{jobTitle}</div>
        <div style={styles.companyName}>{company}</div>
        <div style={styles.interviewMeta}>
          <span style={{...styles.statusTag, ...styles[`status${status.charAt(0).toUpperCase() + status.slice(1)}`]}}>
            {status}
          </span>
          <span>{date}</span>
          <span>{time}</span>
          {type === 'video' && (
            <svg style={styles.videoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </div>
        {originalTime && (
          <div style={styles.rescheduleInfo}>
            Rescheduled from {originalTime}
          </div>
        )}
      </div>
      <svg style={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// Calendar Component
function Calendar({ interviews }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add previous month's trailing days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Add next month's leading days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const getInterviewsForDay = (date) => {
    return interviews.filter(interview => {
      const interviewDate = new Date(interview.fullDate);
      return interviewDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getDaysInMonth(currentDate);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const today = new Date();

  return (
    <div style={styles.calendarContainer}>
      <div style={styles.calendarHeader}>
        <h2 style={styles.calendarTitle}>{monthYear}</h2>
        <div style={styles.calendarNavigation}>
          <div style={styles.viewSelector}>
            {['Day', 'Week', 'Month'].map(view => (
              <button
                key={view}
                style={{
                  ...styles.viewButton,
                  ...(viewMode === view.toLowerCase() ? styles.viewButtonActive : {})
                }}
                onClick={() => setViewMode(view.toLowerCase())}
              >
                {view}
              </button>
            ))}
          </div>
          <button 
            style={styles.todayButton}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.todayButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.todayButton)}
            onClick={goToToday}
          >
            Today
          </button>
          <button 
            style={styles.navButton}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.navButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.navButton)}
            onClick={() => navigateMonth(-1)}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            style={styles.navButton}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.navButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.navButton)}
            onClick={() => navigateMonth(1)}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div style={styles.interviewCount}>
        {interviews.length} interviews
      </div>

      <div style={styles.calendarGrid}>
        {weekdays.map(day => (
          <div key={day} style={styles.weekdayHeader}>
            {day}
          </div>
        ))}
        
        {days.map((dayInfo, index) => {
          const dayInterviews = getInterviewsForDay(dayInfo.date);
          const isToday = dayInfo.date.toDateString() === today.toDateString();

          return (
            <div key={index} style={styles.calendarDay}>
              <div style={{
                ...styles.dayNumber,
                ...(!dayInfo.isCurrentMonth ? styles.dayNumberOtherMonth : {}),
                ...(isToday ? styles.dayNumberToday : {})
              }}>
                {dayInfo.day}
              </div>
              {dayInterviews.map((interview, idx) => (
                <div 
                  key={idx} 
                  style={styles.interviewEvent}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.interviewEventHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.interviewEvent)}
                >
                  <div style={styles.eventTime}>{interview.time}</div>
                  <div style={styles.eventTitle}>{interview.jobTitle}</div>
                  <div style={styles.eventCompany}>{interview.company}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Main Interviews Component
export default function Interviews() {
  const [interviews] = useState(sampleInterviews);

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h1 style={styles.sidebarTitle}>Scheduled Interviews</h1>
          <p style={styles.sidebarSubtitle}>Manage your upcoming interviews.</p>
        </div>
        
        {interviews.map(interview => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </aside>

      <main style={styles.mainContent}>
        <Calendar interviews={interviews} />
      </main>
    </div>
  );
}
