import { useState } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Adopted Max in 2024',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'Adopting from Pawsome Haven was the best decision we ever made. Max has brought so much joy to our family. The team was incredibly supportive throughout the entire process!',
      dogImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Adopted Bella in 2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'The adoption process was smooth and the staff genuinely cared about finding the right match. Bella is now our best hiking buddy and most loyal companion!',
      dogImage: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Foster Parent & Donor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'I started as a foster parent and ended up adopting two dogs! The shelter provides amazing support to fosters and the dogs are so well cared for. Highly recommend getting involved!',
      dogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Adopted Charlie in 2024',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      text: 'Charlie has been the perfect addition to our apartment life. The team at Pawsome Haven helped us find a dog that matched our lifestyle perfectly. Forever grateful!',
      dogImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=200&fit=crop',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl mr-2">💕</span>
            <span className="text-green-700 font-medium">Happy Families</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories from
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent"> Our Adopters</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from families who have found their perfect companions through our shelter.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Dog Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-green-400 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src={testimonials[activeIndex].dogImage}
                  alt="Adopted dog"
                  className="relative w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-orange-100"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonials[activeIndex].name}</div>
                    <div className="text-orange-600">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
