import { CSSProperties } from 'styled-components';

export type CountFormatOptions = {
  source: number | string;
  digit?: number;
};

type RenderFormat = 'view' | 'subscription';

export type CustomMouseEvent = React.MouseEvent | MouseEvent;

export type MouseState = {
  enter: boolean;
  leave: boolean;
  down: boolean;
  up: boolean | null;
};

export type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

export type CSSPropertiesKebab = Kebab<keyof CSSProperties>;
