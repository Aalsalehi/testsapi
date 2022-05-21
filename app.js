var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var rolesRouter = require("./routes/roles");
var permissionsRouter = require("./routes/permissions");
var adminsRouter = require("./routes/admins");
var instructorsRouter = require("./routes/instructors");
var studentsRouter = require("./routes/students");
var testsRouter = require("./routes/tests");
var questionsRouter = require("./routes/questions");
var answers_optionsRouter = require("./routes/answers_options");
var session_testsRouter = require("./routes/session_tests");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/permission", permissionsRouter);
app.use("/admins", adminsRouter);
app.use("/instructors", instructorsRouter);
app.use("/students", studentsRouter);
app.use("/tests", testsRouter);
app.use("/questions", questionsRouter);
app.use("/answers_options", answers_optionsRouter);
app.use("/session_tests", session_testsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
