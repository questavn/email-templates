const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
// const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
// hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(express.static("public/icon"));
app.get("", (req, res) => {
  res.render("t-invitation", {
    name: "Khoa",
    testName: "test 123",
    className: "Toán 12 - Gia sư Henry Nguyễn",
    code: "X4SJF93MD",
    description:
      "Trải nghiệm tuyệt vời cùng gia sư Henry Nguyễn - với 7 năm kinh nghiệm đào tạo thủ khoa, á khoa cả nước",
    link: "https://www.youtube.com/@henrydevIT/featured",
  });
});

app.listen(3005, () => {
  console.log("http://localhost:3005");
});
