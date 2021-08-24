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
  overflow: hidden;
`

const ColourRow = styled.div` 
  display: flex;
  margin: 10px 0;
  position: relative;

  &:after {
    position: absolute;
    background-image:
      linear-gradient(45deg, #fafafa 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #fafafa 75%),
      linear-gradient(45deg, transparent 75%, #fafafa 75%),
      linear-gradient(45deg, #fafafa 25%, transparent 25%);  
    background-size: 20px 20px;       
    background-position:0 0, 0 0, -50px -50px, 50px 50px;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: ${props => props.dark ? '0.1' : '1'};
  }
  
`

const ColourDoubleRow = styled.div` 
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px 0;
`

const ColourDummy = styled.div` 
  display: flex;
  flex: 1;
  padding: 40px;
  border-radius: 2px;
  z-index: 1;
`

const ColourDummyWhite = styled(ColourDummy)`
  background: white;
`

const ColourDummyBlack = styled(ColourDummy)`
  background: #222;
`

const ColourBox = styled.div` 
  ${fontstack.default}
  ${typography('body-01')}
  display: flex;
  flex: 2;
  justify-content: space-between;
  padding: 40px;
  border-radius: 2px;
  z-index: 1;
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

const FullBlackWrapper = styled.div` 
  background: #222;
  width: 100%;
  height: 100vh;
`

const LightWhite = styled(ColourBox)` 
  color: #222;
  background: ${light.white()};
`

const LightSecondary = styled(ColourBox)` 
  color: #222;
  background: ${light.secondary()};
`

const LightSecondaryTransparent = styled(ColourBox)` 
  flex: 1;
  color: #222;
  background: ${light.secondary(true)};
`

const LightTertiary = styled(ColourBox)` 
  color: ${light.white()};
  background: ${light.tertiary()};
`

const LightTertiaryTransparent = styled(ColourBox)` 
  flex: 1;
  color: ${light.white()};
  background: ${light.tertiary(true)};
`

const LightQuaternary = styled(ColourBox)` 
  color: ${light.white()};
  background: ${light.quaternary()};
`

const LightQuaternaryTransparent = styled(ColourBox)` 
  flex: 1;
  color: ${light.white()};
  background: ${light.quaternary(true)};
`

const LightBackground = styled(ColourBox)` 
  color: ${light.white()};
  background: ${light.background()};
`

const LightBackgroundTransparent = styled(ColourBox)` 
  flex: 1;
  color: ${light.white()};
  background: ${light.background(true)};
`
export const Light = () => {

  return (
    <FullBlackWrapper>
      <Wrapper>
        <ColourRow>
          <LightWhite><span>White</span><Hex>#FFFFFF</Hex></LightWhite>
          <ColourDummyBlack/>
        </ColourRow>
        <ColourRow dark={true}>
          <LightSecondary><span>Secondary</span><Hex>#909090</Hex></LightSecondary>
          <LightSecondaryTransparent><Hex>#FFFFFF / 0.5</Hex></LightSecondaryTransparent >
        </ColourRow>
        <ColourRow dark={true}>
          <LightTertiary><span>Tertiary</span><Hex>#4E4E4E</Hex></LightTertiary>
          <LightTertiaryTransparent><Hex>#FFFFFF / 0.2</Hex></LightTertiaryTransparent >
        </ColourRow>
        <ColourRow dark={true}>
          <LightQuaternary><span>Quaternary</span><Hex>#383838</Hex></LightQuaternary>
          <LightQuaternaryTransparent><Hex>#FFFFFF / 0.1</Hex></LightQuaternaryTransparent >
        </ColourRow>
        <ColourRow dark={true}>
          <LightBackground><span>Background</span><Hex>#2D2D2D</Hex></LightBackground>
          <LightBackgroundTransparent><Hex>#FFFFFF / 0.05</Hex></LightBackgroundTransparent >
        </ColourRow>
      </Wrapper>
    </FullBlackWrapper>
  );
}

const SpecialNegative = styled(ColourBox)` 
  color: ${special.negative_background()};
  background: ${special.negative()};
`

const SpecialNegativeBackground = styled(ColourBox)` 
  color: ${special.negative()};
  background: ${special.negative_background()};
`

const SpecialPositive = styled(ColourBox)` 
  color: ${special.positive_background()};
  background: ${special.positive()};
`

const SpecialPositiveBackground = styled(ColourBox)` 
  color: ${special.positive()};
  background: ${special.positive_background()};
`

const SpecialWarning = styled(ColourBox)` 
  color: ${special.warning_background()};
  background: ${special.warning()};
`

const SpecialWarningBackground = styled(ColourBox)` 
  color: ${special.warning()};
  background: ${special.warning_background()};
`

const SpecialNeutral = styled(ColourBox)` 
  color: ${special.neutral_background()};
  background: ${special.neutral()};
`

const SpecialNeutralBackground = styled(ColourBox)` 
  color: ${special.neutral()};
  background: ${special.neutral_background()};
`

export const Special = () => {
  return (
    <Wrapper>
      <ColourDoubleRow>
        <SpecialNegative><span>Negative</span><Hex>#FD5C63</Hex></SpecialNegative>
        <SpecialNegativeBackground><span>Negative Background</span><Hex>#FFE7E8</Hex></SpecialNegativeBackground>
      </ColourDoubleRow>
      <ColourDoubleRow>
        <SpecialPositive><span>Positive</span><Hex>#04A77D</Hex></SpecialPositive>
        <SpecialPositiveBackground><span>Positive Background</span><Hex>#D9F2EC</Hex></SpecialPositiveBackground>
      </ColourDoubleRow>
      <ColourDoubleRow>
        <SpecialWarning><span>Warning</span><Hex>#FF4F00</Hex></SpecialWarning>
        <SpecialWarningBackground><span>Warning Background</span><Hex>#FFE5D9</Hex></SpecialWarningBackground>
      </ColourDoubleRow>
      <ColourDoubleRow>
        <SpecialNeutral><span>Neutral</span><Hex>#002FA7</Hex></SpecialNeutral>
        <SpecialNeutralBackground><span>Neutral Background</span><Hex>#D9E0F2</Hex></SpecialNeutralBackground>
      </ColourDoubleRow>
    </Wrapper>
    
  );
}