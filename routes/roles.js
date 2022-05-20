var express = require("express");
var router = express.Router();
var rolesController = require("../controllers/rolesController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", rolesController.index);
router.post("/", rolesController.store);

module.exports = router;
