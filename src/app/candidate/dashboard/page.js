import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import StatsCards from './components/StatsCards';
import RecentActivities from './components/RecentActivities';
import ProfileCompleteness from './components/ProfileCompleteness';
<<<<<<< HEAD
import { FiCalendar, FiBell, FiUpload } from 'react-icons/fi';

const CandidateDashboard = () => {
  const quickActions = [
    {
      id: 1,
      title: 'Interview Management',
      description: 'Schedule and manage your interviews',
      icon: FiCalendar,
      color: 'bg-blue-500',
      href: '/candidate/interview-management'
    },
    {
      id: 2,
      title: 'Notifications',
      description: 'View your notifications',
      icon: FiBell,
      color: 'bg-green-500',
      href: '/candidate/notifications'
    },
    {
      id: 3,
      title: 'Upload CV',
      description: 'Update your resume',
      icon: FiUpload,
      color: 'bg-purple-500',
      href: '/candidate/upload-cv'
    }
  ];

=======
import InterviewManagement from './components/InterviewManagement';
import Notifications from './components/Notifications';
import UploadCV from './components/UploadCV.js';

const CandidateDashboard = () => {
>>>>>>> origin/prakash
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <WelcomeSection />
          <StatsCards />
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <RecentActivities />
            </div>
            
            <div className="lg:col-span-1">
              <ProfileCompleteness />
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action) => (
                <div key={action.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 ${action.color} rounded-lg`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800 mb-1">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </div>
              ))}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-6">
              <ProfileCompleteness />
              <InterviewManagement />
              <UploadCV />
            </div>
            
            <div className="space-y-6">
              <RecentActivities />
              <Notifications />
>>>>>>> origin/prakash
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDashboard;
