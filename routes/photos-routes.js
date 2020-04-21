const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Dashboard" });
});

module.exports = router;
