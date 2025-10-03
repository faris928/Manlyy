import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 overflow-hidden">
      {/* Contact Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-32 w-28 h-28 bg-yellow-400/5 rounded-full animate-contact-float-1"></div>
        <div className="absolute bottom-48 left-48 w-20 h-20 bg-yellow-300/4 rounded-full animate-contact-float-2"></div>
        <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-yellow-500/6 rounded-full animate-contact-float-3"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-yellow-400/3 rounded-full animate-contact-float-4"></div>
        
        {/* Communication particles */}
        <div className="absolute top-48 left-24 w-2 h-2 bg-yellow-400 rounded-full animate-contact-particle-1"></div>
        <div className="absolute top-72 right-48 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-contact-particle-2"></div>
        <div className="absolute bottom-72 left-72 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-contact-particle-3"></div>
        <div className="absolute bottom-48 right-24 w-1 h-1 bg-yellow-200 rounded-full animate-contact-particle-4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-contact-header-reveal">
          <h1 className="text-5xl md:text-6xl font-cursive font-bold text-white mb-6 animate-magical-contact-title">
            Get in <span className="text-yellow-400 animate-magical-contact-title animation-delay-300 animate-contact-glow">Touch</span>
          </h1>
          <p className="text-xl font-cursive text-gray-400 max-w-2xl mx-auto animate-magical-contact-subtitle animation-delay-500">
            We're here to help with any questions about our premium collection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">info@manly faridunhill.com</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h2>
              <p className="text-gray-400 mb-6">Chat with our luxury specialists for instant assistance</p>
              <button className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-xl hover:from-green-400 hover:to-green-500 transition-all duration-300">
                <MessageCircle className="h-5 w-5" />
                <span>Start Live Chat</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-support">Order Support</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105'
                }`}
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day hassle-free return policy for all items in original condition."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship worldwide with complimentary shipping on all orders over $500."
              },
              {
                question: "Are your products authentic?",
                answer: "Absolutely. All our products come with certificates of authenticity and manufacturer warranties."
              },
              {
                question: "How can I track my order?",
                answer: "You'll receive a tracking number via email once your order ships. You can also track orders in your account."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;