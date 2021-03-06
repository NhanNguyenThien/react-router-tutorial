import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Item from '../Item';
import MainContacts from '../MainContacts';

export default class Contacts extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        Contacts
        <Switch>
          <Route exact path="/contacts" component={MainContacts} />
          <Route exact path="/contacts/:name" component={Item} />
        </Switch>
      </div>
    )
  }
}
