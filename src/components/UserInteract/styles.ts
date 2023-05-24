import styled from 'styled-components';

export const Container = styled.div`
  width: 224px;
  height: 40px;
  display: flex;
  justify-content: end;
`;

export const Interact = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 40px;
`;

export const SVGWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 8px;
`;
export const UserProfile = styled.div`
  > div {
    width: 32px;
    height: 32px;
    margin: 0 8px;
    img {
      border-radius: 50%;
    }
  }
  padding: 1px 6px;
`;
