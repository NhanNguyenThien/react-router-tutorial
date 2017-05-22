import React from 'react';

export default class Item extends React.Component {
  // you can access props.match.params to get name parameter
  render() {
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        Item
        <li>name: {this.props.match.params.name}</li>
      </div>
    )
  }
}
