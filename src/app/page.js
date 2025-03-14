import ContactSection from "@/components/contactSection/contactSection";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import PartnersAndProperties from "@/components/partners/partners";
import PropertyListings from "@/components/property/propertyListing";
import PropertySlider from "@/components/propertySlider/propertySlider";
import WhatsAppButton from "@/components/WhatsApp/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div
          className="relative w-full h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.thithithara.com/images/slider/test4.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute top-1/4 left-16 text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Sail Smoothly to Your <br /> Dream Home
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <span className="flex items-center gap-2 text-lg">
                <span className="text-yellow-400">✔</span> Verified Properties
              </span>
              <span className="flex items-center gap-2 text-lg">
                <span className="text-yellow-400">✔</span> Effortless Navigation
              </span>
              <span className="flex items-center gap-2 text-lg">
                <span className="text-yellow-400">✔</span> AI Powered Assistance
              </span>
            </div>
          </div>
        </div>
        <WhatsAppButton/>
        {/* <PropertyListings /> */}
        <PropertySlider />
        <ContactSection />
        <PartnersAndProperties />
        <Footer />

      </main>
    </>
  );
}
