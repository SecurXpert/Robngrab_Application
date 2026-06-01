import { useState } from "react";

export const usePayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("month");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false);
  const [selectedPaymentData, setSelectedPaymentData] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const transactions = [
    { id: "PAY-2024-001", date: "Feb 18, 2026", customer: "John Smith", company: "TechCorp Inc.", plan: "Professional Plan", amount: "$79.00", method: "Credit Card", status: "Success" },
    { id: "PAY-2024-002", date: "Feb 18, 2026", customer: "Sarah Johnson", company: "Global Staffing Ltd.", plan: "Enterprise Plan", amount: "$899.00", method: "Bank Transfer", status: "Success" },
    { id: "PAY-2024-003", date: "Feb 17, 2026", customer: "Mike Davis", company: "Hire Solutions", plan: "Basic Plan", amount: "$29.00", method: "Credit Card", status: "Pending" },
    { id: "PAY-2024-004", date: "Feb 17, 2026", customer: "Emily Chen", company: "Elite Recruiters", plan: "Professional Plan", amount: "$79.00", method: "Credit Card", status: "Failed" },
    { id: "PAY-2024-005", date: "Feb 16, 2026", customer: "Robert Taylor", company: "Talent Bridge Co.", plan: "Basic Plan", amount: "$29.00", method: "PayPal", status: "Success" },
    { id: "PAY-2024-006", date: "Feb 16, 2026", customer: "Lisa Anderson", company: "ProStaff Agency", plan: "Enterprise Plan", amount: "$899.00", method: "Bank Transfer", status: "Success" },
    { id: "PAY-2024-007", date: "Feb 15, 2026", customer: "David Martinez", company: "NextGen Recruiting", plan: "Professional Plan", amount: "$79.00", method: "Credit Card", status: "Pending" },
    { id: "PAY-2024-008", date: "Feb 15, 2026", customer: "Jennifer White", company: "Apex Talent Group", plan: "Basic Plan", amount: "$29.00", method: "Credit Card", status: "Success" },
    { id: "PAY-2024-009", date: "Mar 18, 2026", customer: "Michael Brown", company: "Premier Staffing Solutions", plan: "Enterprise Plan", amount: "$299.67", method: "EMI-Credit Card", status: "Success" },
    { id: "PAY-2024-010", date: "Mar 17, 2026", customer: "Amanda Wilson", company: "Workforce Dynamics Inc.", plan: "Professional Plan", amount: "$26.33", method: "EMI-Credit Card", status: "Success" },
    { id: "PAY-2024-011", date: "Mar 16, 2026", customer: "Christopher Lee", company: "Elite Talent Network", plan: "Enterprise Plan", amount: "$149.83", method: "EMI-Credit Card", status: "Success" },
    { id: "PAY-2024-012", date: "Feb 19, 2026", customer: "Jessica Moore", company: "Strategic Hiring Partners", plan: "Professional Plan", amount: "$19.75", method: "EMI-Credit Card", status: "Pending" },
    { id: "PAY-2024-013", date: "Feb 10, 2026", customer: "Daniel Garcia", company: "Prime Recruiting Group", plan: "Enterprise Plan", amount: "$224.75", method: "EMI-Credit Card", status: "Failed" },
  ];

  const handleViewTransaction = (id, status, paymentData = null) => {
    const transaction = paymentData || transactions.find(t => t.id === id);
    setSelectedPaymentData(transaction);
    if (paymentData) {
      setSelectedPayment(paymentData);
      setShowPaymentDetailsModal(true);
      return;
    }
    if (status === "Success") setShowSuccessModal(true);
    else if (status === "Pending") setShowPendingModal(true);
    else if (status === "Failed") setShowFailedModal(true);
  };

  const handleExport = () => {
    const headers = ["ID,Date,Customer,Company,Plan,Amount,Method,Status"];
    const csvData = transactions.map(t => 
      `${t.id},"${t.date}","${t.customer}","${t.company}","${t.plan}","${t.amount}","${t.method}","${t.status}"`
    );
    const blob = new Blob([[...headers, ...csvData].join("\\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "payments_report.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return {
    searchTerm, setSearchTerm,
    statusFilter, setStatusFilter,
    dateFilter, setDateFilter,
    showSuccessModal, setShowSuccessModal,
    showPendingModal, setShowPendingModal,
    showFailedModal, setShowFailedModal,
    showPaymentDetailsModal, setShowPaymentDetailsModal,
    selectedPaymentData, setSelectedPaymentData,
    selectedPayment, setSelectedPayment,
    transactions,
    handleViewTransaction,
    handleExport
  };
};
