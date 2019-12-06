import React, { Component } from "react";

class BreweryForm extends Component {
  state = {
    // state will go here
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // eventually this will be fleshed out to create a new entry in the brewery database
  };

  render() {
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-3">
            Keep track of your favorite (or least favorite...) breweries here
          </h1>
          <p class="lead">
            Fill in the form below to save breweries to your profile.
          </p>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <fieldset>
                <legend>Add a New Brewery</legend>
                <div className="form-group">
                  <label className="col-form-label" for="beerName">
                    Name of Brewery
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Brewery"
                    id="breweryName"
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" for="beerName">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Denver, CO"
                    id="breweryLocation"
                  />
                </div>
                <div className="form-group">
                  <label for="overallRating">Overall Rating</label>
                  <select
                    class="form-control"
                    id="overallRatingBrewery"
                    value="5"
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
                <div className="form-group">
                  <label for="tastingNotes">Enter any notes here</label>
                  <textarea
                    className="form-control"
                    id="breweryNotes"
                    rows="3"
                  ></textarea>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default BreweryForm;
