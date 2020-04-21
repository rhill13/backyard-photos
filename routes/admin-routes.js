const express = require("express");

const adminController = require("../controllers/admin-controller");

const router = express.Router();

router.get("/add-photo", adminController.getAddPhoto);

module.exports = router;
