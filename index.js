import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';
import About from './client/components/About';
import Contacts from './client/components/Contacts';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="contacts" component={Contacts} />
    </Route>
  </Router>
), document.getElementById('root'));
