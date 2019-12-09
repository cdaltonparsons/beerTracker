const router = require("express").Router();
let Brewery = require("../models/breweries.model");

router.route("/").get((req, res) => {
  Brewery.find()
    .then(breweries => res.json(breweries))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const breweryName = req.body.breweryName;
  const beerName = req.body.beerName;
  const location = req.body.location;
  const overallRating = req.body.overallRating;

  const newBrewery = new Brewery({
    breweryName,
    beerName,
    location,
    overallRating
  });

  newBrewery
    .save()
    .then(() => res.json("Cheers! New brewery added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Brewery.findById(req.params.id)
    .then(brewery => res.json(brewery))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Brewery.findById(req.params.id)
    .then(() => res.json("Brewery deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Brewery.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(brewery => res.json(brewery))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
