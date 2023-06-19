import styled from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  position: fixed;
  width: 72px;
  height: 100%;
  padding: 0 4px;
  top: 56px;
`;

export const StyledList = styled.ul`
  margin-top: 4px;
  line-height: 14px;
  font-size: 11px;
`;
