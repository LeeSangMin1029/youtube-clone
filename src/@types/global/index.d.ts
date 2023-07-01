import { HTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';

export type CountFormatOptions = {
  source: number | string;
  digit?: number;
};

type RenderFormat = 'view' | 'subscription';

export type CustomMouseEvent = React.MouseEvent | MouseEvent;

export type MouseState = {
  enter: boolean;
  enterBeforeDown: boolean;
  leave: boolean;
  down: boolean;
  up: boolean | null;
};

type EventHandler = (event: CustomMouseEvent) => void;

export type HOCMouseState = {
  mouse: MouseState;
  onMouseEnter: EventHandler;
  onMouseDown: EventHandler;
  onMouseLeave: EventHandler;
  onMouseUp: EventHandler;
  onDragEnd: EventHandler;
  onDragStart: EventHandler;
};

export type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

export type CSSPropertiesKebab = Kebab<keyof CSSProperties>;

export type AnimationDelay = 'immediate';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export type HTMLBaseProps = HTMLAttributes<DOMElement>;
