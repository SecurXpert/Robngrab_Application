import { LogIn, LogOut, Activity, Power } from "lucide-react";

export default function FranchiseHistoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="w-full max-w-2xl overflow-hidden bg-white shadow-xl rounded-2xl">
        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <h1 className="text-2xl font-semibold text-[#0A0A0A]">
            Franchise History
          </h1>
        </div>

        {/* History List */}
        <div className="px-8 pb-4">
          {[
            {
              icon: LogIn,
              title: "Franchise logged in",
              date: "Feb 18, 2026 - 09:00 AM",
              color: "text-green-500",
            },
            {
              icon: Activity,
              title: "Status changed to Active",
              date: "Feb 18, 2026 - 12:30 PM",
              color: "text-blue-500",
            },
            {
              icon: Activity,
              title: "Status changed to Idle",
              date: "Feb 18, 2026 - 01:00 PM",
              color: "text-blue-500",
            },
            {
              icon: Activity,
              title: "Status changed to Active",
              date: "Feb 18, 2026 - 02:15 PM",
              color: "text-blue-500",
            },
            {
              icon: LogOut,
              title: "Franchise logged out",
              date: "Feb 17, 2026 - 06:00 PM",
              color: "text-gray-500",
            },
            {
              icon: Power,
              title: "Franchise enabled by Super Admin",
              date: "Feb 17, 2026 - 09:00 AM",
              color: "text-green-500",
            },
          ].map((item, index, arr) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 py-4 ${
                  index !== arr.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className={`mt-0.5 flex-shrink-0 ${item.color}`}>
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-base font-medium text-[#0A0A0A]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#6A7282] mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-end px-8 py-4">
          <button
            onClick={onClose}
            className="bg-[#e5e7eb] hover:bg-[#d1d5db] transition-all duration-200 text-sm font-medium text-gray-700 px-6 py-2 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
