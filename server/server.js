require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 3000;
const templateId = process.env.SENDGRID_TEMPLATE_ID;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/sendgrid', async (req, res) => {
  const { email, subject } = req.body;

  try {
    const msg = {
      to: email,
      from: 'team@lexio.me',
      subject: subject,
      templateId: templateId,
      // dynamicTemplateData: {
      //   // Aggiungi qui eventuali dati dinamici per il tuo template
      //   // Esempio:
      //   // subject: subject,
      //   // user_name: req.body.name,
      // }
    };

    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});