import axios from "axios";

export default {
    getBeers: function() {
        return axios.get('/beers')
    },

    getBreweries: function() {
        return axios.get('/breweries')
    }

}