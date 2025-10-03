import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Share2, ArrowLeft, Shield, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id || '0'));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          },
        });
      }
    }
  };

  const relatedProducts = productsData
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link to="/products" className="text-yellow-400 hover:text-yellow-300">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20 relative">
      {/* Antique texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-amber-800/20 via-transparent to-amber-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-yellow-400 transition-colors duration-300">Products</Link>
          <span>/</span>
          <span className="text-yellow-400 capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.image, product.image, product.image].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                    selectedImage === img ? 'ring-2 ring-yellow-400' : 'hover:scale-105'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-semibold rounded-full capitalize">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 bg-gray-800 text-gray-400 hover:text-yellow-400 rounded-full transition-colors duration-300">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-cursive font-bold text-white mb-4 leading-tight animate-fade-in-left">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">(4.9) • 127 reviews</span>
              </div>

              <div className="text-4xl font-bold text-yellow-400 mb-8">
                ${product.price.toLocaleString()}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Quantity:</span>
                <div className="flex items-center space-x-2 bg-gray-800/50 rounded-xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Add to Cart - ${(product.price * quantity).toLocaleString()}</span>
              </button>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-700/50">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Truck className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <RotateCcw className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 mb-16">
          <div className="flex space-x-8 mb-8 border-b border-gray-700/50">
            {(['description', 'specifications', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-gray-300">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  {product.description}
                </p>
                <p>
                  Crafted with meticulous attention to detail, this premium piece represents the pinnacle of masculine sophistication. Each element has been carefully selected to ensure both aesthetic appeal and functional excellence.
                </p>
                <p>
                  Whether for special occasions or everyday elegance, this item embodies the refined taste and discerning quality that defines the modern gentleman.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Brand:</span>
                    <span className="text-white">Manly Faridunhill</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Material:</span>
                    <span className="text-white">Premium Grade</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Warranty:</span>
                    <span className="text-white">2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Origin:</span>
                    <span className="text-white">Handcrafted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SKU:</span>
                    <span className="text-white">MF-{product.id.toString().padStart(4, '0')}</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-yellow-400">4.9</div>
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-gray-400 text-sm">Based on 127 reviews</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'James Wilson', rating: 5, comment: 'Exceptional quality and craftsmanship. Exceeded my expectations in every way.' },
                    { name: 'Michael Chen', rating: 5, comment: 'Premium materials and attention to detail. Worth every penny.' },
                    { name: 'David Rodriguez', rating: 4, comment: 'Great product, fast shipping. Very satisfied with my purchase.' }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-700/50 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white">{review.name}</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Related <span className="text-yellow-400">Products</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <div className="text-xl font-bold text-yellow-400">
                      ${relatedProduct.price.toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;