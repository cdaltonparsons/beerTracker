import React from "react";
import {Link} from "react-router-dom";

const BreweryCard = props => {
  return (
    <>
      <div className="col-md-6">
        <div className="card text-white bg-info">
          <div className="card-header">{props.breweryName}</div>
          <div className="card-body row">
            <p className="card-text">
              {props.breweryName} is located in {props.location}, and you
              visited on {props.date.substring(0, 10)}.
            </p>
          </div>
          <div className="card-body row">
              <p className="card-text">
                  Overall, you rated {props.breweryName}: {props.overallRating} out of 10.
              </p>
          </div>
          <div className="card-body row">
          <Link className="btn btn-primary btn-lg" to="/editbrewery">
            Edit
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default BreweryCard;
