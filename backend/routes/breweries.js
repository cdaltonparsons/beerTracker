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
  const recommend = req.body.recommend;

  const newBrewery = new Brewery({
    breweryName,
    beerName,
    location,
    recommend
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
  Brewery.findById(req.params.id).then(brewery => {
    brewery.breweryName = req.body.breweryName;
    brewery.beerName = req.body.beerName;
    brewery.location = req.body.location;
    brewery.recommend = req.body.recommend;

    brewery
      .save()
      .then(() => res.json("Brewery updated!"))
      .catch(err => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
