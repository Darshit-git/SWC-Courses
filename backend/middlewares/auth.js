const express = require("express");
const app = express();

const user = require("../models/user");
const Prof = require("../models/Prof");
const TA = require("../models/TA");

const { AUTH_ENABLED } = process.env

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated() || AUTH_ENABLED === '0') {
    if (req.user.email == Prof.find(email)) {
      let data = { role: "Prof" };
      user.findByIdAndUpdate(req.params.id, data);

    }
    else if (req.user.email == TA.find(email)) {
      let data = { role: "TA" };
      user.findByIdAndUpdate(req.params.id, data);
    }
    next();
  } else {
    return res
      .status(401)
      .json({
        status: "Not authenticated",
        msg: "You are not authenticated !",
      });
  }
};

const isAdmin = (req, res, next) => {
  console.log("asd");
  if (req.user.isAdmin) {
    return next();
  }
  else {
    return res
      .status(401)
      .json({
        status: "Not authorized",
        msg: "You are not authorized !",
      });
  }
};

module.exports = { isLoggedIn, isAdmin };