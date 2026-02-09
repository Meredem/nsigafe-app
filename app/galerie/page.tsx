'use client'

export default function Galerie() {
  
  const images = [
    { src: '/centre1.jpg', alt: 'Terrain d\'entraînement principal' },
    { src: '/centre2.jpg', alt: 'Vestiaires modernes' },
    { src: '/centre3.jpg', alt: 'Salle de musculation' },
    { src: '/centre4.jpg', alt: 'Terrain annexe' },
    { src: '/centre5.jpg', alt: 'Salle de réunion' },
    { src: '/centre6.jpg', alt: 'Vue extérieure du centre' },
    { src: '/foot1.jpg', alt: 'Centre Sportif Bouba & Mane - moment fort' },
    { src: '/foot2.jpg', alt: 'Centre Sportif Bouba & Mane - équipe' },
    { src: '/foot3.jpg', alt: 'Centre Sportif Bouba & Mane - entraînement' },
    { src: '/foot1.jpeg', alt: 'Match - Photo nouvelle' },
    { src: '/foot2.jpeg', alt: 'Équipe - Photo nouvelle' },
    { src: '/foot4.jpeg', alt: 'Entraînement - Photo nouvelle' },
    { src: '/foot5.jpeg', alt: 'Moment fort - Photo nouvelle' },
    { src: '/match1.jpg', alt: 'Match contre FC Rival' },
    { src: '/entrainement.jpg', alt: 'Séance d\'entraînement' },
    { src: '/equipe.jpg', alt: 'Photo d\'équipe' },
    { src: '/stade.jpg', alt: 'Vue du stade' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">🖼️ Galerie Photos</h2>
          <p className="text-xl text-gray-600">Découvrez tous nos moments forts</p>
        </div>
        
        {/* Section Centre Sportif Bouba & Mane */}
        <div className="mb-20 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-3xl">
          <h3 className="text-4xl font-bold mb-8 text-center text-orange-900">⚽ Centre Sportif Bouba & Mane</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {images.slice(6, 9).map((image, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <img src={image.src} alt={image.alt} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-4 bg-white">
                  <p className="text-center font-semibold text-gray-700">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Centre d'Entraînement */}
        <div className="mb-20 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl">
          <h3 className="text-4xl font-bold mb-8 text-center text-green-900">🏟️ Notre Centre d'Entraînement</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {images.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <img src={image.src} alt={image.alt} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-4 bg-white">
                  <p className="text-center font-semibold text-gray-700">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Moments Forts 2026 - NOUVELLES PHOTOS */}
        <div className="mb-20 bg-gradient-to-r from-red-50 to-yellow-50 p-8 rounded-3xl border-4 border-red-400">
          <h3 className="text-4xl font-bold mb-8 text-center text-red-900">🔥 Nouveaux Moments Forts 2026</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/photo1.jpg" alt="Match - Photo nouvelle" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-gray-700">Match - Photo nouvelle</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/photo2.jpg" alt="Équipe - Photo nouvelle" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-gray-700">Équipe - Photo nouvelle</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/photo3.jpg" alt="Entraînement - Photo nouvelle" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-gray-700">Entraînement - Photo nouvelle</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/photo4.jpg" alt="Moment fort - Photo nouvelle" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-semibold text-gray-700">Moment fort - Photo nouvelle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Nos Joueurs - NOUVELLES PHOTOS */}
        <div className="mb-20 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border-4 border-green-400">
          <h3 className="text-4xl font-bold mb-8 text-center text-green-900">⭐ Nos Joueurs d'Exception</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/karamba dambakaté attaquant.jpeg" alt="Karamba Dambakaté - Attaquant" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Karamba Dambakaté</p>
                <p className="text-center text-sm text-green-600">Attaquant</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Alpha ibrahima sow défenseur.jpeg" alt="Alpha Ibrahima Sow - Défenseur" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Alpha Ibrahima Sow</p>
                <p className="text-center text-sm text-green-600">Défenseur</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Mamadi camara milieu.jpeg" alt="Mamadi Camara - Milieu" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Mamadi Camara</p>
                <p className="text-center text-sm text-green-600">Milieu</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Ousmane dambakaté défenseur.jpeg" alt="Ousmane Dambakaté - Défenseur" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Ousmane Dambakaté</p>
                <p className="text-center text-sm text-green-600">Défenseur</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Aliou camara défenseur.jpeg" alt="Aliou Camara - Défenseur" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Aliou Camara</p>
                <p className="text-center text-sm text-green-600">Défenseur</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Djibril Touré attaquant.jpeg" alt="Djibril Touré - Attaquant" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Djibril Touré</p>
                <p className="text-center text-sm text-green-600">Attaquant</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/sékou camara attaquant.jpeg" alt="Sékou Camara - Attaquant" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Sékou Camara</p>
                <p className="text-center text-sm text-green-600">Attaquant</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Moustapha fofana attaquant excentré.jpeg" alt="Moustapha Fofana - Attaquant Excentré" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Moustapha Fofana</p>
                <p className="text-center text-sm text-green-600">Attaquant Excentré</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Mohamed camara milieu polyvalent.jpeg" alt="Mohamed Camara - Milieu Polyvalent" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Mohamed Camara</p>
                <p className="text-center text-sm text-green-600">Milieu Polyvalent</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Abdoul wahab keita milieu polyvalent.jpeg" alt="Abdoul Wahab Keita - Milieu Polyvalent" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Abdoul Wahab Keita</p>
                <p className="text-center text-sm text-green-600">Milieu Polyvalent</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/Daouda sylla mileu offensif.jpeg" alt="Daouda Sylla - Milieu Offensif" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 bg-white">
                <p className="text-center font-bold text-gray-800">Daouda Sylla</p>
                <p className="text-center text-sm text-green-600">Milieu Offensif</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Événements et Matchs */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
          <h3 className="text-4xl font-bold mb-8 text-center text-purple-900">🎯 Événements et Matchs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {images.slice(9).map((image, index) => (
              <div
                key={index + 9}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <img src={image.src} alt={image.alt} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-4 bg-white">
                  <p className="text-center font-semibold text-gray-700">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
