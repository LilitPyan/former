import React from 'react';
import './Paragraph.css';

export default function Paragraph(props) {
    return (
      <div className = 'paragraph' id='3'>
        <label>Paragraph</label>
        <br/>
        <input type = 'paragraph'/>
        <button className = 'paragraph_btn'>Edit</button>
        <button className = 'paragraph_btn'>Delete</button>
      </div>
    );
}

