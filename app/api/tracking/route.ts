import { NextRequest, NextResponse } from 'next/server'

// Configuration du runtime pour utiliser l'environnement Edge
export const runtime = 'edge'

// Données fictives pour les colis (pour démonstration)
const mockParcels = {
  'NSG001': {
    trackingNumber: 'NSG001',
    status: 'En transit',
    location: 'Centre de distribution Dakar',
    lastUpdate: '2024-01-05 10:30'
  },
  'NSG002': {
    trackingNumber: 'NSG002',
    status: 'Livré',
    location: 'Adresse de destination',
    lastUpdate: '2024-01-04 14:20'
  },
  'NSG003': {
    trackingNumber: 'NSG003',
    status: 'En préparation',
    location: 'Entrepôt principal',
    lastUpdate: '2024-01-05 08:15'
  }
}

// Fonction GET pour récupérer les informations de suivi d'un colis
export async function GET(request: NextRequest) {
  // Extraction du paramètre de requête 'number'
  const { searchParams } = new URL(request.url)
  const number = searchParams.get('number')

  // Validation du numéro de suivi
  if (!number) {
    return NextResponse.json({ error: 'Numéro de suivi requis' }, { status: 400 })
  }

  // Recherche du colis dans les données fictives
  const parcel = mockParcels[number as keyof typeof mockParcels]

  // Vérification si le colis existe
  if (!parcel) {
    return NextResponse.json({ error: 'Colis introuvable' }, { status: 404 })
  }

  // Retour des informations du colis
  return NextResponse.json(parcel)
}