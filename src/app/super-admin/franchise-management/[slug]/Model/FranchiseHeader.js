export default function FranchiseHeader({ franchise }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h1 className="text-[31px] leading-13 font-semibold text-[#0A0A0A] tracking-[-0.02em]">
          {franchise.name}
        </h1>

        <p className="mt-1 text-[16px] leading-6 text-[#4A5565] font-normal">
          Detailed analytics and performance insights
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <div className="flex space-x-2">
          <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
            {franchise.status}
          </span>
        </div>
      </div>
    </div>
  );
}
