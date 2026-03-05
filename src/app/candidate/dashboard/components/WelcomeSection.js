"use client";

import React from 'react';

const WelcomeSection = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-blue-100 mb-4">{currentDate}</p>
        <p className="text-lg">
          Here's an overview of your job search progress. Keep up the great work!
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
