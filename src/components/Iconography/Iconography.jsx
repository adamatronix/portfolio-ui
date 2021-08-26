import React from 'react';
import { ReactComponent as FbIcon } from './assets/facebook.svg';
import { ReactComponent as FbIconNeg } from './assets/facebook-negative.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter.svg';
import { ReactComponent as TwitterIconNeg } from './assets/twitter-negative.svg';

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