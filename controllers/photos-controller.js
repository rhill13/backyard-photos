exports.getDashboard = (req, res, next) => {
  res.render("photos/dashboard", { pageTitle: "Dashboard" });
};
