const mailgun = require("mailgun-js");
const DOMAIN = "sandbox9b6d2848135a414c821b9520672eadce.mailgun.org";
//const mg = mailgun({apiKey: "b007dab23af757780dab7000b018640c-e49cc42c-14bed54a", domain: DOMAIN});
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

// const data = {
// 	from: "Mailgun Sandbox <postmaster@sandbox9b6d2848135a414c821b9520672eadce.mailgun.org>",
// 	to: "meet.https@gmail.com",
// 	subject: "Selected in Apple",
// 	text: "You are selected in Apple.Upon Successful completion of your degree, you will be on board as Lead Software Engineer with an annual remuneration of 50 CPA."
// };

// mg.messages().send(data, function (error, body) {
//     console.log(body);
// });

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