export default function Matchs() {
  const prochainsMatchs = [
    { date: '2026-02-15', adversaire: 'AS Kindia', lieu: 'Domicile', heure: '15:00' },
    { date: '2026-02-22', adversaire: 'Horoya AC', lieu: 'Extérieur', heure: '16:30' },
    { date: '2026-03-01', adversaire: 'Stade Conakry', lieu: 'Domicile', heure: '14:00' },
    { date: '2026-03-15', adversaire: 'CI Kamsar', lieu: 'Extérieur', heure: '17:00' },
    { date: '2026-04-05', adversaire: 'FC Lafiaji', lieu: 'Domicile', heure: '15:30' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">⚽ Calendrier des Matchs</h2>
          <p className="text-xl text-gray-600">Découvrez tous les matchs contre les clubs guinéens</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-green-700">🗓️ Prochains Matchs</h3>
          <div className="space-y-4">
            {prochainsMatchs.map((match, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500 hover:-translate-y-1">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-gray-800">Bouba & Mane Foot vs <span className="text-green-600">{match.adversaire}</span></p>
                    <div className="flex items-center mt-3 space-x-6">
                      <p className="text-lg text-gray-600"><span className="font-semibold">📅 Date:</span> {match.date}</p>
                      <p className="text-lg text-gray-600"><span className="font-semibold">🕒 Heure:</span> {match.heure}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-lg">{match.lieu}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}