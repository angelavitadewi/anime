import { css } from '@emotion/react';

export const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background-color: #f0f0f0;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
`;
