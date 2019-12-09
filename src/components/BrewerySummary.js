import React from "react";

function BrewerySummary(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <br />

          <p className="card-text">
            {props.breweryName} is located in {props.location}
          </p>
        </div>
        <div className="card-body row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="card-text">
              Overall, you rated {props.breweryName}: {props.overallRating} out
              of 10.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrewerySummary;
