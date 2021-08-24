import { css } from 'styled-components';

export const fontstack = {
  // ns = not small
  default: () =>
    css`
       font-family: 'Neue Montreal';
    `,
  mono: () =>
    css`
      font-family: ui-monospace, 
             Menlo, Monaco, 
             "Cascadia Mono", "Segoe UI Mono", 
             "Roboto Mono", 
             "Oxygen Mono", 
             "Ubuntu Monospace", 
             "Source Code Pro",
             "Fira Mono", 
             "Droid Sans Mono", 
             "Courier New", monospace;
    `
};