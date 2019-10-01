import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './modules/Footer';
import MainMenu from './modules/MainMenu';
import { Container } from 'react-bootstrap';
import StarWarsMovies from './pages/StarWarsMovies';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <div className="page-container">
            <Container>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movies" exact component={StarWarsMovies} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </div>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
