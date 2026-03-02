import React from 'react';
import { FaClock, FaTimes } from 'react-icons/fa';

const PaymentPendingModal = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-xl w-full max-w-xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <FaTimes size={20} />
        </button>
      </div>

      {/* Pending Banner */}
      <div className="px-6 pb-4 flex-shrink-0">
        <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <FaClock size={16} />
          Pending
        </div>
      </div>

      {/* Content Body */}
      <div className="px-6 space-y-4 pb-6 overflow-y-auto flex-1">
        
        {/* Transaction Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4">
          <h3 className="text-gray-800 font-semibold text-base">Transaction Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Payment ID" value="PAY-2024-003" />
            <DetailItem label="Transaction ID" value="TXN8472647383" />
            <DetailItem label="Date & Time" value="Feb 17, 2026" />
            <DetailItem label="Amount" value="$29.00" valueClassName="text-lg" />
          </div>
        </div>

        {/* Customer Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4">
          <h3 className="text-gray-800 font-semibold text-base">Customer Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Customer Name" value="Mike Davis" />
            <DetailItem label="Company" value="Hire Solutions" />
            <DetailItem label="Email" value="mike.davis@hiresolutions.com" />
            <DetailItem label="Phone" value="+1 (555) 987-6543" />
          </div>
        </div>

        {/* Subscription Details */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4">
          <h3 className="text-gray-800 font-semibold text-base">Subscription Details</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Plan Name" value="Basic Plan" />
            <DetailItem label="Payment Method" value="Credit Card" />
            <DetailItem label="Billing Cycle" value="Monthly" />
            <DetailItem label="Next Billing Date" value="Mar 17, 2026" />
          </div>
        </div>

        {/* Pending Notification Box */}
        <div className="bg-white border border-orange-200 rounded-xl p-4 flex items-start gap-3">
          <div className="bg-orange-100 p-1 rounded-full mt-0.5">
            <FaClock size={18} className="text-orange-600" />
          </div>
          <div>
            <p className="text-orange-700 font-bold">Payment Pending</p>
            <p className="text-orange-600 text-sm">Payment is being processed. We'll notify you once the payment is completed.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-gray-50 flex-shrink-0">
          <button className="flex-1 py-3 px-4 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            View Details
          </button>
          <button className="flex-1 py-3 px-4 bg-orange-600 rounded-xl font-semibold text-white hover:bg-orange-700 shadow-md shadow-orange-200 transition-colors">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

/**
 * Reusable component for detail pairs
 */
const DetailItem = ({ label, value, valueClassName = "" }) => (
  <div>
    <p className="text-gray-400 text-xs font-medium mb-1 uppercase tracking-wider">{label}</p>
    <p className={`text-gray-900 font-bold ${valueClassName}`}>{value}</p>
  </div>
);

export default PaymentPendingModal;
