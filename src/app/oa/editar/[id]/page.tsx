'use client'
import ErrorNotFound from "@/app/components/404";
import Sidebar from "@/app/components/sidebar";
import { useAuth } from "@/app/contexts/AuthContext";
import { apiProfessorsLos } from "@/app/service/api";
import Link from "next/link";
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Edit({params}: any) {
  const [lo, setLo] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if(!isAuthenticated && !loading){
        redirect('/login');
    }
  }, [isAuthenticated, loading]);

  const fetchLo = async (id) => {
    try {
      const response = await apiProfessorsLos.get(params.id);
      setLo(response.data);
    } catch (error) {
      console.error('Erro ao buscar OA:', error);
      setError('Erro ao buscar informações do OA.');
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchLo(params.id);
    }
  }, [params.id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedLo = {
      lo: { 
        title: formData.get('title'),
        description: formData.get('description')
      }
    };

    try {
      await apiProfessorsLos.update(params.id, updatedLo);
      router.push('/oa');
    } catch (error) {
      console.error('Erro ao atualizar OA:', error);
      setError('Erro ao atualizar o OA.');
    }
  };

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
        <form onSubmit={handleUpdate}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Objeto de Aprendizagem</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Edite seu Objeto de Aprendizagem.
              </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-4">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Título
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        defaultValue={lo.title}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Teste"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="description" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                    Descrição
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 bg-transparent pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                      defaultValue={lo.description}
                    />
                  </div>
                </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link href='/oa'>
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancelar
              </button>
            </Link>
            <button type="submit" className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
              Salvar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
function async(id: any) {
  throw new Error("Function not implemented.");
}

