import React from 'react';
import styled, { css } from 'styled-components';
import { typography } from './typography';
import { dark, light, special } from './colours';
import { fontstack } from './fontstack';

export default {
  title: 'Colours',
  parameters:{
    layout:'fullscreen',
  }
};

const Wrapper = styled.div` 
  max-width: 800px;
  width: 100%;
`

const ColourRow = styled.div` 
  display: flex;
  margin: 10px 0;
  background-image:
      linear-gradient(45deg, #fafafa 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #fafafa 75%),
      linear-gradient(45deg, transparent 75%, #fafafa 75%),
      linear-gradient(45deg, #fafafa 25%, transparent 25%);  
    background-size: 20px 20px;       
    background-position:0 0, 0 0, -50px -50px, 50px 50px;
`

const ColourDummy = styled.div` 
  display: flex;
  flex: 1;
  padding: 40px;
  border-radius: 2px;
`

const ColourDummyWhite = styled(ColourDummy)`
  background: white;
`

const ColourDummyBlack = styled(ColourDummy)`
  background: black;
`

const ColourBox = styled.div` 
  ${fontstack.default}
  ${typography('body-01')}
  display: flex;
  flex: 2;
  justify-content: space-between;
  padding: 40px;
  border-radius: 2px;
`

const Hex = styled.span` 
  ${fontstack.mono}
`

const DarkBlack = styled(ColourBox)` 
  color: ${light.white()};
  background: ${dark.black()};
`

const DarkPrimary = styled(ColourBox)` 
  color: ${light.white()};
  background: ${dark.primary()};
`

const DarkSecondary = styled(ColourBox)` 
  color: ${light.white()};
  background: ${dark.secondary()};
`

const DarkSecondaryTransparent = styled(ColourBox)`
  flex: 1;
  color: ${light.white()};
  background: ${dark.secondary(true)};
`

const DarkTertiary = styled(ColourBox)` 
  color: ${light.white()};
  background: ${dark.tertiary()};
`

const DarkTertiaryTransparent = styled(ColourBox)` 
  flex: 1;
  color: ${light.white()};
  background: ${dark.tertiary(true)};
`

const DarkQuaternary = styled(ColourBox)` 
  color: ${dark.black()};
  background: ${dark.quaternary()};
`

const DarkQuaternaryTransparent = styled(ColourBox)` 
  flex: 1;
  color: ${dark.black()};
  background: ${dark.quaternary(true)};
`

const DarkBackground = styled(ColourBox)` 
  color: ${dark.black()};
  background: ${dark.background()};
`

const DarkBackgroundTransparent = styled(ColourBox)` 
  flex: 1;
  color: ${dark.black()};
  background: ${dark.background(true)};
`

export const Dark = () => {


  return (
    <Wrapper>
      <ColourRow>
        <DarkBlack><span>Black</span><Hex>#000000</Hex></DarkBlack>
        <ColourDummyWhite/>
      </ColourRow>
      <ColourRow>
        <DarkPrimary><span>Primary</span><Hex>#111111</Hex></DarkPrimary>
        <ColourDummyWhite/>
      </ColourRow>
      <ColourRow>
        <DarkSecondary><span>Secondary</span><Hex>#888888</Hex></DarkSecondary>
        <DarkSecondaryTransparent><Hex>#111111 / 0.5</Hex></DarkSecondaryTransparent>
      </ColourRow>
      <ColourRow>
        <DarkTertiary><span>Tertiary</span><Hex>#CFCFCF</Hex></DarkTertiary>
        <DarkTertiaryTransparent><Hex>#111111 / 0.2</Hex></DarkTertiaryTransparent>
      </ColourRow>
      <ColourRow>
        <DarkQuaternary><span>Quaternary</span><Hex>#E5E5E5</Hex></DarkQuaternary>
        <DarkQuaternaryTransparent><Hex>#111111 / 0.1</Hex></DarkQuaternaryTransparent>
      </ColourRow>
      <ColourRow>
        <DarkBackground><span>Background</span><Hex>#F3F3F3</Hex></DarkBackground>
        <DarkBackgroundTransparent><Hex>#111111 / 0.05</Hex></DarkBackgroundTransparent>
      </ColourRow>
    </Wrapper>
    
  );
}