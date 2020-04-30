const fs = require("fs");
const path = require("path");

const Photo = require("../models/photo");

const pathToPhotoData = path.join(__dirname, "..", "data", "photos.json");

exports.getAddPhoto = (req, res, next) => {
  res.render("admin/add-photo", { pageTitle: "Add Photo" });
};

exports.postAddPhoto = (req, res, next) => {
  const photoId = Math.random();
  const photoTitle = req.body.title;
  const photoUrl = req.body.photoUrl;
  const photoDesc = req.body.description;
  const photo = new Photo(photoId, photoTitle, photoUrl, photoDesc);
  photo.save();
  return res.redirect("/");
};
