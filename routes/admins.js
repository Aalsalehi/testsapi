var express = require("express");
var router = express.Router();
var adminController = require("../controllers/adminController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", adminController.index);
router.post("/", adminController.store);

module.exports = router;
