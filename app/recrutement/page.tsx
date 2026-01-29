'use client'

import { useState } from 'react'

export default function Recrutement() {
  const [formData, setFormData] = useState({
    nom: '',
    age: '',
    poste: '',
    experience: '',
    email: '',
    telephone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre candidature! Nous vous contacterons bientôt.')
    setFormData({ nom: '', age: '', poste: '', experience: '', email: '', telephone: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">🎽 Rejoignez Notre Équipe!</h2>
          <p className="text-xl text-gray-400">Vous êtes talentueux? Tentez votre chance avec le Centre Sportif Bouba & Mane</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Informations */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">📋 Conditions</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-xl">
                <p className="text-2xl mb-2">⚽ Poste</p>
                <p className="text-gray-300">Attaquant, Milieu, Défenseur ou Gardien</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-xl">
                <p className="text-2xl mb-2">📅 Âge</p>
                <p className="text-gray-300">Entre 16 et 35 ans</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-xl">
                <p className="text-2xl mb-2">📍 Expérience</p>
                <p className="text-gray-300">Minimum 2 ans en compétition</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-900 to-yellow-800 p-6 rounded-xl">
                <p className="text-2xl mb-2">🎯 Tests</p>
                <p className="text-gray-300">Sélections physiques et techniques</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">Candidature</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-bold mb-2">Nom Complet</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-bold mb-2">Âge</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">Poste</label>
                  <select
                    name="poste"
                    value={formData.poste}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
                  >
                    <option>Choisir un poste</option>
                    <option>Gardien</option>
                    <option>Défenseur</option>
                    <option>Milieu</option>
                    <option>Attaquant</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Expérience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Années d'expérience"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:scale-105 transition shadow-lg"
              >
                🚀 SOUMETTRE MA CANDIDATURE
              </button>
            </form>
          </div>
        </div>

        {/* Prochaines sélections */}
        <section className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 p-12 rounded-3xl">
          <h3 className="text-3xl font-bold text-white text-center mb-8">📅 Prochaines Sélections</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center text-white">
              <p className="text-2xl font-black mb-2">📍</p>
              <p className="font-bold mb-2">Stade Municipal</p>
              <p className="text-sm text-gray-300">Centre d'entraînement</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center text-white">
              <p className="text-2xl font-black mb-2">📅</p>
              <p className="font-bold mb-2">15 Février 2026</p>
              <p className="text-sm text-gray-300">Date des essais</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center text-white">
              <p className="text-2xl font-black mb-2">⏰</p>
              <p className="font-bold mb-2">09:00 - 17:00</p>
              <p className="text-sm text-gray-300">Horaire des tests</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
