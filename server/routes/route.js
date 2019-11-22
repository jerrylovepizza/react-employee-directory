const path = require("path");
const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/api/employees")
  .get(controller.getEmployees);

router.use(function(req, res) {
  console.log("React app lives here:", path.join(__dirname, "../../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
