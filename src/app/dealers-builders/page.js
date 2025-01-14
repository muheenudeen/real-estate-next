import { Check } from 'lucide-react'
 
export default function DealersBuildersPage() {
  const dealerBenefits = [
    "You will get maximum reach to buyers through our services. Since the number of online users are increasing rapidly, it is important to discover them.",
    "You will get maximum exposure to online customers as you will appear higher in search.",
    "We provide Social Media Marketing so as to target the customers active on social media. We offer affordable social media marketing services.",
    "Thithithara.com offers relationship officer support for you. You can approach our relationship officer to make things clear and simple.",
    "Professional photoshoot, videography and drone are there for make your property listings unique and attractive.",
    "We offer branding solutions and lead generation for dealers. Through this you will get better brand exposure among your audience. We will bring leads that are best in quality and quantity.",
    "You can create a mini website to customize your property listings and to track your customers."
  ]

  const builderBenefits = [
    "Thithithara.com provides Social Media Marketing to promote your listings and to increase reach. We have effective strategies to bring quality leads.",
    "We offer branding and market consulting services. Through these you can reach to more customers online.",
    "We provide professional videography, photoshoot and drone to customize your listings, at reasonable charges.",
    "Relationship officer support is there to make the process easier and to clarify doubts."
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dealers Section */}
      <img
  src="https://www.thithithara.com/images/slider/builders-2.jpg"
  alt="banner-1"
  style={{ width: '100%', height: 'auto' }}
/>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Benefits for Dealers</h2>
        <div className="space-y-6">
          {dealerBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-1">
                <Check className="h-4 w-4 text-cyan-500" />
              </div>
              <p className="text-gray-700 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Builders Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Benefits for Builders</h2>
        <div className="space-y-6">
          {builderBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-1">
                <Check className="h-4 w-4 text-cyan-500" />
              </div>
              <p className="text-gray-700 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
          Contact Us Today
        </button>
      </div>
    </div>
  )
}

