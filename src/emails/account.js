const mailgun = require("mailgun-js");
const DOMAIN = "sandbox9b6d2848135a414c821b9520672eadce.mailgun.org";
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

const sendWelcomeEmail = (email, name) => {
	mg.messages().send ({ 
		to: email,
		from: "Mailgun Sandbox <postmaster@sandbox9b6d2848135a414c821b9520672eadce.mailgun.org>",
		subject: 'Thanks for joining in!',
		text: `${name}, Welcome to Node.js course`
	})
};

const sendCancelationEmail = (email, name) => {
	mg.messages().send ({ 
		to: email,
		from: "Mailgun Sandbox <postmaster@sandbox9b6d2848135a414c821b9520672eadce.mailgun.org>",
		subject: 'Sorry to see you again!',
		text: `Goodbye, ${name}. I hope to see you soon.`
	})
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
}
