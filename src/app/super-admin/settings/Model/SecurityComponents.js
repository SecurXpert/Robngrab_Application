import { FiSmartphone } from "react-icons/fi";

export const TRUSTED_DEVICES = [
  { id: 'current', name: 'Chrome on MacOS', location: 'New York, US', lastActive: 'Last active 5 min ago', isCurrent: true, removable: false },
  { id: 'iphone', name: 'Safari on iOS', location: 'New York, US', lastActive: 'Last active 2 hours ago', isCurrent: false, removable: true },
  { id: 'windows', name: 'Chrome on Windows', location: 'Boston, US', lastActive: 'Last active 1 day ago', isCurrent: false, removable: true },
];

export const SectionCard = ({ children }) => (
  <section className="bg-white rounded-2xl shadow-sm border border-slate-100">{children}</section>
);

export const SectionHeader = ({ title, description, rightSlot }) => (
  <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
    <div>
      <h2 className="text-md font-semibold text-[#0A0A0A]">{title}</h2>
      {description && <p className="mt-1 text-sm text-[#4A5565] max-w-md">{description}</p>}
    </div>
    {rightSlot}
  </div>
);

export const SettingRow = ({ icon, iconLabel, title, description, actionLabel, actionIcon }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3 min-w-0">
      {icon && <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">{icon}</span>}
      <div className="min-w-2">
        <p className="text-sm font-medium text-slate-900">{title}</p>
        {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
      </div>
    </div>
    <button type="button" className="px-3 py-1.5 text-xs font-medium border border-slate-300 bg-white text-black rounded-md hover:bg-slate-50">
      {actionLabel}
    </button>
  </div>
);

export const TrustedDeviceRow = ({ device }) => (
  <div className="rounded-xl border border-[#E5E7EB] px-4 py-3">
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-base font-medium text-slate-900">{device.name}</p>
          {device.isCurrent && <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-green-100 text-green-800">Current</span>}
        </div>
        <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
          <span>{device.location}</span><span>•</span><span>{device.lastActive}</span>
        </div>
      </div>
      {device.removable && <button className="text-xs font-medium text-red-600 hover:text-red-800">Remove</button>}
    </div>
  </div>
);
