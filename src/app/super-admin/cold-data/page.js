'use client';

import { useColdData } from './useColdData';
import ColdDataHeader from './ColdDataHeader';
import SummaryCards from './SummaryCards';
import FilterSection from './FilterSection';
import ColdDataTable from './ColdDataTable';
import SendBulkEmailModal from './modals/SendBulkEmailModal';
import BulkCallAssignmentModal from './modals/BulkCallAssignmentModal';
import SendEmailModal from './modals/SendEmailModal';
import CallUserModal from './modals/CallUserModal';
import UserIssueDetailsModal from './modals/UserIssueDetailsModal';
import AddInternalNotesModal from './modals/AddInternalNotesModal';
import UpdateUserStatusModal from './modals/UpdateUserStatusModal';

export default function ColdData() {
  const {
    selectedFilter,
    setSelectedFilter,
    searchTerm,
    setSearchTerm,
    userType,
    setUserType,
    category,
    setCategory,
    priority,
    setPriority,
    status,
    setStatus,
    selectedUsers,
    setSelectedUsers,
    showBulkEmail,
    setShowBulkEmail,
    showBulkCall,
    setShowBulkCall,
    showSendEmail,
    setShowSendEmail,
    showCallUser,
    setShowCallUser,
    showUserDetails,
    setShowUserDetails,
    showInternalNotes,
    setShowInternalNotes,
    showUpdateStatus,
    setShowUpdateStatus,
    currentUser,
    setCurrentUser,
    filteredUsers,
    handleSelectUser,
    handleViewDetails,
    handleSendEmail,
    handleCallUser,
    getPriorityColor,
    getStatusColor,
    coldUsers
  } = useColdData();

  const handleExportData = () => {
    console.log('Exporting data...');
    alert('Data exported successfully!');
  };

  const handleExportResults = () => {
    console.log('Exporting filtered results...');
    alert('Filtered results exported successfully!');
  };

  const handleSelectAll = (userIds) => {
    setSelectedUsers(userIds);
  };

  return (
    <div className="p-6">
      <ColdDataHeader
        selectedUsers={selectedUsers}
        onExportData={handleExportData}
        onShowBulkEmail={() => setShowBulkEmail(true)}
        onShowBulkCall={() => setShowBulkCall(true)}
      />

      {/* Cold Data Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <SummaryCards />
        <FilterSection
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          userType={userType}
          setUserType={setUserType}
          category={category}
          setCategory={setCategory}
          priority={priority}
          setPriority={setPriority}
          status={status}
          setStatus={setStatus}
        />
        <ColdDataTable
          filteredUsers={filteredUsers}
          coldUsers={coldUsers}
          selectedUsers={selectedUsers}
          handleSelectUser={handleSelectUser}
          handleSelectAll={handleSelectAll}
          handleViewDetails={handleViewDetails}
          handleSendEmail={handleSendEmail}
          handleCallUser={handleCallUser}
          getPriorityColor={getPriorityColor}
          getStatusColor={getStatusColor}
          onExportResults={handleExportResults}
        />
      </main>
      
      {/* Modals */}
      {showBulkEmail && <SendBulkEmailModal onClose={() => setShowBulkEmail(false)} users={coldUsers.filter(u => selectedUsers.includes(u.id))} />}
      {showBulkCall && <BulkCallAssignmentModal onClose={() => setShowBulkCall(false)} users={coldUsers.filter(u => selectedUsers.includes(u.id))} />}
      {showSendEmail && <SendEmailModal onClose={() => setShowSendEmail(false)} user={currentUser} />}
      {showCallUser && <CallUserModal onClose={() => setShowCallUser(false)} user={currentUser} />}
      {showUserDetails && <UserIssueDetailsModal onClose={() => setShowUserDetails(false)} user={currentUser} onSendEmail={() => { setShowUserDetails(false); setShowSendEmail(true); }} onCallUser={() => { setShowUserDetails(false); setShowCallUser(true); }} onAddNotes={() => { setShowUserDetails(false); setShowInternalNotes(true); }} onUpdateStatus={() => { setShowUserDetails(false); setShowUpdateStatus(true); }} />}
      {showInternalNotes && <AddInternalNotesModal onClose={() => setShowInternalNotes(false)} />}
      {showUpdateStatus && <UpdateUserStatusModal onClose={() => setShowUpdateStatus(false)} />}
    </div>
  );
}
