import React from 'react';
import './MultipleChoice.css';

export default function MultipleChoice(props) {
    return (
      <div className = 'multiple_choice' id='7'>
        <label>Multiple Choice</label>
        <br/>
        <input type = 'multiple_choice'/>
        <button className = 'multiple_choice_btn'>Edit</button>
        <button className = 'multiple_choice_btn'>Delete</button>
      </div>
    );
}

