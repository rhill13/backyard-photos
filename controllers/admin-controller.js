exports.getAddPhoto = (req, res, next) => {
  res.render("admin/add-photo", { pageTitle: "Add Photo" });
};
