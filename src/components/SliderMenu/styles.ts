import { scrollBar } from '@/styles/utils';
import styled, { css } from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  position: sticky;
  height: calc(100vh - 56px);
  top: 56px;
  align-self: start;
  transition: 0.3s;
  ${({ open }) =>
    open
      ? css`
          width: 240px;
          ${scrollBar};
          ::-webkit-scrollbar-thumb {
            background-color: white;
          }
          :hover {
            ::-webkit-scrollbar-thumb {
              background-color: hsl(0, 0%, 60%);
            }
          }
        `
      : css`
          width: 72px;
          padding: 0 4px;
        `}
`;

export const StyledList = styled.ul`
  margin-top: 4px;
  line-height: 14px;
  font-size: 10px;
`;
