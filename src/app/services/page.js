import WhatsAppButton from '@/components/WhatsApp/WhatsApp'
import Image from 'next/image'

const services = [
  {
    title: "Property Management",
    description: "We provide transparent, ideal and reliable property management solutions, including rental property management services.",
    image: "/Property-Management-1.jpg",
    imageAlt: "Property Management Service"
  },
  {
    title: "Mortgage Service",
    description: "We provide mortgage services for more consumer and commercial loan products than any other loan service provider in Kerala.",
    image: "/Mortgage-Service-2.jpg",
    imageAlt: "Mortgage Service"
  },
  {
    title: "Consulting Service",
    description: "Our management consulting services focus on the most critical issues and opportunities of our clients.",
    image: "/Consulting-Service-3.jpg",
    imageAlt: "Consulting Service"
  },
  {
    title: "Legal Support",
    description: "We provide legal aids for customers and we help for the registration, agreement drafting, verification, and related procedures.",
    image: "/Legal-Support-4.jpg",
    imageAlt: "Property Management Service"
  },
  {
    title: "Home Buying",
    description: "Thithithara provides home buying services which are reliable and budget friendly. We will guide through the whole process.",
    image: "/Home-Buying-5.jpg",
    imageAlt: "Mortgage Service"
  },
  {
    title: "Home Selling",
    description: "We offer home selling services for which we have posted the details of many houses for sale in Kerala on our website.",
    image: "/Home-Selling-6.jpg",
    imageAlt: "Consulting Service"
  }
]

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <WhatsAppButton/>

      <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">Services Offered</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-96 w-full">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <button className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Need Help With Our Services?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact our team of experts to learn more about how we can help you with your property needs.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
          Contact Us Today
        </button>
      </div>
    </div>
  )
}

