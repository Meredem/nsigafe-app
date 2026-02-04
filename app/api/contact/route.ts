import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Configuration Nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aboubacarsdk22@gmail.com',
        pass: 'umji mkks oqab emwz' // App password à remplacer
      }
    })

    // Email au propriétaire
    await transporter.sendMail({
      from: 'aboubacarsdk22@gmail.com',
      to: 'aboubacarsdk22@gmail.com',
      subject: `Nouveau message: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    // Email de confirmation au visiteur
    await transporter.sendMail({
      from: 'aboubacarsdk22@gmail.com',
      to: email,
      subject: 'Merci pour votre message - Centre Sportif',
      html: `
        <h2>Merci de nous avoir contactés!</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous recontacterons très bientôt.</p>
        <p><strong>Centre Sportif Bouba & Mane</strong></p>
        <p>🌟 On Crée Des Talents 🌟</p>
      `
    })

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur email:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
    }, { status: 500 })
  }
}