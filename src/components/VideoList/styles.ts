import styled from 'styled-components';

export const MarginContent = styled.div`
  margin-left: 72px;
  margin-top: 56px;
`;

export const DisplayGrid = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(340px, auto);
`;
