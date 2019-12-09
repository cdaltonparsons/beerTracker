const db = require("../models");

module.exports = {
  // Get all beers saved to the database.  Would make changes here if I can get auth to integrate
  find: (req, res) => {
    db.Beer.find()
      .then(beers => res.json(beers))
      .catch(err => res.status(400).json("Error: " + err));
  },

  create: (req, res) => {
    db.Beer.create(req.body)
      .then(beer => res.json(beer))
      .catch(err => res.status(422).json(err));
  },

  delete: (req, res) => {
    db.Beer.findById({ _id: req.params.id })
      .then(beer => beer.remove())
      .then(beer => res.json(beer))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Beer.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
      .then(beer => res.json(beer))
      .catch(err => res.status(422).json(err));
  }
};
