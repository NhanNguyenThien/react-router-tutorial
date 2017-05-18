import React from 'react';

export default class App extends React.Component {
  render() {
    console.log('hello')
    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        App
        {this.props.children}
      </div>
    )
  }
}
