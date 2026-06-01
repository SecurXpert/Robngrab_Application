export default function EditFranchiseModal({
  isOpen,
  onClose,
  franchise,
  editFormData,
  editFormErrors,
  realTimeErrors,
  handleInputChange,
  handleUpdateFranchise,
  displayFieldError,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div
        className="fixed inset-0 transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden text-left z-50">
        <div className="p-8">
          {/* Header */}
          <h3 className="text-[22px] font-semibold text-gray-900 mb-6">
            Edit Franchise
          </h3>

          {/* Form fields stacked exactly like Figma */}
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Franchise Name
              </label>
              <input
                type="text"
                name="franchiseName"
                defaultValue={franchise.name}
                onChange={handleInputChange}
                placeholder="e.g., Tech Solutions Inc."
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {displayFieldError("franchiseName", editFormErrors) ||
                displayFieldError("franchiseName", realTimeErrors)}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                defaultValue={franchise.email}
                onChange={handleInputChange}
                placeholder="contact@techsolutionsinc.com"
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {displayFieldError("contactEmail", editFormErrors) ||
                displayFieldError("contactEmail", realTimeErrors)}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Contact Phone
              </label>
              <input
                type="tel"
                name="contactPhone"
                defaultValue={franchise.phone}
                onChange={handleInputChange}
                placeholder="+1 800 555 1234"
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {displayFieldError("contactPhone", editFormErrors) ||
                displayFieldError("contactPhone", realTimeErrors)}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Address
              </label>
              <input
                type="text"
                name="address"
                defaultValue={franchise.location}
                onChange={handleInputChange}
                placeholder="Silicon Valley, CA, USA"
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {displayFieldError("address", editFormErrors) ||
                displayFieldError("address", realTimeErrors)}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end mt-8 space-x-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 font-medium text-gray-700 bg-[#E2E8F0] rounded-xl hover:bg-[#CBD5E1] transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() =>
                handleUpdateFranchise({
                  name:
                    "franchiseName" in editFormData
                      ? editFormData.franchiseName
                      : franchise.name,
                  email:
                    "contactEmail" in editFormData
                      ? editFormData.contactEmail
                      : franchise.email,
                  phone:
                    "contactPhone" in editFormData
                      ? editFormData.contactPhone
                      : franchise.phone,
                  location:
                    "address" in editFormData
                      ? editFormData.address
                      : franchise.location,
                })
              }
              disabled={Object.keys(realTimeErrors).length > 0}
              className={`px-5 py-2.5 rounded-xl font-medium transition-colors text-sm shadow-sm ${
                Object.keys(realTimeErrors).length > 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#2563EB] text-white hover:bg-blue-600"
              }`}
            >
              {Object.keys(realTimeErrors).length > 0
                ? "Fix Errors to Save"
                : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
