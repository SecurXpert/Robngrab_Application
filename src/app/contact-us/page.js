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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name should contain only alphabets';
        } else if (value.length > 50) {
          error = 'Name should not exceed 50 characters';
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email format';
        } else if (value.length > 50) {
          error = 'Email should not exceed 50 characters';
        }
        break;
      
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[0-9]+$/.test(value)) {
          error = 'Phone should contain only numbers';
        } else if (value.length > 10) {
          error = 'Phone should not exceed 10 characters';
        }
        break;
      
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.length > 200) {
          error = 'Message should not exceed 200 characters';
        }
        break;
      
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Apply input restrictions
    let processedValue = value;
    if (name === 'name') {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phone') {
      processedValue = value.replace(/[^0-9]/g, '');
    }
    
    setFormData({
      ...formData,
      [name]: processedValue
    });
    
    // Validate field and update errors
    const error = validateField(name, processedValue);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      // You can add success message or redirect here
    } else {
      console.log('Form has validation errors');
    }
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
                      maxLength={50}
                      className={`w-full px-0 py-3 text-gray-500 border-0 border-b-2 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      maxLength={50}
                      className={`w-full px-0 py-3 text-gray-500 border-0 border-b-2 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      maxLength={10}
                      className={`w-full px-0 py-3 text-gray-500 border-0 border-b-2 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    maxLength={200}
                    className={`w-full px-0 py-3 text-gray-500 border-0 border-b-2 bg-transparent text-base outline-none transition-all duration-200 placeholder:text-gray-400 min-h-[100px] resize-y focus:border-blue-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  <div className="flex justify-between items-center">
                    {errors.message && (
                      <span className="text-red-500 text-xs">{errors.message}</span>
                    )}
                    <span className="text-gray-400 text-xs">
                      {formData.message.length}/200 characters
                    </span>
                  </div>
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