import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const PaymentSuccessModal = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <FaTimes size={20} />
        </button>
      </div>

      {/* Success Banner */}
      <div className="px-6 pb-4 flex-shrink-0">
        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <FaCheckCircle size={16} />
          Success
        </div>
      </div>

      {/* Content Body */}
      <div className="px-6 space-y-4 pb-6 overflow-y-auto flex-1">
        
        {/* Transaction Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4">
          <h3 className="text-gray-800 font-semibold text-base">Transaction Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Payment ID" value="PAY-2024-001" />
            <DetailItem label="Transaction ID" value="TXN8472647382" />
            <DetailItem label="Date & Time" value="Feb 18, 2026" />
            <DetailItem label="Amount" value="$79.00" valueClassName="text-lg" />
          </div>
        </div>

        {/* Customer Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4">
          <h3 className="text-gray-800 font-semibold text-base">Customer Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Customer Name" value="John Smith" />
            <DetailItem label="Company" value="TechCorp Inc." />
            <DetailItem label="Email" value="john.smith@techcorpinc.com" />
            <DetailItem label="Phone" value="+1 (555) 123-4567" />
          </div>
        </div>

        {/* Subscription Details */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4">
          <h3 className="text-gray-800 font-semibold text-base">Subscription Details</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Plan Name" value="Professional Plan" />
            <DetailItem label="Payment Method" value="Credit Card" />
            <DetailItem label="Billing Cycle" value="Monthly" />
            <DetailItem label="Next Billing Date" value="Mar 18, 2026" />
          </div>
        </div>

        {/* Success Notification Box */}
        <div className="bg-white border border-green-200 rounded-xl p-4 flex items-start gap-3">
          <div className="bg-green-100 p-1 rounded-full mt-0.5">
            <FaCheckCircle size={18} className="text-green-600" />
          </div>
          <div>
            <p className="text-green-700 font-bold">Payment Successful</p>
            <p className="text-green-600 text-sm">The payment was processed successfully. Receipt sent to customer's email.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-gray-50 flex-shrink-0">
          <button className="flex-1 py-3 px-4 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            Download Receipt
          </button>
          <button className="flex-1 py-3 px-4 bg-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors">
            Send Receipt
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

export default PaymentSuccessModal;
