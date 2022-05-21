var express = require("express");
var router = express.Router();
var session_testsController = require("../controllers/session_testsController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", session_testsController.index);
router.post("/", session_testsController.store);

module.exports = router;
