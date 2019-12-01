import React from 'react';
import './Image.css';

const Image=(props)=>{
    return (
      <li className = 'image' id='image'>
        <label>Image</label>
        <br/>
        <input type = 'image'/>
        <button className = 'image_btn'>Edit</button>
        <button className = 'image_btn'>Delete</button>
      </li>
    );
}
export default Image

