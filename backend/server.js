const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

const uri = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri || process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(() => console.log("DB server connect")).catch(e => console.log("DB error", e));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const beersRouter = require('./routes/beers');
const breweriesRouter = require ('./routes/breweries');

app.use('/beers', beersRouter);
app.use('/breweries', breweriesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});