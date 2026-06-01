import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { BriefcaseBusiness } from "lucide-react";

export default function FranchiseInfo({ franchise }) {
  return (
    <div className="p-6 mb-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm text-gray-600">Location</p>
          <div className="flex items-center mt-1">
            <GrLocation className="w-5 h-5 mr-2 text-gray-400" />
            <p className="font-medium text-gray-900">
              {franchise?.location || "Not available"}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">Contact Email</p>
          <div className="flex items-center mt-1">
            <HiOutlineMail className="w-5 h-5 mr-2 text-gray-400" />
            <p className="font-medium text-gray-900">
              {franchise?.email || "Not available"}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">Contact Phone</p>
          <div className="flex items-center mt-1">
            <FiPhone className="w-5 h-5 mr-2 text-gray-400" />
            <p className="font-medium text-gray-900">
              {franchise?.phone || "Not available"}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">Subscription Plan</p>
          <div className="flex items-center mt-1">
            <BriefcaseBusiness className="w-5 h-5 mr-2 text-gray-400 stroke-[2.5]" />
            <p className="font-medium text-gray-900">
              {franchise?.subscription || "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
