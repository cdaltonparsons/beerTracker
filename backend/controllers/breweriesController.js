const db = require("../models");

module.exports = {
  find: (req, res) => {
    db.Brewery.find()
      .then(breweries => res.json(breweries))
      .catch(err => res.status(400).json("Error: " + err));
  },

  create: (req, res) => {
    db.Brewery.create(req.body)
      .then(brewery => res.json(brewery))
      .catch(err => res.status(422).json(err));
  },

  delete: (req, res) => {
    db.Brewery.findById({ _id: req.params.id })
      .then(brewery => brewery.remove())
      .then(brewery => res.json(brewery))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Brewery.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
      .then(brewery => res.json(brewery))
      .catch(err => res.status(422).json(err));
  }
};
