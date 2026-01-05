import Link from 'next/link'

// Page d'accueil de l'application N'Sigafé
export default function Home() {
  return (
    // Conteneur principal avec fond gris clair
    <div className="min-h-screen bg-gray-50">
      {/* Barre de navigation avec fond bleu et texte blanc */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo et nom de l'entreprise */}
          <h1 className="text-2xl font-bold">N'Sigafé</h1>
          {/* Liens de navigation */}
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Accueil</Link>
            <Link href="/suivi" className="hover:underline">Suivi de Colis</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Contenu principal centré */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Titre principal */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue chez N'Sigafé</h2>
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8">Votre service de livraison de colis de confiance</p>
          {/* Grille des services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte pour livraison rapide */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Livraison Rapide</h3>
              <p className="text-gray-600">Nous assurons une livraison rapide et sécurisée de vos colis partout au pays.</p>
            </div>
            {/* Carte pour suivi en temps réel */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Suivi en Temps Réel</h3>
              <p className="text-gray-600">Suivez votre colis en temps réel grâce à notre système de suivi avancé.</p>
            </div>
            {/* Carte pour service client */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Service Client</h3>
              <p className="text-gray-600">Notre équipe est à votre disposition pour répondre à toutes vos questions.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">N'Sigafé</h4>
              <p className="text-blue-200">Service de livraison de colis fiable et rapide pour tout le pays.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Utiles</h4>
              <ul className="space-y-2">
                <li><Link href="/suivi" className="text-blue-200 hover:text-white">Suivi de Colis</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-blue-200">Téléphone: +33665671239</p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-4 text-center">
            <p className="text-blue-200">&copy; 2026 N'Sigafé. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}