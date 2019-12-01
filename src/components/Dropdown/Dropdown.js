import React from 'react';
import './Dropdown.css';

export default function Dropdown(props) {
    return (
      <div className = 'dropdown' id='5'>
        <label>Dropdown</label>
        <br/>
        <input type = 'dropdown'/>
        <button className = 'dropdown_btn'>Edit</button>
        <button className = 'dropdown_btn'>Delete</button>
      </div>
    );
}

