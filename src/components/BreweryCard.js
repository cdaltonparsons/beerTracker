import React, { Component } from "react";
import BrewerySummary from "./BrewerySummary";
import EditBrewery from "./EditBrewery";

class BreweryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      breweryName: this.props.breweryName,
      beerName: this.props.beerName,
      location: this.props.location,
      overallRating: this.props.overallRating,
      editActive: false
    };
  }

  handleEdit = event => {
    if (this.state.editActive) {
      this.setState({
        editActive: false
      });
    } else {
      this.setState({
        editActive: true
      });
    }
  };

  render() {
    return (
      <>
        <div className="col-md-6">
          <div className="card text-white bg-info">
            <div className="card-header">
              <h1>{this.props.breweryName}</h1>
              <button className="btn btn-secondary align-self-end" id={this.state._id} onClick={(e) => {this.handleEdit(e)}}>Edit Brewery</button>
              </div>
            {this.state.editActive ? (
              <EditBrewery {...this.props}
              brewery={this.state}
              handleEdit={this.handleEdit}
              loadBreweries={this.props.loadBreweries}
              />
            ) : (
              <BrewerySummary {...this.props} />
            )}
            
          </div>
        </div>
      </>
    );
  }
}

export default BreweryCard;
