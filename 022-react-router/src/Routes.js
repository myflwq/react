
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App';
import Home from './modules/Home';
import About from './modules/About';
import Repos from './modules/Repos';

export default (
  <Route path="/" component={App} >
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/repos" component={Repos} />
    <IndexRoute component={Home} />
  </Route>
);
