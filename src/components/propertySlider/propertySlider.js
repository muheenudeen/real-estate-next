"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://www.thithithara.com/storage/ads/18_image_1695225579.webp",
      refNo: "REF.A No : K-RERA/PRJ/KKD/133/2023",
    },
    {
      image: "https://www.thithithara.com/storage/ads/31_image_1715604793.webp",
      refNo: "REF.A No : K-RERA/PRJ/KKD/134/2023",
    },
    {
      image: "https://www.thithithara.com/storage/ads/17_image_1695121312.webp",
      refNo: "REF.A No : K-RERA/PRJ/KKD/135/2023",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative bg-[#FDF6EC]">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full p-16 object-cover" />
            <div className="absolute top-4 right-4 text-xs text-gray-600 bg-white p-1 rounded">
              {slide.refNo}
            </div>
          </div>
          
        ))}
      </div>

      {/* Navigation Icons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-orange-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
