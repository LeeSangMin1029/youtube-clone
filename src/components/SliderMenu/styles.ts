import { scrollBar } from '@/styles/utils';
import styled, { css } from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  position: sticky;
  height: calc(100vh - 56px);
  top: 56px;
  align-self: start;
  transition: 0.3s;
  width: ${({ theme }) => theme.menu.width};
  padding: ${({ theme }) => theme.menu.padding};
  ${scrollBar};
  ${({ open }) =>
    open &&
    css`
      ::-webkit-scrollbar-thumb {
        background-color: white;
      }
      :hover {
        ::-webkit-scrollbar-thumb {
          background-color: hsl(0, 0%, 60%);
        }
      }
    `};
`;
