import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Veidekke from './components/veidekke';
import Skotsel from './components/skotsel';
import Felanmalan from './components/felanmalan';
import Styrelse from './components/styrelse';
import Valberedning from './components/valberedning';
import Kontakt from './components/kontakt';
import Stadgar from './components/stadgar';
import Trivsel from './components/trivsel';
import Redovisning from './components/redovisning';
import Blanketter from './components/blanketter';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/veidekke" component={Veidekke} />
          <Route path="/felanmalan" component={Felanmalan} />
          <Route path="/skotsel" component={Skotsel} />
          <Route path="/styrelse" component={Styrelse} />
          <Route path="/valberedning" component={Valberedning} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/stadgar" component={Stadgar} />
          <Route path="/trivsel" component={Trivsel} />
          <Route path="/redovisning" component={Redovisning} />
          <Route path="/blanketter" component={Blanketter} />
        </div>
      </Router>
    );
  }
}

export default App;
