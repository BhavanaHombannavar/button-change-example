import React from 'react';

export default class StateButtons extends React.Component {


  changeState = (e) => {
    if (e.target.value == 'true'){
        this.props.setButtonState(true)
    }else if (e.target.value == 'false'){
        this.props.setButtonState(false)
    }
  }

  render(){
    return <div>
        <input type="radio"
        name="button_state"
        value={true}
        id="button_state_1"
        onChange={this.changeState}
        checked={this.props.buttonState === true}  />
        <label htmlFor="button_state_1">Disabled</label>
        <input type="radio"
        name="button_state"
        value={false}
        id="button_state_2"
        onChange={this.changeState}
        checked={this.props.buttonState === false} />
        <label htmlFor="button_state_2">Enabled</label>
        </div>
  }
}
