import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    // Contenu de l'email à envoyer au propriétaire du site
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'aboubacarsdk22@gmail.com',
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    // Email de confirmation au visiteur
    const confirmationMail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Nous avons reçu votre message',
      html: `
        <h2>Merci de nous avoir contactés!</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous recontacterons très bientôt.</p>
        <p><strong>Centre Sportif Bouba & Mane</strong></p>
        <p>🌟 On Crée Des Talents 🌟</p>
      `
    }

    // Envoi de l'email de confirmation
    await transporter.sendMail(confirmationMail)

    // Réponse de succès
    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur lors de l\'envoi du email:', error)
    // Gestion des erreurs avec réponse d'erreur
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du message' }, { status: 500 })
  }
}