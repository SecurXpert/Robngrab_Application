import { displayFieldError, getFieldClassName } from '@/utils/validation';

export default function EditVendorModal({
  selectedVendor,
  setIsEditModalOpen,
  editFormRef,
  handleUpdateVendor,
  handleRealTimeValidation,
  editFormErrors,
  realTimeEditErrors
}) {
  if (!selectedVendor) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">Edit Vendor</h3>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form 
          id="editVendorForm" 
          ref={editFormRef}
          className="flex-1 overflow-y-auto p-6 space-y-4" 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(editFormRef.current);
            handleUpdateVendor({
              name: formData.get('name'),
              email: formData.get('email'),
              category: formData.get('category'),
              status: formData.get('status'),
              phone: formData.get('phone'),
              location: formData.get('address')
            });
          }}
        >
          {/* First Row: Vendor Name and Business Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Vendor Name *</label>
              <input
                type="text"
                name="name"
                defaultValue={selectedVendor.name}
                maxLength="50"
                pattern="[a-zA-Z\s\-\.']*"
                title="Only letters, spaces, hyphens, and apostrophes allowed"
                onChange={(e) => handleRealTimeValidation('name', e.target.value, true)}
                className={getFieldClassName('name', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]')}
              />
              {displayFieldError('name', editFormErrors) || displayFieldError('name', realTimeEditErrors)}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Business Email *</label>
              <input
                type="email"
                name="email"
                defaultValue={selectedVendor.email}
                onChange={(e) => handleRealTimeValidation('email', e.target.value, true)}
                className={getFieldClassName('email', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]')}
              />
              {displayFieldError('email', editFormErrors) || displayFieldError('email', realTimeEditErrors)}
            </div>
          </div>

          {/* Second Row: Phone and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                defaultValue={selectedVendor.phone}
                maxLength="10"
                pattern="[0-9]*"
                inputMode="numeric"
                title="Only numbers allowed"
                onChange={(e) => handleRealTimeValidation('phone', e.target.value, true)}
                className={getFieldClassName('phone', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]')}
              />
              {displayFieldError('phone', editFormErrors) || displayFieldError('phone', realTimeEditErrors)}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Category *</label>
              <div className="relative">
                <select 
                  name="category" 
                  defaultValue={selectedVendor.category}
                  className={getFieldClassName('category', editFormErrors, 'w-full px-3 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none bg-white border-[1.32px] border-[#D1D5DC]')}
                >
                  <option value="IT">IT</option>
                  <option value="Non-IT">Non-IT</option>
                  <option value="Logistics">Logistics</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#0A0A0A]" fill="currentColor" viewBox="0 0 512 512">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184 144 144 144-144"></path>
                  </svg>
                </div>
              </div>
              {displayFieldError('category', editFormErrors)}
            </div>
          </div>

          {/* Third Row: Address (Full Width) */}
          <div>
            <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Address</label>
            <input
              type="text"
              name="address"
              defaultValue={selectedVendor.location}
              maxLength="50"
              pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
              title="Letters, numbers, spaces, and basic punctuation allowed"
              onChange={(e) => handleRealTimeValidation('location', e.target.value, true)}
              className={getFieldClassName('location', {...editFormErrors, ...realTimeEditErrors}, 'w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]')}
            />
            {displayFieldError('location', editFormErrors) || displayFieldError('location', realTimeEditErrors)}
          </div>

          {/* Fourth Row: Status (Full Width) */}
          <div>
            <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Status</label>
            <div className="relative">
              <select 
                name="status" 
                defaultValue={selectedVendor.status}
                className={getFieldClassName('status', editFormErrors, 'w-full px-3 py-2 pr-10 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 appearance-none bg-white border-[1.32px] border-[#D1D5DC]')}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#0A0A0A]" fill="currentColor" viewBox="0 0 512 512">
                  <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184 144 144 144-144"></path>
                </svg>
              </div>
            </div>
            {displayFieldError('status', editFormErrors)}
          </div>
        </form>

        {/* Modal Footer */}
        <div className="flex p-6 border-t border-gray-200 space-x-3">
          <button
            type="button"
            onClick={() => setIsEditModalOpen(false)}
            className="flex-1 px-4 py-2 bg-white text-[#364153] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="editVendorForm"
            disabled={Object.keys(realTimeEditErrors).length > 0}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              Object.keys(realTimeEditErrors).length > 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#2563EB] text-white hover:bg-blue-700'
            }`}
          >
            {Object.keys(realTimeEditErrors).length > 0 ? 'Fix Errors to Update' : 'Update Vendor'}
          </button>
        </div>
      </div>
    </div>
  );
}
