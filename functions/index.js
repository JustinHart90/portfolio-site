// DOCS: https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().email.account,
        pass: functions.config().email.pass
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting destination email/name by query string
        const email = req.query.email;
        const name = req.query.name;
        const message = req.query.message;

        const mailOptions = {
            from: `${name} <${email}>`, // Something like: Jane Doe <janedoe@gmail.com>
            to: functions.config().email.to,
            subject: 'Personal Site - New Message!', // email subject
            html: `
                <br />
                <p style="font-size: 16px;">${message}</p>
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return res.send(err.toString());
            }
            return res.sendStatus(200);
        });
    });    
});