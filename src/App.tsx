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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/services"><Services /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
