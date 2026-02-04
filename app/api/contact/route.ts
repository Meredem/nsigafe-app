import { NextRequest, NextResponse } from 'next/server'

// Configuration du runtime pour utiliser l'environnement Edge
export const runtime = 'edge'

// Stockage en mémoire pour les contacts (pour démonstration uniquement)
let contacts: any[] = []

// Fonction POST pour traiter les soumissions du formulaire de contact
export async function POST(request: NextRequest) {
  try {
    // Récupération du corps de la requête JSON
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation des champs requis
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Création d'un objet contact avec un ID unique et un timestamp
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    }

    // Ajout du contact au stockage en mémoire
    contacts.push(contact)

    // Réponse de succès
    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    // Gestion des erreurs avec réponse d'erreur
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}