import React from "react";
import ReactDOM from "react-dom";
import './../../index.css'

class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playarea: []
    };
  }

  render() {
    let className = "custom";
    if (this.props.isActive) {
      className += " here";
    }
    return (
      <div
        className={className}
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => this.onDrop(e, this.state.playarea)}
      >
        <ul className="list-group">
          {this.props.playAreaData.map((value, i) => (
            <ModifierFields
              index={i}
              data={value}
              triggerDelete={this.props.triggerDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class ModifierFields extends React.Component {
  render() {
    return (
      <li className="list-group-item" name={this.props.data.name}>
        {this.props.data.name} &nbsp;
      </li>
    );
  }
}

class FormMapping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      group: []
    };
    this.mappingValues = [
      { name: "FirstName" },
      { name: "LastName" },
      { name: "City" },
      { name: "State" },
      { name: "Company" },
      { name: "Address" }
    ];
  }

  /* Draggable and Drop*/
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id.name);
    ev.dataTransfer.setData("data", id.path);
    ev.dataTransfer.effectAllowed = "copy";
  };

  onDragOver = ev => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
  };

  onDrop = ev => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks;

    this.mappingValues.filter(key => {
      if (key.name === id) {
        tasks.push(key);
      }
    });

    this.setState({
      tasks: tasks
    });
  };

  render() {
    let mapList = [];

    this.mappingValues.forEach(t => {
      mapList.push(
        <li
          key={t.name}
          className="list-group-item"
          draggable
          onDragStart={e => this.onDragStart(e, t)}
        >
          {t.name}
        </li>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8">
            <div
              className="modifier"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => {
                this.onDrop(e);
                this.playareamonitor(e);
              }}
            >
              <div className="drag-area background">
                <h3 className="heading">Source</h3>
                <ul className="list-group">{mapList}</ul>
              </div>
              <div className="playarea background">
                <h3 className="heading">Play Area</h3>
                <PlayArea
                  playAreaData={this.state.tasks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormMapping;