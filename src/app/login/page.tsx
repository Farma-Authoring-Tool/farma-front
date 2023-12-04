'use client'
import Image from 'next/image'
import LoginForm from './component/loginForm';

export default function Login() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded-xl border border-farma pt-8 pb-8 pr-24 pl-24">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-20 w-auto"
              src="/farma.png"
              alt="Farma Logo"
              width={100}
              height={24}
              priority
            />
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
