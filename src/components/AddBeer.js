import React, { Component } from "react";
import axios from "axios";
import Background from "../images/beers.jpg";


const backgroundImg = {
  backgroundImage: `url(${Background})`,
  color: "white"
};

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerName: "",
      breweryName: "",
      beerStyle: "",
      tastingNotes: "",
      overallRating: 5,
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
    const beer = {
      beerName: this.state.beerName,
      breweryName: this.state.breweryName,
      beerStyle: this.state.beerStyle,
      tastingNotes: this.state.tastingNotes,
      overallRating: this.state.overallRating,
    };
    console.log(beer);

    axios
      .post("http://localhost:5000/beers/add", beer)
      .then(() => alert(`Cheers! ${this.state.beerName} has successfully been added.`));

      this.setState({
        beerName: "",
        breweryName: "",
        beerStyle: "",
        tastingNotes: "",
        overallRating: 5
      })

  };

  render() {
    return (
      <>
        <div className="jumbotron text-center" style={backgroundImg}>
          <h1 className="display-3">
            Keep track of your favorite (or least favorite...) beers here
          </h1>
          <p className="lead">
            Fill in the form below to save beers to your profile.
          </p>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <fieldset>
                <legend>Add a New Beer</legend>
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
                    value={this.state.beerName}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="breweryName">
                    Brewery Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Brewery Name"
                    id="breweryName"
                    name="breweryName"
                    value={this.state.breweryName}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="beerStyle">
                    Beer Style
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Beer Style"
                    id="beerStyle"
                    name="beerStyle"
                    value={this.state.beerStyle}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tastingNotes">Enter tasting notes here</label>
                  <textarea
                    className="form-control"
                    id="tastingNotes"
                    rows="3"
                    name="tastingNotes"
                    placeholder={this.state.tastingNotes}
                    value={this.state.tastingNotes}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="overallRating">Overall Rating</label>
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
                    <option value="10">10 (New favorite beer)</option>
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

export default BeerForm;
