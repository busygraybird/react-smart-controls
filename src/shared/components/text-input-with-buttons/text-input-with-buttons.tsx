import clsx from 'clsx';
import { forwardRef } from 'react';

import type { InputStatus } from '../input';
import type { ChangeEventHandler, CSSProperties, FocusEventHandler, MouseEventHandler, ReactNode } from 'react';

import { Input } from '../input';

import { TextInputButton as TextInputButtonComponent } from './text-input-button';
import styles from './text-input-with-buttons.module.css';

export type TextInputButton = {
  key: number | string;
  text: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type TextInputWithButtonsProps = {
  value?: string | null;
  id?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  status?: InputStatus;
  className?: string;
  innerClassNames?: {
    field?: string;
  };
  style?: CSSProperties;
  leftButtons?: TextInputButton[];
  rightButtons?: TextInputButton[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

export const TextInputWithButtons = forwardRef<HTMLInputElement, TextInputWithButtonsProps>(
  function TextInputWithButtons(
    {
      value,
      onClick,
      style,
      className,
      innerClassNames,
      disabled,
      autoFocus,
      status,
      onFocus,
      onChange,
      maxLength,
      placeholder,
      tabIndex,
      onBlur,
      id,
      leftButtons,
      rightButtons,
    },
    ref,
  ) {
    return (
      <div className={clsx(styles.container, className)} style={style}>
        <div className={styles.buttonsContainer}>
          {leftButtons?.map((button) => (
            <TextInputButtonComponent key={button.key} onClick={button.onClick}>
              {button.text}
            </TextInputButtonComponent>
          ))}
        </div>

        <Input
          ref={ref}
          id={id}
          value={value}
          disabled={disabled}
          autoFocus={autoFocus}
          tabIndex={tabIndex}
          maxLength={maxLength}
          placeholder={placeholder}
          className={innerClassNames?.field}
          status={status}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
          onChange={onChange}
        />

        <div className={styles.buttonsContainer}>
          {rightButtons?.map((button) => (
            <TextInputButtonComponent key={button.key} onClick={button.onClick}>
              {button.text}
            </TextInputButtonComponent>
          ))}
        </div>
      </div>
    );
  },
);
