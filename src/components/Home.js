import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/beersHome.jpg";

const backgroundImg = {
  backgroundImage: `url(${Background})`,
  color: 'white'
}

const btnStyle = {
  marginLeft: 10
};

function Home() {
  return (
    <div className="jumbotron text-center" style={backgroundImg}>
      <h1 className="display-3">Welcome to Drinking Buddy!</h1>
      <h3>Keep track of your favorite beers and breweries</h3>
      <div className="lead justify-content-center text-center">
        <Link className="btn btn-primary btn-lg" to="/beer" role="button">
          Your Favorite Beers
        </Link>
        <Link
          className="btn btn-warning btn-lg"
          to="/brewery"
          role="button"
          style={btnStyle}
        >
          Your Favorite Breweries
        </Link>
      </div>
      <hr className="my-4" />
      <p>Start by signing up or logging in below</p>
      <div className="lead text-center justify-content-center">
        <Link className="btn btn-info btn-lg" to="#" role="button">
          Sign Up
        </Link>
        <Link
          className="btn btn-success btn-lg"
          to="#"
          role="button"
          style={btnStyle}
        >
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Home;
