import styled from 'styled-components';

export const MarginContent = styled.div`
  margin-left: 72px;
  margin-top: 56px;
`;

export const DisplayGrid = styled.div`
  padding-top: 24px;
  display: grid;
  justify-items: center;
  margin: 0 16px;
  grid-template-columns: repeat(auto-fit, minmax(344px, 1fr));
  grid-auto-rows: minmax(340px, auto);
`;
