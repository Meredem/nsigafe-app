'use client'

import { useState } from 'react'
import Link from 'next/link'

// Interface pour le statut du colis
interface ParcelStatus {
  trackingNumber: string
  status: string
  location: string
  lastUpdate: string
}

// Page de suivi de colis
export default function Suivi() {
  // État pour le numéro de suivi saisi
  const [trackingNumber, setTrackingNumber] = useState('')
  // État pour stocker le statut du colis trouvé
  const [parcelStatus, setParcelStatus] = useState<ParcelStatus | null>(null)
  // État pour les messages d'erreur
  const [error, setError] = useState('')

  // Gestionnaire de soumission du formulaire de recherche
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setParcelStatus(null)

    try {
      // Requête à l'API de suivi
      const response = await fetch(`/api/tracking?number=${trackingNumber}`)
      if (response.ok) {
        const data = await response.json()
        setParcelStatus(data)
      } else {
        setError('Numéro de suivi introuvable')
      }
    } catch (err) {
      setError('Erreur lors de la recherche')
    }
  }

  return (
    // Conteneur principal
    <div className="min-h-screen bg-gray-50">
      {/* Barre de navigation */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">N'Sigafé</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Accueil</Link>
            <Link href="/suivi" className="hover:underline">Suivi de Colis</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">Suivi de Colis</h2>
          {/* Formulaire de recherche */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label htmlFor="trackingNumber" className="block text-gray-700 mb-2">Numéro de suivi</label>
              <input
                type="text"
                id="trackingNumber"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre numéro de suivi"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Rechercher
            </button>
          </form>

          {/* Affichage des erreurs */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Affichage du statut du colis */}
          {parcelStatus && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <h3 className="font-bold mb-2">Statut du colis</h3>
              <p><strong>Numéro:</strong> {parcelStatus.trackingNumber}</p>
              <p><strong>Statut:</strong> {parcelStatus.status}</p>
              <p><strong>Emplacement:</strong> {parcelStatus.location}</p>
              <p><strong>Dernière mise à jour:</strong> {parcelStatus.lastUpdate}</p>
            </div>
          )}
        </div>
      </main>

      {/* Pied de page */}
      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">N'Sigafé</h4>
              <p className="text-blue-200">Service de livraison de colis fiable et rapide pour tout le pays.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Utiles</h4>
              <ul className="space-y-2">
                <li><Link href="/suivi" className="text-blue-200 hover:text-white">Suivi de Colis</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-blue-200">Téléphone: +33665671239</p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-4 text-center">
            <p className="text-blue-200">&copy; 2026 N'Sigafé. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}