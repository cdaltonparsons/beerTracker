import React, { Component } from "react";
import BeerCard from "./BeerCard";
import { Link } from "react-router-dom";
import Background from "../images/beers.jpg";
import API from "../utils/API";


const backgroundImg = {
  backgroundImage: `url(${Background})`,
  color: "white"
};

const btnStyle = {
  marginLeft: 10
};

class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
this.loadBeers();
  }

  loadBeers = () => {
    API.getBeers()
    .then(res => this.setState({ beers: res.data }))
    .catch(err => console.log(err));
}
  

  render() {
    return (
      <>
        <div className="jumbotron text-center" style={backgroundImg}>
          <h1 className="display-3">
            Here's a list of all the beers you've logged so far.
          </h1>
          <div className="lead justify-content-center text-center">
            <Link className="btn btn-primary btn-lg" to="/addbeer" role="button">
              Click here to add more beers!
            </Link>
            <Link
              className="btn btn-success btn-lg"
              to="/addbrewery"
              role="button"
              style={btnStyle}
            >
              Click here to add another brewery!
            </Link>
          </div>
        </div>
        <div className="container">
          {this.state.beers.length ? (
            <div className="row">
              {this.state.beers.map(beer => (
                <BeerCard
                  beer={beer}
                  _id={beer._id}
                  key={beer._id}
                  beerName={beer.beerName}
                  breweryName={beer.breweryName}
                  beerStyle={beer.beerStyle}
                  tastingNotes={beer.tastingNotes}
                  overallRating={beer.overallRating}
                  loadBeers={this.loadBeers}
                />
              ))}
            </div>
          ) : (
            <div className="card text-white bg-info mb-3">
              <div className="card-header">Woops!</div>
              <div className="card-body">
                <h4 className="card-title">
                  Looks like you haven't added any beers.
                </h4>
                <p className="card-text">
                  <Link to="/addbeer" className="text-white">
                    Click here to add your first one!
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </>
   )
  }
}



export default Beers;
