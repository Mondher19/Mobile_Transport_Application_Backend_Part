import nodemailer from "nodemailer";
import smtpTransport from 'nodemailer-smtp-transport';

export async function sendConfirmationEmail(email, activationCode) {
  try {
    
    const transporter = nodemailer.createTransport(smtpTransport({
  host: 'live.smtp.mailtrap.io',
  port: 587,
  secure: true,
  auth: {
    user: 'api',
    pass: 'b6466441c473c50bd104fcacaea2e8f1',
  },
    }));

    await transporter.sendMail({
      from: 'live.smtp.mailtrap.io',
      to: email,
      subject: 'Please confirm your account',
      html: `<h1> This is your code </h1>
        <h2>Hello Sir </h2>
        <h3> ${activationCode}</h3>`,
    });

    console.log('email sent successfully');
  } catch (error) {
    console.log('email not sent');
    console.log(error);
  }
}

export default sendConfirmationEmail;
