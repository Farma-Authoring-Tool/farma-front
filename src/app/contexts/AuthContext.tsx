'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {api} from '../../app/service/api';
import { redirect, useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  signIn: (data: SignInData) => Promise<void>;
  logout: () => void;
};

type AuthProvider = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {

    const response = await api.post('/login', { 
      user: { 
        email, 
        password 
      }
    });
  
    const token = response.headers.authorization;
    const userData = response.data.user;
  
    if (!token) {
      throw new Error("Token de autenticação não foi retornado pela API.");
    }

    localStorage.setItem('@farma:token', token)
    localStorage.setItem('@farma:user', JSON.stringify(userData))
    api.defaults.headers.common.Authorization = token
    setUser(userData);
  }
  
  function logout() {
    setUser(null);
    localStorage.removeItem('@farma:token')
    localStorage.removeItem('@farma:user')
    api.defaults.headers.common.Authorization = null
  }

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('@farma:token')
    const userData = localStorage.getItem('@farma:user')

    if(token && userData) {
      setUser(JSON.parse(userData))
      api.defaults.headers.common.Authorization = token
    }

    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
