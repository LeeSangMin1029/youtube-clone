import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  padding: 0 16px;
  background-color: #ffffff;
`;

export const Start = styled.div`
  min-width: 168px;
  height: 56px;
  display: flex;
  flex-direction: row;
  > svg {
    padding: 18px 14px 18px 16px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const Center = styled.div`
  width: 728px;
  height: 40px;
  min-width: 0;
`;
