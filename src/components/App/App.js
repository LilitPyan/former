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
      dropItems: []
    };
  }

  onDragStart = (e,v) => {
    this.draggedItem = v;
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("id", v);
  };

  allowDrop = (ev) => {
    ev.preventDefault();
  };

  onDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("id");
    this.setState({
      dropItems:[
        ...this.state.dropItems,
        ITEMS[data-1]
      ]});
  };

  onDragEnd = (index) => {
    this.index = null;
  };

  render() {
    const {items, dropItems} = this.state;
    console.log(this.state.dropItems);

    return (
      <div className={style.app_main_container}>
        <div className={style.app_container}>
          <ul className={style.drop_zone} onDrop={this.onDrop} onDragOver={this.allowDrop}>
            <div>
            {dropItems.map((item) => {
              return (
                 <li
                  className={style.drag_drop_item}
                 >
                    {item.content}
                 </li>
              )
            })}
            </div>
          </ul>
          <div className={style.drag_zone}>
            <ul className={style.app_ul_container}>
              {items.map((item) =>
                <li
                  key={item.id}
                  id={item.id}
                  onDragStart={(e) => this.onDragStart(e, item.id)}
                  onDragEnd={this.onDragEnd}
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