import React, { Component, Suspense, lazy } from 'react';
import Spinner from './Spinner/Spinner';

const Home = lazy(() => import('./Home/Home'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Home />
      </Suspense>
    );
  }
}

export default App;
