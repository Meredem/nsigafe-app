'use client'

import { useState } from 'react'
import Link from 'next/link'

// Page de contact pour permettre aux utilisateurs de nous contacter
export default function Contact() {
  // État pour les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  // État pour indiquer si le formulaire a été soumis
  const [submitted, setSubmitted] = useState(false)

  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Envoi des données à l'API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
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
          <h2 className="text-3xl font-bold text-center mb-6">Contactez-nous</h2>
          {submitted ? (
            // Message de succès après soumission
            <div className="text-center">
              <p className="text-green-600 mb-4">Votre message a été envoyé avec succès !</p>
              <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            // Formulaire de contact
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Envoyer
              </button>
            </form>
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