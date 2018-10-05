import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import { Home, Messages, Stats } from '../lazy'

const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/" component={Home} />
    <Route  path="/messages" component={Messages} />
    <Route  path="/stats" component={Stats} />
  </div>
);

export default App;
