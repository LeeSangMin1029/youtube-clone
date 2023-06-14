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
