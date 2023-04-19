import styles from './App.module.scss';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';

const App = () => {

  const [time, setTime] = useState(0);
  const [inerval, setInterval] = useState(null);

  const startCounter = t => {
    console.log('Start Counter', t);
  };

  const stopCounter = t => {
    console.log('Stop Counter', t);
  };

  const resetCounter = t => {
    console.log('Reset Counter', t);
  };

  return (
    <div className={ styles.app }>
      <Counter time={ time } />
      <div>
        <Button action={ startCounter } time={ time }>
          START
        </Button>
        <Button action={ stopCounter } time={ time }>
          STOP
        </Button>
        <Button action={ resetCounter } time={ time }>
          RESET
        </Button>
      </div>
    </div>
  );
};

export default App;
