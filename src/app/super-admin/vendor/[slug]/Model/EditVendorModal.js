import { LuX } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";

export default function EditVendorModal({
  isOpen,
  setIsEditModalOpen,
  vendor,
  vendors,
  setVendors,
  vendorId,
  editFormErrors,
  realTimeErrors,
  handleRealTimeValidation,
  handleUpdateVendor,
  displayFieldError,
  getFieldClassName,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
            Edit Vendor
          </h3>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="p-1 transition-colors rounded-lg hover:bg-gray-100"
          >
            <LuX className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Modal Body - Form */}
        <form
          id="editVendorForm"
          className="flex-1 p-6 space-y-4 overflow-y-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleUpdateVendor({
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              category: formData.get("category"),
              location: formData.get("location"),
              status: formData.get("status"),
              subscription: formData.get("subscription"),
            });
          }}
        >
          {/* First Row: Vendor Name and Business Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
                Vendor Name *
              </label>
              <input
                type="text"
                defaultValue={vendor.name}
                name="name"
                maxLength="50"
                pattern="[a-zA-Z\s\-\.']*"
                title="Only letters, spaces, hyphens, and apostrophes allowed"
                onChange={(e) =>
                  handleRealTimeValidation("name", e.target.value)
                }
                className={getFieldClassName(
                  "name",
                  { ...editFormErrors, ...realTimeErrors },
                  "w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]",
                )}
              />
              {displayFieldError("name", editFormErrors) ||
                displayFieldError("name", realTimeErrors)}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
                Business Email *
              </label>
              <input
                type="email"
                defaultValue={vendor.email}
                name="email"
                onChange={(e) =>
                  handleRealTimeValidation("email", e.target.value)
                }
                className={getFieldClassName(
                  "email",
                  { ...editFormErrors, ...realTimeErrors },
                  "w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]",
                )}
              />
              {displayFieldError("email", editFormErrors) ||
                displayFieldError("email", realTimeErrors)}
            </div>
          </div>

          {/* Second Row: Phone and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                defaultValue={vendor.phone}
                name="phone"
                maxLength="10"
                pattern="[0-9]*"
                inputMode="numeric"
                title="Only numbers allowed"
                onChange={(e) =>
                  handleRealTimeValidation("phone", e.target.value)
                }
                className={getFieldClassName(
                  "phone",
                  { ...editFormErrors, ...realTimeErrors },
                  "w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]",
                )}
              />
              {displayFieldError("phone", editFormErrors) ||
                displayFieldError("phone", realTimeErrors)}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
                Category *
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={vendor.category}
                  onChange={(e) => {
                    // Update vendor state for controlled component
                    const updatedVendors = vendors.map((v) =>
                      v.id.toString() === vendorId
                        ? { ...v, category: e.target.value }
                        : v,
                    );
                    setVendors(updatedVendors);
                  }}
                  className="w-full px-3 py-2 pr-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none bg-white border-[1.32px] border-[#D1D5DC]"
                >
                  <option value="IT">IT</option>
                  <option value="Non-IT">Non-IT</option>
                  <option value="Logistics">Logistics</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoChevronDownOutline className="w-4 h-4 text-[#0A0A0A]" />
                </div>
              </div>
            </div>
          </div>

          {/* Third Row: Address (Full Width) */}
          <div>
            <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
              Address
            </label>
            <input
              type="text"
              defaultValue={vendor.location}
              name="location"
              maxLength="50"
              pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
              title="Letters, numbers, spaces, and basic punctuation allowed"
              onChange={(e) =>
                handleRealTimeValidation("location", e.target.value)
              }
              className={getFieldClassName(
                "location",
                { ...editFormErrors, ...realTimeErrors },
                "w-full px-3 py-2 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 border-[1.32px] border-[#D1D5DC]",
              )}
            />
            {displayFieldError("location", editFormErrors) ||
              displayFieldError("location", realTimeErrors)}
          </div>

          {/* Fourth Row: Status (Full Width) */}
          <div>
            <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
              Status
            </label>
            <div className="relative">
              <select
                name="status"
                defaultValue={vendor.status}
                onChange={(e) => {
                  // Update vendor state for controlled component
                  const updatedVendors = vendors.map((v) =>
                    v.id.toString() === vendorId
                      ? { ...v, status: e.target.value }
                      : v,
                  );
                  setVendors(updatedVendors);
                }}
                className={getFieldClassName(
                  "status",
                  editFormErrors,
                  "w-full px-3 py-2 pr-10 rounded-lg focus:ring-2 focus:border-blue-500 text-gray-900 appearance-none bg-white border-[1.32px] border-[#D1D5DC]",
                )}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoChevronDownOutline className="w-4 h-4 text-[#0A0A0A]" />
              </div>
            </div>
            {displayFieldError("status", editFormErrors)}
          </div>
        </form>

        {/* Modal Footer */}
        <div className="flex p-6 space-x-3 border-t border-gray-200">
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="flex-1 px-4 py-2 bg-white text-[#364153] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="editVendorForm"
            disabled={Object.keys(realTimeErrors).length > 0}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              Object.keys(realTimeErrors).length > 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#2563EB] text-white hover:bg-blue-700"
            }`}
          >
            {Object.keys(realTimeErrors).length > 0
              ? "Fix Errors to Update"
              : "Update Vendor"}
          </button>
        </div>
      </div>
    </div>
  );
}
