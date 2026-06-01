import { FaCheck } from 'react-icons/fa';

export default function PermissionSection({ title, permissions, category, onChange }) {
  return (
    <div className="border border-[#E5E7EB] rounded-lg p-3">
      <h4 className="font-medium text-[#0A0A0A] text-sm mb-3">{title}</h4>
      <div 
        className="grid"
        style={{ 
          width: '550px', 
          height: '84px', 
          gridTemplateRows: 'repeat(2, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)',
          rowGap: '12px',
          columnGap: '12px'
        }}
      >
        {Object.entries(permissions).map(([key, value]) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer relative">
            <input
              type="checkbox"
              checked={value}
              onChange={() => onChange(category, key)}
              className="appearance-none rounded border-2 border-gray-300 focus:ring-blue-500 peer checked:bg-blue-600 checked:border-blue-600 transition-colors"
              style={{ width: '16.67px', height: '16.67px' }}
            />
            <FaCheck className="w-4 h-4 absolute pointer-events-none hidden peer-checked:block text-white" />
            <span className="text-sm text-[#364153] capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
