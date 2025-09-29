import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-3xl font-cursive font-bold">MANLY</span>
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
              <li><a href="/products?category=cologne" className="text-gray-400 hover:text-white transition-colors duration-300">Cologne</a></li>
              <li><a href="/products?category=grooming" className="text-gray-400 hover:text-white transition-colors duration-300">Grooming</a></li>
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