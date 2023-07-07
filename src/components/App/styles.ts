import { createGlobalStyle } from 'styled-components';
import { scrollBar } from '@/styles/utils';

export const GlobalStyles = createGlobalStyle`
    body{
        ${scrollBar}
    }
`;
