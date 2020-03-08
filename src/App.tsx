import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import SmartCoach from './views/services/SmartCoach';
import OneToOne from './views/services/OneToOne';
import Trends from './views/Trends';
import NotFound from './views/404';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/smart-coach"><SmartCoach /></Route>
          <Route path="/one-to-one"><OneToOne /></Route>
          <Route path="/trends"><Trends /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
