import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation des champs requis
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Envoi via Web3Forms (zéro configuration)
    const formData = new FormData()
    formData.append('access_key', 'a3c0d8f9-d2e1-4a6b-8c9d-3e2f1a4b5c6d')
    formData.append('name', name)
    formData.append('email', email)
    formData.append('subject', subject)
    formData.append('message', message)
    formData.append('redirect', 'https://nsigafe-app.vercel.app/contact')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (!result.success) {
      console.error('Erreur Web3Forms:', result)
      return NextResponse.json({ error: 'Erreur lors de l\'envoi du message' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du message' }, { status: 500 })
  }
}