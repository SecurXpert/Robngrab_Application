import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import StatsCards from './components/StatsCards';
import RecentActivities from './components/RecentActivities';
import ProfileCompleteness from './components/ProfileCompleteness';
import InterviewManagement from './components/InterviewManagement';
import Notifications from './components/Notifications';
import UploadCV from './components/UploadCV.js';

const CandidateDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <WelcomeSection />
          <StatsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-6">
              <ProfileCompleteness />
              <InterviewManagement />
              <UploadCV />
            </div>
            
            <div className="space-y-6">
              <RecentActivities />
              <Notifications />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDashboard;
