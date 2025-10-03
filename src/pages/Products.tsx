import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, Search, Grid2x2 as Grid, List } from 'lucide-react';
import productsData from '../data/products.json';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const [products] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['all', 'watches', 'pens', 'necklaces', 'bracelets', 'rings', 'accessories'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $100', value: '0-100' },
    { label: '$100 - $500', value: '100-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: 'Over $1000', value: '1000+' },
  ];

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (priceRange === '1000+') {
        filtered = filtered.filter(product => product.price >= 1000);
      } else {
        filtered = filtered.filter(product => product.price >= min && product.price <= max);
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 relative overflow-hidden">
      {/* Antique texture overlay */}
      <div className="absolute inset-0 opacity-5 animate-background-shift">
        <div className="w-full h-full bg-gradient-to-br from-amber-800/20 via-transparent to-amber-900/20"></div>
      </div>
      
      {/* Floating Product Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/4 rounded-full animate-product-float-1"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-yellow-300/3 rounded-full animate-product-float-2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/5 rounded-full animate-product-float-3"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-yellow-400/3 rounded-full animate-product-float-4"></div>
        
        {/* Shopping particles */}
        <div className="absolute top-32 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-shopping-particle-1"></div>
        <div className="absolute top-60 left-40 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-shopping-particle-2"></div>
        <div className="absolute bottom-48 right-48 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-shopping-particle-3"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-yellow-200 rounded-full animate-shopping-particle-4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-cursive font-bold text-white mb-4 animate-magical-products-title">
            Premium <span className="text-yellow-400 animate-magical-products-title animation-delay-500 animate-text-sparkle">Collection</span>
          </h1>
          <p className="text-xl font-cursive text-gray-400 max-w-2xl mx-auto animate-magical-products-subtitle animation-delay-700">
            Discover our curated selection of luxury essentials for the discerning gentleman
          </p>
        </div>

        {/* Filters and Search */}
        <div className={`bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} animate-filter-glow`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 animate-search-pulse" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 animate-input-shimmer"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 capitalize"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value} className="bg-gray-800">
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
            >
              <option value="name" className="bg-gray-800">Name A-Z</option>
              <option value="price-low" className="bg-gray-800">Price: Low to High</option>
              <option value="price-high" className="bg-gray-800">Price: High to Low</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'bg-gray-700/50 text-gray-400 hover:text-yellow-400'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-yellow-400 text-black' : 'bg-gray-700/50 text-gray-400 hover:text-yellow-400'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-gray-400">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="transform transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Filter className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;