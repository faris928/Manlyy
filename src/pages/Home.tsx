import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, RotateCcw, Award, Star, Mail } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = productsData.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 animate-slow-zoom">
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Vintage luxury watches and accessories"
              className="w-full h-full object-cover animate-subtle-float"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-amber-900/20 to-black/80 animate-gradient-shift"></div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full animate-magical-orb"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/3 rounded-full animate-magical-orb-reverse"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-yellow-300/4 rounded-full animate-floating-bubble"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-yellow-500/3 rounded-full animate-floating-bubble-reverse"></div>
          
          {/* Magical particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-magical-particle-1"></div>
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-magical-particle-2"></div>
          <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-magical-particle-3"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-200 rounded-full animate-magical-particle-4"></div>
          <div className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-magical-particle-5"></div>
          <div className="absolute bottom-60 right-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-magical-particle-6"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-cursive font-bold text-white mb-6 leading-tight animate-text-glow">
              <span className="block animate-magical-text-reveal">Redefine</span>
              <span className="block text-yellow-400 animate-magical-text-reveal animation-delay-500 animate-text-glow-pulse">
                LUXURY
              </span>
            </h1>
          </div>

          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-xl md:text-2xl font-cursive text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto animate-magical-fade-in animate-text-shimmer">
              Discover premium essentials crafted for the modern gentleman. 
              Where sophistication meets uncompromising quality.
            </p>
          </div>

          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <Link
              to="/products"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-cursive font-semibold py-4 px-8 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 animate-magical-button animate-button-glow"
            >
              <span className="text-lg">Explore Collection</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 animate-arrow-bounce" />
            </Link>
          </div>

          {/* Stats */}
          <div className={`transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} mt-16`}>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center animate-magical-stat-reveal">
                <div className="text-2xl md:text-3xl font-cursive font-bold text-yellow-400 mb-1 animate-number-glow">10K+</div>
                <div className="text-sm font-cursive text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center animate-magical-stat-reveal animation-delay-200">
                <div className="text-2xl md:text-3xl font-cursive font-bold text-yellow-400 mb-1 animate-number-glow animation-delay-300">99%</div>
                <div className="text-sm font-cursive text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center animate-magical-stat-reveal animation-delay-400">
                <div className="text-2xl md:text-3xl font-cursive font-bold text-yellow-400 mb-1 animate-number-glow animation-delay-600">5★</div>
                <div className="text-sm font-cursive text-gray-400">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/3 rounded-full animate-floating-orb"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-300/2 rounded-full animate-floating-orb-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/4 rounded-full animate-gentle-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cursive font-bold text-white mb-6 animate-magical-title-reveal">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-magical-title-reveal animation-delay-300 animate-gradient-text">Collection</span>
            </h2>
            <p className="text-xl font-cursive text-gray-400 max-w-2xl mx-auto animate-magical-subtitle-reveal animation-delay-500">
              Handpicked essentials that define masculine elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-magical-product-reveal animate-product-hover-float"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-cursive font-semibold py-4 px-8 rounded-full hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all duration-300 animate-magical-cta-button animate-border-glow"
            >
              <span className="text-lg">View All Products</span>
              <ArrowRight className="h-6 w-6 animate-arrow-pulse" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Vintage craftsmanship"
            className="w-full h-full object-cover animate-slow-parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 animate-overlay-pulse"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/10 rounded-full animate-magical-float-1"></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-yellow-300/8 rounded-full animate-magical-float-2"></div>
          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-yellow-500/12 rounded-full animate-magical-float-3"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-cursive font-bold text-white leading-tight animate-magical-story-title">
                Crafting Excellence <span className="text-yellow-400 animate-magical-story-title animation-delay-300 animate-text-glow-pulse">Since 2015</span>
              </h2>
              <div className="space-y-6 text-lg font-cursive text-gray-300 leading-relaxed">
                <p className="animate-magical-paragraph-reveal animation-delay-500">
                  Born from a passion for exceptional craftsmanship and timeless design, Manly represents the pinnacle of masculine sophistication. Every piece tells a story of heritage, quality, and uncompromising excellence.
                </p>
                <p className="animate-magical-paragraph-reveal animation-delay-700">
                  We partner with master craftsmen worldwide, curating only the finest materials and most exquisite designs for the discerning gentleman who accepts nothing less than perfection.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-cursive font-semibold py-3 px-6 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 animate-magical-story-button animation-delay-1000"
              >
                <span>Our Story</span>
                <ArrowRight className="h-5 w-5 animate-arrow-wiggle" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-magical-stats-grid animation-delay-800">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 animate-stat-card-hover">
                <div className="text-3xl font-bold text-yellow-400 mb-2 animate-stat-number-glow">10K+</div>
                <div className="text-gray-300 font-cursive">Satisfied Customers</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 animate-stat-card-hover animation-delay-200">
                <div className="text-3xl font-bold text-yellow-400 mb-2 animate-stat-number-glow animation-delay-300">50+</div>
                <div className="text-gray-300 font-cursive">Premium Brands</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 animate-stat-card-hover animation-delay-400">
                <div className="text-3xl font-bold text-yellow-400 mb-2 animate-stat-number-glow animation-delay-600">25+</div>
                <div className="text-gray-300 font-cursive">Countries Served</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 animate-stat-card-hover animation-delay-600">
                <div className="text-3xl font-bold text-yellow-400 mb-2 animate-stat-number-glow animation-delay-900">99%</div>
                <div className="text-gray-300 font-cursive">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Manly Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/2 via-transparent to-yellow-600/1 animate-background-shift"></div>
          <div className="absolute top-20 right-10 w-40 h-40 bg-yellow-400/5 rounded-full animate-gentle-float"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-300/4 rounded-full animate-gentle-float-reverse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cursive font-bold text-white mb-6 animate-magical-section-title">
              Why Choose <span className="text-yellow-400 animate-magical-section-title animation-delay-300 animate-text-sparkle">Manly</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-magical-section-subtitle animation-delay-500">
              Experience the difference that true luxury makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-magical-feature-card animation-delay-700">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-gray-400 leading-relaxed">
                Every product is meticulously crafted with the finest materials and attention to detail.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-magical-feature-card animation-delay-900">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-icon-glow animation-delay-200">
                <Truck className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Free Shipping</h3>
              <p className="text-gray-400 leading-relaxed">
                Complimentary worldwide shipping on all orders, delivered with care and precision.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-magical-feature-card animation-delay-1100">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-icon-glow animation-delay-400">
                <RotateCcw className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Returns</h3>
              <p className="text-gray-400 leading-relaxed">
                30-day hassle-free returns because your satisfaction is our guarantee.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-magical-feature-card animation-delay-1300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-icon-glow animation-delay-600">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Curation</h3>
              <p className="text-gray-400 leading-relaxed">
                Hand-selected by luxury experts who understand the modern gentleman's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Floating testimonial elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-20 h-20 bg-yellow-400/6 rounded-full animate-testimonial-float-1"></div>
          <div className="absolute bottom-24 right-24 w-16 h-16 bg-yellow-300/5 rounded-full animate-testimonial-float-2"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-yellow-500/7 rounded-full animate-testimonial-float-3"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cursive font-bold text-white mb-6 animate-magical-testimonial-title">
              What Our <span className="text-yellow-400 animate-magical-testimonial-title animation-delay-300 animate-text-glow-wave">Clients Say</span>
            </h2>
            <p className="text-xl font-cursive text-gray-400 max-w-2xl mx-auto animate-magical-testimonial-subtitle animation-delay-500">
              Testimonials from distinguished gentlemen worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 animate-magical-testimonial-card animation-delay-700 hover:animate-testimonial-hover">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-star-twinkle" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
              <blockquote className="text-gray-300 font-cursive text-lg leading-relaxed mb-6">
                "Exceptional quality and unmatched sophistication. Every piece I've purchased has exceeded my expectations and elevated my personal style."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">JW</span>
                </div>
                <div>
                  <div className="text-white font-semibold">James Wilson</div>
                  <div className="text-gray-400 text-sm">CEO, Tech Innovations</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 animate-magical-testimonial-card animation-delay-900 hover:animate-testimonial-hover">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-star-twinkle" style={{ animationDelay: `${i * 200 + 100}ms` }} />
                ))}
              </div>
              <blockquote className="text-gray-300 font-cursive text-lg leading-relaxed mb-6">
                "The attention to detail is remarkable. These aren't just accessories, they're investments in timeless elegance that speak to discerning taste."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">MC</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Investment Banker</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 animate-magical-testimonial-card animation-delay-1100 hover:animate-testimonial-hover">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-star-twinkle" style={{ animationDelay: `${i * 200 + 200}ms` }} />
                ))}
              </div>
              <blockquote className="text-gray-300 font-cursive text-lg leading-relaxed mb-6">
                "Manly has redefined luxury for me. The craftsmanship is impeccable, and each piece tells a story of heritage and sophistication."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">DR</span>
                </div>
                <div>
                  <div className="text-white font-semibold">David Rodriguez</div>
                  <div className="text-gray-400 text-sm">Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400/10 to-yellow-200/10 relative overflow-hidden">
        {/* Newsletter background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/3 animate-newsletter-bg-shift"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/8 rounded-full animate-newsletter-orb-1"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-300/6 rounded-full animate-newsletter-orb-2"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-500/10 rounded-full animate-newsletter-orb-3"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-cursive font-bold text-white mb-6 animate-magical-newsletter-title">
            Join the <span className="text-yellow-400 animate-magical-newsletter-title animation-delay-300 animate-text-golden-glow">Elite</span>
          </h2>
          <p className="text-xl font-cursive text-gray-300 mb-8 leading-relaxed animate-magical-newsletter-subtitle animation-delay-500">
            Be the first to discover new collections and exclusive offers
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto animate-magical-newsletter-form animation-delay-700">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-mail-icon-pulse" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 animate-input-glow"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 animate-subscribe-button-glow"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;