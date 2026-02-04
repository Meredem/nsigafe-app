import { NextRequest, NextResponse } from 'next/server'

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

    // Envoi à Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/aboubacarsdk22@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `Nouveau message de contact: ${subject}`
      })
    })

    if (!formspreeResponse.ok) {
      throw new Error('Erreur lors de l\'envoi avec Formspree')
    }

    // Réponse de succès
    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    // Gestion des erreurs avec réponse d'erreur
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du message' }, { status: 500 })
  }
}