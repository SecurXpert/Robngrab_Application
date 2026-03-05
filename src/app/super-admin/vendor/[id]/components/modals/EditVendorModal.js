import { displayFieldError, getFieldClassName } from '../../../../../utils/validation';
import BaseModal from './BaseModal';

export default function EditVendorModal({ 
  isOpen, 
  onClose, 
  vendor, 
  vendorId, 
  vendors, 
  setVendors, 
  editFormErrors, 
  realTimeErrors, 
  handleRealTimeValidation, 
  handleUpdateVendor 
}) {
  if (!isOpen) return null;

  return (
    <BaseModal
      title="Edit Vendor"
      onClose={onClose}
      showFooter={false}
    >
      <form 
        id="editVendorForm" 
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleUpdateVendor({
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            category: formData.get('category'),
            location: formData.get('location'),
            status: formData.get('status'),
            subscription: formData.get('subscription')
          });
        }}
        className="space-y-4"
      >
        {/* First Row: Vendor Name and Business Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
            <input
              type="text"
              defaultValue={vendor.name}
              name="name"
              maxLength="50"
              pattern="[a-zA-Z\s\-\.']*"
              title="Only letters, spaces, hyphens, and apostrophes allowed"
              onChange={(e) => handleRealTimeValidation('name', e.target.value)}
              className={getFieldClassName('name', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
            />
            {displayFieldError('name', editFormErrors) || displayFieldError('name', realTimeErrors)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
            <input
              type="email"
              defaultValue={vendor.email}
              name="email"
              onChange={(e) => handleRealTimeValidation('email', e.target.value)}
              className={getFieldClassName('email', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900')}
            />
            {displayFieldError('email', editFormErrors) || displayFieldError('email', realTimeErrors)}
          </div>
        </div>

        {/* Second Row: Phone and Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              defaultValue={vendor.phone}
              name="phone"
              maxLength="10"
              pattern="[0-9]*"
              inputMode="numeric"
              title="Only numbers allowed"
              onChange={(e) => handleRealTimeValidation('phone', e.target.value)}
              className={getFieldClassName('phone', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
            />
            {displayFieldError('phone', editFormErrors) || displayFieldError('phone', realTimeErrors)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              name="category" 
              value={vendor.category} 
              onChange={(e) => {
                // Update vendor state for controlled component
                const updatedVendors = vendors.map(v => 
                  v.id.toString() === vendorId 
                    ? { ...v, category: e.target.value }
                    : v
                );
                setVendors(updatedVendors);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="IT">IT</option>
              <option value="Non-IT">Non-IT</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>
        </div>

        {/* Third Row: Address (Full Width) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            defaultValue={vendor.location}
            name="location"
            maxLength="50"
            pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
            title="Letters, numbers, spaces, and basic punctuation allowed"
            onChange={(e) => handleRealTimeValidation('location', e.target.value)}
            className={getFieldClassName('location', {...editFormErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
          />
          {displayFieldError('location', editFormErrors) || displayFieldError('location', realTimeErrors)}
        </div>

        {/* Fourth Row: Status and Subscription */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              name="status" 
              value={vendor.status}
              onChange={(e) => {
                // Update vendor state for controlled component
                const updatedVendors = vendors.map(v => 
                  v.id.toString() === vendorId 
                    ? { ...v, status: e.target.value }
                    : v
                );
                setVendors(updatedVendors);
              }}
              className={getFieldClassName('status', editFormErrors, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
            >
              <option value="">Select Status</option>
              <option value="Active" selected={vendor.status === 'Active'}>Active</option>
              <option value="Inactive" selected={vendor.status === 'Inactive'}>Inactive</option>
              <option value="Pending" selected={vendor.status === 'Pending'}>Pending</option>
            </select>
            {displayFieldError('status', editFormErrors)}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan</label>
            <select 
              name="subscription" 
              value={vendor.subscription}
              onChange={(e) => {
                // Update vendor state for controlled component
                const updatedVendors = vendors.map(v => 
                  v.id.toString() === vendorId 
                    ? { ...v, subscription: e.target.value }
                    : v
                );
                setVendors(updatedVendors);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="Standard Plan" selected={vendor.subscription === 'Standard Plan'}>Standard Plan</option>
              <option value="Premium Plan" selected={vendor.subscription === 'Premium Plan'}>Premium Plan</option>
              <option value="Basic Plan" selected={vendor.subscription === 'Basic Plan'}>Basic Plan</option>
            </select>
          </div>
        </div>
      </form>

      {/* Modal Footer */}
      <div className="flex items-center justify-end p-6 border-t border-gray-200 space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Cancel
        </button>
        <button 
          type="submit"
          form="editVendorForm"
          disabled={Object.keys(realTimeErrors).length > 0}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            Object.keys(realTimeErrors).length > 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {Object.keys(realTimeErrors).length > 0 ? 'Fix Errors to Update' : 'Update Vendor'}
        </button>
      </div>
    </BaseModal>
  );
}
