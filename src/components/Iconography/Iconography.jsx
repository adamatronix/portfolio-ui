import React from 'react';
import {
  FbIcon,
  FbIconNeg,
  TwitterIcon,
  TwitterIconNeg,
  InstaIcon,
  InstaIconNeg,
  LinkedIcon,
  LinkedIconNeg
} from './assets/index';

const Base = (props) => {
  const { colour, white, type } = props;
  return type === 'colour' ? colour : white;
}
const Facebook = (props) => {
  const { type } = props;
  
  return (
    <Base colour={<FbIcon/>} white={<FbIconNeg/>} type={type}/>
  )
}

export { Facebook };

const Twitter = (props) => {
  const { type } = props;
  return (
    <Base colour={<TwitterIcon />} white={<TwitterIconNeg />} type={type}/>
  )
}

export { Twitter };

const Instagram = (props) => {
  const { type } = props;
  return (
    <Base colour={<InstaIcon />} white={<InstaIconNeg />} type={type}/>
  )
}

export { Instagram };

const LinkedIn = (props) => {
  const { type } = props;
  return (
    <Base colour={<LinkedIcon />} white={<LinkedIconNeg />} type={type}/>
  )
}

export { LinkedIn };