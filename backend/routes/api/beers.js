const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Route for getting all beers, matches route /api/beers
router.route("/").get(beersController.find);

// Matches route /api/beers/add
router.route("/add").post(beersController.create);

// Matches route /api/beers/:id
router.route("/:id").delete(beersController.delete);

// Matches route /api/beers/update/:id
router.route("/update/:id").put(beersController.update);

module.exports = router;
