import styled, { css, keyframes } from 'styled-components';

export const SVG = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 8px;
`;

export const conditionalContent = (delimiters: boolean) => css`
  span {
    color: ${delimiters ? '#606060' : 'inherit'};
    :nth-child(even):before {
      content: ${delimiters ? "'•'" : "''"};
      margin: 0 4px;
    }
  }
`;

export const fadeIn = keyframes`
  from {
    border-radius: 12px;
  }
  to {
    border-radius: 0px;
  }
`;

export const fill = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0;
  }
`;

export const border = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0;
  }
`;
