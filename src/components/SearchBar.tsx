import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = productsData.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto pt-20 px-4">
        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center p-6 border-b border-gray-700/50">
            <Search className="h-6 w-6 text-gray-400 mr-4" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search Results */}
          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center p-4 hover:bg-gray-700/30 transition-colors duration-300 border-b border-gray-700/30 last:border-b-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{product.name}</h3>
                    <p className="text-gray-400 text-sm capitalize">{product.category}</p>
                  </div>
                  <div className="text-yellow-400 font-semibold">
                    ${product.price.toLocaleString()}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.trim() && results.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-400">No products found for "{query}"</p>
            </div>
          )}

          {/* Popular Searches */}
          {!query.trim() && (
            <div className="p-6">
              <h3 className="text-white font-medium mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['watches', 'pens', 'necklaces', 'rings', 'luxury'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-yellow-400/20 hover:text-yellow-400 transition-colors duration-300 capitalize"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;