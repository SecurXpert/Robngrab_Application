import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { LuCircleCheckBig,LuX } from "react-icons/lu";

const PaymentSuccessModal = ({ paymentData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 flex-shrink-0">
        <h2 className="text-xl font-family-inter font-weight-500 text-[#0A0A0A]">Payment Details</h2>
         <button 
                      onClick={onClose}
                      className="text-[#99A1AF] hover:text-[#667085] transition-colors"
                    >
                      <LuX size={25} />
                    </button>
                  </div>

      {/* Success Banner */}
      <div className="px-6 pb-4 flex-shrink-0">
        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          <LuCircleCheckBig size={16} />
          Success
        </div>
      </div>

      {/* Content Body */}
      <div className="px-6 space-y-4 pb-6 overflow-y-auto flex-1">
        
        {/* Transaction Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
          <h3 className="text-[#0A0A0A] font-family-inter font-weight-600 text-base">Transaction Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Payment id" value={paymentData?.id || "PAY-2024-003"} />
            <DetailItem label="Transaction id" value={paymentData?.transactionId || "TXN-987654321"} />
            <DetailItem label="Date & time" value={paymentData?.date || "Feb 18, 2026 - 2:45 PM"} />
            <DetailItem label="Amount" value={paymentData?.amount || "$599.00"} valueClassName="text-lg" />
          </div>
        </div>

        {/* Customer Information */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
          <h3 className="text-[#0A0A0A] font-family-inter font-weight-600 text-base">Customer Information</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Customer name" value={paymentData?.customer || "Sarah Johnson"} />
            <DetailItem label="Company" value={paymentData?.company || "Digital Innovations Ltd."} />
            <DetailItem label="Email" value={paymentData?.email || "sarah.johnson@digitalinnovations.com"} />
            <DetailItem label="Phone" value={paymentData?.phone || "+1 (555) 987-6543"} />
          </div>
        </div>

        {/* Subscription Details */}
        <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
          <h3 className="text-[#0A0A0A] font-family-inter font-weight-600 text-base">Subscription Details</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <DetailItem label="Plan name" value={paymentData?.plan || "Enterprise Plan"} />
            <DetailItem label="Payment method" value={paymentData?.method || "Bank Transfer"} />
            <DetailItem label="Billing cycle" value={paymentData?.billingCycle || "Annual"} />
            <DetailItem label="Next billing date" value={paymentData?.nextBillingDate || "Feb 18, 2027"} />
          </div>
        </div>

        {/* Success Notification Box */}
        <div className="bg-white border border-[#B9F8CF] rounded-xl p-4 flex items-start gap-3">
          <div className=" p-1 rounded-full mt-0.5">
            <LuCircleCheckBig size={18} className="text-[#00A63E]" />
          </div>
          <div>
            <p className="text-[#0D542B] font-bold">Payment Successful</p>
            <p className="text-[#008236] text-sm">The payment was processed successfully. Receipt sent to customer's email.</p>
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
    <p className={`text-[#0A0A0A] font-family-inter font-weight-500 ${valueClassName}`}>{value}</p>
  </div>
);

export default PaymentSuccessModal;
