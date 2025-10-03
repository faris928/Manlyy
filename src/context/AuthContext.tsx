import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  orders: Order[];
  wishlist: number[];
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_SUCCESS'; payload: User }
  | { type: 'UPDATE_PROFILE'; payload: Partial<User> }
  | { type: 'ADD_TO_WISHLIST'; payload: number }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number };

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
} | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGIN_FAILURE':
      return { ...state, isLoading: false };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false, isLoading: false };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        user: state.user
          ? {
              ...state.user,
              wishlist: [...state.user.wishlist, action.payload],
            }
          : null,
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        user: state.user
          ? {
              ...state.user,
              wishlist: state.user.wishlist.filter(id => id !== action.payload),
            }
          : null,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('manly_user');
    if (storedUser) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(storedUser) });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const mockUser: User = {
      id: 1,
      email,
      firstName: 'John',
      lastName: 'Doe',
      orders: [
        {
          id: 'ORD-001',
          date: '2024-01-15',
          total: 1299,
          status: 'delivered',
          items: [
            {
              id: 1,
              name: 'Classic Gold Watch',
              price: 1299,
              quantity: 1,
              image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
            }
          ]
        }
      ],
      wishlist: [2, 3],
    };

    localStorage.setItem('manly_user', JSON.stringify(mockUser));
    dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
    return true;
  };

  const register = async (userData: any): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      orders: [],
      wishlist: [],
    };

    localStorage.setItem('manly_user', JSON.stringify(newUser));
    dispatch({ type: 'REGISTER_SUCCESS', payload: newUser });
    return true;
  };

  const logout = () => {
    localStorage.removeItem('manly_user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};