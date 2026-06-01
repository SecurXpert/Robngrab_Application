"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronRight,
  Phone,
  Video
} from "lucide-react";
import styles from '@/app/candidate/interview-management/Model/Styles';

// Local Calendar Grid Component
export default function Calendar({ interviews = [], onEventClick }) {
  const [currentDate, setCurrentDate] = useState(new Date("2026-02-12")); // Default to Feb 2026 to match screenshot
  const [viewMode, setViewMode] = useState("month");

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
        date: new Date(year, month - 1, prevMonthLastDay - i),
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Add next month's leading days. Dynamic rows calculation:
    const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / 7) * 7;
    const remainingDays = totalCells - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const getInterviewsForDay = (date) => {
    return interviews.filter((interview) => {
      const interviewDate = new Date(interview.fullDate);
      return interviewDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date("2026-02-12")); // Feb 12, 2026 today mockup
  };

  const days = getDaysInMonth(currentDate);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthYear = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  const today = new Date("2026-02-12");

  return (
    <div style={styles.calendarContainer}>
      <div style={styles.calendarHeader}>
        {/* ROW 1: Title + Switch View Modes */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={styles.calendarTitle}>{monthYear}</h2>

          <div style={styles.viewSelector}>
            {["Day", "Week", "Month"].map((view) => (
              <button
                key={view}
                style={{
                  ...styles.viewButton,
                  borderRight: view === "Month" ? "none" : "1px solid #E2E8F0",
                  ...(viewMode === view.toLowerCase() ? styles.viewButtonActive : {}),
                }}
                onClick={() => setViewMode(view.toLowerCase())}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2: Left Navigation Arrows + "Today" | Right Interview count */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={styles.calendarNavigation}>
            <button style={styles.navButton} onClick={() => navigateMonth(-1)}>
              <ChevronRight size={16} style={{ transform: "rotate(180deg)" }} />
            </button>
            <button style={styles.navButton} onClick={() => navigateMonth(1)}>
              <ChevronRight size={16} />
            </button>
            <button style={styles.todayButton} onClick={goToToday}>
              Today
            </button>
          </div>

          <div
            style={{
              fontSize: "14px",
              color: "#64748B",
              fontWeight: "600",
            }}
          >
            {interviews.length} interviews
          </div>
        </div>
      </div>

      {/* CALENDAR MONTH GRID */}
      <div style={styles.calendarGrid}>
        {weekdays.map((day) => (
          <div key={day} style={styles.weekdayHeader}>
            {day}
          </div>
        ))}

        {days.map((dayInfo, index) => {
          const dayInterviews = getInterviewsForDay(dayInfo.date);
          const isToday = dayInfo.date.toDateString() === today.toDateString();

          return (
            <div key={index} style={styles.calendarDay}>
              <div
                style={{
                  ...styles.dayNumber,
                  ...(!dayInfo.isCurrentMonth ? styles.dayNumberOtherMonth : {}),
                  ...(isToday ? styles.dayNumberToday : {}),
                }}
              >
                {dayInfo.day}
              </div>

              {dayInterviews.map((interview, idx) => (
                <div
                  key={idx}
                  style={styles.interviewEvent}
                  onClick={(e) => {
                    e.stopPropagation();
                    onEventClick(interview);
                  }}
                  className="hover:scale-[1.02]"
                >
                  {/* Small top-right rescheduled pill */}
                  {interview.status.toLowerCase() === "rescheduled" && (
                    <div style={styles.eventRescheduledBadge}>Rescheduled</div>
                  )}

                  <div style={styles.eventTime}>
                    {interview.type === "phone" ? (
                      <Phone size={11} strokeWidth={3} />
                    ) : (
                      <Video size={11} strokeWidth={3} />
                    )}
                    <span>{interview.time}</span>
                  </div>

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
