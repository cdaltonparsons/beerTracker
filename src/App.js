import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AddBeer from './components/AddBeer';
import AddBrewery from './components/AddBrewery';


function App() {
  return (
    <>
      <Router>
        <>
          
          <Navbar />
          <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beer" render={() => <AddBeer />} />
          <Route exact path="/brewery" render={() => <AddBrewery />} />
          </Switch>
          <Footer />
         
        </>
      </Router>
    </>
  );
}

export default App;
