var express = require("express");
var router = express.Router();
var { check, validationResult } = require("express-validator/check");
var User = require("../models/users");
var passport = require("passport");

router.get("/", (req, res) => {
  res.render("auth");
});

router.get("/signup", (req, res) => {
  res.render("signup", { errors: null });
});

router.post(
  "/signup",
  [
    check("username", "Please enter a username").exists(),
    check("email", "Invalid email").isEmail(),
    check(
      "password",
      "Password must be at least 5 character and must include at least one number"
    )
      .isLength({ min: 5 })
      .matches(/\d/),
    check("password2", "Passwords are not identical")
      .exists()
      .custom((value, { req }) => value === req.body.password)
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.mapped());
    if (!errors.isEmpty()) {
      return res.render("signup", { errors: errors.mapped() });
      // req.flash("error", errors.mapped());
      // return next();
    }
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) return next(err);
      if (user) {
        req.flash("error", "User already exists");
        return res.redirect("/auth/signup");
      }
      var newUser = new User(req.body);
      //res.json(newUser);
      newUser.save(err => {
        if (err) {
          console.log(err);
          return;
        } else {
          req.flash("success", "Welcome!");
          res.redirect("/students");
        }
      });
    });
  }
);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("login", {
    successRedirect: "/students",
    failureRedirect: "/",
    failureFlash: true
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  req.flash("success", "You are logged out");
  res.redirect("/auth");
});

router.get("/all", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.json(error));
});

module.exports = router;
