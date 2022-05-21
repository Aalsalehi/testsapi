// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Admins.findAll({}).then((found) => {
    if (found) {
      response.message.push("admin found");
      response.success = true;
    }
    res.send(response);
  });
};

exports.store = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Admins.create({
    adminName: req.body.adminName,
    email: req.body.email,
    password: req.body.password,
    role_id: req.body.role_id,
  }).then((created) => {
    if (created) {
      response.message.push("new admin created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
