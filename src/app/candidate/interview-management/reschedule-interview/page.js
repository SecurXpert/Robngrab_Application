'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../dashboard/components/Header';

export default function RescheduleInterview() {
  const params = useParams();
  const [formData, setFormData] = useState({
    interviewId: params.slug,
    originalDate: '2025-03-05',
    originalTime: '10:00 AM',
    newDate: '',
    newTime: '',
    reason: '',
    notifyRecruiter: true,
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.newDate) newErrors.newDate = 'New date is required';
    if (!formData.newTime) newErrors.newTime = 'New time is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason for rescheduling is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle reschedule submission
      console.log('Rescheduling interview:', formData);
      // Navigate back to interview management
      window.location.href = '/candidate/interview-management';
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    
    return dates;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Interviews
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Reschedule Interview</h1>
            <p className="text-gray-600 mt-2">Request a new time for your interview</p>
          </div>

          {/* Current Interview Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Current Interview Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700">Current Date</p>
                <p className="font-medium text-blue-900">
                  {new Date(formData.originalDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Current Time</p>
                <p className="font-medium text-blue-900">{formData.originalTime}</p>
              </div>
            </div>
          </div>

          {/* Reschedule Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* New Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select New Date *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {getAvailableDates().map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => handleInputChange('newDate', date)}
                      className={`p-3 text-sm border rounded-lg transition-colors ${
                        formData.newDate === date
                          ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                      <div className="text-xs text-gray-500">
                        {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                    </button>
                  ))}
                </div>
                {errors.newDate && (
                  <p className="mt-2 text-sm text-red-600">{errors.newDate}</p>
                )}
              </div>

              {/* New Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select New Time *
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleInputChange('newTime', time)}
                      className={`p-2 text-sm border rounded-lg transition-colors ${
                        formData.newTime === time
                          ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.newTime && (
                  <p className="mt-2 text-sm text-red-600">{errors.newTime}</p>
                )}
              </div>

              {/* Reason for Rescheduling */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Rescheduling *
                </label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please explain why you need to reschedule..."
                />
                {errors.reason && (
                  <p className="mt-1 text-sm text-red-600">{errors.reason}</p>
                )}
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any additional information for the recruiter..."
                />
              </div>

              {/* Notification Options */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.notifyRecruiter}
                    onChange={(e) => handleInputChange('notifyRecruiter', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Notify recruiter via email
                  </span>
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  An email will be sent to the recruiter with your rescheduling request
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit Reschedule Request
                </button>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Rescheduling Tips</h3>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Try to reschedule at least 24 hours in advance</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Be professional and provide a clear reason for the change</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Offer multiple alternative time slots to increase approval chances</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
