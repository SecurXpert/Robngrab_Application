import Link from 'next/link';

export default function VendorHeader({ vendor }) {
  return (
    <div className="mb-8">
      <Link href="/vendor" className="inline-flex items-center text-gray-900 hover:text-gray-700 mb-4">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Vendors/Teams
      </Link>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{vendor.name}</h1>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">IT</span>
        </div>
      </div>
    </div>
  );
}
