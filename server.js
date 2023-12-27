const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Add this line to handle CORS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    try {
        const formData = req.body;

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password',
            },
        });

        // Set up email data
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'info@bibliasacco.com',
            subject: `New Form Submission - ${formData.subject || 'No Subject'}`,
            html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject || 'N/A'}</p>
        <p><strong>Message:</strong> ${formData.message || 'N/A'}</p>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
