import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import { Home, Messages } from '../lazy'

const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/" component={Home} />
    <Route  path="/messages" component={Messages} />
  </div>
);

export default App;
