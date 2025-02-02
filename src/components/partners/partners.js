"use client"

export default function PartnersAndProperties() {
  const partners = [
    { name: "Marina One", logo: "https://www.thithithara.com/storage/cpartners/17_logo_1685542987.png" },
    { name: "Puravankara", logo: "https://www.thithithara.com/storage/cpartners/18_logo_1685543012.png" },
    { name: "Provident", logo: "https://www.thithithara.com/storage/cpartners/20_logo_1685543508.png" },
    { name: "Elite Developers", logo: "https://www.thithithara.com/storage/cpartners/19_logo_1685543200.png" },
    { name: "Reigate Builders", logo: "https://www.thithithara.com/storage/cpartners/15_logo_1685542061.png" },
    { name: "Noel", logo: "https://www.thithithara.com/storage/cpartners/17_logo_1685542987.png" },
  ]

  const propertyLinks = [
    "Houses Villa for Sale in Kozhikode (Calicut)",
    "Houses Villa For Sale In Thrissur",
    "Residential Land for Sale in Kozhikode",
    "Houses Villa for Sale in Thiruvananthapuram",
    "Houses Villa for Sale in Malappuram",
    "Plots/Lands for Sale in Ernakulam",
    "Residential Land for Sale in Malappuram",
    "Residential Land for Sale in Thiruvananthapuram",
    "Houses Villa for Sale in Ernakulam-Kochi",
    "Residential Land for Sale in Kottayam",
    "Houses Villa for Sale in Palakkad",
    "Residential Land for Sale in Thrissur",
  ]

  return (
    <div>
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-14">
      {/* Partners Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold text-blue-600 mb-12">CHANNEL PARTNERS</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-20">
          {partners.map((partner, index) => (
            <div key={index} className="w-32 h-16 flex items-center justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className=" object-contain   transition-all duration-300"
              />
            </div>
          ))}
        </div>
        </div>
        </div>
        {/* Properties Section */}
        <div className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-6">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
    Discover the most searched properties in Kerala for a unique and comprehensive real estate experience.
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {propertyLinks.map((link, index) => (
      <a
        key={index}
        href="#"
        className="flex items-center text-gray-700 hover:text-blue-600 transition-all"
      >
        <span className="text-blue-600 text-lg mr-2">➤</span>
        <span className="text-base">{link}</span>
      </a>
    ))}
  </div>
</div>

      
    
    </div>
  )
}

