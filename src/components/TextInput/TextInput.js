import React from 'react';
import './TextInput.css';

const TextInput = (props) => {
  return (
    <div className = 'text_input' id='8'>
      <label>Text Input</label>
      <br/>
      <input type = 'text'/>
      <button className = 'text_input_btn'>Edit</button>
      <button className = 'text_input_btn'>Delete</button>
    </div>
  );
}
export default TextInput;