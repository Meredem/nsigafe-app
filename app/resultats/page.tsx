export default function Resultats() {
  const derniersResultats = [
    { date: '2026-01-20', adversaire: 'AS Kindia', score: '2-1', resultat: 'Victoire', buts: '⚽⚽' },
    { date: '2026-01-13', adversaire: 'Horoya AC', score: '1-1', resultat: 'Nul', buts: '⚽' },
    { date: '2026-01-06', adversaire: 'Stade Conakry', score: '3-0', resultat: 'Victoire', buts: '⚽⚽⚽' },
    { date: '2025-12-28', adversaire: 'CI Kamsar', score: '2-2', resultat: 'Nul', buts: '⚽⚽' },
    { date: '2025-12-20', adversaire: 'FC Lafiaji', score: '4-1', resultat: 'Victoire', buts: '⚽⚽⚽⚽' },
  ]

  const stats = derniersResultats.reduce((acc, match) => {
    if (match.resultat === 'Victoire') acc.victories++
    else if (match.resultat === 'Nul') acc.draws++
    else acc.defeats++
    return acc
  }, { victories: 0, draws: 0, defeats: 0 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">📊 Résultats des Matchs</h2>
          <p className="text-xl text-gray-400">Tous nos matchs de la saison</p>
        </div>

        {/* Statistiques rapides */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl text-center shadow-xl text-white">
            <p className="text-5xl font-black mb-2">{stats.victories}</p>
            <p className="text-2xl font-bold">Victoires</p>
            <p className="text-sm opacity-80">Magnifique!</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 rounded-2xl text-center shadow-xl text-white">
            <p className="text-5xl font-black mb-2">{stats.draws}</p>
            <p className="text-2xl font-bold">Nuls</p>
            <p className="text-sm opacity-80">À améliorer</p>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-center shadow-xl text-white">
            <p className="text-5xl font-black mb-2">{stats.defeats}</p>
            <p className="text-2xl font-bold">Défaites</p>
            <p className="text-sm opacity-80">On revient!</p>
          </div>
        </div>

        {/* Résultats détaillés */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">🎯 Derniers Résultats</h3>
          <div className="space-y-4">
            {derniersResultats.map((match, index) => (
              <div key={index} className={`p-6 rounded-2xl shadow-xl transition-all hover:scale-105 hover:-translate-y-2 border-l-4 ${
                match.resultat === 'Victoire' 
                  ? 'bg-gradient-to-r from-green-800 to-green-900 border-green-500' 
                  : match.resultat === 'Nul'
                  ? 'bg-gradient-to-r from-yellow-800 to-yellow-900 border-yellow-500'
                  : 'bg-gradient-to-r from-red-800 to-red-900 border-red-500'
              }`}>
                <div className="flex justify-between items-center text-white">
                  <div className="flex-1">
                    <p className="text-xl font-bold mb-2">Bouba & Mane Foot vs <span className="text-yellow-300">{match.adversaire}</span></p>
                    <p className="text-sm text-gray-300">📅 {match.date}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black mb-2">{match.score}</p>
                    <p className="text-lg font-bold">{match.buts}</p>
                  </div>
                  <div className="ml-6">
                    <p className={`px-6 py-3 rounded-lg font-bold text-lg ${
                      match.resultat === 'Victoire' 
                        ? 'bg-green-500 text-white' 
                        : match.resultat === 'Nul'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}>
                      {match.resultat === 'Victoire' ? '🏆 Victoire' : match.resultat === 'Nul' ? '🤝 Nul' : '😢 Défaite'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appel à l'action */}
        <section className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Suivez nos prochains matchs</h3>
          <a href="/matchs" className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-110 transition shadow-lg">
            📅 Voir le Calendrier
          </a>
        </section>
      </main>
    </div>
  )
}