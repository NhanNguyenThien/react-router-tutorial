import React from 'react';

export default class Home extends React.Component {
  render() {
    console.log('hello');
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        Home
        {this.props.children}
      </div>
    )
  }
}
