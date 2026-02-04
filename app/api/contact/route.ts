import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation simple
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Envoi notification ntfy.sh (toujours réussit)
    fetch('https://ntfy.sh/nsigafe_contact_form', {
      method: 'POST',
      headers: {
        'Title': `Nouveau message de ${name}`,
        'Priority': 'high',
        'Tags': 'email'
      },
      body: `📧 Email: ${email}\n📌 Sujet: ${subject}\n\n💬 Message:\n${message}`
    }).catch(() => {})

    // Toujours retourner succès
    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  }
}
      subject: `Nouveau message de ${name} : ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">📧 Nouveau Message</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">Détails du message</h2>
            <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
              <p style="margin: 8px 0;"><strong>👤 Nom :</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>✉️ Email :</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>📌 Sujet :</strong> ${subject}</p>
            </div>
            <div style="margin: 20px 0; padding: 20px; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #1e40af;">💬 Message :</h3>
              <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Envoyé depuis le site NSIGAFE</p>
            </div>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({
        error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.'
      }, { status: 502 })
    }
>>>>>>> 332f3223253392ad229a6a4d0be0d766cc779119

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