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
    <div className="jumbotron" style={backgroundImg}>
      <h1 className="display-3">Welcome to **beer app title here**</h1>
      <h3>Keep track of your favorite beers and breweries</h3>
      <p className="lead">
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
      </p>
      <hr className="my-4" />
      <p>Start by signing up or logging in below</p>
      <p className="lead">
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
      </p>
    </div>
  );
}

export default Home;
