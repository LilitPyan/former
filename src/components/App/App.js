import React from 'react';
import './App.css';
import HeaderText from "../HeaderText/HeaderText";
import Label from "../Label/Label";
import Paragraph from "../Paragraph/Paragraph";
import LineBreak from "../LineBreak/LineBreak";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import TextInput from "../TextInput/TextInput";
import NumberInput from "../NumberInput/NumberInput";
import MultiLineInput from "../MultiLineInput/MultiLineInput";
import Image from "../Image/Image";

const ITEMS = [
  {
    id: 1,
    name: 'Card',
  },
  {
    id: 2,
    name: 'Label'
  },
  {
    id: 3,
    name: 'Paragraph'
  },
  {
    id: 4,
    name: 'Line Break'
  },
  {
    id: 5,
    name: 'Dropdown'
  },
  {
    id: 6,
    name: 'Checkbox'
  },
  {
    id: 7,
    name: 'Multiple Choice'
  },
  {
    id: 8,
    name: 'Text Input'
  },
  {
    id: 9,
    name: 'Number Input'
  },
  {
    id: 10,
    name: 'Multi-line Input'
  },
  {
    id: 11,
    name: 'Image'
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragItems: {ITEMS},
      dropItem: {id: ''},
    };
  }

  dragStart = (ev) => {
    const dropId = ev.target.id;
    this.setState({dropItem: {id: dropId}});
  };

  allowDrop = (ev) => {
    ev.preventDefault();
  };

  drop = () => {
    const {dropItem} = this.state;

    const selectComponent = ({dropItem}) => {
      switch (dropItem.id) {
        case 1:
          return <HeaderText/>;
        case 2:
          return <Label/>;
        case 3:
          return <Paragraph/>;
        case 4:
          return <LineBreak/>;
        case 5:
          return <Dropdown/>;
        case 6:
          return <Checkbox/>;
        case 7:
          return <MultipleChoice/>;
        case 8:
          return <TextInput/>;
        case 9:
          return <NumberInput/>;
        case 10:
          return <MultiLineInput/>;
        case 11:
          return <Image/>;
      }
    };
    return (
      <ul>
        {dropItem.map((item, index) => selectComponent({item, index}))}
      </ul>
    )
  };

  render() {
    const {dragItems, dropItem} = this.state;
    console.log(this.state.dragItems);
    console.log(this.state.dropItem);

    return (
      <div className='app_main_container'>
        <div className='app_container'>
          <div className='drop_zone' onDragOver={this.allowDrop} onDrop={this.drop}>

          </div>
          <div className='drag_zone'>
            <ul className='app_ul_container'>
              {dragItems.ITEMS.map((item) =>
                <li
                  key={item.id}
                  id={item.id}
                  onDragStart={this.dragStart}
                  draggable
                >
                  {item.name}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;