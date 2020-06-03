const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("page rendered");
});

router.get("/login", function (req, res) {
  res.send("Login page");
});

router.get("/", function (req, res) {
  res.send("page rendered");
});

module.exports = router;