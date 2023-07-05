import styled from 'styled-components';

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

export const StyledVideo = styled.div`
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
  }
`;
