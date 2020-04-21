const express = require("express");

const photosController = require("../controllers/photos-controller");

const router = express.Router();

router.get("/", photosController.getDashboard);

module.exports = router;
