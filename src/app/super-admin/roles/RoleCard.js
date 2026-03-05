'use client';

import { FaUsers, FaArrowRight } from 'react-icons/fa';
import { MdOutlineShield } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPen } from "react-icons/lu";

export default function RoleCard({ role, onViewPermissions }) {
  return (
    <div className={`bg-white rounded-lg border-l-4 ${role.iconColor.replace('text', 'border')} border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 shadow-sm w-full max-w-full overflow-hidden`}>
      {/* Header with shield icon and action buttons */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${role.iconColor} ${role.iconColor.replace('border', 'bg').replace('-500', '-50')} flex items-center justify-center flex-shrink-0`}>
          <MdOutlineShield className={`w-5 h-5 sm:w-6 sm:h-6 ${role.iconColor.replace('border', 'text')}`} />
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {!role.protected && (
            <>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                <LuPen className="w-4 h-4 text-gray-500 group-hover:text-gray-900" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                <RiDeleteBin6Line className="w-4 h-4 text-red-500 group-hover:text-red-700" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Title and description */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 truncate">{role.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{role.description}</p>
      </div>
      
      {/* Users assigned section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
          <FaUsers className="w-3 h-3 text-gray-600" />
        </div>
        <span className="text-sm text-gray-600 truncate">
          {role.usersAssigned} {role.usersAssigned === 1 ? 'user' : 'users'} assigned
        </span>
      </div>
      
      {/* Divider line */}
      <div className="border-t border-gray-200 mb-4"></div>
      
      {/* View permissions link */}
      <button 
        onClick={() => onViewPermissions(role)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
      >
        <span className="text-sm font-medium text-gray-700">View Permissions</span>
        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gray-700" />
      </button>
      
      {role.protected && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            Protected role - Cannot be deleted
          </p>
        </div>
      )}
    </div>
  );
}
