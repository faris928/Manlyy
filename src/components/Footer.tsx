import React from 'react';
import { Crown, Mail, Phone } from 'lucide-react';

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
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mr-2 animate-pulse"></div>
                
                {/* 3D Crown Icon */}
                <div className="relative">
                  <div className="crown-3d-container">
                    <Crown className="h-10 w-10 text-yellow-600 drop-shadow-2xl filter crown-3d-rotate crown-bounce crown-pulse" />
                    <Crown className="absolute inset-0 h-10 w-10 text-yellow-400 opacity-70 mix-blend-overlay crown-3d-rotate-reverse" />
                    <Crown className="absolute inset-0 h-10 w-10 text-yellow-500 crown-wobble opacity-50 mix-blend-multiply" />
                  </div>
                  <div className="absolute inset-0 h-10 w-10 bg-yellow-500/40 rounded-full blur-lg animate-pulse crown-glow-rotate crown-glow-expand"></div>
                  <div className="absolute inset-0 h-10 w-10 bg-yellow-400/30 rounded-full blur-xl animate-pulse animation-delay-500 crown-glow-spiral"></div>
                  
                  {/* Footer Sparkles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping animation-delay-1000 sparkle-3d-1 sparkle-orbit-1" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse animation-delay-1500 sparkle-3d-2 sparkle-dance"></div>
                  <div className="absolute top-0 -left-1 w-1 h-1 bg-yellow-200 rounded-full animate-ping animation-delay-2000 sparkle-float"></div>
                </div>
                
                {/* Decorative Lines */}
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent ml-2 animate-pulse animation-delay-300"></div>
              </div>
              
              <div className="relative">
                <span className="text-3xl font-serif font-bold text-white logo-text-3d tracking-wider manly-3d-text manly-wave-text">
                  <span className="inline-block text-yellow-400 manly-letter-bounce animation-delay-100">M</span>
                  <span className="inline-block text-yellow-400 manly-letter-bounce animation-delay-200">a</span>
                  <span className="inline-block text-yellow-400 manly-letter-bounce animation-delay-300">n</span>
                  <span className="inline-block text-yellow-400 manly-letter-bounce animation-delay-400">l</span>
                  <span className="inline-block text-yellow-400 manly-letter-bounce animation-delay-500">y</span>
                  <span className="inline-block manly-letter-bounce animation-delay-600"> </span>
                  <span className="inline-block manly-letter-bounce animation-delay-700">F</span>
                  <span className="inline-block manly-letter-bounce animation-delay-800">a</span>
                  <span className="inline-block manly-letter-bounce animation-delay-900">r</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1000">i</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1100">d</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1200">u</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1300">n</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1400">h</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1500">i</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1600">l</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1700">l</span>
                  <span className="inline-block manly-letter-bounce animation-delay-1700">l</span>
                </span>
                <div className="absolute inset-0 text-3xl font-serif font-bold text-yellow-400/25 blur-sm tracking-wider text-shadow-3d-1 text-shadow-float">
                  <span className="text-yellow-400/35">Manly</span> Faridunhill
                </div>
                <div className="absolute inset-0 text-3xl font-serif font-bold text-yellow-400/20 blur-md tracking-wider text-shadow-3d-2 text-shadow-drift">
                  <span className="text-yellow-400/30">Manly</span> Faridunhill
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
                <span className="text-gray-400 text-sm">info@manly faridunhill.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Manly Faridunhill. All rights reserved.
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