var express = require("express");
var router = express.Router();
var permissionController = require("../controllers/permissionController");
// const roles = require("../models/roles");

/* GET users listing. */
router.get("/", permissionController.index);
router.post("/", permissionController.store);

module.exports = router;
