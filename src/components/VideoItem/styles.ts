import { MouseState } from '@/hooks/useMouseHandler';
import { fill, border } from '@/styles/utils';
import styled, { css } from 'styled-components';

export const VideoDetails = styled.div`
  display: flex;
  > a {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    margin-top: 12px;
    img {
      border-radius: 50%;
    }
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  max-width: 344px;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const YoutuberData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  a {
    color: #606060;
  }
  > div {
    display: flex;
  }
`;

export const Description = styled.div`
  line-height: 20px;
  padding-right: 24px;

  h3 {
    display: block;
    a {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 4.4rem;
      margin: 12px 0 4px 0;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
    }
  }
`;

const interact = css`
  will-change: opacity;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const InteractStyled = styled.div<{ mouse: MouseState }>`
  ${interact}
  margin: -4px;
  > .background {
    ${interact}
    border-radius: 4px;
    background-color: black;
    opacity: 0;
    ${({ mouse }) => {
      const down = mouse.down && `opacity: 0.1;`;
      const up = mouse.up && fill;
      return css`
        ${down}
        animation: 0.3s ${up}
      `;
    }}
  }
  > .border {
    ${interact}
    border-radius: 4px;
    ${({ mouse }) => {
      const up = mouse.up && border;
      return css`
        opacity: 0;
        animation-duration: 0.6s;
        animation-name: ${up};
      `;
    }}
  }
`;
