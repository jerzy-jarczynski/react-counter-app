import { useState, useEffect } from 'react';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import styles from './App.module.scss';

const App = () => {

  const [time, setTime] = useState(0);
  const [diff, setDiff] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [meantime, setMeantime] = useState(null);

  const startCounter = () => {
    if (time === 0) {
      setTime(
        new Date().getTime()
      );
    } else  {
      setTime(currentTime + diff);
    }

    setRunning(true);
  };

  const stopCounter = () => {
    setRunning(false);
    setCurrentTime(time);
  };

  const resetCounter = () => {
    setTime(0);
    setDiff(0);
  };

  const clockTick = () => {
    setDiff(
      new Date().getTime() - time
    );
  };

  useEffect(() => {

    if (running) {      
      setMeantime(
        setInterval(clockTick, 42)
      );
    } else {
      clearInterval(meantime);
    }

    return () => clearInterval(meantime);

  }, [running]);

  return (
    <div className={ styles.app }>
      <Counter time={ diff } />
      <div>
        <Button action={ startCounter }>
          START
        </Button>
        <Button action={ stopCounter }>
          STOP
        </Button>
        <Button action={ resetCounter }>
          RESET
        </Button>
      </div>
    </div>
  );
};

export default App;