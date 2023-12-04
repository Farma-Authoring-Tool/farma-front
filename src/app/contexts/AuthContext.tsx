'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {api} from '../../app/service/api';
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const cookies = parseCookies();
    const token = cookies['nextauth.token'];

    if (token) {
      setUser(user);
      api.defaults.headers.common['Authorization'] = token;
    }

    setLoading(false);
  }, [])

  async function signIn({ email, password }: SignInData) {
    const response = await api.post('/login', { 
      user: { 
        email, 
        password 
      }
    });

    const token = response.headers.authorization;
    const user = response.data.user;
  
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    })

    api.defaults.headers['Authorization'] = token;

    setUser(user)
    router.push('/oa');
  }
  
  function logout() {
    setUser(null);
    destroyCookie(undefined, 'nextauth.token', { path: '/' });
    api.defaults.headers['Authorization'] = '';
    router.push('/login');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
