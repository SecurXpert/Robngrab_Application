'use client';

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-slate-50 py-1 px-4 pb-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Contact Form Section */}
        <section className=" p-12 md:p-20 sm:p-6">
          <div className="flex flex-row justify-between text-start mb-12">
            <div>
            <p className='text-[#152A5B] font-sans'>Get Started</p>
            <h1 className="text-4xl md:text-5xl sm:text-2xl font-bold text-[#152A5B] font-sans mb-3 leading-tight">Get in touch with us.</h1>
            <h1 className="text-4xl md:text-5xl sm:text-2xl font-bold text-[#152A5B] font-sans mb-3 leading-tight">We're here to assist you.</h1>
            </div>
            {/* Social Media Icons */}
            <div className="flex flex-col items-end gap-6 lg:pl-12">
            
              
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-200 text-slate-500 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25">
                  <FaFacebookF className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-200 text-slate-500 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-200 text-slate-500 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25">
                  <FaTwitter className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
            {/* Form */}
            <div className="flex-1">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 min-h-[100px] resize-y"
                    required
                  />
                </div>

                <button type="submit" className="py-5 px-10 bg-[#0163D6] text-white border-none rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 shadow-sm hover:bg-[#0152b8] hover:-translate-y-0.5 hover:shadow-lg w-full md:w-auto flex items-center justify-center gap-2">
                  Leave us a Message
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            
          </div>
        </section>
        </div>
      {/* Contact Info Section */}
      <ContactInfo />
    </div>
    <Footer/>
    </>

  );
}