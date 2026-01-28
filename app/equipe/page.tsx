export default function Equipe() {
  const joueurs = [
    { nom: 'Jean Dupont', poste: 'Gardien', numero: 1 },
    { nom: 'Pierre Martin', poste: 'Défenseur', numero: 2 },
    { nom: 'Paul Durand', poste: 'Milieu', numero: 10 },
    { nom: 'Jacques Leroy', poste: 'Attaquant', numero: 9 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">👥 Notre Équipe</h2>
          <p className="text-xl text-gray-600">Découvrez les joueurs talentueux de Bouba & Mane Foot</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {joueurs.map((joueur, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">{joueur.numero}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{joueur.nom}</h3>
              <p className="text-gray-600">{joueur.poste}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-8">👨‍💼 Staff Technique</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center backdrop-blur-sm">
              <p className="text-3xl font-bold mb-2">Mane & Bouba</p>
              <p className="text-lg opacity-90">Co-Entraîneurs Principaux</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center backdrop-blur-sm">
              <p className="text-2xl font-bold mb-2">Équipe Complète</p>
              <p className="text-lg opacity-90">Staff Expérimenté</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}