var express = require("express");
var router = express.Router();
var studentController = require("../controllers/studentController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", studentController.index);
router.post("/", studentController.store);

module.exports = router;
