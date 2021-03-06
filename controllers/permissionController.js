// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Permissions.findAll({}).then((found) => {
    if (found) {
      response.message.push("permission found");
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
  models.Permissions.create({
    role_id: req.body.id,
    permissionName: req.body.name,
    isActive: req.body.isActive,
  }).then((created) => {
    if (created) {
      response.message.push("new permission created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
