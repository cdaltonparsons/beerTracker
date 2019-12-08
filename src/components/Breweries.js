import React, { Component } from "react";
import BreweryCard from "./BreweryCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Background from "../images/beers.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const backgroundImg = {
  backgroundImage: `url(${Background})`,
  color: "white"
};

const btnStyle = {
  marginLeft: 10
};

class Breweries extends Component {
  state = {
    breweries: []
  };

  componentDidMount() {
    this.loadBreweries();
  }

  loadBreweries = () => {
    axios
      .get("http://localhost:5000/breweries/")
      .then(res => this.setState({ breweries: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="jumbotron text-center" style={backgroundImg}>
          <h1 className="display-3">
            Here's a list of all the breweries you've logged so far.
          </h1>
          <div className="lead justify-content-center text-center">
            <Link
              className="btn btn-primary btn-lg"
              to="/addbrewery"
              role="button"
            >
              Click here to add more breweries!
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
          {this.state.breweries.length ? (
            <div className="row">
              {this.state.breweries.map(brewery => (
                <BreweryCard
                  brewery={brewery}
                  key={brewery._id}
                  beerName={brewery.beerName}
                  breweryName={brewery.breweryName}
                  location={brewery.location}
                  overallRating={brewery.overallRating}
                  date={brewery.date}
                  loadBreweries={this.loadBreweries}
                />
              ))}
            </div>
          ) : (
            <div className="card text-white bg-info mb-3">
              <div className="card-header">Woops!</div>
              <div className="card-body">
                <h4 className="card-title">
                  Looks like you haven't added any breweries.
                </h4>
                <p className="card-text">
                  <Link to="/addbrewery" className="text-white">
                    Click here to add your first one!
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Breweries;
