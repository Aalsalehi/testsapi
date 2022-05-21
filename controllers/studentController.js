// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Students.findAll({
    include: [models.Session_tests],
  }).then((found) => {
    if (found) {
      response.message.push("students found");
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
  models.Students.create({
    studentName: req.body.instructorName,
    email: req.body.email,
    password: req.body.password,
    role_id: req.body.role_id,
  }).then((created) => {
    if (created) {
      response.message.push("new student created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
