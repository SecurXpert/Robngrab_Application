import Link from 'next/link';
import { FiUsers, FiEye } from "react-icons/fi";
import { LuPen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function VendorTable({
  isClient,
  filteredVendors,
  setSelectedVendor,
  setIsEditModalOpen,
  handleDeleteVendor
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Vendor Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Contact Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Active<br/>Recruiters</th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Balance<br/>Remaining</th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-[#4A5565]  tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isClient && filteredVendors.map((vendor) => (
              <tr key={vendor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-family-inter font-weight-400 text-[#0A0A0A]">{vendor.name}</div>
                  <div className="text-xs text-gray-500">ID: V00{vendor.id}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{vendor.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    vendor.category === 'IT' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {vendor.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#364153]">
                  <div className="flex items-center gap-2">
                    <FiUsers className="w-4 h-4 text-gray-500" />
                    {vendor.recruiters}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <span 
                    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                      vendor.status === 'Active' ? 'bg-[#B9F8CF] text-[#008236] ' : 'bg-gray-100 text-gray-800' 
                    }`}
                    style={vendor.status === 'Active' ? { border: '2px solid #B9F8CF' } : {}}
                  >
                    {vendor.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{vendor.balance || '$' + (Math.floor(Math.random() * 50) + 10) + ',500'}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  <div className="flex items-center space-x-3">
                    <Link href={`/super-admin/vendor/${vendor.id}`} className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded" title="View">
                      <FiEye className="w-4 h-4" />
                    </Link>
                    <button 
                      onClick={() => {
                        setSelectedVendor(vendor);
                        setIsEditModalOpen(true);
                      }}
                      className="text-green-600 hover:text-green-900 p-1 hover:bg-green-50 rounded" title="Edit"
                    >
                      <LuPen className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={() => handleDeleteVendor(vendor.id)}
                        className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded" title="Delete"
                      >
                      <RiDeleteBin6Line className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isClient && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading vendor data...</p>
        </div>
      )}

      {isClient && filteredVendors.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No vendors found</p>
        </div>
      )}
    </div>
  );
}
