const router = require("express").Router();
const { sendMail } = require("../controller/sendMail");

router.route("/send-mail").post(sendMail);

module.exports = router;
