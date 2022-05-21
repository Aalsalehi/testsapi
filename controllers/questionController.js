var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Questions.findAll({
    include: [models.Answers_options],
  }).then((found) => {
    if (found) {
      response.message.push("question found");
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
  models.Questions.create({
    question: req.body.question,
    test_id: req.body.test_id,
  }).then((created) => {
    if (created) {
      response.message.push("new question created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
