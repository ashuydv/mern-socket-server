const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");

router.post("/addmsg/", messagesController.addMsg);
router.post("/getmsg/", messagesController.getMessages);

module.exports = router;
