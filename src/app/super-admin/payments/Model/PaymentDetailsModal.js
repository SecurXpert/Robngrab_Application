import React from 'react';
import { FiX, FaCreditCard, FaCalendarAlt, FaUser, FaBuilding } from 'react-icons/fa';
import { LuX, LuCircleCheckBig, LuRepeat } from "react-icons/lu";

const PaymentDetailsModal = ({ isOpen, onClose, paymentData }) => {
  if (!isOpen || !paymentData) return null;

  // Calculate progress percentage from paidRemaining field
  const calculateProgress = (paidRemaining) => {
    if (!paidRemaining) return 0;
    const parts = paidRemaining.split(' / ');
    if (parts.length === 2) {
      const paid = parseInt(parts[0]);
      const total = parseInt(parts[1]);
      if (total > 0) {
        return Math.round((paid / total) * 100);
      }
    }
    return 0;
  };

  const progressPercentage = calculateProgress(paymentData.paidRemaining);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 flex-shrink-0">
          <h2 className="text-xl font-family-[Inter] font-weight-500 text-[#0A0A0A]">Payment Details</h2>
          <div className="flex items-center gap-3">
            
            <button 
              onClick={onClose}
              className="text-[#99A1AF] hover:text-[#667085] transition-colors"
            >
              <LuX size={25} />
            </button>
          </div>
        </div>

        {/* Success Banner - Only for Active/Success status */}
        {(paymentData.status === "Success" || paymentData.status === "Active") && (
          <div className="px-6 pb-4 flex-shrink-0">
            <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
              <LuCircleCheckBig size={16} />
              Success
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="px-6 space-y-4 py-2 overflow-y-auto flex-1">
          
          {/* Transaction Information */}
          <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
            <h3 className="text-[#0A0A0A] font-family-[Inter] font-weight-500 text-md flex items-center gap-2">
              
              Transaction Information
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              <DetailItem label="Payment ID" labelClassName="text-[#4A5565]"  value={paymentData.id} />
              <DetailItem label="Transaction ID" labelClassName="text-[#4A5565]" value={paymentData.transactionId} />
              <DetailItem label="Date & Time" labelClassName="text-[#4A5565]" value={paymentData.date} />
              <DetailItem label="Amount" labelClassName="text-[#4A5565]" value={paymentData.amount} valueClassName="text-lg font-family-inter font-weight-500" style={{color: '#0A0A0A'}} />
              
            </div>
          </div>

          {/* Customer Information */}
          <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
            <h3 className="text-[#0A0A0A] font-family-[Inter] font-weight-500 text-md flex items-center gap-2">
             
              Customer Information
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              <DetailItem label="Customer Name" labelClassName="text-[#4A5565]" value={paymentData.customer} />
              <DetailItem label="Company" labelClassName="text-[#4A5565]" value={paymentData.company} />
              <DetailItem label="Email" labelClassName="text-[#4A5565]" value={paymentData.email} />
              <DetailItem label="Phone" labelClassName="text-[#4A5565]" value={paymentData.phone} />
            </div>
          </div>

          {/* Plan Information */}
          <div className="border border-gray-100 rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
            <h3 className="text-[#0A0A0A] font-family-[Inter] font-weight-500 text-md flex items-center gap-2">

            Subscription Details
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              <DetailItem label="Plan" labelClassName="text-[#4A5565]" value={paymentData.plan} />
              <DetailItem label="Payment Method" labelClassName="text-[#4A5565]" value="EMI-Credit Card" />
              <DetailItem label="Billing Cycle" labelClassName="text-[#4A5565]" value={paymentData.billingCycle} />
              <DetailItem label="Next Billing Date" labelClassName="text-[#4A5565]" value={paymentData.nextBillingDate} />
            </div>
          </div>

          {/* Transaction History Information */}
          <div className="border border-[#C6D2FF] rounded-xl p-5 space-y-4" style={{boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className=" p-2 rounded-full">
                <LuRepeat className="text-[#4F39F6] w-5 h-5" />
              </div>
              <h3 className="text-[#0A0A0A] font-family-[Inter] font-weight-500 text-md">
                EMI Payment Details
              </h3>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">

              <div>
                <p className="text-[#432DD7] text-sm">Total Amount</p>
                <h3 className="text-xl font-bold text-[#312C85]">{paymentData.totalAmount || "N/A"}</h3>
              </div>

              <div>
                <p className="text-[#432DD7] text-sm">EMI Tenure</p>
                <h3 className="text-base text-[#312C85]">{paymentData.tenure || "N/A"}</h3>
              </div>

              <div>
                <p className="text-[#432DD7] text-sm">Installment Amount</p>
                <h3 className="text-base text-[#312C85]">{paymentData.installmentAmount || "N/A"}</h3>
              </div>

              <div>
                <p className="text-[#432DD7] text-sm">EMI Status</p>
                <span className="inline-block mt-1 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#016630] text-xs font-medium">
                  {paymentData.status === "Success" ? "Active" : paymentData.status}
                </span>
              </div>

              <div>
                <p className="text-[#432DD7] text-sm">Installments Paid</p>
                <h3 className="text-base text-[#312C85]">{paymentData.paidRemaining || "N/A"}</h3>
              </div>

              <div>
                <p className="text-[#432DD7] text-sm">Next Due Date</p>
                <h3 className="text-base text-[#312C85]">{paymentData.nextBillingDate || "N/A"}</h3>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-[#A3B3FF]"></div>

            {/* Progress Section */}
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-[#432DD7] text-sm">Payment Progress</p>
                <p className="text-[#312C85] font-medium">{progressPercentage}%</p>
              </div>

              <div className="w-full bg-[#C6D2FF] rounded-full h-2">
                <div
                  className="bg-[#4F39F6] h-2 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Success Notification Box - Only for Success status */}
          {(paymentData.status === "Success" || paymentData.status === "Active") && (
            <div className="bg-white border border-[#B9F8CF] rounded-xl p-4 flex items-start gap-3">
              <div className=" p-1 rounded-full mt-0.5">
                <LuCircleCheckBig size={18} className="text-[#00A63E]" />
              </div>
              <div>
                <p className="text-[#0D542B] font-bold">Payment Successful</p>
                <p className="text-[#008236] text-sm">The payment was processed successfully. Receipt sent to customer's email.</p>
              </div>
            </div>
          )}

          {/* Failed Notification Box - Only for Overdue/Failed status */}
          {(paymentData.status === "Failed" || paymentData.status === "Overdue") && (
            <div className="bg-white border border-red-200 rounded-xl p-5 flex items-start gap-3 mb-3">
              <div className="flex-1">
                <h3 className="text-[#82181A] font-semibold mb-1">Payment Failed</h3>
                <p className="text-[#C10007] text-sm mb-3">The payment was declined by the payment processor. Reason: Insufficient funds.</p>
                <button className="py-1.5 px-4 bg-[#E7000B] rounded-lg font-medium text-sm text-white shadow-md shadow-red-200 transition-colors">
                  Retry Payment
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-gray-50 flex-shrink-0 px-6 mb-3">
          <button className="flex-1 py-2.5 px-4 border border-[#D1D5DC] rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Download Receipt
          </button>
          <button className="flex-1 py-2.5 px-4 bg-[#2563EB] rounded-xl font-medium text-white hover:bg-[#1D4ED8] shadow-md shadow-blue-200 transition-colors">
            Send Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, valueClassName, labelClassName }) => (
  <div>
    <p className={`text-[#4A5565] ${labelClassName || ''} text-sm mb-1`}>{label}</p>
    <p className={`text-[#0A0A0A] ${valueClassName || ''}`}>{value}</p>
  </div>
);

export default PaymentDetailsModal;
