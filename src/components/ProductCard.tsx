import React from 'react';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-yellow-400/90 text-black text-xs font-semibold rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-16 bg-yellow-400 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-yellow-300 hover:scale-110"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
        
        {/* View details button */}
        <Link
          to={`/product/${product.id}`}
          className="absolute bottom-4 right-4 bg-gray-800 text-yellow-400 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-gray-700 hover:scale-110"
        >
          <Eye className="h-5 w-5" />
        </Link>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-cursive font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 animate-fade-in">
          {product.name}
        </h3>
        
        <p className="text-gray-400 font-cursive text-sm mb-4 line-clamp-2 animate-fade-in animation-delay-200">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="ml-2 text-gray-400 text-sm">(4.9)</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-yellow-400">
            ${product.price.toLocaleString()}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;