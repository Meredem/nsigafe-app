import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Envoi via ntfy.sh pour notifications instantanées
    await fetch('https://ntfy.sh/nsigafe_contact_form', {
      method: 'POST',
      headers: {
        'Title': `Nouveau message de ${name}`,
        'Priority': 'high',
        'Tags': 'email'
      },
      body: `📧 Email: ${email}\n📌 Sujet: ${subject}\n\n💬 Message:\n${message}`
    })

    // Envoi email via FormSubmit.co (sans vérification d'erreur)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('subject', subject)
    formData.append('message', message)
    formData.append('_captcha', 'false')
    formData.append('_subject', `Nouveau message de ${name} : ${subject}`)
    formData.append('_replyto', email)

    // Envoi sans attendre la réponse pour éviter les erreurs
    fetch('https://formsubmit.co/ajax/aboubacarsdk22@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    }).catch(err => console.error('FormSubmit error:', err))

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi du message' 
    }, { status: 500 })
  }
}
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi du message' 
    }, { status: 500 })
  }
}