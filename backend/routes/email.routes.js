const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/sendEmail.controllers");

router.post("/", sendEmail);

module.exports = router;
