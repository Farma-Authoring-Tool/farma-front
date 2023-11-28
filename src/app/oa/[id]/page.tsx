'use client'
import Link from 'next/link';
import Sidebar from '@/app/components/sidebar';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { redirect } from 'next/navigation';
import { apiProfessorsLos } from '@/app/service/api';
import ErrorNotFound from '@/app/components/404';


export default function Lo({ id }) {
  const [lo, setLo] = useState(null);
  const [error, setError] = useState('');

  const { isAuthenticated, user, loading } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      redirect('/login');
    }
  }, [isAuthenticated, loading]);

  useEffect(() => {
    const fetchLo = async () => {
      try {
        const response = await apiProfessorsLos.get(id);
        setLo(response.data);
      } catch (error) {
        console.error('Erro ao buscar OA:', error);
        setError('Erro ao buscar informações do OA.');
      }
    };

    if (id) {
      fetchLo();
    }
  }, [id]);

  if (error) {
    return <ErrorNotFound />;
  }

  if (!lo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 ml-64">
        <Link href='/oa/' className='text-gray-600 hover:text-gray-800'>
          <FaAngleDoubleLeft size={20}/>
        </Link>

        <header className="mt-6 rounded-md bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{lo.title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{lo.description}</p>
          </div>
        </header>
      </main>
    </div>
  )
}
