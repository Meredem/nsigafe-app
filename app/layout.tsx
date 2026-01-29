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
        <header className="bg-gradient-to-b from-green-700 via-green-600 to-green-500 text-white shadow-2xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-12">
            {/* Logo & Titre Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <img src="/foot2.jpg" alt="Logo Centre Sportif Bouba & Mane" className="h-48 w-48 object-cover rounded-full shadow-2xl border-6 border-yellow-400 hover:scale-105 transition-transform duration-300 mb-6" />
              <h1 className="text-5xl font-black drop-shadow-lg">Centre Sportif Bouba & Mane</h1>
              <p className="text-2xl text-yellow-300 font-bold mt-2">🌟 On Crée Des Talents 🌟</p>
              <p className="text-lg text-yellow-100 mt-1">Excellence • Passion • Formation</p>
            </div>
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <a href="/" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Accueil</a>
              <a href="/a-propos" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">À propos</a>
              <a href="/centre" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Centre</a>
              <a href="/equipe" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Équipe</a>
              <a href="/matchs" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Matchs</a>
              <a href="/resultats" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Résultats</a>
              <a href="/videos" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Vidéos</a>
              <a href="/galerie" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Galerie</a>
              <a href="/recrutement" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Recrutement</a>
              <a href="/contact" className="px-4 py-2 bg-green-800 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition duration-300">Contact</a>
            </nav>
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