"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
          <img
            src="https://www.thithithara.com/images/logo/logo-white.webp"
            alt="Logo"
            className="h-12 md:h-16"
          />
            <p className="text-sm">
              Thithithara is one of the best real estate websites in Kerala. You can buy rent or lease the property that
              you like. Being one of the best real estate websites in Kerala, thithithara.com is here to provide all the
              required details regarding a property.
            </p>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Popular Searches in Kerala</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  House for Sale in Trivandrum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Plots/Lands for Sale in Ernakulam
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Plots & Lands for Sale in Trivandrum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Flats for Sale in Ernakulam
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Flats and Apartments for Sale in Kozhikode-Calicut
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Flat/Apartment for Sale in Thiruvananthapuram
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Post Property
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Other Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Post Requirement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get in touch</h3>
            <div className="space-y-2">
              <p>Ground Floor, Neo Space,</p>
              <p>KINFRA Techno Industrial Park,</p>
              <p>Kakkancheri, Calicut University P.O,</p>
              <p>Malappuram, Kerala - 673 635</p>
              <p className="mt-4">
                <a href="tel:+919048600044" className="hover:text-white">
                  +91 9188 5858 59
                </a>
              </p>
              <p>
                <a href="mailto:hello@thithithara.com" className="hover:text-white">
                  hello@thithithara.com
                </a>
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-4 border-t border-gray-700 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
            </div>
            <p>&copy; 2024 thithithara. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

