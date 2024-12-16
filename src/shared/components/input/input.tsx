import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import type { InputStatus } from './types';
import type {
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from 'react';

import styles from './input.module.css';

export type InputProps = {
  value?: string | null;
  id?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  tabIndex?: number;
  type?: HTMLInputTypeAttribute;
  autoFocus?: boolean;
  status?: InputStatus;
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

const statusClassNames: Record<InputStatus, string> = {
  error: styles.input_error,
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    value,
    id: initialId,
    placeholder,
    maxLength,
    disabled = false,
    tabIndex = 0,
    type = 'text',
    status,
    autoFocus,
    className,
    style,
    onChange,
    onFocus,
    onBlur,
    onClick,
  },
  ref,
) {
  const innerId = useId();
  const id = initialId ?? innerId;

  return (
    <input
      ref={ref}
      id={id}
      value={value ?? ''}
      placeholder={placeholder}
      className={clsx(className, styles.input, status && statusClassNames[status])}
      style={style}
      disabled={disabled}
      maxLength={maxLength}
      tabIndex={tabIndex}
      type={type}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      autoFocus={autoFocus}
    />
  );
});
