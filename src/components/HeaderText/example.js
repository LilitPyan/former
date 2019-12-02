import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.dropItems.color }}
        draggable={this.props.draggable}
        onDragStart={this.props.onDragStart({ id: this.props.dropItems.id })}
        onDragOver={this.props.onDragOver({ id: this.props.dropItems.id })}
        onDrop={this.props.onDrop({ id: this.props.dropItems.id })}
      >
        <div className="content">{this.props.dropItems.content}</div>
      </div>
    );
  }
}

export default Box;