import styled, { css } from 'styled-components';

export const Margin = styled.div<{ expand: boolean; value: string }>`
  ${({ expand, value }) =>
    expand &&
    css`
      margin: ${value};
    `}
`;
