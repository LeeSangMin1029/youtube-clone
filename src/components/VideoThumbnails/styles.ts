import { MouseState } from '@/@types/global';
import { animation } from '@/styles/utils';
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  margin: 4px;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  padding: 3px 4px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
`;

export const Thumbnails = styled.div<{ mouse: MouseState }>`
  position: relative;
  a {
    display: flex;
    position: relative;
    img {
      will-change: border-radius;
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
      border-radius: 12px;
    }
    ${({ mouse }) =>
      mouse.enter &&
      css`
        ${Overlay} {
          animation: 0.3s ${animation('opacity', '1', '0')} forwards;
        }
        img {
          animation: 0.3s ${animation('border-radius', '12px', '0px')} forwards;
        }
      `}
  }
`;

export const InteractMargin: CSSProperties = { margin: '-4px' };
