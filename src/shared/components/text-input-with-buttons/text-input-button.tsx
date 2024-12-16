import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Button } from '../button';

export type TextInputButtonProps = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export const TextInputButton: FC<TextInputButtonProps> = function TextInputButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
};
