const router = require("express").Router();
const breweriesController = require("../../controllers/breweriesController")

// matches route /api/breweries/
router.route("/").get(breweriesController.find);

// matches route /api/breweries/add
router.route("/add").post(breweriesController.create);

// matches route /api/breweries/:id
router.route("/:id").delete(breweriesController.delete);

// matches route /api/breweries/update/:id
router.route("/update/:id").put(breweriesController.update);

module.exports = router;
