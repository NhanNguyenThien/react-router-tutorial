import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';
import About from './client/components/About';
import Contacts from './client/components/Contacts';
import NoMatch from './client/components/NoMatch';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
