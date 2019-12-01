import React from 'react';
import HeaderText from "../HeaderText/HeaderText";
import Label from "../Label/Label";
import Paragraph from "../Paragraph/Paragraph";
import LineBreak from "../LineBreak/LineBreak";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import Image from "../Image/Image";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import TextInput from "../TextInput/TextInput";
import NumberInput from "../NumberInput/NumberInput";
import MultiLineInput from "../MultiLineInput/MultiLineInput";

import style from './App.module.css';

import {
  FaArrowsAltH,
  FaCaretSquareDown,
  FaFont,
  FaHeading,
  FaParagraph,
  FaPlus,
  FaRegImage,
  FaTextHeight
} from 'react-icons/fa';
import {FiCheckSquare} from 'react-icons/fi';
import {MdRadioButtonChecked} from 'react-icons/md';


const ITEMS = [
  {
    id: 1,
    name: 'Card',
    icon: <FaHeading/>,
    content: <HeaderText/>
  },
  {
    id: 2,
    name: 'Label',
    icon: <FaFont/>,
    content: <Label/>
  },
  {
    id: 3,
    name: 'Paragraph',
    icon: <FaParagraph/>,
    content: <Paragraph/>
  },
  {
    id: 4,
    name: 'Line Break',
    icon: <FaArrowsAltH/>,
    content: <LineBreak/>
  },
  {
    id: 5,
    name: 'Dropdown',
    icon: <FaCaretSquareDown/>,
    content: <Dropdown/>
  },
  {
    id: 6,
    name: 'Checkbox',
    icon: <FiCheckSquare/>,
    content: <Checkbox/>
  },
  {
    id: 7,
    name: 'Multiple Choice',
    icon: <MdRadioButtonChecked/>,
    content: <MultipleChoice/>
  },
  {
    id: 8,
    name: 'Text Input',
    icon: <FaFont/>,
    content: <TextInput/>
  },
  {
    id: 9,
    name: 'Number Input',
    icon: <FaPlus/>,
    content: <NumberInput/>
  },
  {
    id: 10,
    name: 'Multi-line Input',
    icon: <FaTextHeight/>,
    content: <MultiLineInput/>
  },
  {
    id: 11,
    name: 'Image',
    icon: <FaRegImage/>,
    content: <Image/>
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
      dropItems: [],
    };
  }

  onDragStart = (e, v) => {
    this.draggedItem = v;
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v);
  };

  allowDrop = (ev, index) => {
    ev.preventDefault();
    const {dropItems} = this.state;

    const draggedOverItem = this.state.dropItems[index];
    if (this.draggedItem === draggedOverItem) {
      return;
    }
    let items = this.state.dropItems.filter(item => item !== this.draggedItem);
    items.splice(index, 0, this.draggedItem);
    this.setState({dropItems})
  };

  onDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let {dropItems} = this.state;
    dropItems.push(data);
    this.setState({dropItems});
  };

  onDragEnd = (v) => {
    this.v = null;
  };

  render() {
    const {items, dropItems} = this.state;

    return (
      <div className={style.app_main_container}>
        <div className={style.app_container}>
          <div className={style.drop_zone} onDragOver={this.allowDrop} onDrop={this.onDrop}>
            {dropItems.map(item => {
              return (
                <div>
                  <div key={item} draggable>
                    {ITEMS[item - 1].content}
                  </div>
                </div>
              )
            })}
          </div>
          <div className={style.drag_zone}>
            <ul className={style.app_ul_container}>
              {items.map((item) =>
                <li
                  key={item.id}
                  id={item.id}
                  onDragStart={(e) => this.onDragStart(e, item.id)}
                  draggable
                >
                  <i className={style.li_icon}> {item.icon}</i>
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