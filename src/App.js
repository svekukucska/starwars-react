import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import { Container } from 'react-bootstrap';
import { Pages } from './pages/Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Switch >
            {Pages.map(({ className, component: PageComponent, props }) => (
              <Route {...props} key={`page-${className}`} render={(routeProps) => {
                return (
                  <div className={`page-container page-${className}`}>
                    <Container>
                      <PageComponent {...routeProps} />
                    </Container>
                  </div>
                );
              }} />
            )
            )}
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;
