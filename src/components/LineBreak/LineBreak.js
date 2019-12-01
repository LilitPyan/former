import React from 'react';
import './LineBreak.css';

export default function LineBreak(props) {
    return (
      <div className = 'line_break' id='4'>
        <label>Line Break</label>
        <br/>
        <input type = 'line_break'/>
        <button className = 'line_break_btn'>Edit</button>
        <button className = 'line_break_btn'>Delete</button>
      </div>
    );
}

