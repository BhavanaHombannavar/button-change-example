import {useState} from 'react';
import './App.css';
import Variant from './Components/Variant/Variant';
import StateButtons from './Components/StateButtons/StateButtons';
import ButtonCaptions from './Components/ButtonCaptions/ButtonCaptions';

function App() {

  const [variant, setVariant] = useState('blue');
  const [buttonState, setButtonState] = useState(false);
  const [buttonText, setButtonText] = useState('Button Example');

  return (
    <div className="App">
      <Variant
      variant={variant}
      setVariant={setVariant}/>
      <StateButtons
      buttonState={buttonState}
      setButtonState={setButtonState}/>
      <ButtonCaptions
      buttonState={buttonText}
      setButtonState={setButtonText} />

      <button
      style={{background: variant}}
      className="button_style"
      disabled={buttonState}
      >
      {buttonText}
      </button>
    </div>
  );
}

export default App;
