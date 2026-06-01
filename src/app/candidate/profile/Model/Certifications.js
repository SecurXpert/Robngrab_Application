import React from 'react';

export default function Certifications() {
  return (
    <section className='bg-white shadow-md p-5 rounded-lg'>
      <div className="flex items-center gap-3 mb-6">
        <div className=" rounded-lg">
          <img src="/Assets/Home/Certifications.svg" alt="Certifications" className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#FFFBEB]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">AWS Certified Developer</h4>
              <p className="text-sm text-gray-600">Amazon Web Services</p>
            </div>
            <span className="text-sm text-gray-500">2023</span>
          </div>
        </div>
        <div className="rounded-xl p-4 shadow-sm  bg-gradient-to-r from-[#F8FAFC] to-[#FFFBEB]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">React Advanced Patterns</h4>
              <p className="text-sm text-gray-600">Frontend Masters</p>
            </div>
            <span className="text-sm text-gray-500">2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
