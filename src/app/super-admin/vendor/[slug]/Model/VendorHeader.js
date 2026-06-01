import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

export default function VendorHeader({ vendor }) {
  if (!vendor) return null;
  
  return (
    <>
      <div className="mb-4">
        <Link
          href="/super-admin/vendor"
          className="inline-flex items-center mb-4 text-gray-900 hover:text-gray-700"
        >
          <LuArrowLeft className="w-4 h-4 mr-2" />
          Back to Vendors/Teams
        </Link>
        <div className="mb-4">
          <div className="flex flex-col gap-2 mb-1 sm:flex-row sm:justify-between sm:items-start">
            <h1 className="text-xl sm:text-2xl font-family-inter font-weight-500 text-[#0A0A0A]">
              {vendor.name}
            </h1>
            <div className="flex flex-shrink-0 space-x-2">
              <span
                className="px-3 py-1 bg-[#F0FDF4] text-[#008236] text-sm font-medium border border-[#B9F8CF]"
                style={{ borderRadius: "18.9px" }}
              >
                Active
              </span>
              <span
                className="px-3 py-1 bg-[#EFF6FF] text-[#1447E6] text-sm font-medium"
                style={{ borderRadius: "10.9px" }}
              >
                IT
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {vendor.description ||
              "Detailed analytics and performance insights"}
          </p>
        </div>
      </div>

      <div className="p-6 mb-6 bg-white border border-gray-200 shadow-sm rounded-xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-gray-600">Location</p>
            <div className="flex items-center mt-1">
              <GrLocation className="w-5 h-5 mr-2 text-gray-400" />
              <p className="font-medium text-gray-900">{vendor.location}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Contact Email</p>
            <div className="flex items-center mt-1">
              <HiOutlineMail className="w-5 h-5 mr-2 text-gray-400" />
              <p className="font-medium text-gray-900">{vendor.email}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Contact Phone</p>
            <div className="flex items-center mt-1">
              <FiPhone className="w-5 h-5 mr-2 text-gray-400" />
              <p className="font-medium text-gray-900">{vendor.phone}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Subscription Plan</p>
            <div className="flex items-center mt-1">
              <p className="font-medium text-gray-900">
                {vendor.subscription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
