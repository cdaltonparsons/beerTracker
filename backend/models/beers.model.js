const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating the model for the beers table
const beerSchema = new Schema({
  beerName: { type: String, required: true,  trim: true  },
  breweryName: { type: String,  trim: true  },
  beerStyle: { type: String,  trim: true  },
  tastingNotes: { type: String,  trim: true  },
  overallRating: { type: Number },
  date: { type: Date}
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;