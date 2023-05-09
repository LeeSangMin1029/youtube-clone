import styled from 'styled-components';

export const MarginContent = styled.div`
  margin-left: 72px;
  margin-top: 56px;
`;

export const DisplayGrid = styled.div`
  padding-top: 24px;
  display: grid;
`;

export const GridRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1800px;
  margin: 0 16px;
  > div {
    width: 344px;
    margin: 0 8px;
    margin-bottom: 40px;
  }
`;
