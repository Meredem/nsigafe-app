export default function Actualites() {
  const articles = [
    {
      titre: 'Victoire éclatante contre le FC Rival',
      date: '2026-01-21',
      resume: 'Notre équipe a remporté une victoire convaincante 2-1 grâce à des buts de Dupont et Leroy.',
    },
    {
      titre: 'Nouveau partenariat avec la mairie',
      date: '2026-01-15',
      resume: 'Le club annonce un partenariat avec la mairie pour améliorer les installations du stade.',
    },
    {
      titre: 'Recrutement de jeunes talents',
      date: '2026-01-10',
      resume: 'Le club lance une campagne de recrutement pour intégrer de nouveaux joueurs dans l\'équipe junior.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Actualités du Club</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{article.titre}</h3>
              <p className="text-sm text-gray-500 mb-4">{article.date}</p>
              <p className="text-gray-700">{article.resume}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}