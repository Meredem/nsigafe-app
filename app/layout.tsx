import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScaleClient from './components/ScaleClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Centre Sportif Bouba & Mane",
  description: "Site officiel du Centre Sportif Bouba & Mane",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-b from-green-900 to-green-800">  
        {/* client script to scale desktop layout to fit mobile for pixel-perfect parity */}
        <header className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-2xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <img src="/logo_club.jpg" alt="Logo Centre Sportif Bouba & Mane" className="h-20 w-20 object-contain rounded-full shadow-lg border-4 border-yellow-400 hover:scale-110 transition-transform duration-300" />
                <div>
                  <h1 className="text-4xl font-bold">Centre Sportif Bouba & Mane</h1>
                  <p className="text-yellow-300 text-sm">Centre sportif de football - Excellence & Passion</p>
                </div>
              </div>
              <nav className="flex space-x-6 text-sm font-semibold">
                <a href="/" className="hover:text-yellow-300 transition duration-300">Accueil</a>
                <a href="/a-propos" className="hover:text-yellow-300 transition duration-300">À propos</a>
                <a href="/centre" className="hover:text-yellow-300 transition duration-300">Centre</a>
                <a href="/equipe" className="hover:text-yellow-300 transition duration-300">Équipe</a>
                <a href="/matchs" className="hover:text-yellow-300 transition duration-300">Matchs</a>
                <a href="/resultats" className="hover:text-yellow-300 transition duration-300">Résultats</a>
                <a href="/videos" className="hover:text-yellow-300 transition duration-300">Vidéos</a>
                <a href="/galerie" className="hover:text-yellow-300 transition duration-300">Galerie</a>
                <a href="/recrutement" className="hover:text-yellow-300 transition duration-300">Recrutement</a>
                <a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="relative z-10 min-h-screen"> 
          {/* Scale client component runs only in the browser */}
          <ScaleClient />
          {children}
        </main>
        <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white p-8 text-center border-t-4 border-yellow-400 shadow-2xl">
          <p className="text-lg font-semibold">&copy; 2026 Centre Sportif Bouba & Mane. Tous droits réservés.</p>
          <p className="text-yellow-300 text-sm mt-2">Excellence, Passion, Football</p>
        </footer>
      </body>
    </html>
  )
}