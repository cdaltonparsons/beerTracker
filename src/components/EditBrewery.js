import React, { Component } from "react";
import axios from "axios";


class BreweryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      breweryName: this.props.breweryName,
      beerName: this.props.beerName,
      location: this.props.location,
      overallRating: this.props.overallRating,
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    axios
      .put(
        "http://localhost5000/breweries/update/" + this.state._id,
        this.state
      )
      .then(() => {
        this.loadBreweries();
      })
      .catch(err => console.log("Error: " + err));
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <fieldset>
                <legend>Edit Brewery Information</legend>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="breweryName">
                    Name of Brewery
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.breweryName}
                    id="breweryName"
                    name="breweryName"
                    onChange={this.handleInputChange}
                    value={this.state.breweryName}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="beerName">
                  Name of Beer(s) sampled (feel free to add several, separated with commas)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.beerName}
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
                    placeholder={this.props.location}
                    id="breweryLocation"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                  />
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
