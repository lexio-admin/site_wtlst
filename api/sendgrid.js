// /api/sendgrid.js
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, subject } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: 'team@lexio.me',
    subject: subject,
    templateId: process.env.SENDGRID_TEMPLATE_ID,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
}