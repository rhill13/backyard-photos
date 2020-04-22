const fs = require("fs");
const path = require("path");

const pathToPhotoData = path.join(__dirname, "..", "data", "photos.json");

exports.getAddPhoto = (req, res, next) => {
  res.render("admin/add-photo", { pageTitle: "Add Photo" });
};

exports.postAddPhoto = (req, res, next) => {
  fs.readFile(pathToPhotoData, (err, fileContent) => {
    if (!err) {
      const data = JSON.parse(fileContent);
      data.push(req.body);
      fs.writeFile(pathToPhotoData, JSON.stringify(data), (err) => {
        if (err) {
          console.log(err.message);
        }
      });
    } else {
      console.log(err.message);
    }
  });
  return res.redirect("/");
};
