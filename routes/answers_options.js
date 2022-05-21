var express = require("express");
var router = express.Router();
var Answers_optionsController = require("../controllers/Answers_optionsController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", Answers_optionsController.index);
router.post("/", Answers_optionsController.store);

module.exports = router;
