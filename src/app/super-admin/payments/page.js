"use client";

import { usePayments } from '@/utils/usePayments';
import PaymentStats from '@/app/super-admin/payments/Model/PaymentStats';
import PaymentTables from '@/app/super-admin/payments/Model/PaymentTables';

import PaymentSuccessModal from '@/app/super-admin/payments/Model/PaymentSuccessModal';
import PaymentPendingModal from '@/app/super-admin/payments/Model/PaymentPendingModal';
import PaymentFailedModal from '@/app/super-admin/payments/Model/PaymentFailedModal';
import PaymentDetailsModal from '@/app/super-admin/payments/Model/PaymentDetailsModal';

export default function PaymentsPage() {
  const {
    searchTerm, setSearchTerm,
    statusFilter, setStatusFilter,
    showSuccessModal, setShowSuccessModal,
    showPendingModal, setShowPendingModal,
    showFailedModal, setShowFailedModal,
    showPaymentDetailsModal, setShowPaymentDetailsModal,
    selectedPaymentData,
    selectedPayment,
    transactions,
    handleViewTransaction,
    handleExport
  } = usePayments();

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PaymentStats
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          handleExport={handleExport}
        />

        <PaymentTables
          transactions={transactions.filter(t =>
            (statusFilter === "all" || t.status.toLowerCase() === statusFilter) &&
            (t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
              t.id.toLowerCase().includes(searchTerm.toLowerCase()))
          )}
          handleViewTransaction={handleViewTransaction}
        />

        {/* Modals */}
        {showSuccessModal && (
          <PaymentSuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            paymentData={selectedPaymentData}
          />
        )}
        {showPendingModal && (
          <PaymentPendingModal
            isOpen={showPendingModal}
            onClose={() => setShowPendingModal(false)}
            paymentData={selectedPaymentData}
          />
        )}
        {showFailedModal && (
          <PaymentFailedModal
            isOpen={showFailedModal}
            onClose={() => setShowFailedModal(false)}
            paymentData={selectedPaymentData}
          />
        )}
        {showPaymentDetailsModal && (
          <PaymentDetailsModal
            isOpen={showPaymentDetailsModal}
            onClose={() => setShowPaymentDetailsModal(false)}
            paymentData={selectedPayment}
          />
        )}
      </div>
    </div>
  );
}
