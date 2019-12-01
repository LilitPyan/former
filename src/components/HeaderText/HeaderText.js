import './HeaderText.css';
import React from 'react'
import { useDrag} from 'react-dnd'
import {TYPES} from "../DragInput/DragInput";

const HeaderText=({item, addItem})=>{
  const [, drag] = useDrag({
      item: {...item, type: TYPES.ITEM},
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          return
        }
      },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });

  return (
    <li className='header_text' ref = {drag} draggable='true'>
      <label>Header Text</label>
      <br/>
      <input type='text'/>
      <button className='header_text_btn'>Edit</button>
      <button className='header_text_btn'>Delete</button>
    </li>
  )
}
export default HeaderText;
