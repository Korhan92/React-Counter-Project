import React, { Component } from 'react';

export default class Button extends Component {
    
  render() {
    console.log(this.props)
    return <div>
        <button onClick={this.props.buton}>+</button>
       
        <button onClick={this.props.buton1}>-</button>
    </div>;
  }
}
