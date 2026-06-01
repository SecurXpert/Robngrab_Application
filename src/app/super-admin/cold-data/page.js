'use client';

import { useColdData } from '@/utils/useColdData';
import ColdDataHeader from '@/app/super-admin/cold-data/Model/ColdDataHeader';
import SummaryCards from '@/app/super-admin/cold-data/Model/SummaryCards';
import FilterSection from '@/app/super-admin/cold-data/Model/FilterSection';
import ColdDataTable from '@/app/super-admin/cold-data/Model/ColdDataTable';
import SendBulkEmailModal from '@/app/super-admin/cold-data/Model/SendBulkEmailModal';
import BulkCallAssignmentModal from '@/app/super-admin/cold-data/Model/BulkCallAssignmentModal';
import SendEmailModal from '@/app/super-admin/cold-data/Model/SendEmailModal';
import CallUserModal from '@/app/super-admin/cold-data/Model/CallUserModal';
import UserIssueDetailsModal from '@/app/super-admin/cold-data/Model/UserIssueDetailsModal';
import AddInternalNotesModal from '@/app/super-admin/cold-data/Model/AddInternalNotesModal';
import UpdateUserStatusModal from '@/app/super-admin/cold-data/Model/UpdateUserStatusModal';

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
    <div className="p-3">
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
      {showBulkEmail && <SendBulkEmailModal onClose={() => setShowBulkEmail(false)} users={coldUsers} />}
      {showBulkCall && <BulkCallAssignmentModal onClose={() => setShowBulkCall(false)} users={coldUsers} />}
      {showSendEmail && <SendEmailModal onClose={() => setShowSendEmail(false)} user={currentUser} />}
      {showCallUser && <CallUserModal onClose={() => setShowCallUser(false)} user={currentUser} />}
      {showUserDetails && <UserIssueDetailsModal onClose={() => setShowUserDetails(false)} user={currentUser} onSendEmail={() => { setShowUserDetails(false); setShowSendEmail(true); }} onCallUser={() => { setShowUserDetails(false); setShowCallUser(true); }} onAddNotes={() => { setShowUserDetails(false); setShowInternalNotes(true); }} onUpdateStatus={() => { setShowUserDetails(false); setShowUpdateStatus(true); }} />}
      {showInternalNotes && <AddInternalNotesModal onClose={() => setShowInternalNotes(false)} />}
      {showUpdateStatus && <UpdateUserStatusModal onClose={() => setShowUpdateStatus(false)} />}
    </div>
  );
}
