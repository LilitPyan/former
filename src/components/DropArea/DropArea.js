import {useDrop} from 'react-dnd';

import React from 'react';

import TextInput from './../TextInput/TextInput'
import NumberInput from "./../NumberInput/NumberInput";
import HeaderText from "../HeaderText/HeaderText"
import Label from "../Label/Label";
import Paragraph from "../Paragraph/Paragraph";
import LineBreak from "../LineBreak/LineBreak";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import MultiLineInput from "../MultiLineInput/MultiLineInput";
import Image from "../Image/Image";

import DragInput, {TYPES} from './../DragInput/DragInput';
import './DropArea.css'

const DropArea = ({items}) => {
  const [, drop] = useDrop({
    accept: TYPES.ITEM,
    drop: () => ({}),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const selectComponent = ({item, index}) => {
    switch (item.id) {
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
      <ul ref={drop} className='app_dropTarget'>
        {items.map((item, index) => selectComponent({item, index}))}
      </ul>
  )
};

export default DropArea;
