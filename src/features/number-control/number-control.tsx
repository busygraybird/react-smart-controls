import { observer } from 'mobx-react-lite';
import { useRef } from 'react';

import type { ChangeEventHandler } from 'react';

import { TextInputWithButtons } from '../../shared/components/text-input-with-buttons';

import { NumberControlViewModel } from './number-control-view-model';

export const NumberControl = observer(function NumberControl() {
  const { current: numberControlVM } = useRef(new NumberControlViewModel());

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    numberControlVM.onChange(e.target.value);
  };

  return (
    <TextInputWithButtons
      value={numberControlVM.value}
      status={numberControlVM.error ? 'error' : undefined}
      placeholder="Enter value"
      onChange={handleChange}
      leftButtons={[
        {
          key: 'parseNumber',
          text: 'Parse number',
          onClick: numberControlVM.showNumber,
        },
      ]}
      rightButtons={[
        {
          key: 'showCurrentValue',
          text: 'Show value',
          onClick: numberControlVM.showCurrentValue,
        },
      ]}
    />
  );
});
