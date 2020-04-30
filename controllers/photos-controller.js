const Photo = require("../models/photo");

exports.getDashboard = (req, res, next) => {
  Photo.fetchAllPhotos((data) => {
    res.render("photos/dashboard", { pageTitle: "Dashboard", photos: data });
  });
};
