const router = require("express").Router();
const beerRoutes = require("./beers");
const breweryRoutes = require("./breweries");

router.use("/beers", beerRoutes);
router.use("/breweries", breweryRoutes);

module.exports = router;