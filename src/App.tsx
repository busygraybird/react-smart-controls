import { observer } from 'mobx-react-lite';
import React from 'react';

import styles from './App.module.css';
import { NumberControl } from './features/number-control/number-control';
import { TextControl } from './features/text-control/text-control';

const App = observer(function App() {
  return (
    <div className={styles.controls}>
      <h2>Контрол с кнопками</h2>

      <div>
        <h3>Пример 1</h3>

        <ul>
          <li>Контрол с 2 кнопками справа</li>
          <li>При нажатии на первую кнопку очищается содерживое в контроле</li>
          <li>При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!'</li>
        </ul>

        <TextControl />
      </div>

      <div>
        <h3>Пример 2</h3>

        <ul>
          <li>Контрол с 1 кнопкой справа и 1 кнопкой слева</li>
          <li>При нажатии на кнопку справа вызывается alert с текстом в контроле</li>
          <li>
            При нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим число через
            alert
          </li>
        </ul>

        <NumberControl />
      </div>
    </div>
  );
});

export default App;
