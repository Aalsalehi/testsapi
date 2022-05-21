// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");

exports.index = async (req, res) => {
  // const id = req.params.id;
  var response = {
    success: false,
    message: [],
    data: {},
  };
  const role = await models.Roles.findAll({
    include: [
      models.Permissions,
      models.Instructors,
      models.Admins,
      models.Students,
    ],
  });
  if (role) {
    response.message.push("role found");
    response.success = true;
    response.data = role;
  }
  res.send(response);
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
