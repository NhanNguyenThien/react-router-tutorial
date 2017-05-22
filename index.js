import React from 'react';
import ReactDOM from 'react-dom';
import Home from './client/components/Home';
import About from './client/components/About';
import Contacts from './client/components/Contacts';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
