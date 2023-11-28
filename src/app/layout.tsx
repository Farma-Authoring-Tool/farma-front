import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider, useAuth } from './contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Farma',
  description: 'Ferramenta de Autoria para a Remediação de Erros com Mobilidade na Aprendizagem',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="pt">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  )
}
