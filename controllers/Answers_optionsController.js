var models = require("../models");

exports.index = (req, res) => {
  var response = {
    success: false,
    message: [],
    data: {},
  };
  models.Answers_options.findAll({}).then((found) => {
    if (found) {
      response.message.push("options found");
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
  models.Answers_options.create({
    options: req.body.options,
    correctAnswer: req.body.correctAnswer,
    question_id: req.body.question_id,
  }).then((created) => {
    if (created) {
      response.message.push("new option created");
      response.success = true;
      response.data = created;
    }
    res.send(response);
  });
};
