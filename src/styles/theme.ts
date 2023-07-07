import { DefaultTheme, css } from 'styled-components';

export const expandedTheme: DefaultTheme = {
  menu: {
    flexDirection: 'row',
    iconSpace: css`
      margin-right: 24px;
    `,
    width: '240px',
    padding: '0',
    item: {
      height: '40px',
      padding: '0 12px 0',
      fontSize: '14px',
    },
  },
  list: {
    margin: '32px',
  },
};

export const expandableTheme: DefaultTheme = {
  menu: {
    flexDirection: 'column',
    iconSpace: css`
      margin-bottom: 6px;
    `,
    width: '72px',
    padding: '0 4px',
    item: {
      height: 'auto',
      padding: '16px 0 14px',
      fontSize: '10px',
    },
  },
  list: {
    margin: '0px',
  },
};
