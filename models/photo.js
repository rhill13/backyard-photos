const fs = require("fs");
const path = require("path");

const pathToData = path.join(__dirname, "..", "data", "photos.json");

module.exports = class Photo {
  constructor(id, title, photoUrl) {
    this.id = id;
    this.title = title;
    this.photoUrl = photoUrl;
  }

  save() {
    fs.readFile(pathToData, (err, fileContent) => {
      if (!err) {
        const updatedPhotos = JSON.parse(fileContent);
        updatedPhotos.push({ ...this });
        fs.writeFile(pathToData, JSON.stringify(updatedPhotos), (err) => {
          if (err) {
            console.log(err.message);
          }
        });
      } else {
        console.log(err.message);
      }
    });
  }

  static fetchAllPhotos(callback) {
    fs.readFile(pathToData, (err, fileContent) => {
      if (!err) {
        const data = JSON.parse(fileContent);
        callback(data);
      }
    });
  }
};
