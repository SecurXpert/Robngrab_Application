'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../../dashboard/components/Header';
import InterviewDetails from '../InterviewDetails';

export default function InterviewDetailsPage() {
  const params = useParams();
  const [interview, setInterview] = useState({
    id: params.slug,
    company: 'TechFlow Inc.',
    position: 'Frontend Engineer',
    date: '2025-03-05',
    time: '10:00 AM',
    type: 'Video Call',
    status: 'confirmed',
    location: 'Zoom Meeting',
    recruiter: {
      name: 'Sarah Johnson',
      email: 'sarah.j@techflow.com',
      phone: '+1 (555) 123-4567',
      title: 'Senior Technical Recruiter'
    },
    jobDescription: 'We are looking for a talented Frontend Engineer to join our team and help build amazing user experiences.',
    requirements: [
      '3+ years of React experience',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
      'Knowledge of testing practices'
    ],
    preparation: [
      'Review React fundamentals',
      'Prepare portfolio examples',
      'Research company background',
      'Practice common interview questions'
    ],
    notes: 'Technical interview with frontend team. Focus on React, TypeScript, and CSS.',
    meetingLink: 'https://zoom.us/j/123456789',
    attachments: [
      {
        name: 'Job Description.pdf',
        url: '/documents/job-description.pdf'
      },
      {
        name: 'Company Profile.pdf',
        url: '/documents/company-profile.pdf'
      }
    ]
  });

  const [activeTab, setActiveTab] = useState('details');
  const [notes, setNotes] = useState(interview.notes || '');

  const handleReschedule = () => {
    // Navigate to reschedule page
    window.location.href = `/candidate/interview-management/reschedule-interview/${interview.id}`;
  };

  const handleCancel = () => {
    // Handle cancel logic
    if (confirm('Are you sure you want to cancel this interview?')) {
      console.log('Interview cancelled:', interview.id);
    }
  };

  const handleSaveNotes = () => {
    // Save notes logic
    console.log('Saving notes:', notes);
  };

  const tabs = [
    { id: 'details', label: 'Interview Details', icon: '📋' },
    { id: 'preparation', label: 'Preparation', icon: '📚' },
    { id: 'notes', label: 'Notes', icon: '📝' }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Interviews
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex border-b border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <InterviewDetails
                  interview={interview}
                  activeTab={activeTab}
                  notes={notes}
                  onNotesChange={setNotes}
                  onSaveNotes={handleSaveNotes}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleReschedule}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Reschedule Interview
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Cancel Interview
                  </button>
                </div>
              </div>

              {/* Interview Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="font-medium text-gray-900">
                      {new Date(interview.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} at {interview.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-medium text-gray-900">{interview.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium text-gray-900">{interview.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      interview.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : interview.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recruiter Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruiter</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium text-gray-900">{interview.recruiter.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Title</p>
                    <p className="font-medium text-gray-900">{interview.recruiter.title}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{interview.recruiter.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium text-gray-900">{interview.recruiter.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
