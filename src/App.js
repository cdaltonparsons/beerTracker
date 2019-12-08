import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Beers from './components/Beers';
import Breweries from './components/Breweries'
import AddBeer from './components/AddBeer';
import AddBrewery from './components/AddBrewery';
import EditBrewery from './components/EditBrewery';
import EditBeer from './components/EditBeer';


function App() {
  return (
    <>
      <Router>
        <>
          
          <Navbar />
          <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beer" render={() => <Beers />} />
          <Route exact path="/brewery" render={() => <Breweries />} />
          <Route exact path="/addbeer" render={() => <AddBeer />} />
          <Route exact path="/addbrewery" render={() => <AddBrewery />} />
          <Route exact path="/editbeer" render={() => <EditBeer />} />
          <Route exact path="/editbrewery" render={() => <EditBrewery/>} />
          </Switch>
          <br></br>
          <Footer />
         
        </>
      </Router>
    </>
  );
}

export default App;
