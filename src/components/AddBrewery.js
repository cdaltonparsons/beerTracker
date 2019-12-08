import React, { Component } from "react";
import axios from "axios";
import Background from "../images/hops.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const backgroundImg = {
  backgroundImage: `url(${Background})`,
  color: "white"
};

class BreweryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryName: "",
      beerName: "",
      location: "",
      overallRating: 5,
      date: new Date()
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleDateChange = date => {
    this.setState({
      date: date
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const brewery = {
      breweryName: this.state.breweryName,
      beerName: this.state.beerName,
      location: this.state.location,
      overallRating: this.state.overallRating,
      date: this.state.date
    };
    console.log(brewery);

    axios
      .post("http://localhost5000/breweries/", brewery)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <>
        <div className="jumbotron" style={backgroundImg}>
          <h1 className="display-3">
            Keep track of your favorite (or least favorite...) breweries here
          </h1>
          <h3>Fill in the form below to save breweries to your profile.</h3>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <fieldset>
                <legend>Add a New Brewery</legend>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="breweryName">
                    Name of Brewery
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Brewery"
                    id="breweryName"
                    name="breweryName"
                    onChange={this.handleInputChange}
                    value={this.state.breweryName}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="beerName">
                    Name of Beer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Beer"
                    id="beerName"
                    name="beerName"
                    onChange={this.handleInputChange}
                    value={this.state.beerName}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Denver, CO"
                    id="breweryLocation"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Date Visited: </label>
                  <div>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.handleDateChange}
                      name="date"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="overallRating">
                    Overall Rating
                  </label>
                  <select
                    className="form-control"
                    id="overallRating"
                    name="overallRating"
                    value={this.state.overallRating}
                    onChange={this.handleInputChange}
                  >
                    <option value="1">1 (Hated it)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Meh.)</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10 (New favorite brewery)</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </button>
              </fieldset>
            </form>
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default BreweryForm;
