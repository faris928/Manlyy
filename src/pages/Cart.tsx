import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
            <p className="text-gray-400 mb-8">Discover our premium collection and add some luxury to your life.</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-8 rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300"
            >
              Start Shopping
            </Link>
          </div>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl md:text-6xl font-cursive font-bold text-white mb-12 text-center animate-fade-in-down">
          Shopping <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 animate-fade-in-up animation-delay-300">Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-yellow-400">${item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 bg-gray-700/50 rounded-xl p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 text-white font-semibold min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl transition-all duration-300"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Subtotal:</span>
                    <span className="text-xl font-bold text-white">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal:</span>
                <span className="text-white font-semibold">${state.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping:</span>
                <span className="text-green-400 font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax:</span>
                <span className="text-white font-semibold">${(state.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700/50 pt-4">
                <div className="flex justify-between">
                  <span className="text-xl font-bold text-white">Total:</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    ${(state.total * 1.08).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 text-center block"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="w-full mt-4 border-2 border-yellow-400 text-yellow-400 font-semibold py-4 px-6 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;