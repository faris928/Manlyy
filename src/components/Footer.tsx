import React from 'react';
import { Diamond, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center">
                {/* Decorative Lines */}
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mr-2"></div>
                
                {/* Diamond Icon */}
                <div className="relative">
                  <Diamond className="h-8 w-8 text-yellow-400 drop-shadow-lg filter diamond-sparkle" />
                  <div className="absolute inset-0 h-8 w-8 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
                </div>
                
                {/* Decorative Lines */}
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent ml-2"></div>
              </div>
              
              <div className="relative">
                <span className="text-2xl font-serif font-bold text-white logo-text-glow tracking-wider">
                  M<span className="text-yellow-400">A</span>NLY
                </span>
                <div className="absolute inset-0 text-2xl font-serif font-bold text-yellow-400/10 blur-sm tracking-wider">
                  M<span className="text-yellow-400/20">A</span>NLY
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating the modern gentleman with premium essentials and timeless style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors duration-300">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="/cart" className="text-gray-400 hover:text-white transition-colors duration-300">Cart</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/products?category=watches" className="text-gray-400 hover:text-white transition-colors duration-300">Watches</a></li>
              <li><a href="/products?category=pens" className="text-gray-400 hover:text-white transition-colors duration-300">Pens</a></li>
              <li><a href="/products?category=necklaces" className="text-gray-400 hover:text-white transition-colors duration-300">Necklaces</a></li>
              <li><a href="/products?category=bracelets" className="text-gray-400 hover:text-white transition-colors duration-300">Bracelets</a></li>
              <li><a href="/products?category=rings" className="text-gray-400 hover:text-white transition-colors duration-300">Rings</a></li>
              <li><a href="/products?category=accessories" className="text-gray-400 hover:text-white transition-colors duration-300">Accessories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">info@manly.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Manly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;