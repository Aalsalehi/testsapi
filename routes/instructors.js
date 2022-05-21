var express = require("express");
var router = express.Router();
var instructorController = require("../controllers/instructorController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", instructorController.index);
router.post("/", instructorController.store);

module.exports = router;
