import { CSSPropertiesKebab } from '@/@types/global';
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

const keyframesTemplate = (
  property: CSSPropertiesKebab,
  from: string,
  to: string,
) => `from { ${property} : ${from} } to { ${property} : ${to} }`;

export const animation = (
  property: CSSPropertiesKebab,
  from: string,
  to: string,
) => {
  return keyframes`${keyframesTemplate(property, from, to)}`;
};

export const scrollBar = css`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #606060;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: hsl(0, 0%, 60%);
  }
`;
