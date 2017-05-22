import React from 'react';
import { Link } from 'react-router-dom';

export default class Item extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        MainContacts
        <li><Link to="/contacts/foo" >Foo</Link></li>
      </div>
    )
  }
}
