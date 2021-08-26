import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter } from './Iconography';

export default {
  title: 'Iconography',
  parameters: {
    layout: 'fullscreen'
  }
};

const Wrapper = styled.div` 
  display: grid;
  padding: 40px;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(10, 1fr);
  position: relative;
  width: 100%;
  height: 100vh;
  background: #FAFAFA;
  box-sizing: border-box;
`

const IconWrap = styled.div` 
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
`

export const Default = () => {
  return (
    <Wrapper>
      <IconWrap>
        <Facebook type="colour"/>
      </IconWrap>
      <IconWrap>
        <Twitter type="colour"/>
      </IconWrap>
    </Wrapper>
  );
}