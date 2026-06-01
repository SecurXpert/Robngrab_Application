import { IoIosArrowDown } from "react-icons/io";
import { displayFieldError, getFieldClassName } from '@/utils/validation';

export default function AddVendorModal({
  setIsAddModalOpen,
  addFormRef,
  handleAddVendor,
  handleRealTimeValidation,
  formErrors,
  realTimeErrors
}) {
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Add Vendor</h3>
          <button
            onClick={() => setIsAddModalOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body - Form */}
        <form ref={addFormRef} onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleAddVendor({
            name: formData.get('name'),
            email: formData.get('email'),
            category: formData.get('category'),
            status: formData.get('status'),
            phone: formData.get('phone'),
            location: formData.get('location'),
            subscription: formData.get('subscription') || 'Standard Plan'
          });
        }}>
          <div className="p-6 space-y-4">
            {/* First Row: Vendor Name and Business Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Vendor Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength="50"
                  pattern="[a-zA-Z\s\-\.']*"
                  title="Only letters, spaces, hyphens, and apostrophes allowed"
                  placeholder="TechCorp Solutions"
                  onChange={(e) => handleRealTimeValidation('name', e.target.value, false)}
                  className={getFieldClassName('name', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                />
                {displayFieldError('name', formErrors) || displayFieldError('name', realTimeErrors)}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="admin@techcorp.com"
                  onChange={(e) => handleRealTimeValidation('email', e.target.value, false)}
                  className={getFieldClassName('email', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
                />
                {displayFieldError('email', formErrors) || displayFieldError('email', realTimeErrors)}
              </div>
            </div>

            {/* Second Row: Phone and Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  maxLength="10"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  title="Only numbers allowed"
                  placeholder="+1 (555) 234-5678"
                  onChange={(e) => handleRealTimeValidation('phone', e.target.value, false)}
                  className={getFieldClassName('phone', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-1  text-gray-900')}
                />
                {displayFieldError('phone', formErrors) || displayFieldError('phone', realTimeErrors)}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Category *</label>
                <div className="relative">
                  <select name="category" required className="w-full px-2 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-300 text-gray-900 appearance-none">
                    <option value="">Select Category</option>
                    <option value="IT">IT</option>
                    <option value="Non-IT">Non-IT</option>
                    <option value="Logistics">Logistics</option>
                  </select>
                  <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0A0A0A] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Third Row: Address (Full Width) */}
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Address</label>
              <input
                type="text"
                name="location"
                required
                maxLength="50"
                pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
                title="Letters, numbers, spaces, and basic punctuation allowed"
                placeholder="123 Tech Street, San Francisco, CA 94105"
                onChange={(e) => handleRealTimeValidation('location', e.target.value, false)}
                className={getFieldClassName('location', {...formErrors, ...realTimeErrors}, 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900')}
              />
              {displayFieldError('location', formErrors) || displayFieldError('location', realTimeErrors)}
            </div>

            {/* Fourth Row: Status */}
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Status</label>
              <div className="relative">
                <select name="status" required className={getFieldClassName('status', formErrors, 'w-full px-3 py-2 pr-8 border rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 appearance-none')}>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
                <IoIosArrowDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#0A0A0A] pointer-events-none" />
              </div>
              {displayFieldError('status', formErrors)}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="grid grid-cols-2 gap-3 p-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="w-full px-4 py-2 bg-white text-[#364153] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={Object.keys(realTimeErrors).length > 0}
              className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                Object.keys(realTimeErrors).length > 0 
                  ? 'bg-gray-300 text-[#FFFFFF] cursor-not-allowed' 
                  : 'bg-[#2563EB] text-white hover:bg-[#2563EB]'
              }`}
            >
              {Object.keys(realTimeErrors).length > 0 ? 'Fix Errors to Add Vendor' : 'Add Vendor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
