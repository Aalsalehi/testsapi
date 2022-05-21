// const req = require("express/lib/request");
// const res = require("express/lib/response");
var models = require("../models");
// const moment = require("moment");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Tests.findAll({
    include: [models.Questions, models.Session_tests],
  }).then((found) => {
    if (found) {
      response.message.push("tests found");
      response.success = true;
      response.data = found;
    }
    res.send(response);
  });
};

exports.store = (req, res) => {
  //   const dateHandler = pm.globals.set("today", moment().format("MM/DD/YYYY"));
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Tests.create({
    title: req.body.title,
    start_at: req.body.start_at,
    end_at: req.body.end_at,
    description: req.body.description,
    instructor_id: req.body.instructor_id,
  }).then((created) => {
    if (created) {
      response.message.push("new test created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
