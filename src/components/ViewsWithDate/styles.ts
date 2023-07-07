import { conditionalContent } from '@/styles/utils';
import styled from 'styled-components';

export const Content = styled.div<{ delimiters: boolean }>`
  display: flex;
  ${({ delimiters }) => conditionalContent(delimiters)}
`;
