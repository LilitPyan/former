import React from 'react';
import './Label.css';

export default function Label(props) {
    return (
      <div className = 'label' id='2'>
        <label>Label</label>
        <br/>
        <input type = 'label'/>
        <button className = 'label_btn'>Edit</button>
        <button className = 'label_btn'>Delete</button>
      </div>
    );
}

