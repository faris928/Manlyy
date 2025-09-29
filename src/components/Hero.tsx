import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Vintage luxury watches and accessories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-amber-900/20 to-black/80"></div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/3 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-cursive font-bold text-white mb-6 leading-tight">
            <span className="block animate-fade-in-down">Redefine</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-fade-in-up animation-delay-500">
              LUXURY
            </span>
          </h1>
        </div>

        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-xl md:text-2xl font-cursive text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in">
            Discover premium essentials crafted for the modern gentleman. 
            Where sophistication meets uncompromising quality.
          </p>
        </div>

        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <Link
            to="/products"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-cursive font-semibold py-4 px-8 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 animate-slide-up"
          >
            <span className="text-lg">Explore Collection</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Stats */}
        <div className={`transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} mt-16`}>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center animate-fade-in-left">
              <div className="text-2xl md:text-3xl font-cursive font-bold text-yellow-400 mb-1">10K+</div>
              <div className="text-sm font-cursive text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center animate-fade-in animation-delay-200">
              <div className="text-2xl md:text-3xl font-cursive font-bold text-yellow-400 mb-1">99%</div>
              <div className="text-sm font-cursive text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center animate-fade-in-right animation-delay-400">
              <div className="text-2xl md:text-3xl font-cursive font-bold text-yellow-400 mb-1">5★</div>
              <div className="text-sm font-cursive text-gray-400">Premium Quality</div>
            </div>
          </div>
        </div>
      </div>

          src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Vintage luxury lifestyle"
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-amber-900/20 to-black/80"></div>
      </div>
    </div>
  );
};

export default Hero;