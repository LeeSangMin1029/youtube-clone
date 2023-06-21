import styled, { css } from 'styled-components';
import { MouseState } from '@/@types/global';
import { animation } from '@/styles/utils';

export const Interact = styled.div<{
  mouse: MouseState;
}>`
  border-radius: inherit;
  .fill,
  .stroke {
    will-change: opacity;
    display: inline-block;
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
    border-radius: inherit;
  }
  .fill {
    background: black;
  }
  .stroke {
    border: 1px solid black;
  }
  .fill.immediate {
    ${({ mouse }) =>
      (mouse.enter || mouse.down) &&
      css`
        opacity: 0.1;
      `}
    ${({ mouse }) =>
      mouse.down &&
      !mouse.leave &&
      css`
        opacity: 0.2;
      `};
  }

  .stroke.immediate {
    ${({ mouse }) =>
      !mouse.enterBeforeDown &&
      mouse.up &&
      css`
        animation: 0.6s ${animation('opacity', '0.2', '0')};
      `}
  }

  .fill:not(.immediate) {
    ${({ mouse }) =>
      mouse.down &&
      css`
        opacity: 0.1;
      `}
    ${({ mouse }) =>
      !mouse.enterBeforeDown &&
      mouse.up &&
      css`
        animation: 0.3s ${animation('opacity', '0.1', '0')};
      `}
  }

  .stroke:not(.immediate) {
    ${({ mouse }) =>
      !mouse.enterBeforeDown &&
      mouse.up &&
      css`
        animation-duration: 0.6s;
        animation-name: ${animation('opacity', '0.2', '0')};
      `}
  }
`;
