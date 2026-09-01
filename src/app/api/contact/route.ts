import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, message, honeypot, turnstileToken } = body;

    // 1. Trampa de Miel (Bloqueo rápido)
    if (honeypot) {
      // Fingimos éxito para engañar al bot
      return NextResponse.json({ success: true, message: 'Correo enviado' }, { status: 200 });
    }

    // 2. Validación de campos
    if (!name || !email || !message || !turnstileToken) {
      return NextResponse.json({ error: 'Faltan datos obligatorios o verificación fallida' }, { status: 400 });
    }

    // 3. Verificación criptográfica con Cloudflare
    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });
    
    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return NextResponse.json({ error: 'Bloqueo de seguridad: Verificación inválida' }, { status: 403 });
    }

    // 4. Envío de Correo (Solo llega aquí si es un humano real)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Cambia a false si terminas usando el puerto 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'hola@elizaespinosa.com',
      replyTo: email,
      subject: `Nuevo Prospecto: ${name} - ${projectType}`,
      text: `
Tienes un nuevo mensaje desde el portafolio:

Nombre / Empresa: ${name}
Correo: ${email}
Tipo de Solución: ${projectType}

Mensaje:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Diagnóstico enviado con éxito.' }, { status: 200 });

  } catch (error) {
    console.error('Error en el servidor:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}