import styled, { css } from 'styled-components';

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
