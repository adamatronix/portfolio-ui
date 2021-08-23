import React from 'react';
import styled, { css } from 'styled-components';
import { typography } from './typography';
import { fontstack } from './fontstack';

export default {
  title: 'Typography',
  parameters:{
    layout:'fullscreen',
  }
};

const Wrapper = styled.div`
  background: #fafafa;
  padding: 0 20px;
`

const Table = styled.div` 
  display: table;
  width: 100%;
`

const TableHeader = styled.div` 
  display: table-header-group;
`

const TableRow = styled.div`
  display: table-row;
`

const TableHeadCell = styled.div` 
  display: table-cell;
  vertical-align: middle;
  background: transparent;
  padding: 30px 0;
  &:last-child {
    width: 140px;
  }
`

const TableCell = styled.div` 
  display: table-cell;
  vertical-align: middle;
  margin: 1px 0;
  background: white;
  border-top: 1px solid #fafafa;
  border-bottom: 1px solid #fafafa;

  &:first-child {
    padding: 0 0 0 40px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-left: 1px solid #fafafa;
  }

  &:last-child {
    padding: 0 40px 0 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-right: 1px solid #fafafa;
  }
`

const Code = styled.div` 
  ${fontstack.default}
  ${typography('caption-01')}
  display: inline-block;
  box-sizing: border-box;
  padding: 6px 8px;
  border-radius: 2px;
  background-color: #F3F3F3;
`

const StandardText = styled.div`
  ${fontstack.default}
  ${typography('body-01')}
  color: #111;
`

const BaseText = css`
  ${fontstack.default}
  margin: 0;
  color: #111;
`

const Heading1 = styled.h1`
  ${BaseText}
  ${typography('heading-01')}
  padding: 60px 0;
`

const Heading2 = styled.h2`
  ${BaseText}
  ${typography('heading-02')}
  padding: 40px 0;
`

const Heading3 = styled.h3`
  ${BaseText}
  ${typography('heading-03')}
  padding: 40px 0;
`

const Heading4 = styled.h4`
  ${BaseText}
  ${typography('heading-04')}
  padding: 30px 0;
`

const Heading5 = styled.h5`
  ${BaseText}
  ${typography('heading-05')}
  padding: 30px 0;
`

const SubHeading2 = styled.h2`
  ${BaseText}
  ${typography('sub-02')}
  padding: 30px 0;
`

const SubHeading1 = styled.h2`
  ${BaseText}
  ${typography('sub-01')}
  padding: 30px 0;
`

const Body2 = styled.p`
  ${BaseText}
  ${typography('body-02')}
  padding: 30px 0;
`

const Body1 = styled.p`
  ${BaseText}
  ${typography('body-01')}
  padding: 30px 0;
`

const Caption1 = styled.p`
  ${BaseText}
  ${typography('caption-01')}
  padding: 30px 0;
`

const Metadata1 = styled.p`
  ${BaseText}
  ${typography('metadata-01')}
  padding: 30px 0;
`

export const Default = () => {

  const headStructure = ['Type Style','Typeface','Weight','Case','Size','Line','Character','Code'];
  const typeStructure = [
    {
      style: <Metadata1>Metadata</Metadata1>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '10px',
      line: '12px',
      character: '0px',
      code: '$metadata-01'
    },
    {
      style: <Caption1>Caption</Caption1>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '12px',
      line: '16px',
      character: '0px',
      code: '$caption-01'
    },
    {
      style: <Body1>Body 1</Body1>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '14px',
      line: '20px',
      character: '0px',
      code: '$body-01'
    },
    {
      style: <Body2>Body 2</Body2>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '16px',
      line: '22px',
      character: '0px',
      code: '$body-02'
    },
    {
      style: <SubHeading1>Sub Heading 1</SubHeading1>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '18px',
      line: '24px',
      character: '0px',
      code: '$sub-01'
    },
    {
      style: <SubHeading2>Sub Heading 2</SubHeading2>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '20px',
      line: '28px',
      character: '0px',
      code: '$sub-02'
    },
    {
      style: <Heading5>Heading 5</Heading5>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '24px',
      line: '32px',
      character: '0px',
      code: '$heading-05'
    },
    {
      style: <Heading4>Heading 4</Heading4>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '28px',
      line: '36px',
      character: '0px',
      code: '$heading-04'
    },
    {
      style: <Heading3>Heading 3</Heading3>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '32px',
      line: '40px',
      character: '0px',
      code: '$heading-03'
    },
    {
      style: <Heading2>Heading 2</Heading2>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '42px',
      line: '52px',
      character: '0px',
      code: '$heading-02'
    },
    {
      style: <Heading1>Heading 1</Heading1>,
      face: 'Neue Montreal',
      weight: 'Regular',
      case: 'Sentence',
      size: '68px',
      line: '76px',
      character: '0px',
      code: '$heading-01'
    }
  ]

  return (
    <Wrapper>
      <Table>
        <TableHeader>
          <TableRow>
            { headStructure.map((label) => {
              return (
                <TableHeadCell>
                  <StandardText>{ label }</StandardText>
                </TableHeadCell>
              )
            })}
          </TableRow>
        </TableHeader>
        { typeStructure.map((typeObject) => {
          return (
            <TableRow>
              <TableCell>
                {typeObject.style}
              </TableCell>
              <TableCell>
                <StandardText>{typeObject.face}</StandardText>
              </TableCell>
              <TableCell>
              <StandardText>{typeObject.weight}</StandardText>
              </TableCell>
              <TableCell>
                <StandardText>{typeObject.case}</StandardText>
              </TableCell>
              <TableCell>
                <StandardText>{typeObject.size}</StandardText>
              </TableCell>
              <TableCell>
                <StandardText>{typeObject.line}</StandardText>
              </TableCell>
              <TableCell>
                <StandardText>{typeObject.character}</StandardText>
              </TableCell>
              <TableCell>
                <Code>{typeObject.code}</Code>
              </TableCell>
            </TableRow>
          )
        })}
      </Table>
    </Wrapper>
    
  );
}