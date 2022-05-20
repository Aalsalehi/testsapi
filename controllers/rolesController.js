// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Roles.findAll({}).then((found) => {
    if (found) {
      response.message.push("role found");
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
  models.Roles.create({
    roleName: req.body.roleName,
    isActive: req.body.isActive,
  }).then((created) => {
    if (created) {
      response.message.push("new role created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
