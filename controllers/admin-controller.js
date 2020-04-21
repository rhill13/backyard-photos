exports.getAddPhoto = (req, res, next) => {
  res.render("admin/add-photo", { pageTitle: "Add Photo" });
};

exports.postAddPhoto = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
