import React from 'react';

export default function FeaturedProjects() {
  return (
    <section className='bg-white shadow-md p-5 rounded-lg'>
      <div className="flex items-center gap-3 mb-6">
        <img src="/Assets/Home/Featuredprojects.svg" alt="Featured Projects" className="w-10 h-10" />
        <h3 className="text-lg font-semibold text-gray-900">Featured Projects</h3>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0FDFA]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">E-commerce Platform</h4>
              <p className="text-sm text-gray-600">Built a full-featured shopping platform with cart, payments, and admin dashboard</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>React</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>Node.js</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>Stripe</span>
          </div>
        </div>
        <div className="rounded-xl p-4 shadow-sm bg-gradient-to-r from-[#F8FAFC] to-[#F0FDFA]">
          <h4 className="font-semibold text-gray-900">Real-time Chat Application</h4>
          <p className="text-sm text-gray-600 mt-1">WebSocket-based chat with typing indicators and file sharing</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>React</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>Socket.io</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{backgroundColor: '#CBFBF1', color: '#00786F'}}>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
