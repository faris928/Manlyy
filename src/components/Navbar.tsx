import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Diamond } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { state } = useCart();
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
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center">
              {/* Decorative Lines */}
              <div className="hidden md:block w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:via-yellow-300 transition-all duration-500 mr-3"></div>
              
              {/* Diamond Icon */}
              <div className="relative">
                <Diamond className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg filter diamond-sparkle" />
                <div className="absolute inset-0 h-8 w-8 bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-300/30 transition-all duration-500 animate-pulse"></div>
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>
              
              {/* Decorative Lines */}
              <div className="hidden md:block w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:via-yellow-300 transition-all duration-500 ml-3"></div>
            </div>
            
            <div className="relative">
              <span className="text-3xl font-serif font-bold text-white group-hover:text-yellow-300 transition-all duration-500 logo-text-glow tracking-wider">
                M<span className="text-yellow-400 group-hover:text-yellow-200 transition-colors duration-500">A</span>NLY
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 text-3xl font-serif font-bold text-yellow-400/10 blur-sm group-hover:text-yellow-300/20 transition-all duration-500 tracking-wider">
                M<span className="text-yellow-400/20">A</span>NLY
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
                className="text-white hover:text-yellow-400 transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-black/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-yellow-400'
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;