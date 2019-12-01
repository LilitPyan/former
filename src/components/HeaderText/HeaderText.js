import './HeaderText.css';
import React from 'react'

class HeaderText extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='header_text'>
        <label>Header Text</label>
        <br/>
        <input type='text'/>
        <button className='header_text_btn'>Edit</button>
        <button className='header_text_btn'>Delete</button>
      </div>
    )
  }
}
export default HeaderText;
