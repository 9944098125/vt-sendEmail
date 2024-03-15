const { sendEmail } = require("../helper/nodemailer");

const sendMail = async (req, res, next) => {
	try {
		const { email } = req.body;
		sendEmail(email);
		res.status(200).json({
			message: `Message sent to the email ${email}`,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { sendMail };
