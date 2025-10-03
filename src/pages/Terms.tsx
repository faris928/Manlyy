import React from 'react';
import { FileText, Scale, AlertTriangle, CreditCard } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 overflow-hidden">
      {/* Terms Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-56 right-56 w-20 h-20 bg-yellow-400/4 rounded-full animate-terms-float-1"></div>
        <div className="absolute bottom-72 left-72 w-14 h-14 bg-yellow-300/3 rounded-full animate-terms-float-2"></div>
        <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-yellow-500/5 rounded-full animate-terms-float-3"></div>
        
        {/* Legal particles */}
        <div className="absolute top-72 left-48 w-2 h-2 bg-yellow-400 rounded-full animate-terms-particle-1"></div>
        <div className="absolute bottom-104 right-80 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-terms-particle-2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-terms-header-reveal">
          <h1 className="text-5xl md:text-6xl font-cursive font-bold text-white mb-6 animate-magical-terms-title">
            Terms of <span className="text-yellow-400 animate-magical-terms-title animation-delay-300 animate-terms-glow">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-terms-subtitle-reveal animation-delay-500">
            By accessing and using the Manly Faridunhill website and services, you accept and agree to be bound by the terms and provision of this agreement. 
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-gray-500 mt-4 animate-terms-date-reveal animation-delay-700">Last updated: January 1, 2025</p>
        </div>

        <div className="space-y-8">
          {/* Agreement */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Agreement to Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the Manly website and services, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Use License */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Scale className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Use License</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Permission is granted to temporarily download one copy of the materials on Manly's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <p>Permission is granted to temporarily download one copy of the materials on Manly Faridunhill's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Manly at any time.</p>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Manly Faridunhill at any time.</p>
            </div>
          </div>

          {/* Product Information */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Product Information & Availability</h2>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>All product descriptions, images, and specifications are provided for informational purposes</li>
                <li>We strive for accuracy but cannot guarantee that all information is complete or error-free</li>
                <li>Product availability is subject to change without notice</li>
                <li>Prices are subject to change and may vary based on promotions or market conditions</li>
                <li>We reserve the right to limit quantities and refuse service to anyone</li>
              </ul>
            </div>
          </div>

          {/* Orders & Payment */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Orders & Payment</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Order Acceptance</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Order confirmation does not guarantee product availability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Payment is due at the time of order placement</li>
                  <li>We accept major credit cards and approved payment methods</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>You are responsible for any applicable taxes and fees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shipping & Returns */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Shipping & Returns</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Shipping</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We offer worldwide shipping with various delivery options</li>
                  <li>Shipping times are estimates and not guaranteed</li>
                  <li>Risk of loss passes to you upon delivery to the carrier</li>
                  <li>You are responsible for providing accurate shipping information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Returns</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Items may be returned within 30 days of delivery</li>
                  <li>Items must be in original condition with all packaging</li>
                  <li>Custom or personalized items may not be returnable</li>
                  <li>Return shipping costs may apply unless the item is defective</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Disclaimers & Limitations</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Warranty Disclaimer</h3>
                <p>
                  The materials on Manly's website are provided on an 'as is' basis. Manly makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Limitations</h3>
                <p>
                  In no event shall Manly or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on Manly's website, even if Manly or an authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy & Data Protection</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information 
                when you use our services. By using our services, you agree to the collection and use of information in 
                accordance with our Privacy Policy.
              </p>
              <p>
                <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                  View our complete Privacy Policy →
                </a>
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of New York, United States, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-200/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:legal@manly faridunhill.com" className="text-yellow-400 hover:text-yellow-300">legal@manly faridunhill.com</a></p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;