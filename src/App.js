import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './modules/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="page-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
