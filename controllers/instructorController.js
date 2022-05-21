// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Instructors.findAll({
    include: [models.Tests],
  }).then((found) => {
    if (found) {
      response.message.push("instructor found");
      response.success = true;
      response.data = found;
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
  models.Instructors.create({
    instructorName: req.body.instructorName,
    email: req.body.email,
    password: req.body.password,
    role_id: req.body.role_id,
    info: req.body.info,
  }).then((created) => {
    if (created) {
      response.message.push("new instructor created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
