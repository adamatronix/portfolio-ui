import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from './Iconography';

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
  background: #FAFAFA;
  box-sizing: border-box;
`

const Row = styled.div` 
  display: block;
`

const IconWrap = styled.div` 
  background: ${props => props.bg ? props.bg : 'white'};
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
    <>
    <Row>
      <Wrapper>
        <IconWrap>
          <Facebook type="colour"/>
        </IconWrap>
        <IconWrap>
          <Twitter type="colour"/>
        </IconWrap>
        <IconWrap>
          <Instagram type="colour"/>
        </IconWrap>
        <IconWrap>
          <LinkedIn type="colour"/>
        </IconWrap>
      </Wrapper>
    </Row>
    <Row>
      <Wrapper>
        <IconWrap bg='black'>
          <Facebook/>
        </IconWrap>
        <IconWrap bg='black'>
          <Twitter/>
        </IconWrap>
        <IconWrap bg='black'>
          <Instagram/>
        </IconWrap>
        <IconWrap bg='black'>
          <LinkedIn/>
        </IconWrap>
      </Wrapper>
    </Row>
    </>
  );
}