// DOCS: https://firebase.google.com/docs/functions/write-firebase-functions

import functions from 'firebase-functions';
import admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: functions.config().email.account,
        pass: functions.config().email.pass
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        const email: string = req.body.email;
        const name: string = req.body.name;
        const message: string = req.body.message;

        const fullMessage: string = `${name} (${email}): ${message}`;
        const htmlTemplate: string | HTMLElement = `
            <p style="font-size: 16px;">Name: ${name}</p>
            <p style="font-size: 16px;">Email: ${email}</p>
            <p style="font-size: 16px;">Message:</p>
            <p style="font-size: 12px;">${message}</p>
        `;

        const mailOptions = {
            from: email, // Something like: Jane Doe <janedoe@gmail.com>
            to: functions.config().email.to,
            subject: 'Personal Site - New Message!', // email subject
            text: fullMessage,
            html: htmlTemplate.toString() // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (err: Error) => {
            if(err) {
                return res.send(err.toString());
            }
            return res.sendStatus(200);
        });
    });    
});