'use client'

import { Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #4169e1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-400 pl-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                For more information about our services,{' '}
                <span className="text-blue-600">get in touch</span>{' '}
                with our expert consultants
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg max-w-2xl">
              Our friendly team is on hand to provide advice, guidance and support throughout 
              every step of your journey in finding and buying a new house. Contact us today for 
              more information about how we can help you!
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div className="flex items-center text-gray-600">
              <Phone className="w-8 h-8 text-cyan-400 mr-2" />
              <span className="uppercase text-sm">CALL FOR HELP NOW!</span>
            </div>
            
            <a 
              href="tel:+919048600044" 
              className="text-4xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              +91 9188 5858 59
            </a>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-md font-medium transition-colors">
              Contact us
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
