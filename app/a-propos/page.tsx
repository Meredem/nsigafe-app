export default function APropos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">🏆 Centre Sportif Bouba & Mane</h2>
          <p className="text-2xl text-green-600 font-bold">On Crée Des Talents</p>
          <div className="mt-6 flex justify-center">
            <img
              src="/foot3.jpg"
              alt="Centre Sportif Bouba & Mane"
              className="h-40 w-40 md:h-52 md:w-52 object-cover rounded-full shadow-2xl border-4 border-yellow-400"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          
          {/* Notre Mission */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-10 rounded-3xl shadow-2xl mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">🎯 Notre Mission</h3>
            <p className="text-xl leading-relaxed text-center">
              Le Centre Sportif Bouba & Mane est une académie de football d'excellence fondée en <strong>2025</strong>. 
              Notre mission est de découvrir, former et propulser les jeunes talents vers les plus hauts sommets du football professionnel.
              Nous créons les champions de demain avec passion, discipline et expertise.
            </p>
          </div>

          {/* Notre Académie */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">⚽ Notre Académie de Formation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-2xl font-bold mb-4 text-green-600">École de Football (6-12 ans)</h4>
                <p className="text-gray-700 leading-relaxed">
                  Initiation au football avec des éducateurs diplômés. Développement des bases techniques, 
                  tactiques et mentales. Formation ludique et encadrée pour les futurs champions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500">
                <div className="text-4xl mb-4">🥇</div>
                <h4 className="text-2xl font-bold mb-4 text-blue-600">Pré-Formation (13-15 ans)</h4>
                <p className="text-gray-700 leading-relaxed">
                  Programme intensif de perfectionnement. Sélections pour intégrer l'élite. 
                  Accompagnement scolaire et sportif. Préparation mentale et physique de haut niveau.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-yellow-500">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="text-2xl font-bold mb-4 text-yellow-600">Centre de Formation (16-19 ans)</h4>
                <p className="text-gray-700 leading-relaxed">
                  Parcours professionnel avec contrats de formation. Entraînements quotidiens avec staff technique expert. 
                  Matchs de compétition en championnat élite. Suivi individualisé et nutrition optimale.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold mb-4 text-red-600">Détection & Recrutement Pro</h4>
                <p className="text-gray-700 leading-relaxed">
                  Partenariats avec clubs professionnels européens et africains. Sessions de détection régulières. 
                  Showcases devant recruteurs internationaux. Placement en clubs pros (Europe, Afrique, Asie).
                </p>
              </div>
            </div>
          </div>

          {/* Notre Histoire */}
          <div className="bg-gray-100 p-10 rounded-3xl mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">📖 Notre Histoire</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Fondé en <strong>2025</strong> par deux passionnés de football, <strong>Bouba et Mane</strong>, 
              le centre est né d'une vision simple : donner aux jeunes talents guinéens les mêmes chances de réussir 
              que dans les plus grandes académies européennes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Inspirés par les méthodes de La Masia (FC Barcelone), Clairefontaine (France) et l'Ajax Amsterdam, 
              nous avons créé un centre où excellence sportive et éducation vont de pair. Aujourd'hui, le Centre Sportif 
              Bouba & Mane est reconnu comme l'une des meilleures académies d'Afrique de l'Ouest.
            </p>
          </div>

          {/* Nos Valeurs */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">💎 Nos Valeurs</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold mb-2">Excellence</h4>
                <p className="text-sm">Standards professionnels européens</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="text-xl font-bold mb-2">Discipline</h4>
                <p className="text-sm">Rigueur et respect des règles</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-3">❤️</div>
                <h4 className="text-xl font-bold mb-2">Passion</h4>
                <p className="text-sm">Amour du football et du dépassement</p>
              </div>
              <div className="text-center bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="text-xl font-bold mb-2">Ouverture</h4>
                <p className="text-sm">Vision internationale et multiculturelle</p>
              </div>
            </div>
          </div>

          {/* Nos Succès */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-10 rounded-3xl mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">🏆 Nos Succès</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-black mb-2">50+</p>
                <p className="text-xl">Joueurs formés</p>
              </div>
              <div>
                <p className="text-5xl font-black mb-2">15</p>
                <p className="text-xl">En clubs pros</p>
              </div>
              <div>
                <p className="text-5xl font-black mb-2">8</p>
                <p className="text-xl">Sélections nationales</p>
              </div>
            </div>
          </div>

          {/* Installations de Classe Mondiale */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">🏟️ Infrastructures de Classe Mondiale</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> 2 terrains en gazon synthétique FIFA Quality Pro</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Centre médical avec kinésithérapeutes diplômés</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Salle de musculation professionnelle équipée</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Résidence pour joueurs en formation</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Salle d'analyse vidéo et tactique</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Restauration avec nutritionniste sportif</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Vestiaires modernes et climatisés</li>
              <li className="flex items-start"><span className="text-green-500 mr-3">✓</span> Terrain couvert pour entraînements par mauvais temps</li>
            </ul>
          </div>

          {/* Staff Technique */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">👥 Staff Technique d'Excellence</h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-6">
              Notre équipe technique est composée d'entraîneurs diplômés UEFA/CAF, 
              de préparateurs physiques certifiés et d'anciens joueurs professionnels. 
              <strong> Mane & Bouba</strong>, co-fondateurs et directeurs techniques, supervisent l'ensemble de la formation 
              avec passion et expertise.
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">🎓 15 éducateurs diplômés • 🏥 3 kinés • 🍽️ 1 nutritionniste • 🧠 1 psychologue sportif</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}