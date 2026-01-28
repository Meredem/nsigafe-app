export default function APropos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">À propos de Bouba & Mane Foot</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Bouba & Mane Foot est un club de football passionné fondé en 2020. Notre mission est de promouvoir le football
            auprès des jeunes et de la communauté, en offrant un environnement positif et inclusif pour tous les joueurs.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Notre Histoire</h3>
          <p className="text-gray-600 mb-6">
            Le club a été créé par deux amis passionnés de football, Bouba et Mane, qui ont décidé de réunir des talents
            locaux pour former une équipe compétitive et solidaire.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Nos Valeurs</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Passion pour le football</li>
            <li>Esprit d'équipe</li>
            <li>Respect et fair-play</li>
            <li>Développement des jeunes talents</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4">Notre Stade</h3>
          <p className="text-gray-600">
            Nous jouons nos matchs à domicile au Stade Municipal, un terrain moderne équipé pour accueillir nos supporters.
          </p>
        </div>
      </main>
    </div>
  )
}