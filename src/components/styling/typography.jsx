import { css } from 'styled-components';

export const typography = (type) => {

  const types = {
    'heading-01': css`
      font-weight: normal;
      font-size: 68px;
      line-height: 76px;
    `,
    'heading-02': css`
      font-weight: normal;
      font-size: 42px;
      line-height: 52px;
    `,
    'heading-03': css`
      font-weight: normal;
      font-size: 32px;
      line-height: 40px;
    `,
    'heading-04': css`
      font-weight: normal;
      font-size: 28px;
      line-height: 36px;
    `,
    'heading-05': css`
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
    `,
    'sub-02': css`
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
    `,
    'sub-01': css`
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
    `,
    'body-02': css`
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    `,
    'body-01': css`
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    `,
    'caption-01': css`
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    `,
    'metadata-01': css`
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
    `
  }

  return types[type];
}