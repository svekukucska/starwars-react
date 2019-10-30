import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import Pages from './pages/Routes';

const App = () => (
  <Router>
    <div className="App">
      <MainMenu />
      <Switch>
        {Pages.map(({ className, component: PageComponent, props: { exact, path } = {} }) => (
          <Route
            exact={exact}
            path={path}
            key={`page-${className}`}
            render={({ history, location, match }) => (
              <div className={`page-container page-${className}`}>
                <Container>
                  <PageComponent history={history} location={location} match={match} />
                </Container>
              </div>
            )}
          />
        ))}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
