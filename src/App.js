import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './modules/Footer';
import MainMenu from './modules/MainMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <div className="page-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
