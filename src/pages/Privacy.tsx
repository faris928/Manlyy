import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 overflow-hidden">
      {/* Privacy Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-48 right-48 w-22 h-22 bg-yellow-400/4 rounded-full animate-privacy-float-1"></div>
        <div className="absolute bottom-64 left-64 w-16 h-16 bg-yellow-300/3 rounded-full animate-privacy-float-2"></div>
        <div className="absolute top-2/3 left-1/4 w-12 h-12 bg-yellow-500/5 rounded-full animate-privacy-float-3"></div>
        
        {/* Security particles */}
        <div className="absolute top-64 left-40 w-2 h-2 bg-yellow-400 rounded-full animate-privacy-particle-1"></div>
        <div className="absolute bottom-96 right-72 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-privacy-particle-2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-privacy-header-reveal">
          <h1 className="text-5xl md:text-6xl font-cursive font-bold text-white mb-6 animate-magical-privacy-title">
            Privacy <span className="text-yellow-400 animate-magical-privacy-title animation-delay-300 animate-privacy-glow">Policy</span>
          </h1>
          <p className="text-xl font-cursive text-gray-300 max-w-2xl mx-auto mb-4 animate-magical-privacy-intro animation-delay-400">
            At Manly Faridunhill, we are committed to protecting your privacy and ensuring the security of your personal information. 
          </p>
          <p className="text-xl font-cursive text-gray-400 max-w-2xl mx-auto animate-magical-privacy-subtitle animation-delay-500">
            Your privacy is our priority. Learn how we protect and use your information.
          </p>
          <p className="text-sm text-gray-500 mt-4 animate-privacy-date-reveal animation-delay-700">Last updated: January 1, 2025</p>
        </div>

        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Our Commitment to Privacy</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Manly, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or make purchases from us.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Account credentials and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Website browsing behavior and preferences</li>
                  <li>Device information and IP address</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Purchase history and product interactions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Service Delivery</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Manage your account and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Improvement & Marketing</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Improve our website and services</li>
                  <li>Personalize your shopping experience</li>
                  <li>Send promotional emails (with your consent)</li>
                  <li>Conduct analytics and market research</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>SSL encryption for all data transmission</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure data storage with backup and recovery systems</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Information Sharing</h2>
            <div className="space-y-4 text-gray-300">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Service Providers:</strong> Trusted partners who help us operate our business (shipping, payment processing, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights & Choices</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@manly faridunhill.com" className="text-yellow-400 hover:text-yellow-300">privacy@manly faridunhill.com</a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Cookies & Tracking</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies and similar technologies to enhance your browsing experience:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to show relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-200/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:privacy@manly faridunhill.com" className="text-yellow-400 hover:text-yellow-300">privacy@manly faridunhill.com</a></p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;