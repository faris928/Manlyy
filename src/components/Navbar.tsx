import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Crown, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { state } = useCart();
  const { state: authState, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center">
                {/* Decorative Lines */}
                <div className="hidden md:block w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:via-purple-300 transition-all duration-500 mr-3 animate-pulse"></div>
                
                {/* 3D Crown Icon with Rotating Effects */}
                <div className="relative">
                  {/* 3D Crown Base */}
                  <div className="relative crown-3d-container">
                    <Crown className="h-12 w-12 text-yellow-600 group-hover:text-yellow-500 transition-all duration-700 group-hover:scale-125 crown-3d-rotate crown-bounce crown-pulse drop-shadow-2xl filter relative z-10" />
                    
                    {/* Golden Crown Overlay */}
                    <Crown className="absolute inset-0 h-12 w-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-700 group-hover:scale-125 crown-3d-rotate-reverse opacity-80 mix-blend-overlay" />
                    
                    {/* Additional Crown Layers for More Depth */}
                    <Crown className="absolute inset-0 h-12 w-12 text-yellow-500 crown-wobble opacity-60 mix-blend-multiply" />
                    <Crown className="absolute inset-0 h-12 w-12 text-yellow-300 crown-swing opacity-40 mix-blend-screen" />
                  </div>
                  
                  {/* 3D Glow Layers */}
                  <div className="absolute inset-0 h-12 w-12 bg-yellow-500/50 rounded-full blur-lg group-hover:bg-yellow-400/70 transition-all duration-700 animate-pulse crown-glow-rotate crown-glow-expand"></div>
                  <div className="absolute inset-0 h-12 w-12 bg-yellow-400/40 rounded-full blur-xl group-hover:bg-yellow-300/60 transition-all duration-700 animate-pulse animation-delay-500 crown-glow-rotate-reverse crown-glow-contract"></div>
                  <div className="absolute inset-0 h-12 w-12 bg-yellow-300/30 rounded-full blur-2xl group-hover:bg-yellow-200/50 transition-all duration-700 animate-pulse animation-delay-1000 crown-glow-spiral"></div>
                  <div className="absolute inset-0 h-12 w-12 bg-yellow-600/20 rounded-full blur-3xl group-hover:bg-yellow-500/40 transition-all duration-700 animate-pulse animation-delay-1500 crown-glow-wave"></div>
                  
                  {/* 3D Sparkle Effects */}
                  <div className="absolute -top-3 -right-2 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping sparkle-3d-1 sparkle-orbit-1"></div>
                  <div className="absolute -top-2 -left-3 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse animation-delay-200 sparkle-3d-2 sparkle-orbit-2"></div>
                  <div className="absolute -bottom-3 -left-2 w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 animate-ping animation-delay-300 sparkle-3d-3 sparkle-orbit-3"></div>
                  <div className="absolute -bottom-2 -right-3 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse animation-delay-700 sparkle-3d-4 sparkle-orbit-4"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 animate-ping animation-delay-400 sparkle-3d-5 sparkle-twinkle"></div>
                  <div className="absolute top-2 left-1 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 animate-pulse animation-delay-800 sparkle-3d-6 sparkle-dance"></div>
                  <div className="absolute top-0 -right-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping animation-delay-1200 sparkle-float"></div>
                  <div className="absolute -top-1 left-0 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse animation-delay-1600 sparkle-zoom"></div>
                  
                  {/* 3D Rotating Ring Effects */}
                  <div className="absolute inset-0 h-12 w-12 border-2 border-yellow-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 crown-ring-rotate crown-ring-pulse" style={{ animationDuration: '4s' }}></div>
                  <div className="absolute inset-1 h-10 w-10 border border-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 crown-ring-rotate-reverse crown-ring-breathe" style={{ animationDuration: '6s' }}></div>
                  <div className="absolute inset-2 h-8 w-8 border border-yellow-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 crown-ring-rotate crown-ring-wobble" style={{ animationDuration: '8s' }}></div>
                  
                  {/* Orbital Ring Effects */}
                  <div className="absolute inset-0 h-16 w-16 border border-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 crown-orbital-ring" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute inset-0 h-20 w-20 border border-yellow-300/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 crown-orbital-ring-reverse" style={{ animationDuration: '12s' }}></div>
                </div>
                
                {/* Decorative Lines */}
                <div className="hidden md:block w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:via-purple-300 transition-all duration-500 ml-3 animate-pulse animation-delay-300"></div>
              </div>
              
              <div className="relative">
                {/* 3D MANLY Text with Rotating Effects */}
                <span className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-yellow-200 transition-all duration-700 logo-text-3d tracking-wider relative z-10 manly-3d-text manly-wave-text manly-glow-pulse">
                  <span className="inline-block text-yellow-400 group-hover:text-yellow-300 transition-colors duration-700 manly-letter-bounce animation-delay-100">M</span>
                  <span className="inline-block text-yellow-400 group-hover:text-yellow-300 transition-colors duration-700 manly-letter-bounce animation-delay-200">a</span>
                  <span className="inline-block text-yellow-400 group-hover:text-yellow-300 transition-colors duration-700 manly-letter-bounce animation-delay-300">n</span>
                  <span className="inline-block text-yellow-400 group-hover:text-yellow-300 transition-colors duration-700 manly-letter-bounce animation-delay-400">l</span>
                  <span className="inline-block text-yellow-400 group-hover:text-yellow-300 transition-colors duration-700 manly-letter-bounce animation-delay-500">y</span>
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
                
                {/* 3D Underline Effect */}
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse underline-3d-rotate underline-wave"></div>
                <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse underline-shimmer animation-delay-300"></div>
                
                {/* 3D Text Shadow Layers */}
                <div className="absolute inset-0 text-4xl font-serif font-bold text-yellow-400/25 blur-sm group-hover:text-yellow-300/35 transition-all duration-700 tracking-wider text-shadow-3d-1 text-shadow-float">
                  <span className="text-yellow-400/35">Manly</span> Faridunhill
                </div>
                <div className="absolute inset-0 text-4xl font-serif font-bold text-yellow-400/20 blur-md group-hover:text-yellow-300/30 transition-all duration-700 tracking-wider text-shadow-3d-2 text-shadow-drift">
                  <span className="text-yellow-400/30">Manly</span> Faridunhill
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? 'text-yellow-400'
                        : 'text-white hover:text-yellow-400'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
              >
                <Search className="h-6 w-6" />
              </button>

              {/* User Menu */}
              {authState.isAuthenticated ? (
                <div className="relative group">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300 p-2"
                  >
                    <User className="h-6 w-6" />
                    <span className="hidden md:block text-sm">{authState.user?.firstName}</span>
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
                >
                  <User className="h-6 w-6" />
                </Link>
              )}

              {/* Cart */}
              <Link
                to="/cart"
                className="relative text-white hover:text-yellow-400 transition-colors duration-300 p-2"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 p-2 touch-manipulation"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-black/95 backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-300 touch-manipulation ${
                  location.pathname === item.path
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {!authState.isAuthenticated && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/login';
                }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:text-yellow-400 transition-colors duration-300 touch-manipulation"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;