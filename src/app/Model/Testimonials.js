'use client';

import { useState } from 'react';
import { FiStar, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Robert Fox',
      title: 'UI/UX Designer',
      avatar: 'https://picsum.photos/seed/robertfox/100/100.jpg',
      rating: 5,
      quote: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."
    },
    {
      id: 2,
      name: 'Bessie Cooper',
      title: 'Creative Director',
      avatar: 'https://picsum.photos/seed/bessiecooper/100/100.jpg',
      rating: 5,
      quote: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante"
    },
    {
      id: 3,
      name: 'Jane Cooper',
      title: 'Photographer',
      avatar: 'https://picsum.photos/seed/janecooper/100/100.jpg',
      rating: 5,
      quote: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci."
    },
    {
      id: 4,
      name: 'John Doe',
      title: 'Software Engineer',
      avatar: 'https://picsum.photos/seed/johndoe/100/100.jpg',
      rating: 5,
      quote: "Duis vestibulum bibendum dapibus. Morbi vitae tristique ante, vel dictum justo. Donec quis erat vel augue blandit sodales."
    },
    {
      id: 5,
      name: 'Sarah Wilson',
      title: 'Product Manager',
      avatar: 'https://picsum.photos/seed/sarahwilson/100/100.jpg',
      rating: 5,
      quote: "Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Testimonials from Our Customers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied users have to say about their experience finding their dream jobs through our platform
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* First Row - Text Content */}
                <div className="flex-1">
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="h-2"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-blue-200">
                    <img 
                      src="/Assets/Quote-icon.svg" 
                      alt="Quote" 
                      className="w-6 h-6 sm:w-10 sm:h-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows – positioned outside the cards */}
          {currentIndex > 0 && (
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-12 md:-translate-x-10 lg:-translate-x-20 bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
              aria-label="Previous testimonials"
            >
              <FiArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </button>
          )}

          {currentIndex < testimonials.length - 3 && (
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-12 md:translate-x-10 lg:translate-x-20 bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
              aria-label="Next testimonials"
            >
              <FiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {Array.from({ length: testimonials.length - 2 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}