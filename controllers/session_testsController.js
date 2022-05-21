var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Session_tests.findAll({}).then((found) => {
    if (found) {
      response.message.push("role found");
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
  models.Session_tests.create({
    result: req.body.result,
    student_id: req.body.student_id,
    test_key: req.body.test_key,
    test_id: req.body.test_id,
  }).then((created) => {
    if (created) {
      response.message.push("new role created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
