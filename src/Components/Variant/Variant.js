import React from 'react';

export default class Variant extends React.Component {


  changeButton = (e) => {
    this.props.setVariant(e.target.value)
  }

  render(){
    return (
      <select onChange={this.changeButton}>
        <option value="blue">Primary</option>
        <option value="orange">Warning</option>
        <option value="red">Red</option>
      </select>
    );
  }
}
