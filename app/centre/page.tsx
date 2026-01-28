export default function Centre() {
  const installations = [
    {
      titre: 'Terrain Principal',
      description: 'Terrain en gazon synthétique de dernière génération, homologué pour les compétitions officielles.',
      image: '/centre1.jpg'
    },
    {
      titre: 'Vestiaires',
      description: 'Vestiaires modernes et spacieux avec douches individuelles et salles de repos.',
      image: '/centre2.jpg'
    },
    {
      titre: 'Salle de Musculation',
      description: 'Équipements de fitness professionnels pour le développement physique des joueurs.',
      image: '/centre3.jpg'
    },
    {
      titre: 'Terrain Annexe',
      description: 'Terrain d\'entraînement supplémentaire pour les séances techniques et tactiques.',
      image: '/centre4.jpg'
    },
    {
      titre: 'Salle de Réunion',
      description: 'Espace dédié aux briefings d\'avant-match et aux analyses vidéo.',
      image: '/centre5.jpg'
    },
    {
      titre: 'Parking et Accès',
      description: 'Parking sécurisé et accès facile pour joueurs et supporters.',
      image: '/centre6.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">🏟️ Notre Centre d'Entraînement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos installations modernes et adaptées à la pratique du football de haut niveau.
            Notre centre offre tous les équipements nécessaires pour le développement des talents.
          </p>
        </div>

        {/* Installations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {installations.map((installation, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-72">
                <img src={installation.image} alt={installation.titre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{installation.titre}</h3>
                <p className="text-gray-600 leading-relaxed">{installation.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Horaires */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-12 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-bold mb-12 text-center">⏰ Horaires d'Ouverture</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6">⚽ Entraînements</h4>
              <ul className="text-lg space-y-3">
                <li className="flex items-center"><span className="mr-3">📅</span> Lundi - Vendredi : 17h00 - 20h00</li>
                <li className="flex items-center"><span className="mr-3">📅</span> Samedi : 9h00 - 12h00</li>
                <li className="flex items-center"><span className="mr-3">📅</span> Dimanche : Fermé</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6">🚪 Accès Public</h4>
              <ul className="text-lg space-y-3">
                <li className="flex items-center"><span className="mr-3">💪</span> Musculation : Lun-Sam 8h00 - 22h00</li>
                <li className="flex items-center"><span className="mr-3">🏢</span> Bureau : Lun-Ven 9h00 - 18h00</li>
                <li className="flex items-center"><span className="mr-3">📞</span> Sur rendez-vous uniquement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}