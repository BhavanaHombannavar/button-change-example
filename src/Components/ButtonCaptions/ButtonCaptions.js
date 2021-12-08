import React from 'react';

export default class ButtonCaptions extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <div>
      <input type="text" placeholder="Button Caption" onChange={e=>this.props.setButtonState(e.target.value)}/>
    </div>;
  }
}
