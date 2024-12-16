import { observer } from 'mobx-react-lite';
import { useRef } from 'react';

import type { ChangeEventHandler } from 'react';

import { TextInputWithButtons } from '../../shared/components/text-input-with-buttons';

import { TextControlViewModel } from './text-control-view-model';

const DEFAULT_VALUE = 'Hello world!';

export const TextControl = observer(function TextControl() {
  const { current: textControlVM } = useRef(new TextControlViewModel(DEFAULT_VALUE));

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    textControlVM.onChange(e.target.value);
  };

  return (
    <TextInputWithButtons
      placeholder="Enter value"
      value={textControlVM.value}
      onChange={handleChange}
      rightButtons={[
        {
          key: 'clear',
          text: 'Clear',
          onClick: textControlVM.clearValue,
        },
        {
          key: 'reset',
          text: 'Reset',
          onClick: textControlVM.resetValue,
        },
      ]}
    />
  );
});
