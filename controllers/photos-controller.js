const Photo = require("../models/photo");

exports.getDashboard = (req, res, next) => {
  Photo.fetchAllPhotos((data) => {
    console.log(data);
    res.render("photos/dashboard", { pageTitle: "Dashboard", photos: data });
  });
};
