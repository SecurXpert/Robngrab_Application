'use client';

import React from 'react';
import { FiX, FiGift, FiClock, FiDollarSign, FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiFileText, FiDownload } from 'react-icons/fi';

export default function OfferDetailsPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const benefits = [
    'Comprehensive health, dental, and vision insurance',
    '401(k) with 6% company match',
    'Unlimited PTO policy',
    'Remote work flexibility',
    '$2,000 annual learning & development budget',
    'Latest MacBook Pro and equipment',
    'Commuter benefits',
    'Wellness stipend ($100/month)'
  ];

  const handleAccept = () => {
    alert("Congratulations! You have accepted the offer from Figma. We are thrilled to welcome you!");
    onClose();
  };

  const handleDecline = () => {
    const confirmDecline = window.confirm("Are you sure you want to decline this offer?");
    if (confirmDecline) {
      alert("Offer declined. We wish you all the best in your future endeavors.");
      onClose();
    }
  };

  const handleDownload = () => {
    const offerLetterText = `
=========================================
          FIGMA OFFER LETTER
=========================================

Date: September 28, 2023

Dear Candidate,

We are thrilled to offer you the position of Frontend Engineer at Figma!

Here are the details of your offer:
- Position: Frontend Engineer (Hybrid, San Francisco)
- Base Salary: $145,000 per year
- Signing Bonus: $15,000 (one-time payment)
- Equity: 25,000 RSUs (4-year vesting schedule)
- Annual Bonus: Up to 20% performance-based
- Start Date: November 1, 2023

Welcome to the Figma team!

Sincerely,
Figma Recruiting Team
`;
    const element = document.createElement("a");
    const file = new Blob([offerLetterText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Figma_Offer_Letter.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[16px] shadow-2xl w-full max-w-[600px] h-[90vh] max-h-[750px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - Gradient Green Theme */}
        <div className="bg-gradient-to-r from-[#00A63E] to-[#009966] p-6 text-white flex flex-col gap-4 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[12px] bg-white/20 flex items-center justify-center flex-shrink-0">
              <FiGift className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[20px] font-bold tracking-tight">Congratulations! Offer Extended</h2>
              <span className="text-[13px] text-white/80 font-medium">Frontend Engineer at Figma</span>
            </div>
          </div>

          {/* Offer Deadline Banner */}
          <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-white/80 font-bold text-[11px] uppercase tracking-wider">
              <FiClock className="w-3.5 h-3.5" />
              <span>Offer Deadline</span>
            </div>
            <p className="text-[14px] font-bold">
              Please respond by October 6, 2023
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 pb-8 flex flex-col gap-5 no-scrollbar bg-white">
          
          {/* Section: Compensation Package */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-gray-800">
              <FiDollarSign className="w-4 h-4 text-gray-500" />
              <h3 className="text-[13.5px] font-bold text-gray-800">Compensation Package</h3>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {/* Card 1 */}
              <div className="bg-[#F0FDF4] border border-[#B9F8CF] rounded-[10px] p-3.5 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Base Salary</span>
                <span className="text-[16.5px] font-semibold text-black">$145,000</span>
                <span className="text-[11px] text-gray-400 font-medium">per year</span>
              </div>
              {/* Card 2 */}
              <div className="bg-[#F0F9FF] border border-[#BEDBFF] rounded-[10px] p-3.5 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Signing Bonus</span>
                <span className="text-[16.5px] font-semibold text-black">$15,000</span>
                <span className="text-[11px] text-gray-400 font-medium">one-time payment</span>
              </div>
              {/* Card 3 */}
              <div className="bg-[#FAF5FF] border border-[#E9D4FF] rounded-[10px] p-3.5 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Equity/Stock Options</span>
                <span className="text-[16.5px] font-semibold text-black">25,000 RSUs</span>
                <span className="text-[11px] text-gray-400 font-medium">4-year vesting</span>
              </div>
              {/* Card 4 */}
              <div className="bg-[#FFF7ED] border border-[#FFD6A8] rounded-[10px] p-3.5 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Annual Bonus</span>
                <span className="text-[16.5px] font-semibold text-black">Up to 20%</span>
                <span className="text-[11px] text-gray-400 font-medium">performance-based</span>
              </div>
            </div>
          </div>

          {/* Section: Position Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-gray-800">
              <FiBriefcase className="w-4 h-4 text-gray-500" />
              <h3 className="text-[13.5px] font-bold text-gray-800">Position Details</h3>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-[10px] p-3.5 flex flex-col gap-1">
                <div className="flex items-center gap-1 text-gray-400 font-bold text-[10px] uppercase tracking-wider">
                  <FiCalendar className="w-3.5 h-3.5 text-[#155DFC]" strokeWidth={1.67} />
                  <span>Start Date</span>
                </div>
                <span className="text-[13.5px] font-bold text-gray-700">November 1, 2023</span>
              </div>
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-[10px] p-3.5 flex flex-col gap-1">
                <div className="flex items-center gap-1 text-gray-400 font-bold text-[10px] uppercase tracking-wider">
                  <FiMapPin className="w-3.5 h-3.5 text-[#155DFC]" strokeWidth={1.67} />
                  <span>Location</span>
                </div>
                <span className="text-[13.5px] font-bold text-gray-700">San Francisco, CA (Hybrid)</span>
              </div>
            </div>
          </div>

          {/* Section: Benefits & Perks */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-gray-800">
              <FiGift className="w-4 h-4 text-gray-500" />
              <h3 className="text-[13.5px] font-bold text-gray-800">Benefits & Perks</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#F0FDF4] border-t border-[#DCFCE7] rounded-[10px] p-3.5 pl-4.5 flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00A63E] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="7.5 12 10.5 15 16.5 9" />
                  </svg>
                  <span className="text-gray-600 text-[12px] font-medium leading-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Next Steps */}
          <div className="bg-[#EFF6FF] border-t border-[#BEDBFF] rounded-[12px] p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5 text-black">
              <FiFileText className="w-4 h-4 text-[#155DFC]" strokeWidth={1.67} />
              <h4 className="text-[13px] font-bold">Next Steps</h4>
            </div>
            <ol className="space-y-2 text-gray-600 text-[12px] font-normal leading-relaxed pl-6">
              <li className="flex items-start gap-1.5">
                <span className="text-[#155DFC] font-semibold flex-shrink-0">1.</span>
                <span>Review the full offer letter attached in your email</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#155DFC] font-semibold flex-shrink-0">2.</span>
                <span>Feel free to reach out to the recruiter with any questions</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#155DFC] font-semibold flex-shrink-0">3.</span>
                <span>Accept or decline the offer by October 6, 2023</span>
              </li>
            </ol>
          </div>

        </div>

          {/* Footer */}
          <div className="py-8 px-6 border-t border-gray-200 flex gap-3 bg-white flex-shrink-0">
            <button
              onClick={handleAccept}
              className="flex-1 py-2.5 px-3 rounded-[8px] bg-[#00A63E] hover:bg-[#008C34] text-white font-bold text-[13px] transition-all shadow-sm text-center flex items-center justify-center h-11 cursor-pointer"
            >
              Accept Offer
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 py-2.5 px-3 rounded-[8px] border border-[#FCA5A5] text-[#DC2626] hover:bg-red-50 font-bold text-[13px] transition-all text-center flex items-center justify-center h-11 cursor-pointer"
            >
              Decline Offer
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 py-2.5 px-3 rounded-[8px] border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-[13px] transition-all flex items-center justify-center gap-1.5 h-11 cursor-pointer"
            >
              <FiDownload className="w-4 h-4 flex-shrink-0" />
              <span>Download Offer Letter</span>
            </button>
          </div>

      </div>
    </div>
  );
}
