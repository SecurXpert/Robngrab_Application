"use client";

import Header from '@/app/candidate/dashboard/Model/Header';
import Interviews from '@/app/candidate/interview-management/Model/Interviews';

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    background: "white",
  },
};
export default function InterviewsPage() {
  return (
    <>
      <div style={styles.header}>
        <Header />
      </div>
      <Interviews />
    </>
  );
}
