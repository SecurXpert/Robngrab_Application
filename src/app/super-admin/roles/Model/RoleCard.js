'use client';



import { FaArrowRight } from 'react-icons/fa';

import { MdOutlineShield } from "react-icons/md";

import { RiDeleteBin6Line } from "react-icons/ri";

import { LuPen } from "react-icons/lu";
import { FiArrowRight, FiUsers } from "react-icons/fi";



export default function RoleCard({ role, onViewPermissions }) {

  // Define background colors for different role types
  const getShieldBgColor = (title) => {
    if (title.includes('Super Admin')) return 'bg-[#FEF2F2]';
    if (title.includes('Prime Creator')) return 'bg-[#EFF6FF]';
    if (title.includes('Prime Accountant')) return 'bg-[#F0FDF4]';
    if (title.includes('Prime IT Services')) return 'bg-[#FAF5FF]';
    if (title.includes('Vendor Manager')) return 'bg-[#FFF7ED]';
    return 'bg-[#FEF2F2]'; // default
  };

  return (

    <div className={`border rounded-xl p-5 bg-white ${role.iconColor.replace('text', 'border')} border-l-4 hover:shadow-lg transition-all duration-200 shadow-sm w-full max-w-full overflow-hidden`}>

      {/* Header with shield icon and action buttons */}

      <div className="flex items-start justify-between mb-3">

        <div className={`p-2 rounded-lg ${getShieldBgColor(role.title)} flex items-center justify-center flex-shrink-0`}>

          <MdOutlineShield className="w-5 h-5" style={{ color: role.title.includes('Super Admin') ? '#E7000B' : role.title.includes('Prime Creator') ? '#155DFC' : role.title.includes('Prime Accountant') ? '#00A63E' : role.title.includes('Prime IT Services') ? '#9810FA' : role.title.includes('Vendor Manager') ? '#F54900' : '#4B5563' }} />

        </div>

        <div className="flex flex-shrink-0">

          {!role.protected && (

            <>

              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors group">

                <LuPen className="w-4 h-4 text-gray-500 group-hover:text-gray-900" />

              </button>

              <button className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition-colors group">

                <RiDeleteBin6Line className="w-4 h-4 text-red-500 group-hover:text-red-700" />

              </button>

            </>

          )}

        </div>

      </div>



      {/* Title and description */}

      <div className="mb-3">

        <h3 className="font-family-inter font-weight-600 text-base text-[#0A0A0A] mb-1 truncate">{role.title}</h3>

        <p className="text-sm text-[#4A5565] mb-3 line-clamp-2">{role.description}</p>

      </div>



      {/* Users assigned section */}

      <div className="flex items-center gap-2 text-sm mb-3">

        <div className="w-4 h-4  flex items-center justify-center flex-shrink-0">

          <FiUsers className="w-8 h-15  " />

        </div>

        <span className="text-gray-600">

          {role.usersAssigned} {role.usersAssigned === 1 ? 'user' : 'users'} assigned

        </span>

      </div>



      {/* View permissions link */}
      <div className="border-t border-[#F3F4F6] pt-3 mt-3">
        <button
          onClick={() => onViewPermissions(role)}
          className="text-sm font-family-inter font-weight-500 inline-flex items-center gap-1 text-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
        >
          View Permissions
          <FiArrowRight />
        </button>
      </div>



      {role.protected && (

        <div className="mt-2 px-3 py-1.5 text-sm rounded-lg bg-[#FEFCE8] text-yellow-700 border" style={{ borderColor: '#FFF085' }}>

          Protected role - Cannot be deleted

        </div>

      )}

    </div>

  );

}

