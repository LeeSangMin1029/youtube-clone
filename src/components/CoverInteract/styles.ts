import styled, { css } from 'styled-components';
import { MouseState } from '@/@types/global';
import { animation, coverInteract } from '@/styles/utils';

export const Interact = styled.div<{
  mouse: MouseState;
}>`
  border-radius: inherit;
  .fill,
  .stroke {
    ${coverInteract}
  }
  .fill {
    background: black;
  }
  .stroke {
    border: 1px solid black;
  }
  .rect {
    margin: -4px;
  }
  .fill.circular {
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

  .stroke.circular {
    ${({ mouse }) =>
      mouse.up &&
      css`
        animation: 0.3s ${animation('opacity', '0.2', '0')};
      `}
  }

  .fill.rect {
    ${({ mouse }) =>
      mouse.down &&
      css`
        opacity: 0.1;
      `}
    ${({ mouse }) =>
      mouse.up &&
      css`
        animation: 0.3s ${animation('opacity', '0.1', '0')};
      `}
  }

  .stroke.rect {
    ${({ mouse }) =>
      mouse.up &&
      css`
        animation-duration: 0.6s;
        animation-name: ${animation('opacity', '0.2', '0')};
      `}
  }
`;
