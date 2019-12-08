import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
    marginBottom: "10px"
}

const BeerCard = props => {
  return (
    <>
    <div className="col-md-4">
      <div className="card text-white bg-info" style={cardStyle}>
        <div className="card-header">{props.beerName}</div>
        <div className="card-body row">
          <p className="card-text">
            {props.beerName} is a {props.beerStyle}, you drank it on
            {props.date.substring(0, 10)}.
          </p>
          <p className="card-text">It is brewed by {props.breweryName}</p>
          <p className="card-text">
            Here are the available tasting notes: {props.tastingNotes}
          </p>
          <p className="card-text">
            You overall rating for this beer is: {props.overallRating} out of
            10.
          </p>
        </div>
        <div className="card-body row">
          <Link className="btn btn-primary btn-lg" to="/editbeer">
            Edit
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default BeerCard;
