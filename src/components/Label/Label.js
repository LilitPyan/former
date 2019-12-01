import React from 'react';
import './Label.css';

class Label extends React.Component {
    onDragStart = e => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
    };

    render() {
        return (
              <div className = 'label' draggable onDragStart={this.onDragStart}>
                  <label>Label</label>
                  <br/>
                  <input type = 'label'/>
                  <button className = 'label_btn'>Edit</button>
                  <button className = 'label_btn'>Delete</button>
          </div>
        )
    }
}
export default Label;
