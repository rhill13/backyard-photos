const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT_NUM = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  res.render("index", { pageTitle: "Home" });
});

app.listen(PORT_NUM, () => console.log(`Listening on port ${PORT_NUM}`));
