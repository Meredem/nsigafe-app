export default function Videos() {
  const videos = [
    { titre: '🎬 Highlights Victoire 3-1', desc: 'Les meilleurs moments de notre victoire spectaculaire', duration: '5:32' },
    { titre: '⚽ Buts de la Saison', desc: 'Compilation de tous nos buts de 2025', duration: '8:45' },
    { titre: '👥 Interview Mane & Bouba', desc: 'Parole aux entraîneurs après la finale', duration: '12:15' },
    { titre: '🏆 Cérémonie de Remise de Coupes', desc: 'Moment mémorable au stade', duration: '3:20' },
    { titre: '💪 Séance d\'Entraînement Exclusive', desc: 'Voir comment se préparent nos joueurs', duration: '6:50' },
    { titre: '🎯 Technique: Tirs au But', desc: 'Tutoriel avec nos meilleurs tireurs', duration: '9:10' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">🎬 Nos Vidéos</h2>
          <p className="text-xl text-gray-400">Revivez les meilleurs moments de Bouba & Mane Foot</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                ▶️
              </div>
              <div className="p-6">
                <p className="text-xl font-bold text-white mb-2">{video.titre}</p>
                <p className="text-gray-400 text-sm mb-4">{video.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold">⏱️ {video.duration}</span>
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-bold hover:scale-110 transition">
                    Regarder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-black mb-4">📺 Chaîne YouTube</h3>
          <p className="text-lg mb-8">Abonnez-vous pour ne pas manquer les dernières vidéos!</p>
          <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:scale-110 transition shadow-lg">
            🎬 S'ABONNER MAINTENANT
          </button>
        </section>
      </main>
    </div>
  )
}
