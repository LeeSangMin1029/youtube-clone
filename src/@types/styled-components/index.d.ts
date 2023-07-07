import 'styled-components';
import { ThemedCssFunction } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    menu: {
      flexDirection: string;
      iconSpace: ThemedCssFunction;
      width: string;
      padding: string;
      item: {
        height: string;
        padding: string;
        fontSize: string;
      };
    };
    list: {
      margin: string;
    };
  }
}
