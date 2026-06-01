import React from 'react';
import { FaTimesCircle, FaTimes } from 'react-icons/fa';
import { LuX } from "react-icons/lu";

const PaymentFailedModal = ({ paymentData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
        <button 
          onClick={onClose}
          className="text-[#99A1AF] hover:text-[#667085] transition-colors"
        >
          <LuX size={25} />
        </button>
      </div>

      {/* Failed Banner */}
      <div className="px-6 pb-4 flex-shrink-0">
        <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <FaTimesCircle size={16} />
          Failed
        </div>
      </div>

      {/* Content Body */}
      <div className="px-6 space-y-4 pb-6 overflow-y-auto flex-1">
        
        {/* Transaction Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
          <h3 className="text-[#0A0A0A] font-family-inter font-weight-500 text-base">Transaction Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Payment id" value={paymentData?.id || "N/A"} />
            <DetailItem label="Transaction id" value={paymentData?.transactionId || "N/A"} />
            <DetailItem label="Date & time" value={paymentData?.date || "N/A"} />
            <DetailItem label="Amount" value={paymentData?.amount || "N/A"} valueClassName="text-lg" />
          </div>
        </div>

        {/* Customer Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
          <h3 className="text-[#0A0A0A] font-family-inter font-weight-500 text-base">Customer Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Customer name" value={paymentData?.customer || "N/A"} />
            <DetailItem label="Company" value={paymentData?.company || "N/A"} />
            <DetailItem label="Email" value={paymentData?.email || "N/A"} />
            <DetailItem label="Phone" value={paymentData?.phone || "N/A"} />
          </div>
        </div>

        {/* Subscription Details */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
          <h3 className="text-[#0A0A0A] font-family-inter font-weight-500 text-base">Subscription Details</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Plan name" value={paymentData?.plan || "N/A"} />
            <DetailItem label="Payment method" value={paymentData?.method || "N/A"} />
            <DetailItem label="Billing cycle" value={paymentData?.billingCycle || "N/A"} />
            <DetailItem label="Next billing date" value={paymentData?.nextBillingDate || "N/A"} />
          </div>
        </div>

        {/* Failed Notification Box */}
        <div className="bg-white border border-red-200 rounded-xl p-5 flex items-start gap-3">
          
            
         
          <div className="flex-1">
            <h3 className="text-[#82181A] font-weight-500 mb-1">Payment Failed</h3>
            <p className="text-[#C10007] text-sm mb-3">The payment was declined by the payment processor. Reason: Insufficient funds.</p>
            <button className="py-1.5 px-4 bg-[#E7000B] rounded-lg font-medium text-sm text-white shadow-md shadow-red-200 transition-colors">
              Retry Payment
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-gray-50 flex-shrink-0">
          <button className="flex-1 py-2.5 px-4 border border-[#D1D5DC] rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Download Receipt
          </button>
          <button className="flex-1 py-2.5 px-4 bg-[#2563EB] rounded-xl font-medium text-white hover:bg-[#1D4ED8] shadow-md shadow-[#BFDBFE] transition-colors">
            Send Receipt
          </button>
        </div>

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
    <p className="text-[#4A5565] text-sm font-medium mb-1 tracking-wider">{label}</p>
    <p className={`text-[#0A0A0A] font-family-inter font-weight-600 ${valueClassName}`}>{value}</p>
  </div>
);

export default PaymentFailedModal;
