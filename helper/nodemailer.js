const nodemailer = require("nodemailer");

// Create a function to send the registration email
async function sendEmail(email) {
	try {
		// Create a transporter using your email service credentials
		const transporter = nodemailer.createTransport({
			service: "Gmail", // service provider
			auth: {
				user: "srinivas72075@gmail.com",
				pass: "ifhp vypf rhqb ubpw",
			},
		});

		// Email content
		const mailOptions = {
			from: "srinivas72075@gmail.com",
			to: email,
			subject: "VulcanTechs",
			html: `Hello, I'm Srinivas Akella from VulcanTechs`,
		};

		// Send the email
		const info = await transporter.sendMail(mailOptions);
		// console.log("Email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending email:", error);
	}
}

module.exports = { sendEmail };
