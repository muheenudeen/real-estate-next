'use client'

import Link from 'next/link'
import { ChevronDown, Home } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
           <img
            src="https://www.thithithara.com/images/logo/logo-white.webp"
            alt="Logo"
            className="h-12 md:h-16"
          />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                For Buyers
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                   1
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                   2
                </Link>
              </div>
            </div>

            <Link href="/dealers-builders" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              For Dealers/Builders
            </Link>

            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Other Services
            </Link>

            <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Blog & News
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            
            <Link
              href="/auth"
              className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium border border-blue-600 rounded-md"
            >
              SIGN IN
            </Link>
            
            <Link
              href="/post-property"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Post Property
              <Home className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

