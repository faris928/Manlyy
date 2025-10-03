import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { state, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'settings'>('profile');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!state.isAuthenticated || !state.user) {
    navigate('/login');
    return null;
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/10 to-black pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 h-fit">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">
                  {state.user.firstName[0]}{state.user.lastName[0]}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white">{state.user.firstName} {state.user.lastName}</h2>
              <p className="text-gray-400">{state.user.email}</p>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-yellow-400 text-black'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-all duration-300"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                      <input
                        type="text"
                        value={state.user.firstName}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={state.user.lastName}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        value={state.user.email}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <button className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300">
                    Update Profile
                  </button>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
                  <div className="space-y-4">
                    {state.user.orders.map((order) => (
                      <div key={order.id} className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/50">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">Order #{order.id}</h3>
                            <p className="text-gray-400">{new Date(order.date).toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-yellow-400">${order.total.toLocaleString()}</div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'delivered' ? 'bg-green-900/20 text-green-400' :
                              order.status === 'shipped' ? 'bg-blue-900/20 text-blue-400' :
                              order.status === 'processing' ? 'bg-yellow-900/20 text-yellow-400' :
                              'bg-gray-900/20 text-gray-400'
                            }`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4">
                              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                              <div className="flex-1">
                                <h4 className="text-white font-medium">{item.name}</h4>
                                <p className="text-gray-400">Qty: {item.quantity}</p>
                              </div>
                              <div className="text-yellow-400 font-semibold">${item.price.toLocaleString()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Wishlist</h2>
                  <p className="text-gray-400">Your wishlist items will appear here.</p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-600 text-yellow-400 focus:ring-yellow-400/20" defaultChecked />
                          <span className="ml-3 text-gray-300">Email notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-600 text-yellow-400 focus:ring-yellow-400/20" defaultChecked />
                          <span className="ml-3 text-gray-300">Order updates</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-600 text-yellow-400 focus:ring-yellow-400/20" />
                          <span className="ml-3 text-gray-300">Marketing emails</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-600 text-yellow-400 focus:ring-yellow-400/20" defaultChecked />
                          <span className="ml-3 text-gray-300">Make profile public</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-600 text-yellow-400 focus:ring-yellow-400/20" />
                          <span className="ml-3 text-gray-300">Share purchase history</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;