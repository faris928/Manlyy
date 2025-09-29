import React, { useEffect, useRef } from 'react';
import { Award, Users, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section with Parallax */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[120%]"
        >
          <img
            src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Vintage luxury lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-amber-900/30 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-cursive font-bold text-white mb-6 leading-tight animate-fade-in-down">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-fade-in-up animation-delay-500">Story</span>
          </h1>
          <p className="text-xl md:text-2xl font-cursive text-gray-300 leading-relaxed animate-fade-in animation-delay-700">
            Crafting excellence for the discerning gentleman since 2015
          </p>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-cursive font-bold text-white leading-tight animate-fade-in-left">
                Redefining <span className="text-yellow-400 animate-fade-in animation-delay-300">Masculine Elegance</span>
              </h2>
              <div className="space-y-6 text-lg font-cursive text-gray-300 leading-relaxed">
                <p className="animate-fade-in-up animation-delay-500">
                  Born from a passion for exceptional craftsmanship and timeless design, Manly represents the pinnacle of masculine sophistication. Our journey began with a simple belief: every gentleman deserves access to the finest essentials that reflect his character and ambition.
                </p>
                <p className="animate-fade-in-up animation-delay-700">
                  We curate each piece with meticulous attention to detail, partnering with master craftsmen and renowned artisans worldwide. From Swiss timepieces to Italian leather goods, every product in our collection tells a story of heritage, quality, and uncompromising excellence.
                </p>
                <p className="animate-fade-in-up animation-delay-1000">
                  Today, we continue to push the boundaries of luxury, creating experiences that transcend mere ownership to become an expression of personal style and success.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vintage craftsmanship"
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-cursive font-bold text-white mb-4 animate-fade-in-down">
            Our <span className="text-yellow-400 animate-fade-in animation-delay-300">Values</span>
          </h2>
          <p className="text-xl font-cursive text-gray-400 mb-16 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-700">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-cursive font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-400 font-cursive leading-relaxed">
                We accept nothing less than perfection in every product we curate and every service we provide.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-900">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-cursive font-bold text-white mb-4">Heritage</h3>
              <p className="text-gray-400 font-cursive leading-relaxed">
                We honor traditional craftsmanship while embracing modern innovation and contemporary design.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-1100">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-cursive font-bold text-white mb-4">Global</h3>
              <p className="text-gray-400 font-cursive leading-relaxed">
                We source the finest materials and craftsmanship from renowned artisans across the globe.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-1300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-cursive font-bold text-white mb-4">Trust</h3>
              <p className="text-gray-400 font-cursive leading-relaxed">
                We build lasting relationships based on authenticity, transparency, and unwavering commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">10K+</div>
              <div className="text-gray-400 text-lg">Satisfied Customers</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-400 text-lg">Premium Brands</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">25+</div>
              <div className="text-gray-400 text-lg">Countries Served</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">99%</div>
              <div className="text-gray-400 text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400/10 to-yellow-200/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="text-yellow-400">Elite</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover what it means to own the finest. Experience luxury that defines you.
          </p>
          <a
            href="/products"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-12 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Explore Our Collection
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;