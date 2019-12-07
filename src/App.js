import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BeerForm from "./pages/BeerForm";
import BreweryForm from "./pages/BreweryForm";

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beer" render={() => <BeerForm />} />
          <Route exact path="/brewery" render={() => <BreweryForm />} />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
