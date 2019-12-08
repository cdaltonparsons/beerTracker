const router = require('express').Router();
let Beers = require('../models/beers.model');

router.route('/').get((req, res) => {
  Beers.find()
    .then(beers => res.json(beers))
    .catch(err => RegExp.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const beerName = req.body.beerName;
  const breweryName = req.body.breweryName;
  const beerStyle = req.body.beerStyle;
  const tastingNotes = req.body.tastingNotes;
  const overallRating = req.body.overallRating;
  const date = Date.parse(req.body.date)

  const newBeer = new Beers({
    beerName,
    breweryName,
    beerStyle,
    tastingNotes,
    overallRating,
    date
  });

  newBeer
    .save()
    .then(() => res.json('Cheers! Beer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Beers.findById(req.params.id)
    .then(beer => res.json(beer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Beers.findById(req.params.id)
    .then(() => res.json('Brewery deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Beers.findById(req.params.id).then(beer => {
    beer.beerName = req.body.beerName;
    beer.breweryName = req.body.breweryName;
    beer.beerStyle = req.body.beerStyle;
    beer.tastingNotes = req.body.tastingNotes;
    beer.overallRating = req.body.overallRating;
    beer.date = req.body.date;

    beer
      .save()
      .then(() => res.json('Beer updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
});

module.exports = router;
