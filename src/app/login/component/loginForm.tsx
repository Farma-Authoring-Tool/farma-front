import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';


export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  const handleLogin = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6"  onSubmit={handleSubmit(handleLogin)} >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
            </label>
            <div className="mt-2">
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
            </label>
            <div className="mt-2">
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div>
            <button type="submit" className="mt-10 flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Entrar
            </button>
          </div>
        </form>

        <div className="mt-4">
          <Link href="/cadastro">
            <button type="button" className="mt-2 w-full text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">  
              Cadastre-se
            </button>
          </Link>
        </div>
    </div>
  );
}
