'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import { apiProfessorsLos } from '../service/api';
import ErrorNotFound from '../components/404';
import { redirect, useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

export default function Lo() {
  const [los, setLos] = useState([]);
  const { isAuthenticated, user, loading } = useAuth();

  useEffect(() => {
    if(!isAuthenticated && !loading){
        redirect('/login');
    }
  }, [isAuthenticated, loading]);

  useEffect(() => {
    const fetchLos = async () => {
      try {
        const response = await apiProfessorsLos.getAll();
        setLos(response.data);
      } catch (error) {
        console.error('Erro ao buscar OAs:', error);
        <ErrorNotFound />
      }
    };

    fetchLos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este Objeto de Aprendizagem?')) {
      try {
        await apiProfessorsLos.delete(id);
        setLos(los.filter((lo) => lo.id !== id));
      } catch (error) {
        console.error('Erro ao deletar OA:', error);
        alert('Erro ao deletar o Objeto de Aprendizagem.');
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="odd:bg-farma odd:dark:bg-gray-900 even:bg-farma even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="col" className="px-6 py-3"> Título </th>
                <th scope="col" className="px-6 py-3"> Descrição </th>
                <th scope="col" className="px-6 py-3"> Ações </th>
              </tr>
            </thead>
            <tbody>
              {los.map((lo: any) => (
                <tr key={lo.id} className="border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {lo.title}
                  </th>
                  <td className="px-6 py-4">
                    {lo.description}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <Link href={`/oa/editar/${lo.id}`} className='text-cyan-600 hover:text-cyan-800'>
                      <FaEdit size={20} />
                    </Link>
                    
                    <button onClick={() => handleDelete(lo.id)} className='text-red-600 hover:text-red-800'>
                      <FaTrashAlt size={20} />
                    </button>

                    <Link href={`/oa/${lo.id}`} className='text-lime-600 hover:text-lime-800'>
                      <FaEye size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>  

          <Link href="/oa/novo" className="absolute bottom-8 right-8">
            <button className="p-3 rounded-full bg-farma text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              <AiOutlinePlus size={24} />
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
