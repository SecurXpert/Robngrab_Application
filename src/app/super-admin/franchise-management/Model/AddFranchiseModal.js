"use client";

import React from "react";
import {
  displayFieldError,
  getFieldClassName,
} from '@/utils/validation';

export default function AddFranchiseModal({
  isOpen,
  onClose,
  formData,
  formErrors,
  realTimeErrors,
  handleInputChange,
  handleSave,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-center justify-center max-w-2xl min-h-screen px-4 pt-4 pb-20 mx-auto text-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 transition-opacity backdrop-blur-xs bg-gray-500/30"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative z-50 inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
          <div className="px-6 py-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Add New Franchise
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 transition-colors hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Row 1: Franchise Name and Region/State */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Franchise Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="franchiseName"
                    value={formData.franchiseName}
                    onChange={handleInputChange}
                    placeholder="e.g., West Coast Branch"
                    maxLength="50"
                    pattern="[a-zA-Z\s\-\.']*"
                    title="Only letters, spaces, hyphens, and apostrophes allowed"
                    className={getFieldClassName(
                      "franchiseName",
                      { ...formErrors, ...realTimeErrors },
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900",
                    )}
                  />
                  {displayFieldError("franchiseName", formErrors) ||
                    displayFieldError("franchiseName", realTimeErrors)}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Region/State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="regionState"
                    value={formData.regionState}
                    onChange={handleInputChange}
                    placeholder="e.g., California"
                    maxLength="50"
                    pattern="[a-zA-Z\s\-\.']*"
                    title="Only letters, spaces, hyphens, and apostrophes allowed"
                    className={getFieldClassName(
                      "regionState",
                      { ...formErrors, ...realTimeErrors },
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900",
                    )}
                  />
                  {displayFieldError("regionState", formErrors) ||
                    displayFieldError("regionState", realTimeErrors)}
                </div>
              </div>

              {/* Row 2: Owner Name and Email */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Owner Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    placeholder="e.g., Michael Anderson"
                    maxLength="50"
                    pattern="[a-zA-Z\s\-\.']*"
                    title="Only letters, spaces, hyphens, and apostrophes allowed"
                    className={getFieldClassName(
                      "ownerName",
                      { ...formErrors, ...realTimeErrors },
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900",
                    )}
                  />
                  {displayFieldError("ownerName", formErrors) ||
                    displayFieldError("ownerName", realTimeErrors)}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Owner Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    placeholder="owner@email.com"
                    className={getFieldClassName(
                      "ownerEmail",
                      { ...formErrors, ...realTimeErrors },
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900",
                    )}
                  />
                  {displayFieldError("ownerEmail", formErrors) ||
                    displayFieldError("ownerEmail", realTimeErrors)}
                </div>
              </div>

              {/* Row 3: Phone and City */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="5550000000"
                    maxLength="10"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    title="Only numbers allowed"
                    className={getFieldClassName(
                      "phoneNumber",
                      { ...formErrors, ...realTimeErrors },
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900",
                    )}
                  />
                  {displayFieldError("phoneNumber", formErrors) ||
                    displayFieldError("phoneNumber", realTimeErrors)}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g., Los Angeles"
                    maxLength="50"
                    pattern="[a-zA-Z\s\-\.']*"
                    title="Only letters, spaces, hyphens, and apostrophes allowed"
                    className={getFieldClassName(
                      "city",
                      { ...formErrors, ...realTimeErrors },
                      "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent text-gray-900",
                    )}
                  />
                  {displayFieldError("city", formErrors) ||
                    displayFieldError("city", realTimeErrors)}
                </div>
              </div>

              {/* Row 4: Complete Address (Full Width) */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Complete Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="completeAddress"
                  value={formData.completeAddress}
                  onChange={handleInputChange}
                  placeholder="Street address, Suite/Unit, ZIP code"
                  rows={3}
                  maxLength="50"
                  pattern="[a-zA-Z0-9\s\-\.\,\#\/]*"
                  title="Letters, numbers, spaces, and basic punctuation allowed"
                  className={getFieldClassName(
                    "completeAddress",
                    { ...formErrors, ...realTimeErrors },
                    "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:border-transparent resize-none text-gray-900",
                  )}
                />
                {displayFieldError("completeAddress", formErrors) ||
                  displayFieldError("completeAddress", realTimeErrors)}
              </div>

              {/* Row 5: Initial Status and Expected Launch Date */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Initial Status
                  </label>
                  <select
                    name="initialStatus"
                    value={formData.initialStatus}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Pending Approval">Pending Approval</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Expected Launch Date
                  </label>
                  <input
                    type="date"
                    name="expectedLaunchDate"
                    value={formData.expectedLaunchDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 6: Business Plan (Full Width) */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-900">
                  Business Plan/Notes
                </label>
                <textarea
                  name="businessPlanNotes"
                  value={formData.businessPlanNotes}
                  onChange={handleInputChange}
                  placeholder="Additional information about franchise..."
                  rows={4}
                  className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Information Message */}
            <div className="p-4 mt-6 border border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-blue-800">
                  An invitation email will be sent to the owner with franchise setup instructions.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2 font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={Object.keys(realTimeErrors).length > 0}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  Object.keys(realTimeErrors).length > 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {Object.keys(realTimeErrors).length > 0
                  ? "Fix Errors to Save"
                  : "Save Plan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
