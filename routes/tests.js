var express = require("express");
var router = express.Router();
var testController = require("../controllers/testController");
// const multer = require("multer");
// const upload = multer();
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", testController.index);
router.post("/", testController.store);

module.exports = router;
