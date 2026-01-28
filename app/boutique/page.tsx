export default function Boutique() {
  const produits = [
    { nom: 'Maillot Domicile', prix: '25€', description: 'Maillot officiel vert et blanc' },
    { nom: 'Maillot Extérieur', prix: '25€', description: 'Maillot officiel blanc et vert' },
    { nom: 'Short de Match', prix: '15€', description: 'Short officiel du club' },
    { nom: 'Chaussettes', prix: '8€', description: 'Paire de chaussettes club' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Boutique Officielle</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {produits.map((produit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-32 bg-gray-300 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-600">Image produit</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{produit.nom}</h3>
              <p className="text-gray-600 mb-2">{produit.description}</p>
              <p className="text-green-600 font-bold">{produit.prix}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}