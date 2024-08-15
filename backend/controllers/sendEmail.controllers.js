require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,       // Your email
            pass: process.env.USER_PASS        // Your app-specific password
        }
    });

    const mailOptions = {
        from: email,                          // User's email address
        to: process.env.USER_EMAIL,           // Your email address
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent successfully!');
    });
};

module.exports = { sendEmail };
