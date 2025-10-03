import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Orders & Shipping",
      items: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days within the US. International shipping takes 7-14 business days. We offer expedited shipping options at checkout."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer complimentary worldwide shipping on all orders. No minimum purchase required."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely. Once your order ships, you'll receive a tracking number via email. You can also track your order status in your account dashboard."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "Orders can be modified or cancelled within 1 hour of placement. After that, please contact our customer service team for assistance."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      items: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day hassle-free return policy. Items must be in original condition with all packaging and certificates of authenticity."
        },
        {
          question: "How do I return an item?",
          answer: "Log into your account, go to Order History, and select 'Return Item'. We'll provide a prepaid return label and instructions."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive your returned item. The refund will appear on your original payment method within 5-10 business days."
        },
        {
          question: "Can I exchange an item?",
          answer: "Yes, we offer exchanges for different sizes or colors within 30 days. Contact our customer service team to arrange an exchange."
        }
      ]
    },
    {
      category: "Products & Quality",
      items: [
        {
          question: "Are your products authentic?",
          answer: "Yes, all our products are 100% authentic and come with certificates of authenticity. We work directly with authorized dealers and manufacturers."
        },
        {
          question: "Do you offer warranties?",
          answer: "All our products come with manufacturer warranties. Timepieces typically have 2-year warranties, while other accessories have 1-year warranties."
        },
        {
          question: "How do I care for my luxury items?",
          answer: "Each product comes with detailed care instructions. We also offer professional cleaning and maintenance services for timepieces and jewelry."
        },
        {
          question: "Do you offer customization or engraving?",
          answer: "Yes, we offer engraving services for select items. Customization options are available during checkout or by contacting our customer service team."
        }
      ]
    },
    {
      category: "Account & Payment",
      items: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' in the top right corner and fill out the registration form. You'll receive a confirmation email to activate your account."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely. We use industry-standard SSL encryption and never store your payment information on our servers. All transactions are processed through secure payment gateways."
        },
        {
          question: "Can I save multiple addresses?",
          answer: "Yes, you can save multiple shipping and billing addresses in your account for faster checkout."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 overflow-hidden">
      {/* FAQ Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-24 h-24 bg-yellow-400/4 rounded-full animate-faq-float-1"></div>
        <div className="absolute bottom-56 left-56 w-18 h-18 bg-yellow-300/3 rounded-full animate-faq-float-2"></div>
        <div className="absolute top-1/2 left-1/5 w-14 h-14 bg-yellow-500/5 rounded-full animate-faq-float-3"></div>
        <div className="absolute bottom-1/4 right-1/5 w-20 h-20 bg-yellow-400/4 rounded-full animate-faq-float-4"></div>
        
        {/* Question particles */}
        <div className="absolute top-56 left-32 w-2 h-2 bg-yellow-400 rounded-full animate-faq-particle-1"></div>
        <div className="absolute top-80 right-56 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-faq-particle-2"></div>
        <div className="absolute bottom-80 left-80 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-faq-particle-3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-faq-header-reveal">
          <h1 className="text-5xl md:text-6xl font-cursive font-bold text-white mb-6 animate-magical-faq-title">
            Frequently Asked <span className="text-yellow-400 animate-magical-faq-title animation-delay-300 animate-faq-glow">Questions</span>
          </h1>
          <p className="text-xl font-cursive text-gray-400 max-w-2xl mx-auto animate-magical-faq-subtitle animation-delay-500">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 animate-faq-search-reveal animation-delay-700">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-faq-search-pulse" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 animate-faq-input-glow"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">{category.category}</h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="border border-gray-700/50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300"
                      >
                        <span className="text-white font-medium">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-yellow-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-200/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6">Our customer service team is here to help</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@manly.com"
                className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;