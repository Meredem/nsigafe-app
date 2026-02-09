'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Page d'accueil du club Bouba & Mane Foot
export default function Home() {
  const [stats, setStats] = useState({ wins: 0, goals: 0, fans: 0 })
  const [activeTab, setActiveTab] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    // Animation des compteurs
    const interval = setInterval(() => {
      setStats(prev => ({
        wins: prev.wins < 45 ? prev.wins + 1 : 45,
        goals: prev.goals < 187 ? prev.goals + 2 : 187,
        fans: prev.fans < 5000 ? prev.fans + 50 : 5000
      }))
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 overflow-hidden">
      {/* Grand ballon de fond (plein écran) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#f5f5f5_28%,#d9d9d9_55%,#bdbdbd_78%,#8a8a8a_100%)] opacity-25 blur-[1px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#fafafa_30%,#e3e3e3_60%,#c7c7c7_85%,#9a9a9a_100%)] opacity-20" />
      <div className="relative z-10">
      {/* SECTION HERO ANIMÉE */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{backgroundImage: "url('/logo_club.jpg')"}}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-7xl font-black mb-4 animate-pulse">⚽ CENTRE SPORTIF BOUBA & MANE ⚽</h1>
          <p className="text-3xl font-bold mb-6 text-yellow-300">Excellence • Passion • Formation</p>
          <div className="flex gap-6 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-110 transition-transform shadow-2xl">🎯 Rejoindre</button>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:scale-110 transition-transform shadow-2xl">📅 Calendrier</button>
          </div>
          <div className="text-sm font-semibold opacity-75">Cliquez pour explorer ↓</div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        
        {/* STATISTIQUES ANIMÉES */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-transform">
              <p className="text-5xl font-black mb-2">{stats.wins}</p>
              <p className="text-2xl font-bold">Victoires</p>
              <p className="text-sm opacity-80">Cette saison</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-transform">
              <p className="text-5xl font-black mb-2">{stats.goals}</p>
              <p className="text-2xl font-bold">Buts Marqués</p>
              <p className="text-sm opacity-80">Redoutables!</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-110 transition-transform">
              <p className="text-5xl font-black mb-2">{stats.fans}</p>
              <p className="text-2xl font-bold">Supporters</p>
              <p className="text-sm opacity-80">Notre force</p>
            </div>
          </div>
        </section>

        {/* PHOTOS RÉCENTES - GRANDE GALERIE */}
        <section className="mb-20">
          <h3 className="text-4xl font-black text-center mb-12 text-white">🔥 Nos Moments Forts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="group relative overflow-hidden rounded-2xl shadow-2xl h-96 cursor-pointer"
              onClick={() => setSelectedImage('/foot1.jpg')}
            >
              <img src="/foot1.jpg" alt="Match" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">🏆 Victoire • Cliquez pour agrandir</span>
              </div>
            </div>
            <div 
              className="group relative overflow-hidden rounded-2xl shadow-2xl h-96 cursor-pointer"
              onClick={() => setSelectedImage('/foot2.jpg')}
            >
              <img src="/foot2.jpg" alt="Équipe" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">👥 Solidarité • Cliquez pour agrandir</span>
              </div>
            </div>
            <div 
              className="group relative overflow-hidden rounded-2xl shadow-2xl h-96 cursor-pointer"
              onClick={() => setSelectedImage('/foot3.jpg')}
            >
              <img src="/foot3.jpg" alt="Entraînement" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">💪 Entraînement • Cliquez pour agrandir</span>
              </div>
            </div>
          </div>
        </section>

        {/* PALMARÈS & TROPHÉES */}
        <section className="mb-20 bg-gradient-to-r from-yellow-900/50 to-green-900/50 p-12 rounded-3xl">
          <h3 className="text-4xl font-black text-center text-yellow-300 mb-12">🏆 Nos Victoires</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <p className="text-4xl mb-2">🥇</p>
              <p className="font-bold text-white">Champion 2025</p>
              <p className="text-sm text-yellow-300">Ligue Guinéenne</p>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <p className="text-4xl mb-2">🥈</p>
              <p className="font-bold text-white">Coupe 2024</p>
              <p className="text-sm text-yellow-300">Meilleure défense</p>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <p className="text-4xl mb-2">⭐</p>
              <p className="font-bold text-white">Top Scoreur</p>
              <p className="text-sm text-yellow-300">45 buts en 2025</p>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/20 transition">
              <p className="text-4xl mb-2">🎖️</p>
              <p className="font-bold text-white">Fair-Play</p>
              <p className="text-sm text-yellow-300">Meilleur esprit</p>
            </div>
          </div>
        </section>

        {/* JOUEURS VEDETTES */}
        <section className="mb-20">
          <h3 className="text-4xl font-black text-center text-white mb-12">⭐ Nos Joueurs d'Exception</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { nom: 'Karamba Dambakaté', poste: 'Attaquant', photo: '/karamba dambakaté attaquant.jpeg' },
              { nom: 'Alpha Ibrahima Sow', poste: 'Défenseur', photo: '/Alpha ibrahima sow défenseur.jpeg' },
              { nom: 'Mamadi Camara', poste: 'Milieu', photo: '/Mamadi camara milieu.jpeg' },
              { nom: 'Ousmane Dambakaté', poste: 'Défenseur', photo: '/Ousmane dambakaté défenseur.jpeg' },
              { nom: 'Aliou Camara', poste: 'Défenseur', photo: '/Aliou camara défenseur.jpeg' },
              { nom: 'Djibril Touré', poste: 'Attaquant', photo: '/Djibril Touré attaquant.jpeg' },
              { nom: 'Sékou Camara', poste: 'Attaquant', photo: '/sékou camara attaquant.jpeg' },
              { nom: 'Moustapha Fofana', poste: 'Attaquant Excentré', photo: '/Moustapha fofana attaquant excentré.jpeg' },
              { nom: 'Mohamed Camara', poste: 'Milieu Polyvalent', photo: '/Mohamed camara milieu polyvalent.jpeg' },
              { nom: 'Abdoul Wahab Keita', poste: 'Milieu Polyvalent', photo: '/Abdoul wahab keita milieu polyvalent.jpeg' },
              { nom: 'Daouda Sylla', poste: 'Milieu Offensif', photo: '/Daouda sylla mileu offensif.jpeg' },
              { nom: 'Youssouf Touré', poste: 'Défenseur', photo: '/Youssouf touré défenseur.jpeg' }
            ].map((joueur, i) => (
              <div 
                key={i} 
                className="group bg-gradient-to-br from-green-800 to-green-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/50 transition-all hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(joueur.photo)}
              >
                <div className="aspect-square bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
                  <img 
                    src={joueur.photo} 
                    alt={joueur.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-white text-center">
                  <p className="text-xl font-bold mb-1">{joueur.nom}</p>
                  <p className="text-sm text-yellow-300">{joueur.poste}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACTUALITÉS */}
        <section className="mb-20">
          <h3 className="text-4xl font-black text-center text-white mb-12">📰 Actualités</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titre: '🔥 Victoire Spectaculaire!', date: '28 Jan 2026', desc: 'Bouba & Mane remporte 3-1!' },
              { titre: '🎯 Nouveau Joueur Signé', date: '25 Jan 2026', desc: 'Bienvenue à notre nouvelle star!' },
              { titre: '🏆 Qualification Finale', date: '20 Jan 2026', desc: 'C\'est officiel, nous sommes en finale!' }
            ].map((news, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-xl shadow-xl hover:shadow-blue-500/50 transition cursor-pointer hover:-translate-y-2">
                <p className="text-2xl font-bold text-white mb-2">{news.titre}</p>
                <p className="text-sm text-blue-300 mb-4">{news.date}</p>
                <p className="text-gray-300">{news.desc}</p>
                <p className="text-blue-400 font-bold mt-4">Lire plus →</p>
              </div>
            ))}
          </div>
        </section>

        {/* AVIS SUPPORTERS */}
        <section className="mb-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-12 rounded-3xl">
          <h3 className="text-4xl font-black text-center text-white mb-12">❤️ Avis de nos Supporters</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nom: 'Mamadou', avis: '⭐⭐⭐⭐⭐', msg: 'Meilleur club de Guinée!' },
              { nom: 'Fatoumata', avis: '⭐⭐⭐⭐⭐', msg: 'Équipe incroyable, supporters merveilleux!' },
              { nom: 'Ibrahima', avis: '⭐⭐⭐⭐⭐', msg: 'Passionné depuis le début, toujours fier!' }
            ].map((fan, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <p className="text-yellow-300 mb-3">{fan.avis}</p>
                <p className="text-white font-bold mb-2">{fan.nom}</p>
                <p className="text-gray-300 italic">"{fan.msg}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* RECRUTEMENT */}
        <section className="mb-20">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-4xl font-black mb-4">🎽 Rejoignez Notre Centre!</h3>
            <p className="text-xl mb-8">Vous êtes passionné par le football? Rejoignez le Centre Sportif Bouba & Mane!</p>
            <button className="px-10 py-4 bg-white text-green-600 font-bold rounded-full hover:scale-110 transition-transform shadow-lg">
              📝 Postuler Maintenant
            </button>
          </div>
        </section>

        {/* SPONSORS DÉFILANTS */}
        <section className="mb-20">
          <h3 className="text-4xl font-black text-center text-white mb-12">🤝 Nos Partenaires</h3>
          <div className="flex overflow-hidden bg-white/10 rounded-xl p-8">
            <div className="flex gap-8 animate-scroll">
              {['🏢 Guinée Tech', '⚡ Energy Plus', '🍔 FastFood King', '🏥 Santé+', '📱 TeleGuinée'].map((sponsor, i) => (
                <div key={i} className="flex-shrink-0 text-white font-bold text-lg whitespace-nowrap">
                  {sponsor}
                </div>
              ))}
              {['🏢 Guinée Tech', '⚡ Energy Plus', '🍔 FastFood King', '🏥 Santé+', '📱 TeleGuinée'].map((sponsor, i) => (
                <div key={i + 5} className="flex-shrink-0 text-white font-bold text-lg whitespace-nowrap">
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center">
          <h3 className="text-4xl font-black text-white mb-8">⚽ Découvrez Tout!</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/galerie" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <p className="text-3xl mb-2">🖼️</p>
              <p className="text-xl font-bold">Galerie Complète</p>
            </Link>
            <Link href="/matchs" className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <p className="text-3xl mb-2">📅</p>
              <p className="text-xl font-bold">Calendrier</p>
            </Link>
            <Link href="/equipe" className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <p className="text-3xl mb-2">👥</p>
              <p className="text-xl font-bold">Notre Équipe</p>
            </Link>
          </div>
        </section>
      </main>
      </div>

      {/* MODAL LIGHTBOX pour afficher les images en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 cursor-pointer"
          style={{ zIndex: 999999 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white text-5xl font-bold hover:text-red-500 bg-red-600 hover:bg-red-700 rounded-full w-14 h-14 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Image agrandie"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}