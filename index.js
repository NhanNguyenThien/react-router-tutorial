import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';
import About from './client/components/About';
import Contacts from './client/components/Contacts';
import Dashboard from './client/components/Dashboard';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="contacts" component={Contacts} />
    </Route>
  </Router>
), document.getElementById('root'));
