import React from 'react';
import './Checkbox.css';

export default function Checkbox(props) {
    return (
      <div className = 'checkbox' id='6'>
        <label>CheckBox</label>
        <br/>
        <input type = 'checkbox'/>
        <button className = 'checkbox_btn'>Edit</button>
        <button className = 'checkbox_btn'>Delete</button>
      </div>
    );
}

