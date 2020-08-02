"use strict";
// DOCS: https://firebase.google.com/docs/functions/write-firebase-functions
exports.__esModule = true;
var firebase_functions_1 = require("firebase-functions");
var firebase_admin_1 = require("firebase-admin");
var nodemailer = require("nodemailer");
var cors = require('cors')({ origin: true });
firebase_admin_1["default"].initializeApp();
/**
* Here we're using Gmail to send
*/
var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: firebase_functions_1["default"].config().email.account,
        pass: firebase_functions_1["default"].config().email.pass
    }
});
exports.sendMail = firebase_functions_1["default"].https.onRequest(function (req, res) {
    cors(req, res, function () {
        var email = req.body.email;
        var name = req.body.name;
        var message = req.body.message;
        var fullMessage = name + " (" + email + "): " + message;
        var htmlTemplate = "\n            <p style=\"font-size: 16px;\">Name: " + name + "</p>\n            <p style=\"font-size: 16px;\">Email: " + email + "</p>\n            <p style=\"font-size: 16px;\">Message:</p>\n            <p style=\"font-size: 12px;\">" + message + "</p>\n        ";
        var mailOptions = {
            from: email,
            to: firebase_functions_1["default"].config().email.to,
            subject: 'Personal Site - New Message!',
            text: fullMessage,
            html: htmlTemplate.toString() // email content in HTML
        };
        // returning result
        return transporter.sendMail(mailOptions, function (err) {
            if (err) {
                return res.send(err.toString());
            }
            return res.sendStatus(200);
        });
    });
});
