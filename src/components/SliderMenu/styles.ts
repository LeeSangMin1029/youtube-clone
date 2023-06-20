import { scrollBar } from '@/styles/utils';
import styled, { css } from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  position: sticky;
  height: auto;
  top: 56px;
  align-self: start;
  transition: 0.3s;
  ${({ open }) =>
    open
      ? css`
          width: 240px;
          ${scrollBar}
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
