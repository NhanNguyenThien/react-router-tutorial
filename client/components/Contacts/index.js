import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Item from '../Item';
import MainContacts from '../MainContacts';

export default class Contacts extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        Contacts
      </div>
    )
  }
}
