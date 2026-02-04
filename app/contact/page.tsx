'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Envoi direct via GetForm.io avec FormData
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)
      
      const response = await fetch('https://getform.io/f/bqonvxqb', {
        method: 'POST',
        body: formDataToSend
      })
      
      // Envoi aussi à notre API pour ntfy.sh
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {})
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Une erreur est survenue')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setError('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">📞 Contactez-nous</h2>
          <p className="text-xl text-gray-600">Nous sommes là pour vous aider et répondre à toutes vos questions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Informations de Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Téléphones */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">☎️ Nos Téléphones</h3>
              <div className="space-y-4">
                <a href="tel:+22462002711" className="flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition duration-300">
                  <span className="text-3xl mr-4">📱</span>
                  <div>
                    <p className="text-sm font-semibold opacity-80">Numéro 1</p>
                    <p className="text-xl font-bold">+224-620-02-71-18</p>
                  </div>
                </a>
                <a href="tel:+33665371239" className="flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition duration-300">
                  <span className="text-3xl mr-4">📱</span>
                  <div>
                    <p className="text-sm font-semibold opacity-80">Numéro 2</p>
                    <p className="text-xl font-bold">+336-65-37-12-39</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Autres informations */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">ℹ️ Nos Informations</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white bg-opacity-20 rounded-lg">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-sm opacity-90">Stade Municipal, Ville</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white bg-opacity-20 rounded-lg">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:aboubacarsdk22@gmail.com" className="text-sm opacity-90 underline">aboubacarsdk22@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white bg-opacity-20 rounded-lg">
                  <span className="text-2xl mr-4">⏰</span>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-sm opacity-90">Lundi-Vendredi 9h-18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 text-green-800 px-8 py-6 rounded-2xl text-center shadow-lg mb-8">
              <p className="text-2xl font-bold">✅ Merci pour votre message !</p>
              <p className="mt-2">Nous vous répondrons très bientôt.</p>
            </div>
          ) : null}
          
          {error && (
            <div className="bg-gradient-to-r from-red-100 to-red-50 border-2 border-red-400 text-red-800 px-8 py-6 rounded-2xl text-center shadow-lg mb-8">
              <p className="text-2xl font-bold">❌ Erreur</p>
              <p className="mt-2">{error}</p>
            </div>
          )}
          
          {!submitted ? (
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Envoyez-nous un Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-3">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300 disabled:bg-gray-100"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-3">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300 disabled:bg-gray-100"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-3">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300 disabled:bg-gray-100"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-3">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300 disabled:bg-gray-100"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Envoi en cours...' : '📤 Envoyer le Message'}
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  )
}