import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="text-center">
          <div className="flex justify-center mt-36">
            <Image src="/farma.png" alt="Farma Logo" width={200} height={200} priority />
          </div>

          <h1 className="mb-4 text-4xl font-bold">FARMA: Ferramenta de Autoria para a Remediação de Erros com Mobilidade na Aprendizagem</h1>
          <p className="mb-8 text-xl">
            Crie e aplique os mais diversos tipos de objetos de aprendizagem para o ensino de Matemática. Se você é professor, monitore o desempenho e as dificuldades dos seus alunos. <br/> Se você é aprendiz acompanhe sua performance, identifique suas dificuldades e receba feedbacks sobre sua interação.
          </p>
          <Link href="/login">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
              <span className="relative px-14 py-3 transition-all ease-in duration-75 bg-gray-100 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          </Link>
        </div>
    </main>
  )
}
