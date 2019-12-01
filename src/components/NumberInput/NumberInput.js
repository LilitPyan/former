import React from 'react';
import './NumberInput.css';

export default function NumberInput(props) {
    return (
      <div className = 'number_input' id='9'>
          <label>Number Input</label>
          <br/>
          <input type = 'number'/>
          <button className = 'number_input_btn'>Edit</button>
          <button className = 'number_input_btn'>Delete</button>
      </div>
    );
}
