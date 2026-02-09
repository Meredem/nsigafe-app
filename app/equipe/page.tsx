export default function Equipe() {
  const joueurs = [
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
    { nom: 'Youssouf Touré', poste: 'Défenseur', photo: '/Youssouf touré défenseur.jpeg' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">👥 Notre Équipe</h2>
          <p className="text-xl text-gray-600">Découvrez les joueurs talentueux du Centre Sportif Bouba & Mane</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {joueurs.map((joueur, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500">
                <img 
                  src={joueur.photo} 
                  alt={joueur.nom}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-800">{joueur.nom}</h3>
              <p className="text-green-600 font-semibold text-center">{joueur.poste}</p>
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