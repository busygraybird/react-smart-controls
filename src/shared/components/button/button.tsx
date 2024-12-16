import { forwardRef, type PropsWithChildren, type MouseEventHandler } from 'react';

import styles from './button.module.css';

export type ButtonProps = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ onClick, children }, ref) {
  return (
    <button ref={ref} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
});
