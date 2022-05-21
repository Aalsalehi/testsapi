var express = require("express");
var router = express.Router();
var questionController = require("../controllers/questionController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", questionController.index);
router.post("/", questionController.store);

module.exports = router;
