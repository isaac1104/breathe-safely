import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Spinner from './Spinner/Spinner';

const MapView = lazy(() => import('./MapView/MapView'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/city/:city' component={MapView} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
